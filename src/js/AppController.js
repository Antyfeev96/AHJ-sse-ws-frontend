/* eslint-disable no-unused-expressions */
/* eslint-disable no-debugger */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
export default class AppController {
  constructor(layout) {
    this.layout = layout;
    this.body = document.body;
    this.ws = new WebSocket('wss://ahj-sse-ws-backend.herokuapp.com/ws');
    this.initWS();
  }

  initLogin() {
    this.body.innerHTML = this.layout.renderLoginForm();
    this.loginForm = this.body.querySelector('.login-form');
    this.loginForm.addEventListener('click', (e) => this.sendUser(e));
  }

  initWS() {
    this.ws.addEventListener('open', () => this.openListener());
    this.ws.addEventListener('message', (e) => this.loginSuccessListener(e));
    this.ws.addEventListener('message', (e) => this.loginFailListener(e));
    this.ws.addEventListener('message', (e) => this.messageListener(e));
    this.ws.addEventListener('close', (e) => this.closeListener(e));
    this.ws.addEventListener('error', () => this.errorListener());
  }

  initChat() {
    this.chat = this.body.querySelector('.chat');
    this.members = this.chat.querySelector('.chat__members');
    this.messages = this.chat.querySelector('.chat__messages');
    document.addEventListener('keydown', (e) => this.addChatListener(e));
  }

  sendUser(e) {
    this.username = this.loginForm.querySelector('input').value;
    if (!e.target.classList.contains('login-form__button') || this.username === '') return;
    this.request = {
      type: 'addUser',
      name: this.username,
    };
    this.ws.send(JSON.stringify(this.request));
  }

  sendMessage(message) {
    this.request = {
      type: 'sendMessage',
      name: this.username,
      text: message,
    };
    this.ws.send(JSON.stringify(this.request));
  }

  messageListener(e) {
    if (e.data === 'Никнейм занят') return;
    if (!JSON.parse(e.data)[0].text) return;
    this.response = JSON.parse(e.data);
    while (this.messages.firstChild) {
      this.messages.firstChild.remove();
    }
    for (const message of this.response) {
      this.name = this.username === message.name ? 'You' : message.name;
      this.messages.insertAdjacentElement('beforeend', this.layout.renderMessage(this.name, message.text));
    }
    this.body.querySelector('input').value = '';
  }

  addChatListener(e) {
    this.input = this.body.querySelector('input').value;
    if (e.key !== 'Enter' || this.input === '') return;
    this.sendMessage(this.input);
  }

  loginSuccessListener(e) {
    console.log(e.data);
    if (e.data === 'Никнейм занят') return;
    if (JSON.parse(e.data)[0].text) return;
    this.loginForm.remove();
    this.body.innerHTML = this.layout.renderChat();
    this.initChat();
    this.response = JSON.parse(e.data);
    for (const member of this.response) {
      this.members.insertAdjacentHTML('beforeend', this.layout.renderMember(member.name));
    }
  }

  loginFailListener(e) {
    if (e.data !== 'Никнейм занят') return;
    this.response = e.data;
    this.initLogin();
    this.body.insertAdjacentElement('afterbegin', this.layout.renderError(e.data));
  }

  openListener() {
    console.log('Server is open');
  }

  closeListener(e) {
    if (e.wasClean) {
      console.log(`Соединение закрыто, код ${e.code}, причина ${e.reason}`);
    }
    this.ws = new WebSocket('wss://localhost:7070/ws');
    this.initWS();
  }

  errorListener() {
    console.log('error');
  }
}

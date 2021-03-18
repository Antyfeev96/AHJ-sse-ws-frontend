/* eslint-disable no-unused-expressions */
/* eslint-disable no-debugger */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
export default class AppController {
  constructor(layout) {
    this.layout = layout;
    this.body = document.body;
    this.ws = new WebSocket('ws://localhost:7070/ws');
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
    this.response = JSON.parse(e.data);
    for (const message of this.response) {
      this.name = this.username === message.name ? 'You' : message.name;
    }
  }

  addChatListener(e) {
    const message = this.body.querySelector('input').value;
    if (e.key !== 'Enter' || message === '') return;
    this.sendMessage(message);
  }

  loginSuccessListener(e) {
    if (e.data === 'Никнейм занят') return;
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
    console.log('connection closed', e);
  }

  errorListener() {
    console.log('error');
  }
}

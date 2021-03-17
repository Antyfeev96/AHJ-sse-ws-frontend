/* eslint-disable no-debugger */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
export default class AppController {
  constructor(layout) {
    this.layout = layout;
    this.body = document.body;
    this.ws = new WebSocket('ws://localhost:7070/ws');
  }

  initLogin() {
    this.initWS();
    this.body.innerHTML = this.layout.renderLoginForm();
    this.loginForm = this.body.querySelector('.login-form');
    this.loginForm.addEventListener('click', async (e) => {
      this.username = this.loginForm.querySelector('input').value;
      if (!e.target.classList.contains('login-form__button') || this.username === '') return;
      this.loginForm.remove();
      this.body.innerHTML = this.layout.renderChat();
      this.initChat();
      console.log(this.ws.send('users'));
      const users = this.ws.send('users');
      console.log(users);
    });
  }

  initChat() {
    this.chat = this.body.querySelector('.chat');
    this.members = this.chat.querySelector('.chat__members');
    this.messages = this.chat.querySelector('.chat__messages');
    this.members.innerHTML = this.layout.renderMember(this.username);
    document.addEventListener('keydown', (e) => this.addChatListener(e));
  }

  initWS() {
    this.ws.addEventListener('open', () => this.openListener());
    this.ws.addEventListener('message', (e) => this.messageListener(e));
    this.ws.addEventListener('close', (e) => this.closeListener(e));
    this.ws.addEventListener('error', () => this.errorListener());
  }

  addChatListener(e) {
    const message = this.body.querySelector('input').value;
    if (e.key !== 'Enter' || message === '') return;
    this.messages.innerHTML += this.layout.renderMyMessage(message);
  }

  openListener() {
    this.ws.send('hello!');
  }

  messageListener(e) {
    const res = this.messageCallback(e.data);
    console.log(res);
    return res;
  }

  messageCallback(data) {
    return JSON.parse(data);
  }

  closeListener(e) {
    console.log('connection closed', e);
  }

  errorListener() {
    console.log('error');
  }
}

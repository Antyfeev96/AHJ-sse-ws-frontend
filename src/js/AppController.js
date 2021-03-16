export default class AppController {
  constructor(layout, api, ws) {
    this.layout = layout;
    this.body = document.body;
    this.api = api;
    this.ws = ws;
  }

  initLogin() {
    this.ws.init();
    this.body.innerHTML = this.layout.renderLoginForm();
    this.loginForm = this.body.querySelector('.login-form');
    this.loginForm.addEventListener('click', (e) => {
      this.username = this.loginForm.querySelector('input').value;
      if (!e.target.classList.contains('login-form__button') || this.username === '') return;
      this.loginForm.remove();
      this.body.innerHTML = this.layout.renderChat();
      this.api.add(this.username);
      this.initChat();
      this.api.load();
    });
  }

  initChat() {
    this.chat = this.body.querySelector('.chat');
    this.members = this.chat.querySelector('.chat__members');
    this.messages = this.chat.querySelector('.chat__messages');
    this.members.innerHTML = this.layout.renderMember(this.username);
    document.addEventListener('keydown', (e) => this.addChatListener(e));
  }

  addChatListener(e) {
    const message = this.body.querySelector('input').value;
    if (e.key !== 'Enter' || message === '') return;
    this.messages.innerHTML += this.layout.renderMyMessage(message);
  }
}

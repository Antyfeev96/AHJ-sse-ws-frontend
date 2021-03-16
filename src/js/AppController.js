export default class AppController {
  constructor(layout) {
    this.layout = layout;
    this.body = document.body;
    // this.api = api;
  }

  initLogin() {
    this.body.innerHTML = this.layout.renderLoginForm();
    this.loginForm = this.body.querySelector('.login-form');
    this.loginForm.addEventListener('click', (e) => {
      if (!e.target.classList.contains('login-form__button')) return;
      this.username = this.loginForm.querySelector('input').value;
      this.loginForm.remove();
      this.body.innerHTML = this.layout.renderChat();
      this.initChat();
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
    if (e.key !== 'Enter') return;
    const message = this.body.querySelector('input').value;
    this.messages.innerHTML += this.layout.renderMessage(this.username, message);
  }
}

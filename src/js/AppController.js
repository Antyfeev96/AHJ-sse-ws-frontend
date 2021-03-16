export default class AppController {
  constructor(layout) {
    this.layout = layout;
    this.body = document.body;
    // this.api = api;
  }

  init() {
    this.body.innerHTML = this.layout.renderLoginForm();
    this.loginForm = this.body.querySelector('.login-form');
    this.loginForm.addEventListener('click', (e) => {
      if (!e.target.classList.contains('login-form__button')) return;
      this.name = this.loginForm.querySelector('input').value;
      this.loginForm.remove();
      this.body.innerHTML = this.layout.renderChat();
      this.members = this.body.querySelector('.chat__members');
      this.members.innerHTML = this.layout.renderMember(this.name);
    });
  }
}

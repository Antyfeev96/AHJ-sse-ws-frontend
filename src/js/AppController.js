export default class AppController {
  constructor(layout) {
    this.layout = layout;
    this.body = document.body;
    // this.api = api;
  }

  init() {
    this.body.innerHTML = this.layout.renderLoginForm();
  }
}

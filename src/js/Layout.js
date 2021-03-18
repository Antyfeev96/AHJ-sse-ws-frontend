/* eslint-disable class-methods-use-this */
export default class Layout {
  renderLoginForm() {
    return (`
    <form class="login-form">
        <div class="login-form__title">Выберите псевдоним</div>
        <input placeholder="Введите псевдоним..." type="text" class="login-form__input">
        <button type="button" class="login-form__button">Продолжить</button>
    </form>
          `);
  }

  renderChat() {
    return (`
      <div class="chat">
        <div class="chat__messages">
            
        </div>
        <input type="text" class="chat__input">
        <div class="chat__members">
            
        </div>
    </div>
      `);
  }

  renderMessage(name, message) {
    return (`
    <div class="chat__message">
        <div class="chat__name">${name}, 21:29 14.03.2021</div>
        <div class="chat__article">${message}</div>
    </div>
    `);
  }

  renderMyMessage(message) {
    return (`
    <div class="chat__message chat__message_mine">
        <div class="chat__name chat__name_mine">You, 21:29 14.03.2021</div>
        <div class="chat__article">${message}</div>
    </div>
    `);
  }

  renderMember(name) {
    this.name = name;
    return (`
    <div class="chat__member">
        <div class="chat__avatar"></div>
        <div class="chat__username">${this.name}</div>
    </div>
    `);
  }

  renderError(error) {
    this.error = error;
    const errorEl = document.createElement('div');
    errorEl.className = 'error';
    const titleEl = document.createElement('div');
    titleEl.className = 'error__title';
    const messageEl = document.createElement('div');
    messageEl.className = 'error__message';
    titleEl.textContent = this.error;
    messageEl.textContent = 'Введите другой никнейм';
    errorEl.insertAdjacentElement('afterbegin', titleEl);
    errorEl.insertAdjacentElement('beforeend', messageEl);
    return errorEl;
  }
}

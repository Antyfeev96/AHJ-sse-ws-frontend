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
    const modifyMessageEl = name === 'You' ? ' chat__message_mine' : '';
    const modifyNameEl = name === 'You' ? ' chat__name_mine' : '';
    const messageEl = document.createElement('div');
    messageEl.className = `chat__message${modifyMessageEl}`;
    const nameEl = document.createElement('div');
    nameEl.className = `chat__name${modifyNameEl}`;
    nameEl.textContent = name + this.renderTime();
    const articleEl = document.createElement('div');
    articleEl.className = 'chat__article';
    articleEl.textContent = message;
    messageEl.insertAdjacentElement('afterbegin', nameEl);
    messageEl.insertAdjacentElement('beforeend', articleEl);
    return messageEl;
  }

  renderTime() {
    const date = new Date();

    const formatterHours = new Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric',
    });

    const formatterMonths = new Intl.DateTimeFormat('ru', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });

    return ` ${formatterHours.format(date)} ${formatterMonths.format(date)}`;
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

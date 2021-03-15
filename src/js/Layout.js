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
            <div class="chat__message">
                <div class="chat__name">Mishgangsta, 21:29 14.03.2021</div>
                <div class="chat__article">Hello there!</div>
            </div>
            <div class="chat__message">
                <div class="chat__name">Mishgangsta, 21:29 14.03.2021</div>
                <div class="chat__article">Hello there!</div>
            </div>
            <div class="chat__message">
                <div class="chat__name">Mishgangsta, 21:29 14.03.2021</div>
                <div class="chat__article">Hello there!</div>
            </div>
            <div class="chat__message">
                <div class="chat__name">Mishgangsta, 21:29 14.03.2021</div>
                <div class="chat__article">Hello there!</div>
            </div>
            <div class="chat__message">
                <div class="chat__name">Mishgangsta, 21:29 14.03.2021</div>
                <div class="chat__article">Hello there!</div>
            </div>
            <div class="chat__message">
                <div class="chat__name">Mishgangsta, 21:29 14.03.2021</div>
                <div class="chat__article">Hello there!</div>
            </div>
            <div class="chat__message">
                <div class="chat__name">Mishgangsta, 21:29 14.03.2021</div>
                <div class="chat__article">Hello there!</div>
            </div>
        </div>
        <input type="text" class="chat__input">
        <div class="chat__members">
            <div class="chat__member">
                <div class="chat__avatar"></div>
                <div class="chat__username">Alex</div>
            </div>
            <div class="chat__member">
                <div class="chat__avatar"></div>
                <div class="chat__username">Mishgangsta</div>
            </div>
            <div class="chat__member">
                <div class="chat__avatar"></div>
                <div class="chat__username">Joseph</div>
            </div>
            <div class="chat__member">
                <div class="chat__avatar"></div>
                <div class="chat__username">Homelander</div>
            </div>
        </div>
    </div>
      `);
  }
}

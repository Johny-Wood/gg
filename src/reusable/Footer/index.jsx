import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div
        className="modal__wrap"
        id="verification"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">Верификация</h3>
          <form>
            <div className="modal__warm">
              Для верификации аккаунта необходимо отправить фото паспорта
            </div>
            <div className="modal__instruction background__blue-two">
              <h4 className="modal__h4 h4">Инструкция</h4>
              <ol className="modal__ol">
                <li className="modal__li">Cделайте фото как на примере</li>
                <li className="modal__li">Добавьте фото в форму</li>
                <li className="modal__li">
                  Нажмите кнопку “Отправить на проверке”
                </li>
              </ol>
            </div>
            <h4 className="modal__h4 h4">1. Главный разворот</h4>
            <div className="form__row file__row">
              <div className="form__row-img">
                <img
                  src="src/assets/img/passpot-1.svg"
                  width="129px"
                  height="157px"
                />
              </div>
              <div className="form__row-content">
                <h6 className="modal__h6 h6">Добавьте фото</h6>
                <div className="file__type">
                  <input type="text" />
                  <button className="modal__btn btn">Выбрать файл</button>
                </div>
                <div className="modal__li">Требования к фото</div>
                <ol className="modal__ol">
                  <li className="modal__li">Cделайте фото как на примере</li>
                  <li className="modal__li">Добавьте фото в форму</li>
                  <li className="modal__li">
                    Нажмите кнопку “Отправить на проверке”
                  </li>
                </ol>
              </div>
            </div>
            <h4 className="modal__h4 h4">2. Прописка</h4>
            <div className="form__row file__row">
              <div className="form__row-img">
                <img
                  src="src/assets/img/passpot-2.svg"
                  width="129px"
                  height="157px"
                />
              </div>
              <div className="form__row-content">
                <h6 className="modal__h6 h6">Добавьте фото</h6>
                <div className="file__type">
                  <input type="text" />
                  <button className="modal__btn btn">Выбрать файл</button>
                </div>
                <div className="modal__li">Требования к фото</div>
                <ol className="modal__ol">
                  <li className="modal__li">Cделайте фото как на примере</li>
                  <li className="modal__li">Добавьте фото в форму</li>
                  <li className="modal__li">
                    Нажмите кнопку “Отправить на проверке”
                  </li>
                </ol>
              </div>
            </div>
            <h4 className="modal__h4 h4 color__gold">
              <span>
                <img
                  src="src/assets/img/bx-info-circle.svg"
                  width="20px"
                  height="20px"
                />
              </span>{" "}
              Верификация займет до 5 дней
            </h4>
            <div className="modal__actions">
              <button className="modal__btn btn background__blue-two">
                Отмена
              </button>
              <button className="modal__btn btn"> Отправить на проверку</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="verification__error"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Ошибка верификации{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__instruction background__blue-two">
            <h4 className="modal__h4 h4">Причина</h4>
            <ol className="modal__ol">
              <li className="modal__li">Причина 1</li>
              <li className="modal__li">Причина 1</li>
              <li className="modal__li">Причина 1”</li>
            </ol>
          </div>
          <h4 className="modal__h4 h4 color__gold">
            <span>
              <img
                src="src/assets/img/bx-info-circle.svg"
                width="20px"
                height="20px"
              />
            </span>{" "}
            Необходимо повторно пройти верификацию
          </h4>
          <div className="modal__actions">
            <button className="modal__btn btn">
              Пройти верификацию повторно
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="edit__acount"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Основное{" "}
            <span>
              <img src="src/assets/img/pencil.svg" width="24px" height="24px" />
            </span>
          </h3>
          <form>
            <h6 className="modal__h6 h6">ФИО</h6>
            <div className="form__row">
              <input type="text" placeholder="Петров Иван Андреевич" />
            </div>
            <h6 className="modal__h6 h6">Дата рождения</h6>
            <div className="form__row">
              <input type="text" placeholder="02.03.2000" />
              <span className="mask">
                <img
                  src="src/assets/img/bx-calendar-edit.svg"
                  width="18px"
                  height="18px"
                />
              </span>
            </div>
            <h6 className="modal__h6 h6">страна</h6>
            <div className="form__row">
              <input type="text" placeholder="Россия" />
              <span className="mask">
                <img
                  src="src/assets/img/bx-caret-down.svg"
                  width="18px"
                  height="18px"
                />
              </span>
            </div>
            <h6 className="modal__h6 h6">Город</h6>
            <div className="form__row">
              <input type="text" placeholder="Москва" />
              <span className="mask">
                <img
                  src="src/assets/img/bx-caret-down.svg"
                  width="18px"
                  height="18px"
                />
              </span>
            </div>
            <h6 className="modal__h6 h6">телефон</h6>
            <div className="form__row">
              <input type="text" placeholder="+ 7 (098) 76-54-321" />
            </div>
            <h6 className="modal__h6 h6">телеграм</h6>
            <div className="form__row">
              <input type="text" placeholder="@ivanpetrov" />
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn">Сохранить</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="remove__acount"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">Удаление аккаунта</h3>
          <div className="modal__description">
            Вы уверенны что хотите удалить аккаунт и все данные?{" "}
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn background__blue-two">
              Удалить
            </button>
            <button className="modal__btn btn modal__close">Отмена</button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="remove__acount-reason"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Удаление аккаунта{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <form>
            <div className="modal__warm">Информационное уведомление</div>
            <div className="p2p__buy-payment-type">
              <input
                id="reason1"
                defaultValue="reason1"
                className="p2p__buy-payment-input"
                type="radio"
                name="reason"
                defaultChecked
              />
              <label htmlFor="reason1" className="p2p__buy-payment-label">
                Причина 1{" "}
              </label>
              <input
                id="reason2"
                defaultValue="reason3"
                className="p2p__buy-payment-input"
                type="radio"
                name="reason"
              />
              <label htmlFor="reason2" className="p2p__buy-payment-label">
                Причина 2
              </label>
              <input
                id="reason3"
                defaultValue="reason3"
                className="p2p__buy-payment-input"
                type="radio"
                name="reason"
              />
              <label htmlFor="reason3" className="p2p__buy-payment-label">
                Другие причины
              </label>
            </div>
            <h4 className="modal__h4 h4">Предупреждения</h4>
            <div className="modal__instruction background__blue-two">
              <h4 className="modal__h4 h4">Предупреждения</h4>
              <ol className="modal__ol">
                <li className="modal__li">Предупреждения</li>
                <li className="modal__li">Предупреждения</li>
                <li className="modal__li">Предупреждения</li>
              </ol>
            </div>
            <div className="profile__operations">
              <div className="checkbox" />
              <label className="label">Я ознакомился с предупреждениями</label>
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn background__grey-four">
                Подтвердить
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="remove__acount-confim"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Удаление аккаунта{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__text">
            Для защиты аккаунта выполните следующую проверку
          </div>
          <h6 className="modal__h6 h6">Код аутентификации</h6>
          <form>
            <div className="form__row">
              <input type="text" placeholder={543242} />
              <div className="modal__text modal__signature">
                Введите 6-ти значный код, который мы отправили вам на почту
              </div>
            </div>
            <div className="modal__actions actions__first">
              <button className="modal__btn btn  background__none color__blue">
                Изменить способ подтверждения
              </button>
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn">Удалить аккаунт</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="add__refferal"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Добавить партнерскую ссылку{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <form>
            <div className="form__row">
              <input type="text" placeholder="Название компании" />
            </div>
            <div className="form__row">
              <input type="text" placeholder="Вставьте ссылку" />
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn">Добавить</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="add__google-step1"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Привязать Google Authenticator{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__warm">
            Загрузите и установите приложение Authenticator на свой телефон,
            после этого привяжите свой аккаунт{" "}
          </div>
          <div className="modal__actions actions__first">
            <a
              href="#"
              className="modal__btn btn  background__none color__blue"
            >
              Скачать Google Authenticator(IOS)
            </a>
          </div>
          <div className="modal__actions actions__first">
            <a
              href="#"
              className="modal__btn btn  background__none color__blue"
            >
              Скачать Google Authenticator(Android)
            </a>
          </div>
          <div className="modal__qr">
            <div className="modal__qr-android background__blue-two">
              <div className="modal__text">Android</div>
              <img
                src="src/assets/img/qr-android.svg"
                width="145px"
                height="145px"
              />
            </div>
            <div className="modal__qr-ios background__blue-two">
              <div className="modal__text">IOS</div>
              <img src="src/assets/img/qr-ios.svg" width="145px" height="145px" />
            </div>
          </div>
          <div className="modal__actions">
            <button
              className="modal__btn btn popup__action"
              data-popup-id="#add__google-step2"
            >
              Далее
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="add__google-step2"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Привязать Google Authenticator{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__phone">
            <picture>
              <source srcSet="src/assets/img/x-mockup-1.webp" type="image/webp" />
              <source srcSet="src/assets/img/x-mockup-1.jpg" type="image/jpeg" />
              <img
                src="src/assets/img/x-mockup-1.jpg"
                width="222px"
                height="446px"
              />
            </picture>
          </div>
          <nav className="slider__nav">
            <ul className="nav__dots">
              <li className="dots__li dots__li-active" />
              <li className="dots__li" />
              <li className="dots__li" />
            </ul>
          </nav>
          <div className="modal__text" style={{ textAlign: "center" }}>
            Откройте приложении и нажмите кнопку “Начать”
          </div>
          <div className="modal__actions">
            <button
              className="modal__btn btn popup__action"
              data-popup-id="#add__google-step3"
            >
              Далее
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="add__google-step3"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Привязать Google Authenticator{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__phone">
            <picture>
              <source srcSet="src/assets/img/x-mockup-2.webp" type="image/webp" />
              <source srcSet="src/assets/img/x-mockup-2.jpg" type="image/jpeg" />
              <img
                src="src/assets/img/x-mockup-2.jpg"
                width="222px"
                height="446px"
              />
            </picture>
          </div>
          <nav className="slider__nav">
            <ul className="nav__dots">
              <li className="dots__li" />
              <li className="dots__li dots__li-active" />
              <li className="dots__li" />
            </ul>
          </nav>
          <div className="modal__text" style={{ textAlign: "center" }}>
            Выберите способ аутентификации
          </div>
          <div className="modal__actions">
            <button
              className="modal__btn btn popup__action"
              data-popup-id="#add__google-step4"
            >
              Далее
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="add__google-step4"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Привязать Google Authenticator{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__phone">
            <div className="modal__qr-final background__blue-two">
              <div className="modal__text">Отсканируйте QR-код</div>
              <img src="src/assets/img/qr-ios.svg" width="145px" height="145px" />
            </div>
            <div className="modal__qr-final qr-final_bottom">
              <div className="modal__h6 h6">Введити ключ</div>
              <h4 className="modal__h4 h4">
                BP75M4DGYZTEU3PB{" "}
                <span>
                  <img
                    src="src/assets/img/copy.svg"
                    width="15px"
                    height="15px"
                  />
                </span>
              </h4>
            </div>
          </div>
          <nav className="slider__nav">
            <ul className="nav__dots">
              <li className="dots__li" />
              <li className="dots__li" />
              <li className="dots__li  dots__li-active" />
            </ul>
          </nav>
          <div className="modal__actions">
            <button className="modal__btn btn modal__close">Готово</button>
          </div>
        </div>
      </div>
      <div className="modal__wrap" id="output" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3">Вывести USDT</h3>
          <div className="modal__warm">
            Вывод USDT может занять до двух рабочих дней, если хотите вывести
            USDT быстрее воспользуйтесь P2P платформой{" "}
          </div>
          <div className="modal__actions actions__first">
            <a
              href="/GOLDEN/p2p.php"
              className="modal__btn btn  background__none color__blue"
            >
              Перейти на P2P платформу
            </a>
          </div>
          <div className="modal__instruction background__blue-two">
            <h4 className="modal__h4 h4">Инструкция</h4>
            <ol className="modal__ol">
              <li className="modal__li">
                Введите сеть, укажите адрес и сумму вывода
              </li>
              <li className="modal__li">Подтвердите корректность данных </li>
              <li className="modal__li">Подтвердите транзакцию </li>
            </ol>
          </div>
          <form>
            <h6 className="modal__h6 h6">Выберите сеть</h6>
            <div className="form__row">
              <input type="text" placeholder="TRC-20" />
              <span className="mask">
                <img
                  src="src/assets/img/bx-caret-down.svg"
                  width="18px"
                  height="18px"
                />
              </span>
            </div>
            <h6 className="modal__h6 h6">
              Введите адрес кошелька usdt в выбранной сети
            </h6>
            <div className="form__row">
              <input type="text" placeholder="Введите адрес кошелька" />
            </div>
            <h6 className="modal__h6 h6">введите сумму</h6>
            <div className="form__row">
              <input type="text" placeholder="Введите сумма" />
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn background__blue-two">
                Отмена
              </button>
              <button className="modal__btn btn">Подтвердить</button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal__wrap" id="output-info" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3">Вывести USDT</h3>
          <div className="modal__instruction background__blue-two">
            <h6 className="modal__h6 h6">Сеть</h6>
            <h5 className="modal__h5 h5">TRC-20</h5>
            <h6 className="modal__h6 h6">Кошелек</h6>
            <h4 className="modal__h4 h4">
              0xdac17f958d2ee523a2206206994597c13d831ec7
            </h4>
            <h6 className="modal__h6 h6">Сумма</h6>
            <h5 className="modal__h5 h5">200 USDT</h5>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn background__blue-two modal__close">
              Отмена
            </button>
            <button className="modal__btn btn">Отправить</button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="output-confim"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">Подтверждение</h3>
          <h6 className="modal__h6 h6">Код аутентификации</h6>
          <form>
            <div className="form__row">
              <input type="text" placeholder="Введите код" />
              <div className="modal__text modal__signature">
                Введите 6-ти значный код, который мы отправили вам на почту
              </div>
            </div>
            <h6 className="modal__h6 h6 modal__timer">
              Отправить повторно (59 сек.)
            </h6>
            <div className="modal__actions actions__first">
              <button className="modal__btn btn  background__none color__blue">
                Изменить способ подтверждения
              </button>
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn background__blue-two">
                Назад
              </button>
              <button className="modal__btn btn">Подтвердить</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="output-succes"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">Вывести USDT</h3>
          <div className="modal__text" style={{ textAlign: "center" }}>
            <img
              src="src/assets/img/bxs-check-square-1.svg"
              width="44px"
              height="44px"
            />
            <h4 className="modal__h4 h4">Готово!</h4>
            <div className="modal__li">
              В течении двух дней деньги придут
              <br />
              на указанный кошелек
            </div>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn">Закрыть</button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="finance__filter"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">Фильтр</h3>
          <form>
            <h6 className="modal__h6 h6">По дате</h6>
            <div className="row">
              <div className="col-md-6">
                <div className="form__row">
                  <input type="text" />
                  <span className="mask">
                    <img
                      src="src/assets/img/bx-calendar-alt.svg"
                      width="18px"
                      height="18px"
                    />
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form__row">
                  <input type="text" />
                  <span className="mask">
                    <img
                      src="src/assets/img/bx-calendar-alt.svg"
                      width="18px"
                      height="18px"
                    />
                  </span>
                </div>
              </div>
            </div>
            <h6 className="modal__h6 h6">Кому</h6>
            <div className="form__row">
              <input type="text" placeholder="Введите имя пользователя" />
            </div>
            <h6 className="modal__h6 h6">от кого</h6>
            <div className="form__row">
              <input type="text" placeholder="Введите имя пользователя" />
            </div>
            <h6 className="modal__h6 h6">Бонус</h6>
            <div className="form__row">
              <input
                type="text"
                placeholder="Премия за оборот структуры каждого лидера"
              />
              <span className="mask">
                <img
                  src="src/assets/img/bx-caret-down.svg"
                  width="18px"
                  height="18px"
                />
              </span>
            </div>
            <h6 className="modal__h6 h6">Способ оплаты</h6>
            <div className="form__row">
              <input
                type="text"
                placeholder="Премия за оборот структуры каждого лидера"
              />
              <span className="mask">
                <img
                  src="src/assets/img/bx-caret-down.svg"
                  width="18px"
                  height="18px"
                />
              </span>
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn">Показать</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="finance__transaction"
        style={{ display: "none" }}
      >
        <div className="modal__content background__green">
          <h6 className="modal__h6 h6 head__flex">
            <div className="finance__div finance__status">выполнено</div>
            <span>id транзакции</span>
          </h6>
          <div className="modal__div">
            <h5 className="modal__h5 h5">+35 000</h5>
            <h6 className="modal__h6 h6">10.03.2023 20:23</h6>
            <h6 className="modal__h6 h6">Кому</h6>
            <h4 className="modal__h4 h4">petrovivan</h4>
            <h6 className="modal__h6 h6">от кого</h6>
            <h4 className="modal__h4 h4">golden</h4>
            <h6 className="modal__h6 h6">бонус</h6>
            <h4 className="modal__h4 h4">
              Премия за оборот структуры каждого лидера
            </h4>
            <h6 className="modal__h6 h6">Способ оплаты</h6>
            <h4 className="modal__h4 h4">Перевод</h4>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="finance__transaction-cancel"
        style={{ display: "none" }}
      >
        <div className="modal__content background__blue">
          <h6 className="modal__h6 h6 head__flex">
            <div className="finance__div finance__status">в обработке</div>
            <span>id транзакции</span>
          </h6>
          <div className="modal__div">
            <h5 className="modal__h5 h5">+35 000</h5>
            <h6 className="modal__h6 h6">10.03.2023 20:23</h6>
            <h6 className="modal__h6 h6">Кому</h6>
            <h4 className="modal__h4 h4">petrovivan</h4>
            <h6 className="modal__h6 h6">от кого</h6>
            <h4 className="modal__h4 h4">golden</h4>
            <h6 className="modal__h6 h6">бонус</h6>
            <h4 className="modal__h4 h4">
              Премия за оборот структуры каждого лидера
            </h4>
            <h6 className="modal__h6 h6">Способ оплаты</h6>
            <h4 className="modal__h4 h4">Перевод</h4>
            <div className="modal__actions">
              <button className="modal__btn btn background__red">
                Отменить транзакицию
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="finance__transaction-cancel-confim"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">Отмена транзакции</h3>
          <div className="modal__description">
            Вы хотите отменить транзакцию?
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn background__blue-two">
              Удалить
            </button>
            <button className="modal__btn btn">Отмена</button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="p2p__buy-payment-confim"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">Подтверждение платежа</h3>
          <div className="modal__text">
            Подтвердите, что вы перевели деньги продавцу с помощью данного
            способа оплаты, после чего нажмите кнопку «Переведено, далее».
          </div>
          <div className="p2p__buy-payment-detail">
            <div className="p2p__list-pay">
              <span className="list-pay__item background__green-two">Сбер</span>
            </div>
            <div className="p2p__h6 h6">ИМЯ</div>
            <div className="p2p__h5 h5">Петров Иван Андреевич</div>
            <div className="p2p__h6 h6">НОМЕР КАРТЫ</div>
            <div className="p2p__h5 h5">2345 4242 3453 2345</div>
          </div>
          <h4 className="modal__h4 h4 modal__h4-two">
            <span>
              <img
                src="src/assets/img/bx-info-circle.svg"
                width="20px"
                height="20px"
              />
            </span>
            <div className="modal__text">
              Совет: Я понимаю, что должен использовать выбранную платежную
              платформу и осуществить перевод самостоятельно.
            </div>
          </h4>
          <div className="profile__operations modal__h4-two ">
            <div className="checkbox" />
            <label className="label">
              <div className="modal__text">
                Я выполнил(а) платеж с платежного аккаунта, оформленного на мое
                имя, данные которого совпадают с регистрационной информацией на
                платформе
              </div>
            </label>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn background__blue-two">
              Отмена
            </button>
            <button className="modal__btn btn background__grey-four">
              Подтвердить
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="p2p__buy-payment-confim"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">Подтверждение платежа</h3>
          <div className="modal__text">
            Подтвердите, что вы перевели деньги продавцу с помощью данного
            способа оплаты, после чего нажмите кнопку «Переведено, далее».
          </div>
          <div className="p2p__buy-payment-detail">
            <div className="p2p__list-pay">
              <span className="list-pay__item background__green-two">Сбер</span>
            </div>
            <div className="p2p__h6 h6">ИМЯ</div>
            <div className="p2p__h5 h5">Петров Иван Андреевич</div>
            <div className="p2p__h6 h6">НОМЕР КАРТЫ</div>
            <div className="p2p__h5 h5">2345 4242 3453 2345</div>
          </div>
          <h4 className="modal__h4 h4 modal__h4-two">
            <span>
              <img
                src="src/assets/img/bx-info-circle.svg"
                width="20px"
                height="20px"
              />
            </span>
            <div className="modal__text">
              Совет: Я понимаю, что должен использовать выбранную платежную
              платформу и осуществить перевод самостоятельно.
            </div>
          </h4>
          <div className="profile__operations modal__h4-two ">
            <div className="checkbox checkbox__checked" />
            <label className="label">
              <div className="modal__text">
                Я выполнил(а) платеж с платежного аккаунта, оформленного на мое
                имя, данные которого совпадают с регистрационной информацией на
                платформе
              </div>
            </label>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn background__blue-two">
              Отмена
            </button>
            <button className="modal__btn btn">Подтвердить</button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="p2p__buy-payment-select"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Все способы оплаты{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="p2p__buy-payment-wrap">
            <div className="p2p__buy-payment-detail">
              <div className="p2p__list-pay">
                <span className="list-pay__item background__green-two">
                  Сбер
                </span>
              </div>
              <div className="p2p__h6 h6">ИМЯ</div>
              <div className="p2p__h5 h5">Петров Иван Андреевич</div>
              <div className="p2p__h6 h6">НОМЕР КАРТЫ</div>
              <div className="p2p__h5 h5">2345 4242 3453 2345</div>
            </div>
            <div className="p2p__buy-payment-detail p2p__buy-payment-checked">
              <div className="p2p__list-pay">
                <span className="list-pay__item background__red-two">
                  Альфабанк
                </span>
              </div>
              <div className="p2p__h6 h6">ИМЯ</div>
              <div className="p2p__h5 h5">Петров Иван Андреевич</div>
              <div className="p2p__h6 h6">НОМЕР КАРТЫ</div>
              <div className="p2p__h5 h5">2345 4242 3453 2345</div>
            </div>
            <div className="p2p__buy-payment-detail">
              <div className="p2p__list-pay">
                <span className="list-pay__item background__gold">
                  Тинькофф
                </span>
              </div>
              <div className="p2p__h6 h6">ИМЯ</div>
              <div className="p2p__h5 h5">Петров Иван Андреевич</div>
              <div className="p2p__h6 h6">НОМЕР КАРТЫ</div>
              <div className="p2p__h5 h5">2345 4242 3453 2345</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="p2p__buy-payment-cancel"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Отменить заказ{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <h6 className="modal__h6 h6">Советы</h6>
          <div className="modal__instruction modal__instruction-none background__blue-two">
            <h4 className="modal__h4 h4 head__flex">
              Советы{" "}
              <span>
                <img
                  src="src/assets/img/bx-chevron-left.svg"
                  width="20px"
                  height="20px"
                  className="img__invert1 img__rotare270"
                />
              </span>
            </h4>
            <ol className="modal__ol">
              <li className="modal__li">
                Если продавец подтвердит запрос на отмену, это не повлияет на
                процент исполнения покупателя.
              </li>
              <li className="modal__li">
                Если продавец отклонит запрос на отмену, покупатель будет нести
                ответственность (это повлияет на процент исполнения ордеров).
              </li>
              <li className="modal__li">
                Отменять ордера по причине, связанной с продавцом, можно не
                более 3-х раз в сутки.
              </li>
            </ol>
          </div>
          <h6 className="modal__h6 h6">почему вы отменили ордер</h6>
          <div className="modal__text">
            Мы гарантируем конфиденциальность вашего отзыва и стремимся к тому,
            чтобы наш сервис становился лучше
          </div>
          <h6 className="modal__h6 h6">из-за покупателя</h6>
          <div className="p2p__buy-payment-type">
            <input
              id="cancel-reason1"
              defaultValue="cancel-reason1"
              className="p2p__buy-payment-input"
              type="radio"
              name="cancel-reason"
            />
            <label htmlFor="cancel-reason1" className="p2p__buy-payment-label">
              Я больше не хочу торговать с данным контрагентом
            </label>
            <input
              id="cancel-reason2"
              defaultValue="rcancel-eason3"
              className="p2p__buy-payment-input"
              type="radio"
              name="cancel-reason"
            />
            <label htmlFor="cancel-reason2" className="p2p__buy-payment-label">
              Я не могу выполнить требования продавца
            </label>
            <input
              id="cancel-reason3"
              defaultValue="cancel-reason3"
              className="p2p__buy-payment-input"
              type="radio"
              name="cancel-reason"
            />
            <label htmlFor="cancel-reason3" className="p2p__buy-payment-label">
              Другие причины
            </label>
          </div>
          <h6 className="modal__h6 h6">из-за продавца</h6>
          <div className="modal__instruction background__blue-two">
            <h4 className="modal__h4 h4">Советы</h4>
            <ol className="modal__ol">
              <li className="modal__li">
                Если продавец подтвердит запрос на отмену, это не повлияет на
                процент исполнения покупателя.
              </li>
              <li className="modal__li">
                Если продавец отклонит запрос на отмену, покупатель будет нести
                ответственность (это повлияет на процент исполнения ордеров).
              </li>
              <li className="modal__li">
                Отменять ордера по причине, связанной с продавцом, можно не
                более 3-х раз в сутки.
              </li>
            </ol>
          </div>
          <div className="profile__operations">
            <div className="checkbox" />
            <label className="label">
              <div className="modal__text">
                Я не оплатил продавцу / продавец согласился на возврат средств
              </div>
            </label>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn background__grey-four">
              Подтвердить
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="p2p__buy-payment-cancel"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Отменить заказ{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <h6 className="modal__h6 h6">Советы</h6>
          <div className="modal__instruction modal__instruction-active background__blue-two">
            <h4 className="modal__h4 h4 head__flex">
              Советы{" "}
              <span>
                <img
                  src="src/assets/img/bx-chevron-left.svg"
                  width="20px"
                  height="20px"
                  className="img__invert1 img__rotare270"
                />
              </span>
            </h4>
            <ol className="modal__ol">
              <li className="modal__li">
                Если вы уже совершили оплату, не отменяйте ордер.
              </li>
              <li className="modal__li">
                Если ордер будет отменен из-за истечения срока его действия,
                покупатель будет нести ответственность (это повлияет на процент
                исполнения ордеров)
              </li>
              <li className="modal__li">
                Если продавец не ответит в чате в течение 15 минут, вы не будете
                нести ответственность за отмену данного ордера.
                <p className="color__gold">Ваш дневной лимит отмен: 5.</p>
              </li>
              <li className="modal__li">
                За день вы можете совершить{" "}
                <span className="color__gold">
                  до 3 отмен, которые не будут учитываться.
                </span>{" "}
                В противном случае ваша учетная запись будет заблокирована, и вы
                не сможете больше размещать ордера в этот день.
              </li>
            </ol>
          </div>
          <h6 className="modal__h6 h6">почему вы отменили ордер</h6>
          <div className="modal__text">
            Мы гарантируем конфиденциальность вашего отзыва и стремимся к тому,
            чтобы наш сервис становился лучше
          </div>
          <h6 className="modal__h6 h6">из-за покупателя</h6>
          <div className="p2p__buy-payment-type">
            <input
              id="cancel-reason1"
              defaultValue="cancel-reason1"
              className="p2p__buy-payment-input"
              type="radio"
              name="cancel-reason"
              defaultChecked
            />
            <label htmlFor="cancel-reason1" className="p2p__buy-payment-label">
              Я больше не хочу торговать с данным контрагентом
            </label>
            <input
              id="cancel-reason2"
              defaultValue="rcancel-eason3"
              className="p2p__buy-payment-input"
              type="radio"
              name="cancel-reason"
            />
            <label htmlFor="cancel-reason2" className="p2p__buy-payment-label">
              Я не могу выполнить требования продавца
            </label>
            <input
              id="cancel-reason3"
              defaultValue="cancel-reason3"
              className="p2p__buy-payment-input"
              type="radio"
              name="cancel-reason"
            />
            <label htmlFor="cancel-reason3" className="p2p__buy-payment-label">
              Другие причины
            </label>
          </div>
          <h6 className="modal__h6 h6">из-за продавца</h6>
          <div className="modal__instruction background__blue-two">
            <h4 className="modal__h4 h4">Советы</h4>
            <ol className="modal__ol">
              <li className="modal__li">
                Если продавец подтвердит запрос на отмену, это не повлияет на
                процент исполнения покупателя.
              </li>
              <li className="modal__li">
                Если продавец отклонит запрос на отмену, покупатель будет нести
                ответственность (это повлияет на процент исполнения ордеров).
              </li>
              <li className="modal__li">
                Отменять ордера по причине, связанной с продавцом, можно не
                более 3-х раз в сутки.
              </li>
            </ol>
          </div>
          <div className="profile__operations">
            <div className="checkbox checkbox__checked" />
            <label className="label">
              <div className="modal__text">
                Я не оплатил продавцу / продавец согласился на возврат средств
              </div>
            </label>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn">Подтвердить</button>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap p2p__steps-modal"
        id="p2p__buy-payment-appeal"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Подать апелляцию{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="p2p__steps">
            <div className="p2p__steps-item p2p__steps-active">
              <div className="p2p__steps-number">1</div>
              <div className="p2p__steps-name">Апелляция подана</div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item">
              <div className="p2p__steps-number">2</div>
              <div className="p2p__steps-name">Переговоры с контрагентом</div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item">
              <div className="p2p__steps-number">3</div>
              <div className="p2p__steps-name">Рассмотрение</div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item">
              <div className="p2p__steps-number">4</div>
              <div className="p2p__steps-name">Апелляция рассмотрена</div>
            </div>
          </div>
          <h6 className="modal__h6 h6">Советы</h6>
          <div className="modal__instruction background__blue-two">
            <h4 className="modal__h4 h4">Советы</h4>
            <ol className="modal__ol">
              <li className="modal__li">
                Если вы уже совершили оплату, не отменяйте ордер.
              </li>
              <li className="modal__li">
                Если ордер будет отменен из-за истечения срока его действия,
                покупатель будет нести ответственность (это повлияет на процент
                исполнения ордеров)
              </li>
              <li className="modal__li">
                Если продавец не ответит в чате в течение 15 минут, вы не будете
                нести ответственность за отмену данного ордера.
                <p className="color__gold">Ваш дневной лимит отмен: 5.</p>
              </li>
              <li className="modal__li">
                За день вы можете совершить{" "}
                <span className="color__gold">
                  до 3 отмен, которые не будут учитываться.
                </span>{" "}
                В противном случае ваша учетная запись будет заблокирована, и вы
                не сможете больше размещать ордера в этот день.
              </li>
            </ol>
          </div>
          <h6 className="modal__h6 h6">Причина</h6>
          <div className="form__row">
            <input type="text" placeholder="Выберите причину" />
            <span className="mask">
              <img
                src="src/assets/img/bx-chevron-left.svg"
                width="20px"
                height="20px"
                className="img__invert1 img__rotare270"
              />
            </span>
          </div>
          <h6 className="modal__h6 h6">Описание</h6>
          <div className="form__row">
            <textarea
              placeholder="Предоставьте подробную информацию"
              defaultValue={""}
            />
          </div>
          <h6 className="modal__h6 h6">Загрузить доказательство</h6>
          <div className="modal__text">
            Общее количество файлов (скриншоты, аудиозаписи и видеофайлы с
            подтверждением оплаты, файлы журналов чатов) не должно превышать 5
            штук, а их общий размер - 50 МБ. Поддерживаемые форматы файлов: jpg,
            png, mp3, mp4.
          </div>
          <div className="modal__instruction background__blue-two">
            <ul className="modal__ul">
              <li className="modal__li">
                <span>
                  <img
                    src="src/assets/img/bx-check.svg"
                    width="24px"
                    height="24px"
                  />
                </span>{" "}
                Убедитесь, что на видео четко видны дата, время, номер счета и
                ФИО плательщика и получателя платежа, а также детали транзакции.
              </li>
              <li className="modal__li">
                <span>
                  <img
                    src="src/assets/img/bx-check.svg"
                    width="24px"
                    height="24px"
                  />
                </span>{" "}
                На видео должен быть отображен весь процесс входа в платежный
                аккаунт (не забудьте скрыть пароль) и сведения об операции.
              </li>
              <li className="modal__li">
                <span>
                  <img
                    src="src/assets/img/bx-check.svg"
                    width="24px"
                    height="24px"
                  />
                </span>{" "}
                Видео должно быть записано с использованием другого
                телефона/камеры. Запрещается редактировать и обрезать видео.
              </li>
              <li className="modal__li">
                <span>
                  <img src="src/assets/img/bx-x-1.svg" width="24px" height="24px" />
                </span>{" "}
                Если будет предоставлено поддельное доказательство, аккаунт
                будет заблокирован.
              </li>
            </ul>
          </div>
          <button className="modal__btn btn">Добавить +</button>
          <div className="modal__actions">
            <button className="modal__btn btn background__blue-two">
              Отмена
            </button>
            <button className="modal__btn btn">Подтвердить</button>
          </div>
        </div>
      </div>
      <div className="modal__wrap" id="ask" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Хочу задать вопрос{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__instruction background__blue-two">
            <h4 className="modal__h4 h4">Переговоры с контрагентом</h4>
            <div className="modal__div">
              Если возникла проблема с транзакцией, наиболее эффективное решение
              - связаться с контрагентом напрямую. Вы можете загрузить документ
              с подтверждением платежа и данными счета в окне чата. Это ускорит
              процесс принятия решения.
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn">В чат</button>
            </div>
          </div>
          <h6 className="modal__h6 h6">Апелляция</h6>
          <div className="modal__text">
            Ордер был исполнен, и ваши активы больше не охраняются
            эскроу-сервисом . Обратите внимание, что мы не можем напрямую
            отслеживать ваши активы.
          </div>
          <div className="p2p__buy-payment-type">
            <input
              id="ask1"
              defaultValue="ask1"
              className="p2p__buy-payment-input"
              type="radio"
              name="ask"
              defaultChecked
            />
            <label htmlFor="ask1" className="p2p__buy-payment-label">
              Ордер был исполнен, и ваши активы больше не охраняются
              эскроу-сервисом . Обратите внимание, что мы не можем напрямую
              отслеживать ваши активы.
            </label>
            <input
              id="ask2"
              defaultValue="ask2"
              className="p2p__buy-payment-input"
              type="radio"
              name="ask"
            />
            <label htmlFor="ask2" className="p2p__buy-payment-label">
              Другие причины
            </label>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn">Подать апелляцию</button>
          </div>
        </div>
      </div>
      <div className="modal__wrap" id="ask-reply" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3" style={{ alignItems: "flex-start" }}>
            Я произвел оплату, но мой ордер был отменен{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__text">
            Если вы произвели оплату, но ордер был отменен, мы не сможем
            автоматически отследить ваши активы. Обратитесь к продавцу и
            попросите его вернуть средства или воспользуйтесь одним из
            приведенных ниже решений.
          </div>
          <div className="modal__instruction background__blue-two">
            <h4 className="modal__h4 h4">Решение 1</h4>
            <div className="modal__div">
              Нажмите кнопку ниже, чтобы разместить еще один ордер на такую же
              сумму на странице профиля продавца. Вы должны отправить
              подтверждение платежа продавцу и предоставить всю необходимую
              информацию продавцу в чате. После чего обязательно нажмите на
              кнопку «Переведено, далее».
            </div>
            <div className="modal__actions actions__first">
              <button className="modal__btn btn">
                Разместить еще один ордер
              </button>
            </div>
            <h4 className="modal__h4 h4">Решение 2</h4>
            <div className="modal__div">
              Если у контрагента нет активных объявлений, нажмите кнопку
              «Апелляция» ниже.
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn">Аппеляция</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal__wrap" id="ask-order" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3" style={{ alignItems: "flex-start" }}>
            Я произвел оплату, но мой ордер был отменен
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__description">
            Вы уверены, что хотите разместить еще один ордер?
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn background__blue-two">
              Отмена
            </button>
            <button className="modal__btn btn">Подтвердить</button>
          </div>
        </div>
      </div>
      <div className="modal__wrap" id="complain" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3">Пожаловаться</h3>
          <div className="modal__warm">
            Злоупотребление жалобами приведет к блокировке аккаунта
          </div>
          <form>
            <h6 className="modal__h6 h6">Причина</h6>
            <div className="form__row">
              <input type="text" placeholder="Выберите причину" />
              <span className="mask">
                <img
                  src="src/assets/img/bx-chevron-left.svg"
                  width="20px"
                  height="20px"
                  className="img__invert1 img__rotare270"
                />
              </span>
              <div className="modal__select">
                <ul className="select__ul">
                  <li className="select__item">
                    Мошенничество с торговыми ордерами
                  </li>
                  <li className="select__item select__active">
                    Необоснованные условия в объявлении
                  </li>
                  <li className="select__item">
                    Оскорбительные слова или выражения
                  </li>
                  <li className="select__item">
                    Использование сторонних сервисов для оплаты
                  </li>
                  <li className="select__item">
                    Мошенничество с возвратом платежей
                  </li>
                  <li className="select__item">Замороженный банковский счет</li>
                  <li className="select__item">
                    Злоупотребление изменением цены объявления
                  </li>
                  <li className="select__item">Другая причина</li>
                </ul>
              </div>
            </div>
            <h6 className="modal__h6 h6">Ваш EMAil</h6>
            <div className="form__row">
              <input
                type="text"
                placeholder="Введите адрес электронной почты"
              />
            </div>
            <h6 className="modal__h6 h6">Описание</h6>
            <div className="form__row">
              <textarea
                placeholder="Предоставьте подробную информацию"
                defaultValue={""}
              />
            </div>
            <h6 className="modal__h6 h6">Загрузить доказательство</h6>
            <div className="modal__text">
              Общее количество файлов (скриншоты, аудиозаписи и видеофайлы с
              подтверждением оплаты, файлы журналов чатов) не должно превышать 5
              штук, а их общий размер - 50 МБ. Поддерживаемые форматы файлов:
              jpg, png, mp3, mp4.
            </div>
            <div className="actions__first">
              <button className="modal__btn btn">Добавить +</button>
            </div>
            <div className="modal__actions ">
              <button className="modal__btn btn background__blue-two">
                Отмена
              </button>
              <button className="modal__btn btn">Подтвердить</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="p2p__output-confim"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Подтвердить
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <form>
            <div className="p2p__buy-payment-type">
              <input
                id="confim1"
                defaultValue="confim1"
                className="p2p__buy-payment-input"
                type="radio"
                name="confim"
                defaultChecked
              />
              <label htmlFor="confim1" className="p2p__buy-payment-label">
                Я не получил платеж от покупателя
              </label>
              <input
                id="confim2"
                defaultValue="confim2"
                className="p2p__buy-payment-input"
                type="radio"
                name="confim"
              />
              <label htmlFor="confim2" className="p2p__buy-payment-label">
                Я получил(а) правильную сумму. Имя отправителя платежа совпадает
                с верифицированным на платформе именем покупателя, и я
                соглашаюсь перевести валюту покупателю.
              </label>
            </div>
            <div className="modal__instruction background__blue-two">
              <h4 className="modal__h4 h4">Советы</h4>
              <ol className="modal__ol">
                <li className="modal__li">
                  Недостаточно только проверить доказательство оплаты,
                  присланное покупателем. Обязательно войдите в свой аккаунт и
                  проверьте, был ли получен платеж.
                </li>
                <li className="modal__li">
                  Если платеж все еще обрабатывается, подождите, пока вы не
                  получите средства на свой аккаунт, и только потом переводите
                  криптовалюту.
                </li>
                <li className="modal__li">
                  Не принимайте платежи со счетов третьих лиц. Если вы получили
                  такой платеж, немедленно верните его в полном объеме, чтобы
                  избежать финансовых убытков, вызванных возвратом банковского
                  платежа после того, как вы перевели криптовалюту.
                </li>
              </ol>
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn background__grey color__white">
                Платеж получен
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="p2p__output-confim"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Проверка безопасности
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__text">
            Для защиты аккаунта выполните следующую проверку
          </div>
          <h6 className="modal__h6 h6">Код аутентификации</h6>
          <form>
            <div className="form__row">
              <input type="text" placeholder="Введите код" />
              <div className="modal__text modal__signature">
                Введите 6-ти значный код, который мы отправили вам на почту
              </div>
            </div>
            <h6 className="modal__h6 h6 modal__timer">
              Отправить повторно (59 сек.)
            </h6>
            <div className="modal__actions actions__first">
              <button className="modal__btn btn  background__none color__blue">
                Изменить способ подтверждения
              </button>
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn background__grey color__white">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap"
        id="p2p__output-confim"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3" style={{ alignItems: "flex-start" }}>
            Изменить способ подтверждения
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="modal__text">
            Для защиты аккаунта выполните следующую проверку
          </div>
          <h6 className="modal__h6 h6">Код аутентификации</h6>
          <form>
            <div className="form__row">
              <input type="text" placeholder="Способ подтверждения" />
              <span className="mask">
                <img
                  src="src/assets/img/bx-chevron-left.svg"
                  width="20px"
                  height="20px"
                  className="img__invert1 img__rotare270"
                />
              </span>
            </div>
            <div className="modal__actions">
              <button className="modal__btn btn">Выбрать</button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal__wrap" id="marketing" style={{ display: "none" }}>
        <div className="modal__content">
          <h1 className="modal__h1 h1" style={{ alignItems: "flex-start" }}>
            Пример 1
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h1>
          <div className="modal__text">Описание</div>
          <div className="modal__thumbnail main__thumbnail ">
            <picture>
              <source
                srcSet="src/assets/img/placeholder-2.webp"
                type="image/webp"
              />
              <source srcSet="src/assets/img/placeholder-2.jpg" type="image/jpeg" />
              <img
                src="src/assets/img/placeholder-2.jpg"
                width="100%"
                height="200px"
              />
            </picture>
          </div>
          <h2 className="modal__h2 h2">Код аутентификации</h2>
          <img src="src/assets/img/video.png" width="100%" />
        </div>
      </div>
      <div
        className="modal__wrap p2p__steps-modal"
        id="p2p__buy-create1"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Cоздать заявку{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="p2p__steps steps__two">
            <div className="p2p__steps-item p2p__steps-active">
              <div className="p2p__steps-number">1</div>
              <div className="p2p__steps-name">Тип объявления и цена</div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item">
              <div className="p2p__steps-number">2</div>
              <div className="p2p__steps-name">
                Задать общую сумму и способ оплаты
              </div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item">
              <div className="p2p__steps-number">3</div>
              <div className="p2p__steps-name">
                Условия сделки и автооветчик
              </div>
            </div>
          </div>
          <div className="modal__tabs tabs__wrap">
            <div className="tabs__item tabs__active">
              <a href="#" className="tabs__a">
                хочу купить
              </a>
            </div>
            <div className="tabs__item">
              <a href="#" className="tabs__a">
                хочу продать
              </a>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6">
                <h6 className="modal__h6 h6">Актив</h6>
                <div className="form__row">
                  <input type="text" placeholder="USDT" />
                  <span className="mask">
                    <img
                      src="src/assets/img/bx-chevron-left.svg"
                      width="20px"
                      height="20px"
                      className="img__invert1 img__rotare270"
                    />
                  </span>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h6 className="modal__h6 h6">Ваша цена</h6>
                    <h5 className="modal__h5 h5">78,32₽</h5>
                  </div>
                  <div className="col-md-7">
                    <h6 className="modal__h6 h6">
                      максимальная цена{" "}
                      <span>
                        <img
                          src="src/assets/img/bx-info-circle.svg"
                          width="20px"
                          height="20px"
                          className="img__invert1"
                        />
                      </span>
                    </h6>
                    <h5 className="modal__h5 h5">80,71₽</h5>
                  </div>
                </div>
                <h6 className="modal__h6 h6">Тип цены</h6>
                <div className="p2p__buy-payment-type p2p__buy-payment-type-inline">
                  <input
                    id="price-type1"
                    defaultValue="price-type1"
                    className="p2p__buy-payment-input"
                    type="radio"
                    name="confim"
                    defaultChecked
                  />
                  <label
                    htmlFor="price-type1"
                    className="p2p__buy-payment-label"
                  >
                    Фиксированная{" "}
                    <span>
                      <img
                        src="src/assets/img/bxs-info-circle.svg"
                        width="20px"
                        height="20px"
                      />
                      <div className="modal__faq-info">
                        Фиксированная - цена ордера будет зафиксирована
                      </div>
                    </span>
                  </label>
                  <input
                    id="price-type2"
                    defaultValue="price-type2"
                    className="p2p__buy-payment-input"
                    type="radio"
                    name="confim"
                  />
                  <label
                    htmlFor="price-type2"
                    className="p2p__buy-payment-label"
                  >
                    Плавающая.{" "}
                    <span>
                      <img
                        src="src/assets/img/bxs-info-circle.svg"
                        width="20px"
                        height="20px"
                      />{" "}
                      <div className="modal__faq-info">
                        Плавающая - цена будет изменяться и приравниваться
                        согласно среднему значению всех ордеров
                      </div>
                    </span>
                  </label>
                </div>
                <h6 className="modal__h6 h6">Фиксированная</h6>
                <div className="form__row price__row">
                  <span className="mask mask_left">
                    <img
                      src="src/assets/img/bx-minus-circle.svg"
                      width="20px"
                      height="20px"
                    />
                  </span>
                  <input type="text" placeholder="78,32" />
                  <span className="mask mask_right">
                    <img
                      src="src/assets/img/bx-plus-circle-1.svg"
                      width="20px"
                      height="20px"
                    />
                  </span>
                </div>
                <h6 className="modal__h6 h6">Плавающая</h6>
                <div className="price__wrap">
                  <div className="row">
                    <div className="col-md">
                      <div className="modal__text">От</div>
                      <div className="form__row price__row">
                        <span className="mask mask_left">
                          <img
                            src="src/assets/img/bx-minus-circle.svg"
                            width="20px"
                            height="20px"
                          />
                        </span>
                        <input type="text" placeholder="78,32" />
                        <span className="mask mask_right">
                          <img
                            src="src/assets/img/bx-plus-circle-1.svg"
                            width="20px"
                            height="20px"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="modal__text">До</div>
                      <div className="form__row price__row">
                        <span className="mask mask_left">
                          <img
                            src="src/assets/img/bx-minus-circle.svg"
                            width="20px"
                            height="20px"
                          />
                        </span>
                        <input type="text" placeholder="78,32" />
                        <span className="mask mask_right">
                          <img
                            src="src/assets/img/bx-plus-circle-1.svg"
                            width="20px"
                            height="20px"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="modal__faq">
                  <span>
                    <img
                      src="src/assets/img/bx-message-square.svg"
                      width="20px"
                      height="20px"
                    />
                  </span>{" "}
                  Поддержка
                </span>
              </div>
              <div className="col-md-6">
                <h6 className="modal__h6 h6">За фиат </h6>
                <div className="form__row">
                  <input type="text" placeholder="RUB" />
                  <span className="mask">
                    <img
                      src="src/assets/img/bx-chevron-left.svg"
                      width="20px"
                      height="20px"
                      className="img__invert1 img__rotare270"
                    />
                  </span>
                </div>
                <div className="modal__actions">
                  <button
                    className="modal__btn btn  popup__action"
                    data-popup-id="#p2p__buy-create2"
                  >
                    Далее
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal__wrap p2p__steps-modal"
        id="p2p__buy-create2"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Cоздать заявку{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="p2p__steps steps__two">
            <div className="p2p__steps-item p2p__steps-active">
              <div className="p2p__steps-number">1</div>
              <div className="p2p__steps-name">Тип объявления и цена</div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item p2p__steps-active">
              <div className="p2p__steps-number">2</div>
              <div className="p2p__steps-name">
                Задать общую сумму и способ оплаты
              </div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item">
              <div className="p2p__steps-number">3</div>
              <div className="p2p__steps-name">
                Условия сделки и автооветчик
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6 className="modal__h6 h6">Общая сумма</h6>
              <div className="form__row">
                <input type="text" placeholder={0} />
                <span className="mask">USDT</span>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="modal__h6 h6">лимиты</h6>
              <div className="form__row">
                <input type="text" placeholder={0} />
                <span className="mask">RUB</span>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="modal__h6 h6" />
              <div className="form__row">
                <input type="text" placeholder={0} />
                <span className="mask">RUB</span>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="modal__h6 h6">
                Способ оплаты <div> выберите до 5 вариантов</div>
              </h6>
              <div className="form__row">
                <input type="text" placeholder="Выберите способ оплаты" />
                <span className="mask">
                  <img
                    src="src/assets/img/bx-chevron-left.svg"
                    width="20px"
                    height="20px"
                    className="img__invert1 img__rotare270"
                  />
                </span>
              </div>
              <h6 className="modal__h6 h6">Выбранные</h6>
              <div className="p2p__list-pay">
                <span className="list-pay__item background__green-two">
                  Сбер{" "}
                  <span>
                    <img src="src/assets/img/bx-x.svg" width="12px" height="12px" />
                  </span>
                </span>
                <span className="list-pay__item background__gold">
                  Тинькофф{" "}
                  <span>
                    <img src="src/assets/img/bx-x.svg" width="12px" height="12px" />
                  </span>
                </span>
                <span className="list-pay__item background__red-two">
                  Альфабанк{" "}
                  <span>
                    <img src="src/assets/img/bx-x.svg" width="12px" height="12px" />
                  </span>
                </span>
              </div>
              <h6 className="modal__h6 h6">Срок размещения заявки</h6>
              <div className="form__row">
                <input type="text" placeholder="15 минут" />
                <span className="mask">
                  <img
                    src="src/assets/img/bx-chevron-left.svg"
                    width="20px"
                    height="20px"
                    className="img__invert1 img__rotare270"
                  />
                </span>
              </div>
              <span className="modal__faq">
                <span>
                  <img
                    src="src/assets/img/bx-message-square.svg"
                    width="20px"
                    height="20px"
                  />
                </span>{" "}
                Поддержка
              </span>
            </div>
            <div className="col-md-6">
              <h6 className="modal__h6 h6">Выбранные</h6>
              <div className="p2p__list-pay">
                <span className="list-pay__item background__green-two list-pay__item-active">
                  Сбер
                </span>
                <span className="list-pay__item background__gold list-pay__item-active">
                  Тинькофф
                </span>
                <span className="list-pay__item background__red-two list-pay__item-active">
                  Альфабанк
                </span>
                <span className="list-pay__item background__blue-five">
                  Росбанк
                </span>
                <span className="list-pay__item background__green-three ">
                  QIWI
                </span>
                <span className="list-pay__item background__grey-three">
                  Юmoney
                </span>
                <span className="list-pay__item background__gold-four">
                  Райффайзенбанк
                </span>
                <span className="list-pay__item background__blue-six">
                  Почтабанк
                </span>
              </div>
              <div className="modal__actions">
                <button
                  className="modal__btn btn background__blue-two  popup__action"
                  data-popup-id="#p2p__buy-create1"
                >
                  Назад
                </button>
                <button
                  className="modal__btn btn popup__action"
                  data-popup-id="#p2p__buy-create3"
                >
                  Далее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal__wrap p2p__steps-modal"
        id="p2p__buy-create3"
        style={{ display: "none" }}
      >
        <div className="modal__content">
          <h3 className="modal__h3 h3">
            Cоздать заявку{" "}
            <span>
              <img src="src/assets/img/bx-x.svg" width="24px" height="24px" />
            </span>
          </h3>
          <div className="p2p__steps steps__two">
            <div className="p2p__steps-item p2p__steps-active">
              <div className="p2p__steps-number">1</div>
              <div className="p2p__steps-name">Тип объявления и цена</div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item p2p__steps-active">
              <div className="p2p__steps-number">2</div>
              <div className="p2p__steps-name">
                Задать общую сумму и способ оплаты
              </div>
            </div>
            <div className="p2p__steps-line"></div>
            <div className="p2p__steps-item p2p__steps-active">
              <div className="p2p__steps-number">3</div>
              <div className="p2p__steps-name">
                Условия сделки и автооветчик
              </div>
            </div>
          </div>
          <div className="modal__warm">
            Обратите внимание, что согласно Правилам запрещено взимать
            дополнительные комиссии с контрагентов. Если вы указываете
            информацию о комиссии в примечаниях или автоответчике, мы можем
            навсегда заблокировать функцию размещения объявлений для вашего
            аккаунта
          </div>
          <form>
            <div className="row">
              <div className="col-md-12">
                <h6 className="modal__h6 h6">Условия сделки</h6>
                <div className="form__row">
                  <textarea
                    placeholder="Напишите что-нибудь"
                    defaultValue={""}
                  />
                  <span className="mask">0/1000</span>
                </div>
              </div>
              <div className="col-md-12">
                <h6 className="modal__h6 h6">автоответчик</h6>
                <div className="form__row">
                  <textarea
                    placeholder="После создания заказа контрагенту будет отправлен автоматический ответ"
                    defaultValue={""}
                  />
                  <span className="mask">0/1000</span>
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="modal__h6 h6">Выберите доступные регионы</h6>
                <div className="form__row">
                  <input type="text" placeholder="Все регионы" />
                  <span className="mask">
                    <img
                      src="src/assets/img/bx-chevron-left.svg"
                      width="20px"
                      height="20px"
                      className="img__invert1 img__rotare270"
                    />
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <h6 className="modal__h6 h6">требования к контрагенту</h6>
                <div className="modal__checked">
                  <div className="checkbox checkbox__checked" />
                  <label className="label">
                    С момента регистрации прошло{" "}
                    <span>
                      <img
                        src="src/assets/img/bxs-info-circle.svg"
                        width="20px"
                        height="20px"
                      />{" "}
                      <div className="modal__faq-info">
                        Укажите как давно должен быть зарегистрирован
                        пользователь, чтобы иметь возможность торговать с Вами
                      </div>
                    </span>
                  </label>
                  <div className="form__row form__qty">
                    <input type="text" placeholder={1} />
                    <span className="mask mask__top">
                      <img
                        src="src/assets/img/bx-chevron-left.svg"
                        width="9px"
                        height="9px"
                        className="img__invert1 img__rotare90"
                      />
                    </span>
                    <span className="mask mask__bottom">
                      <img
                        src="src/assets/img/bx-chevron-left.svg"
                        width="9px"
                        height="9px"
                        className="img__invert1 img__rotare270"
                      />
                    </span>
                  </div>
                  <span className="mask mask__float">месяцев</span>
                </div>
                <div className="modal__checked">
                  <div className="checkbox checkbox__checked" />
                  <label className="label">
                    Баланс более{" "}
                    <span>
                      <img
                        src="src/assets/img/bxs-info-circle.svg"
                        width="20px"
                        height="20px"
                      />{" "}
                      <div className="modal__faq-info">
                        Укажите минимальную сумму, которая должна находиться на
                        балансе агента, чтобы начать торговать с вами
                      </div>
                    </span>
                  </label>
                  <div className="form__row form__qty">
                    <input type="text" placeholder={1} />
                    <span className="mask mask__top">
                      <img
                        src="src/assets/img/bx-chevron-left.svg"
                        width="9px"
                        height="9px"
                        className="img__invert1 img__rotare90"
                      />
                    </span>
                    <span className="mask mask__bottom">
                      <img
                        src="src/assets/img/bx-chevron-left.svg"
                        width="9px"
                        height="9px"
                        className="img__invert1 img__rotare270"
                      />
                    </span>
                  </div>
                  <span className="mask mask__float">USDT</span>
                </div>
                <h4 className="modal__h4 h4 color__gold">
                  <span>
                    <img
                      src="src/assets/img/bx-info-circle.svg"
                      width="20px"
                      height="20px"
                    />
                  </span>{" "}
                  Я понимаю, что платформа не несет ответственности за колебания
                  цен, фальшивые деньги или проблемы с аппеляцией
                </h4>
              </div>
              <div className="col-md-6">
                <span className="modal__faq">
                  <span>
                    <img
                      src="src/assets/img/bx-message-square.svg"
                      width="20px"
                      height="20px"
                    />
                  </span>{" "}
                  Поддержка
                </span>
              </div>
              <div className="col-md-6">
                <div className="modal__actions">
                  <button
                    className="modal__btn btn background__blue-two popup__action"
                    data-popup-id="#p2p__buy-create2"
                  >
                    Назад
                  </button>
                  <button className="modal__btn btn popup__close">
                    Опубликовать
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal__wrap" id="cart-succes" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3">Подтвердите оплату</h3>
          <div className="modal__text" style={{ textAlign: "center" }}>
            <img src="src/assets/img/cart-succes.svg" width="33px" height="33px" />
            <h4 className="modal__h4 h4">Готово!</h4>
            <div className="modal__li">Оплата прошла успешно</div>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn">Закрыть</button>
          </div>
        </div>
      </div>
      <div className="modal__wrap" id="cart-error" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3">Подтвердите оплату</h3>
          <div className="modal__text" style={{ textAlign: "center" }}>
            <img src="src/assets/img/bxs-x-square.svg" width="33px" height="33px" />
            <h4 className="modal__h4 h4">Ошибка!</h4>
            <div className="modal__li">На счету недостаточно средств</div>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn">Закрыть</button>
          </div>
        </div>
      </div>
      <div className="modal__wrap" id="cart-wait" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3">Подтвердите оплату</h3>
          <div className="modal__text" style={{ textAlign: "center" }}>
            <img
              src="src/assets/img/bxs-time-five.svg"
              width="33px"
              height="33px"
            />
            <h4 className="modal__h4 h4">Заявка получена!</h4>
            <div className="modal__li">Ожидайте подтверждение оплаты</div>
          </div>
          <div className="modal__actions">
            <button className="modal__btn btn">Закрыть</button>
          </div>
        </div>
      </div>
      <div className="modal__wrap" id="cart-pay" style={{ display: "none" }}>
        <div className="modal__content">
          <h3 className="modal__h3 h3">Подтвердите оплату</h3>
          <div className="modal__warm">Инструкция</div>
          <div className="modal__instruction background__blue-two">
            <h6 className="modal__h6 h6">Сеть</h6>
            <h5 className="modal__h5 h5">TRC-20</h5>
            <h6 className="modal__h6 h6">Кошелек </h6>
            <h5 className="modal__h4 h4">
              0xdac17f958d2ee523a2206206994597c13d831ec7{" "}
              <img src="src/assets/img/copy.svg" width="15px" height="15px" />
            </h5>
            <h6 className="modal__h6 h6">Сумма</h6>
            <h5 className="modal__h5 h5">3500 USDT</h5>
          </div>
          <div className="modal__qr">
            <div className="modal__qr-pay background__blue-two">
              <div className="modal__text">Оплатить по QR-коду</div>
              <img
                src="src/assets/img/qr-android.svg"
                width="145px"
                height="145px"
              />
            </div>
          </div>
          <h4 className="modal__h4 h4 color__gold">
            <span>
              <img
                src="src/assets/img/bx-info-circle.svg"
                width="20px"
                height="20px"
              />
            </span>{" "}
            Инструкция
          </h4>
          <div className="modal__actions">
            <button className="modal__btn btn background__blue-two">
              Отменить заявку
            </button>
            <button className="modal__btn btn">Я оплатил</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

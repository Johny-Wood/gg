import React from "react";

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-header__rate">
                <ul className="rate__ul">
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">US 100</span>
                    <span className="rate__price rate__green">12689.3</span>
                    <span className="rate__percent rate__red">
                      -55.8 (-0.44%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">EUR/USD</span>
                    <span className="rate__price">1.07754</span>
                    <span className="rate__percent rate__green">
                      +0.00057 (+0.05%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">Bitcoin</span>
                    <span className="rate__price">28226.00</span>
                    <span className="rate__percent rate__green">
                      +34.00 (+0.003%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">S&amp;P 500</span>
                    <span className="rate__price">4000.07 </span>
                    <span className="rate__percent rate__red">
                      -6.6 (-1.1%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">US 100</span>
                    <span className="rate__price rate__green">12689.3</span>
                    <span className="rate__percent rate__red">
                      -55.8 (-0.44%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">EUR/USD</span>
                    <span className="rate__price">1.07754</span>
                    <span className="rate__percent rate__green">
                      +0.00057 (+0.05%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">Bitcoin</span>
                    <span className="rate__price">28226.00</span>
                    <span className="rate__percent rate__green">
                      +34.00 (+0.003%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">S&amp;P 500</span>
                    <span className="rate__price">4000.07 </span>
                    <span className="rate__percent rate__red">
                      -6.6 (-1.1%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">US 100</span>
                    <span className="rate__price rate__green">12689.3</span>
                    <span className="rate__percent rate__red">
                      -55.8 (-0.44%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">EUR/USD</span>
                    <span className="rate__price">1.07754</span>
                    <span className="rate__percent rate__green">
                      +0.00057 (+0.05%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">Bitcoin</span>
                    <span className="rate__price">28226.00</span>
                    <span className="rate__percent rate__green">
                      +34.00 (+0.003%)
                    </span>
                  </li>
                  <li className="rate__li">
                    <span className="rate__icon" />
                    <span className="rate__name">S&amp;P 500</span>
                    <span className="rate__price">4000.07 </span>
                    <span className="rate__percent rate__red">
                      -6.6 (-1.1%)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header__bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-header__logo">
                <a href="/GOLDEN">
                  <img src="/img/logo.svg" width="194px" height="46px" />
                </a>
              </div>
              <div className="main-header__account">
                <ul className="account__ul">
                  <li className="account__li">
                    <a href="/GOLDEN/cart.php" className="account__a">
                      <img
                        src="/img/cart.svg"
                        width="24px"
                        height="24px"
                        className="img__invert1"
                      />
                    </a>
                    <div className="account__div" style={{ display: "none" }}>
                      <h4 className="account__h4 h4 head__flex">
                        Корзина
                        <span>
                          <img src="/img/bx-x.svg" width="24px" height="24px" />
                        </span>
                      </h4>
                      <h4 className="account__h4 h4">Корзина пустая</h4>
                      <a
                        href="/GOLDEN/product.php"
                        className="account__btn btn"
                      >
                        Продукты
                      </a>
                    </div>
                    <div className="account__div2" style={{ display: "none" }}>
                      <h4 className="account__h4 h4 head__flex">
                        Корзина
                        <span>
                          <img src="/img/bx-x.svg" width="24px" height="24px" />
                        </span>
                      </h4>
                      <div className="cart__list">
                        <div className="cart__wrap">
                          <div className="cart__img">
                            <picture>
                              <source
                                srcSet="/img/placeholder-2.webp"
                                type="image/webp"
                              />
                              <source
                                srcSet="/img/placeholder-2.jpg"
                                type="image/jpeg"
                              />
                              <img
                                src="/img/placeholder-2.jpg"
                                width="65px"
                                height="65px"
                              />
                            </picture>
                          </div>
                          <div className="cart__name">
                            <h6 className="cart__h6 h6">Категория</h6>
                            <h4 className="cart__h4 h4">Продукт 1</h4>
                            <h4 className="cart__h5 h5">500$</h4>
                          </div>
                          <div className="cart__actions">
                            <span className="cart__remove">
                              <img
                                src="/img/bx-x-circle.svg"
                                width="20px"
                                height="20px"
                                className="img__invert1"
                              />
                            </span>
                            <div className="form__row price__row">
                              <span className="mask mask_left">
                                <img
                                  src="/img/bx-minus-circle.svg"
                                  width="15px"
                                  height="15px"
                                />
                              </span>
                              <input type="text" defaultValue={1} />
                              <span className="mask mask_right">
                                <img
                                  src="/img/bx-plus-circle-1.svg"
                                  width="15px"
                                  height="15px"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="cart__wrap">
                          <div className="cart__img">
                            <picture>
                              <source
                                srcSet="/img/placeholder-2.webp"
                                type="image/webp"
                              />
                              <source
                                srcSet="/img/placeholder-2.jpg"
                                type="image/jpeg"
                              />
                              <img
                                src="/img/placeholder-2.jpg"
                                width="65px"
                                height="65px"
                              />
                            </picture>
                          </div>
                          <div className="cart__name">
                            <h6 className="cart__h6 h6">Категория</h6>
                            <h4 className="cart__h4 h4">Продукт 1</h4>
                            <h4 className="cart__h5 h5">500$</h4>
                          </div>
                          <div className="cart__actions">
                            <span className="cart__remove">
                              <img
                                src="/img/bx-x-circle.svg"
                                width="20px"
                                height="20px"
                                className="img__invert1"
                              />
                            </span>
                            <div className="form__row price__row">
                              <span className="mask mask_left">
                                <img
                                  src="/img/bx-minus-circle.svg"
                                  width="15px"
                                  height="15px"
                                />
                              </span>
                              <input type="text" defaultValue={1} />
                              <span className="mask mask_right">
                                <img
                                  src="/img/bx-plus-circle-1.svg"
                                  width="15px"
                                  height="15px"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="cart__wrap">
                          <div className="cart__img">
                            <picture>
                              <source
                                srcSet="/img/placeholder-2.webp"
                                type="image/webp"
                              />
                              <source
                                srcSet="/img/placeholder-2.jpg"
                                type="image/jpeg"
                              />
                              <img
                                src="/img/placeholder-2.jpg"
                                width="65px"
                                height="65px"
                              />
                            </picture>
                          </div>
                          <div className="cart__name">
                            <h6 className="cart__h6 h6">Категория</h6>
                            <h4 className="cart__h4 h4">Продукт 1</h4>
                            <h4 className="cart__h5 h5">500$</h4>
                          </div>
                          <div className="cart__actions">
                            <span className="cart__remove">
                              <img
                                src="/img/bx-x-circle.svg"
                                width="20px"
                                height="20px"
                                className="img__invert1"
                              />
                            </span>
                            <div className="form__row price__row">
                              <span className="mask mask_left">
                                <img
                                  src="/img/bx-minus-circle.svg"
                                  width="15px"
                                  height="15px"
                                />
                              </span>
                              <input type="text" defaultValue={1} />
                              <span className="mask mask_right">
                                <img
                                  src="/img/bx-plus-circle-1.svg"
                                  width="15px"
                                  height="15px"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="/GOLDEN/cart.php" className="account__btn btn">
                        Оплатить
                      </a>
                    </div>
                  </li>
                  <li className="account__li">
                    <a href="#" className="account__a">
                      <img
                        src="/img/notification.svg"
                        width="24px"
                        height="24px"
                        className="img__invert1"
                      />
                    </a>
                    <div className="account__div" style={{ display: "none" }}>
                      <h4 className="account__h4 h4 head__flex">
                        Уведомления
                        <span>
                          <img src="/img/bx-x.svg" width="24px" height="24px" />
                        </span>
                      </h4>
                      <h4 className="account__h4 h4">Уведомлений нет</h4>
                    </div>
                  </li>
                  <li className="account__li">
                    <a href="#" className="account__a">
                      <img src="/img/language.svg" width="24px" height="24px" />
                    </a>
                  </li>
                  <li className="account__li">
                    <a href="#" className="account__a setting">
                      <img src="/img/telegram.svg" width="15px" height="15px" />{" "}
                      Настройки
                    </a>
                  </li>
                  <li className="account__li">
                    <a href="#" className="account__a avatar" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

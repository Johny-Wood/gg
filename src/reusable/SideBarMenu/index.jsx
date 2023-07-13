import React from "react";

const SideBarMenu = () => {
  return (
    <aside className="main__sidebar">
      <div className="sidebar__menu content__frame">
        <nav className="menu__nav">
          <ul className="menu__ul">
            <li className="menu__li">
              <a href="close" className="menu__a">
                <img
                  src="assets/img/menu__icon-1.svg"
                  width="24px"
                  height="24px"
                />
                Закрыть
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/account.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-2.svg"
                  width="24px"
                  height="24px"
                />
                Личный кабинет
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/product.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-3.svg"
                  width="24px"
                  height="24px"
                />
                Продукты / Лицензии
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/finance.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-4.svg"
                  width="24px"
                  height="24px"
                />
                Мои финансы
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/partners.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-5.svg"
                  width="24px"
                  height="24px"
                />
                Партнёру
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/p2p.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-7.svg"
                  width="24px"
                  height="24px"
                />
                P2P Платформа
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/events.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-8.svg"
                  width="24px"
                  height="24px"
                />
                Мероприятия
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/news.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-9.svg"
                  width="24px"
                  height="24px"
                />
                Новости
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/profile.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-10.svg"
                  width="24px"
                  height="24px"
                />
                Профиль
              </a>
            </li>
            <li className="menu__li">
              <a href="/GOLDEN/support.php" className="menu__a">
                <img
                  src="assets/img/menu__icon-11.svg"
                  width="24px"
                  height="24px"
                />
                Поддержка
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBarMenu;

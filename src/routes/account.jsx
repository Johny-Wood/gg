export default function Account() {
  return (
    <article className="main__wrap">
      <section className="main__content">
        <div className="content__qualification content__frame">
          <div className="row">
            <div className="col-md-9">
              <div className="qualification__info">
                <h6 className="qualification__h6 h6">Квалификация</h6>
                <h5 className="qualification__h5 h5">Нет</h5>
                <h6 className="qualification__h6 h6">Следующая квалификация</h6>
                <h5 className="qualification__h5 h5">Level 2</h5>
                <h6 className="qualification__h6 h6">Прогресс</h6>
                <h5 className="qualification__h5 h5">
                  0 из 200{" "}
                  <span className="h5__badge badge__grey">Личные продажи</span>
                </h5>
                <progress
                  value="00"
                  max="200"
                  className="qualification__progress qualification__progress-1"
                ></progress>
                <h5 className="qualification__h5 h5">
                  0 из 200{" "}
                  <span className="h5__badge badge__red">
                    Командные продажи
                  </span>
                </h5>
                <progress
                  value="0"
                  max="200"
                  className="qualification__progress qualification__progress-2"
                ></progress>
                <div className="row">
                  <div className="col-md-4">
                    <h6 className="qualification__h6 h6">Моя ставка</h6>
                    <h5 className="qualification__h5 h5">10%</h5>
                  </div>
                  <div className="col-md-4">
                    <h6 className="qualification__h6 h6">Матчинг бонус</h6>
                    <h5 className="qualification__h5 h5">10%</h5>
                  </div>
                  <div className="col-md-4">
                    <div className="qualification__flash">
                      <div className="flash__content">
                        <div className="flash__name">Бонус быстрый старт</div>
                        <div className="flash__day">Осталось 5 дней</div>
                      </div>
                      <div className="flash__price">10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="qualification_img">
                <picture>
                  <source
                    srcSet="src/assets/img/qualification.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="src/assets/img/qualification.png"
                    type="image/png"
                  />
                  <img
                    src="src/assets/img/qualification.png"
                    width="270x"
                    height="270px"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="content__statistics">
          <div className="row">
            <div className="col-md-4">
              <div className="statistics__info  content__frame">
                <div className="statistics__row">
                  <div className="statistics__label">Личных регистраций</div>
                  <div className="statistics__qty">0</div>
                </div>
                <div className="statistics__row">
                  <div className="statistics__label">Личные продажи</div>
                  <div className="statistics__qty">0$</div>
                </div>
                <div className="statistics__row">
                  <div className="statistics__label">Командные регистрации</div>
                  <div className="statistics__qty">0</div>
                </div>
                <div className="statistics__row">
                  <div className="statistics__label">Командные продажи</div>
                  <div className="statistics__qty">0$</div>
                </div>
                <div className="statistics__row statistics__line">
                  <div className="statistics__label">Линии</div>
                </div>
                <div className="statistics__row">
                  <div className="statistics__label">1 линия</div>
                  <div className="statistics__qty">0</div>
                </div>
                <div className="statistics__row">
                  <div className="statistics__label">2 линия</div>
                  <div className="statistics__qty">0</div>
                </div>
                <div className="statistics__row">
                  <div className="statistics__label">3 линия</div>
                  <div className="statistics__qty">0</div>
                </div>
                <div className="statistics__button">
                  <a href="">Показать все 45 линий</a>
                </div>
                <div className="statistics__footer">
                  <div></div>
                  <div className="faq__button">?</div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="statistics__chart  content__frame">
                <div className="chart__tabs tabs__wrap">
                  <div className="tabs__item tabs__active">
                    <a href="" className="tabs__a">
                      Личные регистрации
                    </a>
                  </div>
                  <div className="tabs__item">
                    <a href="" className="tabs__a">
                      личные продажи
                    </a>
                  </div>
                  <div className="tabs__item">
                    <a href="" className="tabs__a">
                      командные регистрации
                    </a>
                  </div>
                  <div className="tabs__item">
                    <a href="" className="tabs__a">
                      командные продажи
                    </a>
                  </div>
                </div>
                <div className="chart__content">
                  <img src="/src/assets/img/chart.png" />
                </div>
                <div className="chart__footer statistics__footer">
                  <div></div>
                  <div className="faq__button">?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

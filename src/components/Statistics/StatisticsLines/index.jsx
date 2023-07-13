import React from "react";

const StatisticsLines = () => {
  return (
    <>
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
    </>
  );
};

export default StatisticsLines;

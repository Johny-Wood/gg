import React from "react";

const StatisticsSales = () => {
  return (
    <>
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
    </>
  );
};

export default StatisticsSales;

import React from "react";
import ProgressBar from "../../../reusable/ProgressBar";
import QualificationFlash from "../QualificationFlash";

const QualificationInfo = () => {
  return (
    <div className="col-md-9">
      <div className="qualification__info">
        <h6 className="qualification__h6 h6">Квалификация</h6>
        <h5 className="qualification__h5 h5">Нет</h5>
        <h6 className="qualification__h6 h6">Следующая квалификация</h6>
        <h5 className="qualification__h5 h5">Level 2</h5>
        <h6 className="qualification__h6 h6">Прогресс</h6>

        <ProgressBar
          badgeTitle={"Личные продажи"}
          badgeColor={"grey"}
          value={50}
          max={200}
        />
        <ProgressBar
          badgeTitle={"Командные продажи"}
          badgeColor={"green"}
          value={10}
          max={200}
        />

        <div className="row">
          <div className="col-md-4">
            <h6 className="qualification__h6 h6">Моя ставка</h6>
            <h5 className="qualification__h5 h5">10%</h5>
          </div>
          <div className="col-md-4">
            <h6 className="qualification__h6 h6">Матчинг бонус</h6>
            <h5 className="qualification__h5 h5">10%</h5>
          </div>
          <QualificationFlash />
        </div>
      </div>
    </div>
  );
};

export default QualificationInfo;

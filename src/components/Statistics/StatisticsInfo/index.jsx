import React from "react";
import StatisticsSales from "../StatisticsSales";
import StatisticsLines from "../StatisticsLines";
import StatisticsFooter from "../StatisticsFooter";

const StatisticsInfo = () => {
  return (
    <div className="col-md-4">
      <div className="statistics__info content__frame">
        <StatisticsSales />
        <StatisticsLines />
        <StatisticsFooter />
      </div>
    </div>
  );
};

export default StatisticsInfo;

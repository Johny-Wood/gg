import React from "react";
import StatisticsInfo from "./StatisticsInfo";
import StatisticsChart from "./StatisticsChart";

const Statisics = () => {
  return (
    <div className="content__statistics">
      <div className="row">
        <StatisticsInfo />
        <StatisticsChart />
        {/*   <div className="col-md-8"> */}
        {/*     <div className="statistics__chart  content__frame"> */}
        {/*       <div className="chart__tabs tabs__wrap"> */}
        {/*         <div className="tabs__item tabs__active"> */}
        {/*           <a href="" className="tabs__a"> */}
        {/*             Личные регистрации */}
        {/*           </a> */}
        {/*         </div> */}
        {/*         <div className="tabs__item"> */}
        {/*           <a href="" className="tabs__a"> */}
        {/*             личные продажи */}
        {/*           </a> */}
        {/*         </div> */}
        {/*         <div className="tabs__item"> */}
        {/*           <a href="" className="tabs__a"> */}
        {/*             командные регистрации */}
        {/*           </a> */}
        {/*         </div> */}
        {/*         <div className="tabs__item"> */}
        {/*           <a href="" className="tabs__a"> */}
        {/*             командные продажи */}
        {/*           </a> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
      </div>
    </div>
  );
};

export default Statisics;

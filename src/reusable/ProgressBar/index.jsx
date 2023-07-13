import clsx from "clsx";
import React from "react";

const ProgressBar = ({ badgeTitle, badgeColor, value, max }) => {
  return (
    <div>
      <h5 className="qualification__h5 h5">
        {`${value} из ${max}`}

        <span
          className={clsx(
            "h5__badge",
            badgeColor === "grey" ? "badge__grey" : "badge__red"
          )}
        >
          {badgeTitle}
        </span>
      </h5>
      <progress
        value={value}
        max={max}
        className="qualification__progress qualification__progress-1"
      ></progress>
    </div>
  );
};

export default ProgressBar;

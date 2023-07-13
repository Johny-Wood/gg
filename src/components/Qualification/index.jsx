import React from "react";
import QualificationInfo from "./QualificationInfo";

const Qualification = () => {
  return (
    <div className="content__qualification content__frame">
      <div className="row">
        <QualificationInfo />
        <div className="col-md-3">
          <div className="qualification_img">
            <picture>
              <source
                srcSet="assets/img/qualification.webp"
                type="image/webp"
              />
              <source srcSet="assets/img/qualification.png" type="image/png" />
              <img
                src="assets/img/qualification.png"
                width="270x"
                height="270px"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;

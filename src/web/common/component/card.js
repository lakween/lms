import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();
  return (
    <>
      <div className="course-grid course-style-3">
        <div className="course-header">
          <div className="course-thumb">
            <img
              src="assets/images/course/img_01.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>

        <div className="course-content">
          <div className="course-meta d-flex justify-content-between mb-3">
            <span className="category">{props.category}</span>
            <span className="label">
              <i className="fas fa-signal me-2"></i>
              {props.level}
            </span>
          </div>
          <h3 className="course-title mb-3">
            <a
              onClick={() => {
                navigate("/cosdetails/" + props.id);
              }}
            >
              {props.name}
            </a>
          </h3>

          <div className="course-footer mt-4 d-flex align-items-center justify-content-between">
            <div className="course-price">$ {props.price}</div>
            <button
              className="btn btn-main-outline rounded-pill btn-sm"
              onClick={() => {
                navigate("/cosdetails/" + props.id);
              }}
            >
              Buy Now <i className="fa fa-long-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

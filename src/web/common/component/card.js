import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
    let navigate = useNavigate();
  return (
    <>
      <div class="course-grid course-style-3">
        <div class="course-header">
          <div class="course-thumb">
            <img
              src="assets/images/course/img_01.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>

        <div class="course-content">
          <div class="course-meta d-flex justify-content-between mb-3">
            <span class="category">{props.category}</span>
            <span class="label">
              <i class="fas fa-signal me-2"></i>
              {props.level}
            </span>
          </div>
          <h3 class="course-title mb-3">
            <a href={"/cosdetails/" + props.id}>{props.name}</a>
          </h3>

          <div className="d-flex justify-content-between">
            <div class="course-meta-info">
              <div class="d-flex align-items-center">
                <span class="students">
                  <i class="far fa-user-alt me-2"></i>51 Students
                </span>
              </div>
            </div>
            <div class="course-meta-info">
              <div class="d-flex align-items-center">
                <span class="students">
                  <i class="far fa-video me-2"></i>20+ Videos
                </span>
              </div>
            </div>
          </div>

          <div class="course-footer mt-4 d-flex align-items-center justify-content-between">
            <div class="course-price">$ {props.price}</div>
            <button
              class="btn btn-main-outline rounded-pill btn-sm"
              onClick={() => {
                navigate("/cosdetails/" + props.id);
              }}
            >
              Buy Now <i class="fa fa-long-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

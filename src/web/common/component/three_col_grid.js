import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

export default function SimpleThreeColumns() {
  return (
    <>
      <section class="course-wrapper section-padding ">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8">
              <div class="section-heading mb-70 text-center">
                <h2 class="font-lg">Popular Courses</h2>
                <p>Discover Your Perfect Program In Our Courses.</p>
              </div>
            </div>
          </div>

          <div class="row justify-content-lg-center">
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="course-grid bg-shadow tooltip-style">
                <div class="course-header">
                  <div class="course-thumb">
                    <img
                      src="assets/images/course/img_06.jpg"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="course-price">$300</div>
                  </div>
                </div>

                <div class="course-content">
                  <div class="rating mb-10">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>

                    <span>3.9 (30 reviews)</span>
                  </div>

                  <h3 class="course-title mb-20">
                    {" "}
                    <a href="#">
                      Data Competitive Strategy law & Organization{" "}
                    </a>{" "}
                  </h3>

                  <div class="course-footer mt-20 d-flex align-items-center justify-content-between ">
                    <span class="duration">
                      <i class="far fa-clock me-2"></i>6.5 hr
                    </span>
                    <span class="students">
                      <i class="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <span class="lessons">
                      <i class="far fa-play-circle me-2"></i>26 Lessons
                    </span>
                  </div>
                </div>

                <div class="course-hover-content">
                  <div class="price">$300</div>
                  <h3 class="course-title mb-20 mt-30">
                    {" "}
                    <a href="#">
                      Data Competitive Strategy law & Organization{" "}
                    </a>{" "}
                  </h3>
                  <div class="course-meta d-flex align-items-center mb-20">
                    <div class="author me-4">
                      <img
                        src="assets/images/course/course-2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                      <a href="#">Josephin</a>
                    </div>
                    <span class="lesson">
                      {" "}
                      <i class="far fa-file-alt"></i> 20 lessons
                    </span>
                  </div>
                  <p class="mb-20">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero, culpa. At voluptatem autem ipsam deleniti
                  </p>
                  <a href="#" class="btn btn-grey btn-sm rounded">
                    Join Now <i class="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="course-grid bg-shadow tooltip-style">
                <div class="course-header">
                  <div class="course-thumb">
                    <img
                      src="assets/images/course/img_02.jpg"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="course-price">$300</div>
                  </div>
                </div>

                <div class="course-content">
                  <div class="rating mb-10">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>

                    <span>3.9 (30 reviews)</span>
                  </div>

                  <h3 class="course-title mb-20">
                    {" "}
                    <a href="#">
                      Data Competitive Strategy law & Organization{" "}
                    </a>{" "}
                  </h3>
                  <div class="course-footer mt-20 d-flex align-items-center justify-content-between ">
                    <span class="duration">
                      <i class="far fa-clock me-2"></i>6.5 hr
                    </span>
                    <span class="students">
                      <i class="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <span class="lessons">
                      <i class="far fa-play-circle me-2"></i>26 Lessons
                    </span>
                  </div>
                </div>

                <div class="course-hover-content">
                  <div class="price">$300</div>
                  <h3 class="course-title mb-20 mt-30">
                    {" "}
                    <a href="#">
                      Data Competitive Strategy law & Organization{" "}
                    </a>{" "}
                  </h3>
                  <div class="course-meta d-flex align-items-center mb-20">
                    <div class="author me-4">
                      <img
                        src="assets/images/course/course-2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                      <a href="#">Josephin</a>
                    </div>
                    <span class="lesson">
                      {" "}
                      <i class="far fa-file-alt"></i> 20 lessons
                    </span>
                  </div>
                  <p class="mb-20">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero, culpa. At voluptatem autem ipsam deleniti
                  </p>
                  <a href="#" class="btn btn-grey btn-sm rounded">
                    Join Now <i class="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="course-grid bg-shadow tooltip-style">
                <div class="course-header">
                  <div class="course-thumb">
                    <img
                      src="assets/images/course/img_03.jpg"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="course-price">$300</div>
                  </div>
                </div>

                <div class="course-content">
                  <div class="rating mb-10">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>

                    <span>3.9 (30 reviews)</span>
                  </div>

                  <h3 class="course-title mb-20">
                    {" "}
                    <a href="#">
                      Data Competitive Strategy law & Organization{" "}
                    </a>{" "}
                  </h3>

                  <div class="course-footer mt-20 d-flex align-items-center justify-content-between ">
                    <span class="duration">
                      <i class="far fa-clock me-2"></i>6.5 hr
                    </span>
                    <span class="students">
                      <i class="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <span class="lessons">
                      <i class="far fa-play-circle me-2"></i>26 Lessons
                    </span>
                  </div>
                </div>

                <div class="course-hover-content">
                  <div class="price">$300</div>
                  <h3 class="course-title mb-20 mt-30">
                    {" "}
                    <a href="#">
                      Data Competitive Strategy law & Organization{" "}
                    </a>{" "}
                  </h3>
                  <div class="course-meta d-flex align-items-center mb-20">
                    <div class="author me-4">
                      <img
                        src="assets/images/course/course-2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                      <a href="#">Josephin</a>
                    </div>
                    <span class="lesson">
                      {" "}
                      <i class="far fa-file-alt"></i> 20 lessons
                    </span>
                  </div>
                  <p class="mb-20">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero, culpa. At voluptatem autem ipsam deleniti
                  </p>
                  <a href="#" class="btn btn-grey btn-sm rounded">
                    Join Now <i class="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features-3 pb-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8">
              <div class="section-heading mb-50 text-center">
                <h2 class="font-lg">Transform Your Life </h2>
                <p>Discover Your Perfect Program In Our Courses.</p>
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-3 col-md-6 col-xl-3 col-sm-6">
              <div class="feature-item feature-style-top hover-shadow rounded border-0">
                <div class="feature-icon">
                  <i class="flaticon-teacher"></i>
                </div>
                <div class="feature-text">
                  <h4>Expert Teacher</h4>
                  <p>
                    Develop skills for career of various majors including
                    computer
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xl-3 col-sm-6">
              <div class="feature-item feature-style-top hover-shadow rounded border-0">
                <div class="feature-icon">
                  <i class="flaticon-layer"></i>
                </div>
                <div class="feature-text">
                  <h4>Self Development</h4>
                  <p>
                    Develop skills for career of various majors including
                    computer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xl-3 col-sm-6">
              <div class="feature-item feature-style-top hover-shadow rounded border-0">
                <div class="feature-icon">
                  <i class="flaticon-video-camera"></i>
                </div>
                <div class="feature-text">
                  <h4>Remote Learning</h4>
                  <p>
                    Develop skills for career of various majors including
                    language
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xl-3 col-sm-6">
              <div class="feature-item feature-style-top hover-shadow rounded border-0">
                <div class="feature-icon">
                  <i class="flaticon-lifesaver"></i>
                </div>
                <div class="feature-text">
                  <h4>Life Time Support</h4>
                  <p>
                    Develop skills for career of various majors including
                    language{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

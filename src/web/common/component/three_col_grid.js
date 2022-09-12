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
      <section class="features-3 pt-5 pb-5">
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
                    computer, Good Solid Outstanding teachers panel
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
                  <h4>Activites</h4>
                  <p>
                    We organize several extra-curricular activities for our
                    students such as Trips, Sports events, Religious events,
                    Awurudu events as well as other fun events.
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

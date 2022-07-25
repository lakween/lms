import {
  chakra,
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { IoTrophySharp, IoStar, IoShieldCheckmark } from "react-icons/io5";

const Features = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function AboutFeature() {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <>
      <div class="pt-4 pb-24 mt-4">
        <div class="container max-w-screen-xl">
          <div class="row justify-content-center text-center mb-20">
            <div class="col-lg-7">
              {/* <h1 class="h4 mb-3 text-uppercase text-primary">Features</h1> */}
              <Heading>About Us</Heading>
              <p class="lead">
                SILEC Sri Lanka Language Academy is a language school which
                register under the W201636 in Democratic Socialist Republic of
                Sri Lanka.
              </p>
            </div>
          </div>
          <div class="row g-10 align-items-center justify-content-between">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <img
                alt=""
                src="././assets/about_us/IMG_02.jpg"
                class="img-fluid rounded"
              />
            </div>
            <div class="col-lg-6">
              <h4 class="h4 mb-2">
                Plan your <strong>future</strong> with us
              </h4>
              <p class="mb-16 text-muted">
                We conduct Code faster and better with Quick which has powerful
                and lightning fast build tools. You get everything you need to
                turn your ideas into incredible products.
              </p>
              <div class="d-flex mb-10">
                <div class="ps-5 pt-4">
                  <Features
                    icon={
                      <Icon
                        as={IoTrophySharp}
                        color={"yellow.500"}
                        w={5}
                        h={5}
                      />
                    }
                    iconBg={useColorModeValue("yellow.100", "yellow.900")}
                    text={"English language classes"}
                  />
                  <p class="text-muted">
                    Intuitive markup, powerful and lightning fast build tools,
                    you have everything you need to turn your ideas into
                    incredible products.
                  </p>
                </div>
              </div>
              <div class="d-flex mb-10">
                <div class="mt-n2">
                  <span class="icon icon-lg text-primary svg-current"></span>
                </div>
                <div class="pt-4 ps-5">
                  <Features
                    icon={<Icon as={IoStar} color={"green.500"} w={5} h={5} />}
                    iconBg={useColorModeValue("green.100", "green.900")}
                    text={"English literature classes"}
                  />
                  <p class="text-muted">
                    Intuitive markup, powerful and lightning fast build tools,
                    you have everything you need to turn your ideas into
                    incredible products.
                  </p>
                </div>
              </div>
              <div class="d-flex mb-10">
                <div class="mt-n2">
                  <span class="icon icon-lg text-primary svg-current"></span>
                </div>
                <div class="pt-4 ps-5">
                  <Features
                    icon={
                      <Icon
                        as={IoShieldCheckmark}
                        color={"green.500"}
                        w={5}
                        h={5}
                      />
                    }
                    iconBg={useColorModeValue("green.100", "green.900")}
                    text={"Spoken English classes"}
                  />
                  <p class="text-muted">
                    Intuitive markup, powerful and lightning fast build tools,
                    you have everything you need to turn your ideas into
                    incredible products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-24">
        <div class="container max-w-screen-xl">
          <div class="section-step-lg">
            <div class="row justify-content-between align-items-center">
              <div class="col-lg-6">
                <div class="rounded shadow-4 bg-surface-primary border p-2 me-lg-5 position-relative">
                  <img
                    alt="..."
                    src="././assets/about_us/IMG_01.jpg"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <div class="col-lg-5 mb-2 mb-lg-0">
                <h5 class="h5 mb-2 text-uppercase text-primary">
                  We offer below courses for students through identifying their
                  language requirements
                </h5>
                <ul class="list-unstyled mt-4 mb-2">
                  <div class="col-lg-6">
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="icon icon-xs icon-shape bg-success text-white text-base rounded-circle me-3">
                            <i class="bi bi-check"></i>
                          </div>
                        </div>
                        <div>
                          <span class="h6 font-semibold mb-0">YLE</span>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="icon icon-xs icon-shape bg-success text-white text-base rounded-circle me-3">
                            <i class="bi bi-check"></i>
                          </div>
                        </div>
                        <div>
                          <span class="h6 font-semibold mb-0">KET</span>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="icon icon-xs icon-shape bg-success text-white text-base rounded-circle me-3">
                            <i class="bi bi-check"></i>
                          </div>
                        </div>
                        <div>
                          <span class="h6 font-semibold mb-0">PET</span>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div class="col-lg-6">
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="icon icon-xs icon-shape bg-success text-white text-base rounded-circle me-3">
                            <i class="bi bi-check"></i>
                          </div>
                        </div>
                        <div>
                          <span class="h6 font-semibold mb-0">FCE</span>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="icon icon-xs icon-shape bg-success text-white text-base rounded-circle me-3">
                            <i class="bi bi-check"></i>
                          </div>
                        </div>
                        <div>
                          <span class="h6 font-semibold mb-0">TKT</span>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
                <p class="lead text-muted">
                  Also we obtain Cambridge English Certificates for these
                  courses. We have been working with the English language world
                  since number of years and we have well-experienced academic
                  staff. Plan your future with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-2 pb-5">
        <div class="container max-w-screen-xl">
          <div class="row mb-5">
            <div class="col-lg-8 col-md-10">
              <h2 class="h2 pb-2 text-uppercase text-dark">Who We Are ?</h2>
              <p class="lead text-muted mb-4">
                With this premium component library you will start building
                modern user interfaces faster and more consistent than ever
                before.
              </p>
            </div>
          </div>
          <div class="row g-7">
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card border-0 bg-surface-secondary">
                <div class="card-body p-10 text-center">
                  <div class="img-fluid">
                    <img
                      src="././assets/about_us/IMG_04.jpg"
                      alt="..."
                    />
                  </div>

                  <span class="static-rating d-block my-4">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star text-warning"></i>
                  </span>

                  <h5 class="h6 mb-1">Mr. Kesara Nawarathne</h5>
                  <p class="text-muted text-sm mb-0">Director</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card border-0 bg-surface-secondary">
                <div class="card-body p-10 text-center">
                  <div class="img-fluid">
                    <img
                      src="././assets/about_us/IMG_03.jpg"
                      alt="..."
                    />
                  </div>

                  <span class="static-rating d-block my-4">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star text-warning"></i>
                  </span>

                  <h5 class="h6 mb-1">4.95 out of 5 stars</h5>
                  <p class="text-muted text-sm mb-0">from 23 reviews</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card border-0 bg-surface-secondary">
                <div class="card-body p-10 text-center">
                  <div class="img-fluid">
                    <img
                      src="././assets/about_us/IMG_05.jpg"
                      alt="..."
                    />
                  </div>

                  <span class="static-rating d-block my-4">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star text-warning"></i>
                  </span>

                  <h5 class="h6 mb-1">4.95 out of 5 stars</h5>
                  <p class="text-muted text-sm mb-0">from 23 reviews</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card border-0 bg-surface-secondary">
                <div class="card-body p-10 text-center">
                  <div class="img-fluid">
                    <img
                      src="././assets/about_us/IMG_01.jpg"
                      alt="..."
                    />
                  </div>

                  <span class="static-rating d-block my-4">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star text-warning"></i>
                  </span>

                  <h5 class="h6 mb-1">4.95 out of 5 stars</h5>
                  <p class="text-muted text-sm mb-0">from 23 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

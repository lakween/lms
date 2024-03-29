import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import DisplayLine from "../../common/display-line/display-line.component";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import {
  getUserLocalAccount,
  updateAuthProfile,
  updateProfilePhoto,
  updateStudentProfile,
} from "./actions/student-profile.action";
import { getAuth } from "firebase/auth";

const StudentProfile = () => {
  const { currentUser } = getAuth();
  const [photo, setPhoto] = useState("");
  const [model, setModel] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getLocalProfileData();
  }, [currentUser]);

  const getLocalProfileData = async () => {
    let userData = await getUserLocalAccount(currentUser?.uid);
    setModel({ ...currentUser, ...userData });
  };

  const onUpdateAuthHandler = async (path, form) => {
    setModel({ ...model, ...currentUser, ...form });
    await updateAuthProfile(currentUser, form);
  };

  const onChangeProfilePicture = async (e) => {
    if (e.target.files[0]) {
      await updateProfilePhoto(e.target.files[0], currentUser);
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onUpdateHandler = async (path, form) => {
    setModel({ ...model, ...form });
    await updateStudentProfile(currentUser.uid, form);
  };

  return (
    <>
      <section style={{marginBottom: "15rem"}}>
        <Row>
          <Col xs="12" md="6">
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card className="mb-2">
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                Profile
              </CardTitle>
              <CardBody className="text=center">
                <Col xs="12" md="6" className="offset-4 mb-4">
                  <Avatar
                    size="2xl"
                    src={
                      photo ||
                      model?.photoURL ||
                      "https://www.pngitem.com/middle/mmhwxw_transparent-user-png-default-user-image-png-png"
                    }
                    alignContent="center"
                    justifyContent={"center"}
                  />
                </Col>
                <Box
                  borderWidth="1px"
                  mb={4}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                  padding={5}
                  bg={useColorModeValue("white", "gray.900")}
                  width={"100%"}
                  borderStyle={"solid"}
                >
                  <Flex gap={5} direction={"row"} align={"center"}>
                    <input
                      type={"file"}
                      accept="image/png,image/jpeg"
                      onChange={onChangeProfilePicture}
                    />
                  </Flex>
                    <DisplayLine
                        modelPath={"fullName"}
                        name={"fullName"}
                        onUpdate={onUpdateHandler}
                        value={model?.fullName ? model?.fullName : "Unknown"}
                    />
                </Box>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card className="mb-2">
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                Profile Details
              </CardTitle>
              <CardBody className="text=center">
                <div className="row mt-2 mb-2">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <DisplayLine
                      modelPath={"fullName"}
                      name={"fullName"}
                      onUpdate={onUpdateHandler}
                      value={model?.fullName ? model?.fullName : "Unknown"}
                    />
                  </div>
                </div>
                <hr className="divider-horizontal" />
                <div className="row mt-2 mb-2">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {model?.email}
                      </p>
                  </div>
                </div>
                <hr className="divider-horizontal" />
                <div className="row mt-2 mb-2">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <DisplayLine
                      modelPath={"mobile_number"}
                      name={"mobile_number"}
                      onUpdate={onUpdateHandler}
                      value={
                        model?.mobile_number ? model?.mobile_number : "--------"
                      }
                    />
                  </div>
                </div>
                <hr className="divider-horizontal" />
                <div className="row mt-2 mb-2">
                  <div className="col-sm-3">
                    <p className="mb-0">Birthday</p>
                  </div>
                  <div className="col-sm-9">
                    <DisplayLine
                      modelPath={"birthday"}
                      name={"birthday"}
                      onUpdate={onUpdateHandler}
                      value={model?.birthday ? model?.birthday : "00-00-0000"}
                    />
                  </div>
                </div>
                <hr className="divider-horizontal" />
                <div className="row mt-2 mb-2">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      <DisplayLine
                          modelPath={"Address"}
                          name={"Address"}
                          onUpdate={onUpdateHandler}
                          value={model?.Address ? model?.Address : ""}/>
                    </p>
                  </div>
                </div>
                <hr className="divider-horizontal" />
                <div className="row mt-2 mb-2">
                  <div className="col-sm-3">
                    <p className="mb-0">School</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      <DisplayLine
                          modelPath={"School"}
                          name={"School"}
                          onUpdate={onUpdateHandler}
                          value={model?.School ? model?.School : ""}/>
                    </p>
                  </div>
                </div>
                <hr className="divider-horizontal" />
                <div className="row mt-2 mb-2">
                  <div className="col-sm-3">
                    <p className="mb-0">Student ID</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {model?.uid}
                    </p>
                  </div>
                </div>
                <hr className="divider-horizontal" />
                {/*<div className="row mt-2 mb-2">*/}
                {/*  <div className="col-sm-3">*/}
                {/*    <p className="mb-0">Stdundet RAQ</p>*/}
                {/*  </div>*/}
                {/*  <div className="col-sm-9">*/}
                {/*    <p className="text-muted mb-0">*/}
                {/*      Bay Area, San Francisco, CA*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default StudentProfile;

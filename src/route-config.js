import { useRoutes } from "react-router-dom";
import Layout from "./common/layout/layout";
import HomePage from "./user/home/home.page";
import WebHome from "./web/home.page";
import About from "./web/about.page";
import Contact from "./web/contact.page";
import Courses from "./web/courses.page";
import Class from "./web/class.page";
import CourseDeatils from "./web/courses_detail.page";
import ClassDetails from "./web/class_details.page";
import SignUp from "./user/sign-up/sign-up.page";
import Login from "./common/loging/loging.page";
import useUserLoginInfo from "./hooks/useUserLoginInfo";
import StudentProfile from "./user/student-profile/student-profile";
import PageLoadingIndicator from "./common/page-loading-indicator/page-loading-indicator";
import PendingProfilePage from "./user/pending-profile/pending-profile.page";
// admin routes imports
import AdminHomePage from "./admin/home/home.page";
import Material from "./admin/Material/material.page";
import MaterialAdd from "./admin/Material/material.add.page";
import ListUsersPage from "./admin/Users/list-users/list-users.page";
import AddNewCourse from "./admin/Course/add-course/add-courses.page";
import PaymentCancel from "./web/common/payment/cancel.page";
import PaymentSuccess from "./web/common/payment/success.page";
import ClassPaymentSuccess from "./web/common/payment/class.success.page";
import Payment from "./admin/Payments/payment.page";
import SpeechtoText from "./web/new.page";
import MyCourse from "./user/my-course/my-course.page";
import CourseOverview from "./user/my-course/overview.page";

export let RouterConfig = () => {
  const [userType, status, user] = useUserLoginInfo();

  const getRoutesByUser = () => {
    switch (true) {
      case status == "pending":
        return unknownRoute;
      case userType == "student":
        return studentRoute;
      case userType == "admin":
        return adminRoute;
      default:
        return [
          {
            path: "/",
            element: <WebHome />,
          },
        ];
    }
  };

  let studentRoute = [
    {
      path: "/home",
      element: <Layout />,
      children: [{ index: true, element: <HomePage /> }],
    },
    {
      path: "/student-dashbord",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { index: true, path: "overview/:id", element: <CourseOverview /> },
      ],
    },
    {
      path: "/profile",
      element: <Layout />,
      children: [{ index: true, element: <StudentProfile /> }],
    },
    {
      path: "/my-courses",
      element: <Layout />,
      children: [
        { index: true, element: <MyCourse /> },
        { index: true, path: "overview/:id", element: <CourseOverview /> },
      ],
    },
    {
      path: "profile",
      element: <Layout />,
      children: [{ index: true, element: <StudentProfile /> }],
    },
  ];

  let adminRoute = [
    {
      path: "home",
      element: <Layout />,
      children: [{ index: true, element: <AdminHomePage /> }],
    },
    {
      path: "users",
      element: <Layout />,
      children: [{ index: true, path: "list", element: <ListUsersPage /> }],
    },
    {
      path: "courses-manage",
      element: <Layout />,
      children: [{ index: true, path: "add", element: <AddNewCourse /> }],
    },
    {
      path: "payment",
      element: <Layout />,
      children: [{ index: true, element: <Payment /> }],
    },
    {
      path: "material",
      element: <Layout />,
      children: [
        { index: true, element: <Material /> },
        { index: true, path: "add", element: <MaterialAdd /> },
      ],
    },
  ];
  let unknownRoute = [
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <PendingProfilePage /> }],
    },
    {
      path: "profile",
      element: <Layout />,
      children: [{ index: true, element: <StudentProfile /> }],
    },
  ];

  let routes = [
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "unknownProfile",
      element: <Layout />,
      children: [{ index: true, element: <PendingProfilePage /> }],
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "courses",
      element: <Courses />,
    },
    {
      path: "class",
      element: <Class />,
    },
    {
      path: "cosdetails/:id",
      element: <CourseDeatils />,
    },
    {
      path: "class-content/:id",
      element: <ClassDetails />,
    },
    {
      path: "/",
      element: <WebHome />,
    },
    {
      path: "/index",
      element: <WebHome />,
    },
    {
      path: "/payment/cancel",
      element: <PaymentCancel />,
    },
    {
      path: "/payment/success/:id",
      element: <PaymentSuccess />,
    },
    {
      path: "/class_payment/success/:id",
      element: <ClassPaymentSuccess />,
    },
    {
      path: "/ai-voice",
      element: <SpeechtoText />,
    },

    ...getRoutesByUser(),
    // ...(userType == "student" ? studentRoute : userType == "admin" ? adminRoute : [])
  ];

  let element = useRoutes(routes);
  return element ? element : <PageLoadingIndicator />;
};

import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";

const authConfigs = [
  /**
   * auth
   */
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
];

export default authConfigs;

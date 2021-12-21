import {
  aboutConfigs,
  authConfigs,
  mainConfigs,
  newcaseConfigs,
} from "../configs";

export const REDIRECT_PATH = "/";

const routeConfigs = [
  ...mainConfigs,
  ...authConfigs,
  ...aboutConfigs,
  ...newcaseConfigs,

  {
    exact: true,
    path: "/",
  },
];

export default routeConfigs;

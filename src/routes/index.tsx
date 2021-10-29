import constants from "src/constants";

const { HOME, ABOUT, CONTACT, PROFILE, REGISTER, LOGIN } = constants.routes;

interface IRoute {
  path: string;
  label: string;
}

export const routes: IRoute[] = [
  {
    path: HOME,
    label: "Home",
  },
  {
    path: ABOUT,
    label: "About",
  },
  {
    path: CONTACT,
    label: "Contact",
  },
  {
    path: PROFILE,
    label: "Profile",
  },
  {
    path: REGISTER,
    label: "Register",
  },
  {
    path: LOGIN,
    label: "Login",
  },
];

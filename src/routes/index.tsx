import constants from "src/constants";

const { HOME, MEMBERS } = constants.routes;

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
    path: MEMBERS,
    label: "Members",
  },
];

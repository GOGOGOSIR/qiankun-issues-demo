import { AppConfig } from "./type";

export const appConfig: AppConfig[] = [
  {
    name: "micro-app-data",
    entry: "http://localhost:9000/micro-app-data",
    container: "#micro-app-container",
    prefix: "/micro-app-data",
  },
  {
    name: "micro-app-view",
    entry: "http://localhost:9001/micro-app-view",
    container: "#micro-app-container",
    prefix: "/micro-app-view",
  },
];

export const genActiveRule = (
  routerPrefix: string
): ((location: Location) => boolean) => {
  return (location): boolean => location.pathname.startsWith(routerPrefix);
};

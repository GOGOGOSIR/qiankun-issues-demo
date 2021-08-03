import {
  registerMicroApps,
  start,
  FrameworkConfiguration,
  FrameworkLifeCycles,
} from "qiankun";
import { appConfig, genActiveRule } from "@/app-config/index";
import { RegistrableApp } from "@/app-config/type";

export default function registerMicroAppsByQiankun(
  opt?: FrameworkConfiguration,
  lifecycle?: FrameworkLifeCycles<Record<string, any>>
): void {
  const apps: RegistrableApp[] = appConfig.map((app) => {
    const { prefix, ...others } = app;
    return {
      ...others,
      props: {
        appPrefix: app.prefix,
      },
      activeRule: genActiveRule(prefix),
      // loader: (loading: boolean) => {
      //   console.log(loading, prefix)
      // },
    };
  });
  lifecycle ? registerMicroApps(apps, lifecycle) : registerMicroApps(apps);

  opt ? start(opt) : start();
}

export interface AppConfigProps {
  [key: string]: any;
}

export interface RegistrableApp {
  name: string;
  entry: string;
  container: string | HTMLElement;
  activeRule:
    | string
    | ((location: Location) => boolean)
    | Array<string | ((location: Location) => boolean)>;
  props: AppConfigProps;
  loader?: (loading: boolean) => void;
}

export type RegistrableAppConfig = Omit<
  RegistrableApp,
  "activeRule" | "props" | "loader"
>;

export interface AppConfig extends RegistrableAppConfig {
  prefix: string;
}

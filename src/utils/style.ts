import { setup } from "twind";
import twindConfig from "../twind.config";

export * from "twind/css";
export { default as cx } from "clsx";
export const initTheme = () => setup(twindConfig);

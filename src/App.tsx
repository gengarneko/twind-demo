import React, { FC } from "react";
import { setup, tw } from "twind/css";
import twindConfig from "./twind.config";
import { Comp } from "./Comp";

setup(twindConfig);

export const App: FC = () => (
  <div className={tw`w-full h-screen flex items-center justify-center`}>
    <Comp />
  </div>
);

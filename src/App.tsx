import React, { FC } from "react";
import twindConfig from "./twind.config";
import { setup, tw } from "twind/css";

setup(twindConfig);

export const App: FC = () => {
  return (
    <div
      className={tw`text-primary border rounded ${"customClassName"}`}
    >
      twind demo
    </div>
  );
};

import React, { FC } from "react";
import { cx, tw } from "@utils/style";
import { initTwind } from "../twind.config";

initTwind();

// * --------------------------- comp

export const App: FC = () => {
  return (
    <div
      className={cx(
        tw`text-xs text-primary m-2`,
        "customClass"
      )}
    >
      123123
    </div>
  );
};

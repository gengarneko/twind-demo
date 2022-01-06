import React, { FC } from "react";
import { css, cx, tw } from "@utils/style";

// * --------------------------- comp

export const App: FC = () => (
  <div className={cx(tw`text-red-500 ${aa}`, "customClass")}>123123</div>
);

// * --------------------------- style

const aa = css`
  color: red;
`;

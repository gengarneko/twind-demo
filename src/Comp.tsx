import React, { FC } from "react";
import { css, tw } from "twind/css";
import { style } from "twind/style";

const customClass = style(
  div({
    tw: `p-10`,
  })
);

// * --------------------------- comp

export const Comp: FC = () => (
  <div className={tw`border text-center text(center 3xl primary) w-[500px] ${"customClassName"} ${customStyle}`}>
    twind demo
  </div>
);

// * --------------------------- style

const customStyle = css`
  width: 110px;
`;

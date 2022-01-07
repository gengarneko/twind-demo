import React, { FC } from "react";
import { css, tw } from "twind/css";

// * --------------------------- comp

export const Comp: FC = () => {
  return (
    <div className={tw`flex ${customStyle}`}>
      ... ... ...
    </div>
  );
};

// * --------------------------- style

const customStyle = css`
  width: 110px;
`;

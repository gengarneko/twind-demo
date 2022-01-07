import React, { FC } from "react";
import { tw } from "twind/css";

// * --------------------------- comp

export const Sizing: FC = () => (
  <>
    {/* Width */}
    <div className={tw`w-full`} />
    {/* Min-Width */}
    <div className={tw`min-w-full`} />
    {/* Height */}
    <div className={tw`h-screen`} />
    {/* Max-Height */}
    <div className={tw`max-h-full`} />
  </>
);

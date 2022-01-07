import React, { FC } from "react";
import { tw } from "twind/css";

// * --------------------------- comp

export const Flex: FC = () => (
  <>
    {/* Padding */}
    <div className={tw`p-0 pr-1`} />
    {/* Margin */}
    <div className={tw`m-0 ml-1`} />
    {/* Flex */}
    <div className={tw`flex-1`} />
    {/* Flex Grow */}
    <img className={tw`flex-grow-1`} alt="" />
    {/* Flex Shrink */}
    <div className={tw`flex-shrink-0`} />
    {/* Justify Content */}
    <div className={tw`justify-between`} />
    {/* Align Items */}
    <div className={tw`items-center`} />
  </>
);

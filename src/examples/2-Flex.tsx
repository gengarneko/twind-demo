import React, { FC } from "react";
import { tw } from "twind/css";

// * --------------------------- comp

export const Flex: FC = () => (
  <>
    {/* Flex Direction */}
    <div className={tw`flex-col`} />
    {/* Flex Wrap */}
    <div className={tw`flex-wrap`} />
    {/* Flex */}
    <div className={tw`flex-1`} />
    {/* Flex Grow */}
    <img className={tw`flex-grow-1`} alt="" />
    {/* Flex Shrink */}
    <div className={tw`flex-shrink-0`} />
    {/* Justify Content */}
    <div className={tw`justify-between`} />
    {/* position */}
    <div className={tw`absolute`} />
    {/* top / right / bottom / left */}
    <div className={tw`inset-0`} />
    {/* visibility */}
    <div className={tw`invisible`} />
    {/* z-index */}
    <div className={tw`z-10`} />
  </>
);

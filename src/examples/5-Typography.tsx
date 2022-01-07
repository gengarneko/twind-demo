import React, { FC } from "react";
import { tw } from "twind/css";

// * --------------------------- comp

export const Typograhpy: FC = () => (
  <>
    {/* Font Family */}
    <div className={tw`font-serif`} />
    {/* Font Size */}
    <div className={tw`text-base`} />
    {/* Font Weight */}
    <div className={tw`font-medium`} />
    {/* Line Height */}
    <div className={tw`leading-normal`} />
    {/* Text Alignment */}
    <div className={tw`text-center`} />
    {/* Text Color */}
    <div className={tw`text-primary`} />
    {/* Whitespace */}
    <div className={tw`whitespace-pre`} />
  </>
);

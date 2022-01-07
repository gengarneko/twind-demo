import React, { FC } from "react";
import { tw } from "twind/css";

// * --------------------------- comp

export const Layout: FC = () => (
  <>
    {/* container: 设置 max-width */}
    <div className={tw`container`} />
    {/* box-sizing */}
    <div className={tw`box-border`} />
    {/* display */}
    <div className={tw`flex`} />
    {/* float */}
    <div className={tw`float-right`} />
    {/* Object Fit: 图片填充规则 */}
    <img className={tw`object-cover`} alt="" />
    {/* overflow */}
    <div className={tw`overflow-scroll`} />
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

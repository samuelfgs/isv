// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinusIcon(props: MinusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "plasmic-default__svg plasmic_default__all plasmic_default__svg Test__svg___7Yd0G"
      )}
      role={"img"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={"M18.25 12.25H5.75"}
      ></path>
    </svg>
  );
}

export default MinusIcon;
/* prettier-ignore-end */

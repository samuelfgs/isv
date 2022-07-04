// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: 0hiJFeXyCY
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_igreja.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicEventDetails.module.css"; // plasmic-import: 0hiJFeXyCY/css

export type PlasmicEventDetails__VariantMembers = {};

export type PlasmicEventDetails__VariantsArgs = {};
type VariantPropType = keyof PlasmicEventDetails__VariantsArgs;
export const PlasmicEventDetails__VariantProps = new Array<VariantPropType>();

export type PlasmicEventDetails__ArgsType = {
  type?: React.ReactNode;
  value?: React.ReactNode;
};

type ArgPropType = keyof PlasmicEventDetails__ArgsType;
export const PlasmicEventDetails__ArgProps = new Array<ArgPropType>(
  "type",
  "value"
);

export type PlasmicEventDetails__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultEventDetailsProps {
  type?: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
}

function PlasmicEventDetails__RenderFunc(props: {
  variants: PlasmicEventDetails__VariantsArgs;
  args: PlasmicEventDetails__ArgsType;
  overrides: PlasmicEventDetails__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign(
    {},

    props.args
  );
  const $props = args;

  return (
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.root
        )}
      >
        <div className={classNames(projectcss.all, sty.freeBox__cg6Zb)}>
          {p.renderPlasmicSlot({
            defaultContents: "Local: ",
            value: args.type,
            className: classNames(sty.slotTargetType)
          })}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__ogT1W)}>
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.value,
            className: classNames(sty.slotTargetValue)
          })}
        </div>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEventDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEventDetails__VariantsArgs;
    args?: PlasmicEventDetails__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEventDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEventDetails__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEventDetails__ArgProps,
      internalVariantPropNames: PlasmicEventDetails__VariantProps
    });

    return PlasmicEventDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEventDetails";
  } else {
    func.displayName = `PlasmicEventDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicEventDetails = Object.assign(
  // Top-level PlasmicEventDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicEventDetails
    internalVariantProps: PlasmicEventDetails__VariantProps,
    internalArgProps: PlasmicEventDetails__ArgProps
  }
);

export default PlasmicEventDetails;
/* prettier-ignore-end */

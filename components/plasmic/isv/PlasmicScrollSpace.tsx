// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: YP00OeXrv1
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

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicScrollSpace.module.css"; // plasmic-import: YP00OeXrv1/css

export type PlasmicScrollSpace__VariantMembers = {};

export type PlasmicScrollSpace__VariantsArgs = {};
type VariantPropType = keyof PlasmicScrollSpace__VariantsArgs;
export const PlasmicScrollSpace__VariantProps = new Array<VariantPropType>();

export type PlasmicScrollSpace__ArgsType = {
  height?: number;
};

type ArgPropType = keyof PlasmicScrollSpace__ArgsType;
export const PlasmicScrollSpace__ArgProps = new Array<ArgPropType>("height");

export type PlasmicScrollSpace__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultScrollSpaceProps {
  height?: number;
  className?: string;
}

function PlasmicScrollSpace__RenderFunc(props: {
  variants: PlasmicScrollSpace__VariantsArgs;
  args: PlasmicScrollSpace__ArgsType;
  overrides: PlasmicScrollSpace__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          height: 300 as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
      style={(() => {
        try {
          return {
            height: `${$props.height}px`
          };
        } catch (e) {
          if (e instanceof TypeError) {
            return undefined;
          }
          throw e;
        }
      })()}
    />
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
  PlasmicScrollSpace__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicScrollSpace__VariantsArgs;
    args?: PlasmicScrollSpace__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicScrollSpace__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicScrollSpace__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicScrollSpace__ArgProps,
          internalVariantPropNames: PlasmicScrollSpace__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicScrollSpace__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicScrollSpace";
  } else {
    func.displayName = `PlasmicScrollSpace.${nodeName}`;
  }
  return func;
}

export const PlasmicScrollSpace = Object.assign(
  // Top-level PlasmicScrollSpace renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicScrollSpace
    internalVariantProps: PlasmicScrollSpace__VariantProps,
    internalArgProps: PlasmicScrollSpace__ArgProps
  }
);

export default PlasmicScrollSpace;
/* prettier-ignore-end */
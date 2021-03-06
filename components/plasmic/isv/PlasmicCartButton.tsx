// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: xK4LVBS1m4
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
import sty from "./PlasmicCartButton.module.css"; // plasmic-import: xK4LVBS1m4/css

import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: TTU77nTGk/icon

export type PlasmicCartButton__VariantMembers = {
  isEmpty: "isEmpty";
};

export type PlasmicCartButton__VariantsArgs = {
  isEmpty?: SingleBooleanChoiceArg<"isEmpty">;
};

type VariantPropType = keyof PlasmicCartButton__VariantsArgs;
export const PlasmicCartButton__VariantProps = new Array<VariantPropType>(
  "isEmpty"
);

export type PlasmicCartButton__ArgsType = {
  quantity?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCartButton__ArgsType;
export const PlasmicCartButton__ArgProps = new Array<ArgPropType>("quantity");

export type PlasmicCartButton__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultCartButtonProps {
  quantity?: React.ReactNode;
  isEmpty?: SingleBooleanChoiceArg<"isEmpty">;
  className?: string;
}

function PlasmicCartButton__RenderFunc(props: {
  variants: PlasmicCartButton__VariantsArgs;
  args: PlasmicCartButton__ArgsType;
  overrides: PlasmicCartButton__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    (hasVariant(variants, "isEmpty", "isEmpty") ? true : true) ? (
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
          sty.root,
          { [sty.rootisEmpty]: hasVariant(variants, "isEmpty", "isEmpty") }
        )}
      >
        <CartIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />

        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__vd0UC)}>
            <div className={classNames(projectcss.all, sty.freeBox__ecsQm)}>
              {p.renderPlasmicSlot({
                defaultContents: "1",
                value: args.quantity,
                className: classNames(sty.slotTargetQuantity)
              })}
            </div>
          </div>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCartButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCartButton__VariantsArgs;
    args?: PlasmicCartButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCartButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCartButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCartButton__ArgProps,
          internalVariantPropNames: PlasmicCartButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCartButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCartButton";
  } else {
    func.displayName = `PlasmicCartButton.${nodeName}`;
  }
  return func;
}

export const PlasmicCartButton = Object.assign(
  // Top-level PlasmicCartButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicCartButton
    internalVariantProps: PlasmicCartButton__VariantProps,
    internalArgProps: PlasmicCartButton__ArgProps
  }
);

export default PlasmicCartButton;
/* prettier-ignore-end */

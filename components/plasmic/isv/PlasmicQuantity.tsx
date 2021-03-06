// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: VGSmBro-ef
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
import Button from "../../Button"; // plasmic-import: dTivG-jH3lW/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicQuantity.module.css"; // plasmic-import: VGSmBro-ef/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1TlDUyNqop/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: k5kwo7sOrBj/icon

export type PlasmicQuantity__VariantMembers = {};

export type PlasmicQuantity__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuantity__VariantsArgs;
export const PlasmicQuantity__VariantProps = new Array<VariantPropType>();

export type PlasmicQuantity__ArgsType = {
  quantity?: React.ReactNode;
};

type ArgPropType = keyof PlasmicQuantity__ArgsType;
export const PlasmicQuantity__ArgProps = new Array<ArgPropType>("quantity");

export type PlasmicQuantity__OverridesType = {
  root?: p.Flex<"div">;
  minusButton?: p.Flex<typeof Button>;
  freeBox?: p.Flex<"div">;
  plusButton?: p.Flex<typeof Button>;
};

export interface DefaultQuantityProps {
  quantity?: React.ReactNode;
  className?: string;
}

function PlasmicQuantity__RenderFunc(props: {
  variants: PlasmicQuantity__VariantsArgs;
  args: PlasmicQuantity__ArgsType;
  overrides: PlasmicQuantity__OverridesType;

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
        projectcss.plasmic_tokens,
        plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <Button
        data-plasmic-name={"minusButton"}
        data-plasmic-override={overrides.minusButton}
        className={classNames("__wab_instance", sty.minusButton)}
        color={"blue" as const}
        size={"compact" as const}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rytN
          )}
        >
          {"-"}
        </div>
      </Button>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "0",
          value: args.quantity,
          className: classNames(sty.slotTargetQuantity)
        })}
      </div>

      <Button
        data-plasmic-name={"plusButton"}
        data-plasmic-override={overrides.plusButton}
        className={classNames("__wab_instance", sty.plusButton)}
        color={"blue" as const}
        size={"compact" as const}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zWdC
          )}
        >
          {"+"}
        </div>
      </Button>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "minusButton", "freeBox", "plusButton"],
  minusButton: ["minusButton"],
  freeBox: ["freeBox"],
  plusButton: ["plusButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  minusButton: typeof Button;
  freeBox: "div";
  plusButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuantity__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuantity__VariantsArgs;
    args?: PlasmicQuantity__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQuantity__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicQuantity__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicQuantity__ArgProps,
          internalVariantPropNames: PlasmicQuantity__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicQuantity__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuantity";
  } else {
    func.displayName = `PlasmicQuantity.${nodeName}`;
  }
  return func;
}

export const PlasmicQuantity = Object.assign(
  // Top-level PlasmicQuantity renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    minusButton: makeNodeComponent("minusButton"),
    freeBox: makeNodeComponent("freeBox"),
    plusButton: makeNodeComponent("plusButton"),

    // Metadata about props expected for PlasmicQuantity
    internalVariantProps: PlasmicQuantity__VariantProps,
    internalArgProps: PlasmicQuantity__ArgProps
  }
);

export default PlasmicQuantity;
/* prettier-ignore-end */

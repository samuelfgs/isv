// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: XSxN5kXvF2
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
import Quantity from "../../Quantity"; // plasmic-import: VGSmBro-ef/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicOrderItem.module.css"; // plasmic-import: XSxN5kXvF2/css

export type PlasmicOrderItem__VariantMembers = {};

export type PlasmicOrderItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicOrderItem__VariantsArgs;
export const PlasmicOrderItem__VariantProps = new Array<VariantPropType>();

export type PlasmicOrderItem__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  price?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOrderItem__ArgsType;
export const PlasmicOrderItem__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "price"
);

export type PlasmicOrderItem__OverridesType = {
  root?: p.Flex<"div">;
  quantity?: p.Flex<typeof Quantity>;
};

export interface DefaultOrderItemProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  price?: React.ReactNode;
  className?: string;
}

function PlasmicOrderItem__RenderFunc(props: {
  variants: PlasmicOrderItem__VariantsArgs;
  args: PlasmicOrderItem__ArgsType;
  overrides: PlasmicOrderItem__OverridesType;

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
        plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__j4S6X)}>
          <div className={classNames(projectcss.all, sty.freeBox__rBsbD)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__wtSy8)}>
                <div className={classNames(projectcss.all, sty.freeBox__gCuoj)}>
                  {p.renderPlasmicSlot({
                    defaultContents: "Combo 1",
                    value: args.title,
                    className: classNames(sty.slotTargetTitle)
                  })}
                </div>
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__uinhy)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___0YXaw)}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "1 Caldo\nBebida a vontade\n1 Sobremesa",
                    value: args.description
                  })}
                </div>
              </div>
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__pFrr)}>
              <div className={classNames(projectcss.all, sty.freeBox__nUoI)}>
                {p.renderPlasmicSlot({
                  defaultContents: "R$ 20,00",
                  value: args.price,
                  className: classNames(sty.slotTargetPrice)
                })}

                <Quantity
                  data-plasmic-name={"quantity"}
                  data-plasmic-override={overrides.quantity}
                  className={classNames("__wab_instance", sty.quantity)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "quantity"],
  quantity: ["quantity"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  quantity: typeof Quantity;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOrderItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOrderItem__VariantsArgs;
    args?: PlasmicOrderItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOrderItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOrderItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOrderItem__ArgProps,
      internalVariantPropNames: PlasmicOrderItem__VariantProps
    });

    return PlasmicOrderItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOrderItem";
  } else {
    func.displayName = `PlasmicOrderItem.${nodeName}`;
  }
  return func;
}

export const PlasmicOrderItem = Object.assign(
  // Top-level PlasmicOrderItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    quantity: makeNodeComponent("quantity"),

    // Metadata about props expected for PlasmicOrderItem
    internalVariantProps: PlasmicOrderItem__VariantProps,
    internalArgProps: PlasmicOrderItem__ArgProps
  }
);

export default PlasmicOrderItem;
/* prettier-ignore-end */
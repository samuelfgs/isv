// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: VyP48T0NTA
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
import sty from "./PlasmicAddItemRow.module.css"; // plasmic-import: VyP48T0NTA/css

export type PlasmicAddItemRow__VariantMembers = {
  isSelected: "isSelected";
  isFirstRow: "isFirstRow";
  showPrice: "showPrice";
  showQuantity: "notInitial" | "initial";
};

export type PlasmicAddItemRow__VariantsArgs = {
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
  isFirstRow?: SingleBooleanChoiceArg<"isFirstRow">;
  showPrice?: SingleBooleanChoiceArg<"showPrice">;
  showQuantity?: MultiChoiceArg<"notInitial" | "initial">;
};

type VariantPropType = keyof PlasmicAddItemRow__VariantsArgs;
export const PlasmicAddItemRow__VariantProps = new Array<VariantPropType>(
  "isSelected",
  "isFirstRow",
  "showPrice",
  "showQuantity"
);

export type PlasmicAddItemRow__ArgsType = {
  children?: React.ReactNode;
  menuOptionId?: string;
  menuOptionValueId?: string;
  price?: React.ReactNode;
  price2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAddItemRow__ArgsType;
export const PlasmicAddItemRow__ArgProps = new Array<ArgPropType>(
  "children",
  "menuOptionId",
  "menuOptionValueId",
  "price",
  "price2"
);

export type PlasmicAddItemRow__OverridesType = {
  root?: p.Flex<"div">;
  quantity?: p.Flex<typeof Quantity>;
};

export interface DefaultAddItemRowProps {
  children?: React.ReactNode;
  menuOptionId?: string;
  menuOptionValueId?: string;
  price?: React.ReactNode;
  price2?: React.ReactNode;
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
  isFirstRow?: SingleBooleanChoiceArg<"isFirstRow">;
  showPrice?: SingleBooleanChoiceArg<"showPrice">;
  showQuantity?: MultiChoiceArg<"notInitial" | "initial">;
  className?: string;
}

function PlasmicAddItemRow__RenderFunc(props: {
  variants: PlasmicAddItemRow__VariantsArgs;
  args: PlasmicAddItemRow__ArgsType;
  overrides: PlasmicAddItemRow__OverridesType;

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

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    true ? (
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
          {
            [sty.rootisFirstRow]: hasVariant(
              variants,
              "isFirstRow",
              "isFirstRow"
            ),
            [sty.rootisSelected]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            )
          }
        )}
        data-menuoption-id={args.menuOptionId}
        data-menuoptionvalue-id={args.menuOptionValueId}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__jy49O, {
            [sty.freeBoxisFirstRow__jy49O0CdlZ]: hasVariant(
              variants,
              "isFirstRow",
              "isFirstRow"
            ),
            [sty.freeBoxisSelected__jy49OkWo4T]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            ),
            [sty.freeBoxshowPrice__jy49OuK411]: hasVariant(
              variants,
              "showPrice",
              "showPrice"
            ),
            [sty.freeBoxshowQuantity_notInitial_showPrice__jy49ObtqIwUK411]:
              hasVariant(variants, "showQuantity", "notInitial") &&
              hasVariant(variants, "showPrice", "showPrice")
          })}
        >
          {true ? (
            <div
              className={classNames(projectcss.all, sty.freeBox___9XzJs, {
                [sty.freeBoxshowPrice___9XzJSuK411]: hasVariant(
                  variants,
                  "showPrice",
                  "showPrice"
                ),
                [sty.freeBoxshowQuantity_initial___9XzJsnzcw9]: hasVariant(
                  variants,
                  "showQuantity",
                  "initial"
                ),
                [sty.freeBoxshowQuantity_initial_showPrice___9XzJsnzcw9UK411]:
                  hasVariant(variants, "showQuantity", "initial") &&
                  hasVariant(variants, "showPrice", "showPrice"),
                [sty.freeBoxshowQuantity_notInitial___9XzJSbtqIw]: hasVariant(
                  variants,
                  "showQuantity",
                  "notInitial"
                ),
                [sty.freeBoxshowQuantity_notInitial_showPrice___9XzJSbtqIwUK411]:
                  hasVariant(variants, "showQuantity", "notInitial") &&
                  hasVariant(variants, "showPrice", "showPrice")
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Pastel de Pizza",
                value: args.children
              })}

              {(
                hasVariant(variants, "showQuantity", "initial") &&
                hasVariant(variants, "showPrice", "showPrice")
                  ? true
                  : hasVariant(variants, "showQuantity", "notInitial") &&
                    hasVariant(variants, "showPrice", "showPrice")
                  ? true
                  : false
              )
                ? p.renderPlasmicSlot({
                    defaultContents: "+ R$ 0,00",
                    value: args.price2
                  })
                : null}
            </div>
          ) : null}
          {(
            hasVariant(variants, "showQuantity", "initial") &&
            hasVariant(variants, "showPrice", "showPrice")
              ? true
              : hasVariant(variants, "showQuantity", "notInitial") &&
                hasVariant(variants, "showPrice", "showPrice")
              ? true
              : hasVariant(variants, "showPrice", "showPrice")
              ? true
              : true
          ) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lbV7J, {
                [sty.freeBoxshowPrice__lbV7JuK411]: hasVariant(
                  variants,
                  "showPrice",
                  "showPrice"
                ),
                [sty.freeBoxshowQuantity_initial_showPrice__lbV7Jnzcw9UK411]:
                  hasVariant(variants, "showQuantity", "initial") &&
                  hasVariant(variants, "showPrice", "showPrice"),
                [sty.freeBoxshowQuantity_notInitial_showPrice__lbV7JbtqIwUK411]:
                  hasVariant(variants, "showQuantity", "notInitial") &&
                  hasVariant(variants, "showPrice", "showPrice")
              })}
            >
              {true
                ? p.renderPlasmicSlot({
                    defaultContents: "+ R$ 0,00",
                    value: args.price
                  })
                : null}
            </p.Stack>
          ) : null}
          {(
            hasVariant(variants, "showQuantity", "initial")
              ? true
              : hasVariant(variants, "showQuantity", "notInitial")
              ? true
              : true
          ) ? (
            <Quantity
              data-plasmic-name={"quantity"}
              data-plasmic-override={overrides.quantity}
              className={classNames("__wab_instance", sty.quantity, {
                [sty.quantityshowQuantity_initial]: hasVariant(
                  variants,
                  "showQuantity",
                  "initial"
                ),
                [sty.quantityshowQuantity_notInitial]: hasVariant(
                  variants,
                  "showQuantity",
                  "notInitial"
                )
              })}
              initialState={
                hasVariant(variants, "showQuantity", "initial")
                  ? true
                  : undefined
              }
            />
          ) : null}
        </div>
      </div>
    ) : null
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
  PlasmicAddItemRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddItemRow__VariantsArgs;
    args?: PlasmicAddItemRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAddItemRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddItemRow__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAddItemRow__ArgProps,
          internalVariantPropNames: PlasmicAddItemRow__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAddItemRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddItemRow";
  } else {
    func.displayName = `PlasmicAddItemRow.${nodeName}`;
  }
  return func;
}

export const PlasmicAddItemRow = Object.assign(
  // Top-level PlasmicAddItemRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    quantity: makeNodeComponent("quantity"),

    // Metadata about props expected for PlasmicAddItemRow
    internalVariantProps: PlasmicAddItemRow__VariantProps,
    internalArgProps: PlasmicAddItemRow__ArgProps
  }
);

export default PlasmicAddItemRow;
/* prettier-ignore-end */

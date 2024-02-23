// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: cnD_NnksTl

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Quantity from "../../Quantity"; // plasmic-import: VGSmBro-ef/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicShoppingCartLineItem.module.css"; // plasmic-import: cnD_NnksTl/css

createPlasmicElementProxy;

export type PlasmicShoppingCartLineItem__VariantMembers = {
  even: "even";
};
export type PlasmicShoppingCartLineItem__VariantsArgs = {
  even?: SingleBooleanChoiceArg<"even">;
};
type VariantPropType = keyof PlasmicShoppingCartLineItem__VariantsArgs;
export const PlasmicShoppingCartLineItem__VariantProps =
  new Array<VariantPropType>("even");

export type PlasmicShoppingCartLineItem__ArgsType = {
  index?: React.ReactNode;
  name?: React.ReactNode;
  price?: React.ReactNode;
};
type ArgPropType = keyof PlasmicShoppingCartLineItem__ArgsType;
export const PlasmicShoppingCartLineItem__ArgProps = new Array<ArgPropType>(
  "index",
  "name",
  "price"
);

export type PlasmicShoppingCartLineItem__OverridesType = {
  root?: Flex__<"div">;
  optionValues?: Flex__<"div">;
  quantity?: Flex__<typeof Quantity>;
};

export interface DefaultShoppingCartLineItemProps {
  index?: React.ReactNode;
  name?: React.ReactNode;
  price?: React.ReactNode;
  even?: SingleBooleanChoiceArg<"even">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicShoppingCartLineItem__RenderFunc(props: {
  variants: PlasmicShoppingCartLineItem__VariantsArgs;
  args: PlasmicShoppingCartLineItem__ArgsType;
  overrides: PlasmicShoppingCartLineItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "even",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.even
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
        sty.root,
        { [sty.rooteven]: hasVariant($state, "even", "even") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__sv7Tj, {
          [sty.freeBoxeven__sv7TjeuiD]: hasVariant($state, "even", "even")
        })}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__tPsW5, {
            [sty.freeBoxeven__tPsW5EuiD]: hasVariant($state, "even", "even")
          })}
        >
          <div className={classNames(projectcss.all, sty.freeBox___8HMms)}>
            {renderPlasmicSlot({
              defaultContents: "1",
              value: args.index,
              className: classNames(sty.slotTargetIndex)
            })}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___8BjoR
            )}
          >
            {"-"}
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__bAMb3, {
              [sty.freeBoxeven__bAMb3EuiD]: hasVariant($state, "even", "even")
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Combo 1",
              value: args.name
            })}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ndMl6)}
        >
          {renderPlasmicSlot({
            defaultContents: "R$50.00",
            value: args.price,
            className: classNames(sty.slotTargetPrice, {
              [sty.slotTargetPriceeven]: hasVariant($state, "even", "even")
            })
          })}
        </Stack__>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"optionValues"}
        data-plasmic-override={overrides.optionValues}
        hasGap={true}
        className={classNames(projectcss.all, sty.optionValues)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zwko6
          )}
        >
          {"Temaki Philadelphia"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rvi0T
          )}
        >
          {"Caldo de Cana"}
        </div>
      </Stack__>
      <div
        className={classNames(projectcss.all, sty.freeBox__i53, {
          [sty.freeBoxeven__i53EuiD]: hasVariant($state, "even", "even")
        })}
      >
        <Quantity
          data-plasmic-name={"quantity"}
          data-plasmic-override={overrides.quantity}
          className={classNames("__wab_instance", sty.quantity, {
            [sty.quantityeven]: hasVariant($state, "even", "even")
          })}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "optionValues", "quantity"],
  optionValues: ["optionValues"],
  quantity: ["quantity"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  optionValues: "div";
  quantity: typeof Quantity;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShoppingCartLineItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShoppingCartLineItem__VariantsArgs;
    args?: PlasmicShoppingCartLineItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShoppingCartLineItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicShoppingCartLineItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicShoppingCartLineItem__ArgProps,
          internalVariantPropNames: PlasmicShoppingCartLineItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicShoppingCartLineItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShoppingCartLineItem";
  } else {
    func.displayName = `PlasmicShoppingCartLineItem.${nodeName}`;
  }
  return func;
}

export const PlasmicShoppingCartLineItem = Object.assign(
  // Top-level PlasmicShoppingCartLineItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    optionValues: makeNodeComponent("optionValues"),
    quantity: makeNodeComponent("quantity"),

    // Metadata about props expected for PlasmicShoppingCartLineItem
    internalVariantProps: PlasmicShoppingCartLineItem__VariantProps,
    internalArgProps: PlasmicShoppingCartLineItem__ArgProps
  }
);

export default PlasmicShoppingCartLineItem;
/* prettier-ignore-end */

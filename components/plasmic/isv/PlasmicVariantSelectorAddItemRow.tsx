// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: zVycdQpbjx

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import AddItemRow from "../../AddItemRow"; // plasmic-import: VyP48T0NTA/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicVariantSelectorAddItemRow.module.css"; // plasmic-import: zVycdQpbjx/css

createPlasmicElementProxy;

export type PlasmicVariantSelectorAddItemRow__VariantMembers = {};
export type PlasmicVariantSelectorAddItemRow__VariantsArgs = {};
type VariantPropType = keyof PlasmicVariantSelectorAddItemRow__VariantsArgs;
export const PlasmicVariantSelectorAddItemRow__VariantProps =
  new Array<VariantPropType>();

export type PlasmicVariantSelectorAddItemRow__ArgsType = {
  menuOptionId?: string;
  menuOptionValueId?: string;
  isFirstRow?: boolean;
  isSelected?: boolean;
  showQuantity?: boolean;
  showPrice?: boolean;
};
type ArgPropType = keyof PlasmicVariantSelectorAddItemRow__ArgsType;
export const PlasmicVariantSelectorAddItemRow__ArgProps =
  new Array<ArgPropType>(
    "menuOptionId",
    "menuOptionValueId",
    "isFirstRow",
    "isSelected",
    "showQuantity",
    "showPrice"
  );

export type PlasmicVariantSelectorAddItemRow__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultVariantSelectorAddItemRowProps {
  menuOptionId?: string;
  menuOptionValueId?: string;
  isFirstRow?: boolean;
  isSelected?: boolean;
  showQuantity?: boolean;
  showPrice?: boolean;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicVariantSelectorAddItemRow__RenderFunc(props: {
  variants: PlasmicVariantSelectorAddItemRow__VariantsArgs;
  args: PlasmicVariantSelectorAddItemRow__ArgsType;
  overrides: PlasmicVariantSelectorAddItemRow__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          menuOptionId: undefined,
          menuOptionValueId: "" as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

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
          sty.root
        )}
      >
        <AddItemRow
          className={classNames("__wab_instance", sty.addItemRow___7USo)}
          menuOptionId={args.menuOptionId}
          menuOptionValueId={args.menuOptionValueId}
          price={
            (() => {
              try {
                return currentOptionValue.fields.price !== undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cBwfr
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        "R$: " + currentOptionValue.fields.price.toFixed(2)
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Enter some text";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            ) : null
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ooSV
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return currentOptionValue.fields.label;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </AddItemRow>
        <AddItemRow
          className={classNames("__wab_instance", sty.addItemRow__iIq3)}
          menuOptionId={args.menuOptionId}
          menuOptionValueId={args.menuOptionValueId}
          price={
            (() => {
              try {
                return currentOptionValue.fields.price !== undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i3UZ
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        "R$: " + currentOptionValue.fields.price.toFixed(2)
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Enter some text";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            ) : null
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dzTi7
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return currentOptionValue.fields.label;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </AddItemRow>
        <AddItemRow
          className={classNames("__wab_instance", sty.addItemRow__kY2HS)}
          menuOptionId={args.menuOptionId}
          menuOptionValueId={args.menuOptionValueId}
          price={
            (() => {
              try {
                return currentOptionValue.fields.price !== undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fE0K2
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        "R$: " + currentOptionValue.fields.price.toFixed(2)
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Enter some text";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            ) : null
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cKqM
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return currentOptionValue.fields.label;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </AddItemRow>
        <AddItemRow
          className={classNames("__wab_instance", sty.addItemRow__xZJf7)}
          menuOptionId={args.menuOptionId}
          menuOptionValueId={args.menuOptionValueId}
          price={
            (() => {
              try {
                return currentOptionValue.fields.price !== undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__n5I9V
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        "R$: " + currentOptionValue.fields.price.toFixed(2)
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Enter some text";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            ) : null
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__y53DH
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return currentOptionValue.fields.label;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Enter some text";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </AddItemRow>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVariantSelectorAddItemRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVariantSelectorAddItemRow__VariantsArgs;
    args?: PlasmicVariantSelectorAddItemRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVariantSelectorAddItemRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicVariantSelectorAddItemRow__ArgsType,
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicVariantSelectorAddItemRow__ArgProps,
          internalVariantPropNames:
            PlasmicVariantSelectorAddItemRow__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicVariantSelectorAddItemRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVariantSelectorAddItemRow";
  } else {
    func.displayName = `PlasmicVariantSelectorAddItemRow.${nodeName}`;
  }
  return func;
}

export const PlasmicVariantSelectorAddItemRow = Object.assign(
  // Top-level PlasmicVariantSelectorAddItemRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicVariantSelectorAddItemRow
    internalVariantProps: PlasmicVariantSelectorAddItemRow__VariantProps,
    internalArgProps: PlasmicVariantSelectorAddItemRow__ArgProps
  }
);

export default PlasmicVariantSelectorAddItemRow;
/* prettier-ignore-end */

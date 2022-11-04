// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: qjec2CylGU
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
import sty from "./PlasmicPrintOrder.module.css"; // plasmic-import: qjec2CylGU/css

export type PlasmicPrintOrder__VariantMembers = {};

export type PlasmicPrintOrder__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrintOrder__VariantsArgs;
export const PlasmicPrintOrder__VariantProps = new Array<VariantPropType>();

export type PlasmicPrintOrder__ArgsType = {
  id?: React.ReactNode;
  lineItems?: any;
  nameSlot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPrintOrder__ArgsType;
export const PlasmicPrintOrder__ArgProps = new Array<ArgPropType>(
  "id",
  "lineItems",
  "nameSlot"
);

export type PlasmicPrintOrder__OverridesType = {
  root?: p.Flex<"div">;
  name?: p.Flex<"div">;
  withDescription?: p.Flex<"div">;
  withoutDescription?: p.Flex<"div">;
  button?: p.Flex<"button">;
};

export interface DefaultPrintOrderProps {
  id?: React.ReactNode;
  lineItems?: any;
  nameSlot?: React.ReactNode;
  className?: string;
}

function PlasmicPrintOrder__RenderFunc(props: {
  variants: PlasmicPrintOrder__VariantsArgs;
  args: PlasmicPrintOrder__ArgsType;
  overrides: PlasmicPrintOrder__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          lineItems: [
            {
              productName: "Combo: monte sua massa",
              description:
                "1x Requeijao\n1x Mussarela\n2x Frango com requeijao",
              quantity: 2,
              totalPrice: 28
            },
            {
              productName: "Combo: monte sua massa",
              description:
                "1x Requeijao\n1x Mussarela\n1x Frango com requeijao",
              quantity: 1,
              totalPrice: 14
            },
            { productName: "Bolo", quantity: 3, totalPrice: 15 },
            { productName: "Doce", quantity: 5, totalPrice: 10 }
          ]
        },
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
      <div className={classNames(projectcss.all, sty.freeBox__vfgn1)}>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox___8NgMx)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nA4
              )}
            >
              {"PEDIDO "}
            </div>
          </div>
        ) : null}

        <div className={classNames(projectcss.all, sty.freeBox__cf0Nw)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___1WbXp
            )}
          >
            {"PEDIDO "}
          </div>

          {p.renderPlasmicSlot({
            defaultContents: "X",
            value: args.id,
            className: classNames(sty.slotTargetId)
          })}
        </div>

        {true ? (
          <div
            data-plasmic-name={"name"}
            data-plasmic-override={overrides.name}
            className={classNames(projectcss.all, sty.name)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__g9Mzm)}>
              {p.renderPlasmicSlot({
                defaultContents: "Enter some text",
                value: args.nameSlot,
                className: classNames(sty.slotTargetNameSlot)
              })}
            </div>
          </div>
        ) : null}

        <div className={classNames(projectcss.all, sty.freeBox__kBuec)}>
          {(() => {
            try {
              return $props.lineItems;
            } catch (e) {
              if (e instanceof TypeError) {
                return [];
              }
              throw e;
            }
          })().map((currentItem, currentIndex) => (
            <div
              className={classNames(projectcss.all, sty.freeBox__vrtXo)}
              key={currentIndex}
              style={(() => {
                try {
                  return {
                    borderTop:
                      currentIndex === 0 ? "1px dashed #000" : undefined
                  };
                } catch (e) {
                  if (e instanceof TypeError) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            >
              {(() => {
                try {
                  return !!currentItem.description;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  data-plasmic-name={"withDescription"}
                  data-plasmic-override={overrides.withDescription}
                  className={classNames(projectcss.all, sty.withDescription)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kOPre
                    )}
                  >
                    {(() => {
                      try {
                        return currentItem.productName;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return "PEDIDO ";
                        }
                        throw e;
                      }
                    })()}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yhXi5
                    )}
                  >
                    {(() => {
                      try {
                        return currentItem.description;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return "PEDIDO ";
                        }
                        throw e;
                      }
                    })()}
                  </div>
                </div>
              ) : null}
              {(() => {
                try {
                  return !currentItem.description;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  data-plasmic-name={"withoutDescription"}
                  data-plasmic-override={overrides.withoutDescription}
                  className={classNames(projectcss.all, sty.withoutDescription)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__my7So
                    )}
                  >
                    {(() => {
                      try {
                        return currentItem.productName;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return "PEDIDO ";
                        }
                        throw e;
                      }
                    })()}
                  </div>
                </div>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__npLEt)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__six4D)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__aBqo
                        )}
                      >
                        {"Qtd: "}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fTaH0
                        )}
                      >
                        {(() => {
                          try {
                            return currentItem.quantity;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return "X";
                            }
                            throw e;
                          }
                        })()}
                      </div>
                    </div>
                  ) : null}
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__bY9IY)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dlXKe
                        )}
                      >
                        {"Total: R$ "}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fJcvj
                        )}
                      >
                        {(() => {
                          try {
                            return currentItem.totalPrice
                              .toFixed(2)
                              .replace(".", ",");
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return "Total: R$ ";
                            }
                            throw e;
                          }
                        })()}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox___4B48M)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mBXug
              )}
            >
              {"Total: R$ "}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pnzkh
              )}
            >
              {(() => {
                try {
                  return $props.lineItems
                    .reduce((total, item) => (total += item.totalPrice), 0)
                    .toFixed(2)
                    .replace(".", ",");
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "20,00";
                  }
                  throw e;
                }
              })()}
            </div>
          </div>
        ) : null}
      </div>

      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(
          projectcss.all,
          projectcss.button,
          projectcss.__wab_text,
          sty.button
        )}
        onClick={(() => {
          try {
            return () => {
              window.print();
            };
          } catch (e) {
            if (e instanceof TypeError) {
              return undefined;
            }
            throw e;
          }
        })()}
      >
        {""}
      </button>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "name", "withDescription", "withoutDescription", "button"],
  name: ["name"],
  withDescription: ["withDescription"],
  withoutDescription: ["withoutDescription"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  name: "div";
  withDescription: "div";
  withoutDescription: "div";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrintOrder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrintOrder__VariantsArgs;
    args?: PlasmicPrintOrder__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrintOrder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPrintOrder__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPrintOrder__ArgProps,
          internalVariantPropNames: PlasmicPrintOrder__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPrintOrder__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrintOrder";
  } else {
    func.displayName = `PlasmicPrintOrder.${nodeName}`;
  }
  return func;
}

export const PlasmicPrintOrder = Object.assign(
  // Top-level PlasmicPrintOrder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _name: makeNodeComponent("name"),
    withDescription: makeNodeComponent("withDescription"),
    withoutDescription: makeNodeComponent("withoutDescription"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPrintOrder
    internalVariantProps: PlasmicPrintOrder__VariantProps,
    internalArgProps: PlasmicPrintOrder__ArgProps
  }
);

export default PlasmicPrintOrder;
/* prettier-ignore-end */
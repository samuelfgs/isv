// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: jvNNS1u1VD

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
import Header from "../../Header"; // plasmic-import: oeaZd66p84/component
import ShoppingCartLineItem from "../../ShoppingCartLineItem"; // plasmic-import: cnD_NnksTl/component
import TextInput from "../../TextInput"; // plasmic-import: ZCE1TfqnzIq/component
import Select from "../../Select"; // plasmic-import: SLXk4W2FZwu/component
import Select__Option from "../../Select__Option"; // plasmic-import: 55Afek_4-RC/component
import Button from "../../Button"; // plasmic-import: dTivG-jH3lW/component
import Loading from "../../Loading"; // plasmic-import: 3JMpsqmVnQ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicCheckout.module.css"; // plasmic-import: jvNNS1u1VD/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: AUsPFN29Z5Y/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1TlDUyNqop/icon
import PlusIcon from "./icons/PlasmicIcon__Plus"; // plasmic-import: TZ5ExugZ2/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: k5kwo7sOrBj/icon

createPlasmicElementProxy;

export type PlasmicCheckout__VariantMembers = {
  isEmpty: "isEmpty";
  isAdmin: "isAdmin";
};
export type PlasmicCheckout__VariantsArgs = {
  isEmpty?: SingleBooleanChoiceArg<"isEmpty">;
  isAdmin?: SingleBooleanChoiceArg<"isAdmin">;
};
type VariantPropType = keyof PlasmicCheckout__VariantsArgs;
export const PlasmicCheckout__VariantProps = new Array<VariantPropType>(
  "isEmpty",
  "isAdmin"
);

export type PlasmicCheckout__ArgsType = {
  totalPrice?: React.ReactNode;
  formasDePagamento?: any;
};
type ArgPropType = keyof PlasmicCheckout__ArgsType;
export const PlasmicCheckout__ArgProps = new Array<ArgPropType>(
  "totalPrice",
  "formasDePagamento"
);

export type PlasmicCheckout__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  lineItems?: p.Flex<"div">;
  scrollSpace?: p.Flex<"div">;
  invalidData?: p.Flex<"div">;
  nameInput?: p.Flex<typeof TextInput>;
  emailInput?: p.Flex<typeof TextInput>;
  paymentInput?: p.Flex<typeof Select>;
  option?: p.Flex<typeof Select__Option>;
  backBtn?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  checkoutBtn?: p.Flex<typeof Button>;
  loading?: p.Flex<typeof Loading>;
};

export interface DefaultCheckoutProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCheckout__RenderFunc(props: {
  variants: PlasmicCheckout__VariantsArgs;
  args: PlasmicCheckout__ArgsType;
  overrides: PlasmicCheckout__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          formasDePagamento: ["Dinheiro", "Pix", "Credito", "Debito"]
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isEmpty",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isEmpty
      },
      {
        path: "isAdmin",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isAdmin
      },
      {
        path: "nameInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "paymentInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "Dinheiro"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
              [sty.rootisAdmin]: hasVariant($state, "isAdmin", "isAdmin"),
              [sty.rootisEmpty]: hasVariant($state, "isEmpty", "isEmpty")
            }
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            className={classNames(projectcss.all, sty.freeBox__hwmO, {
              [sty.freeBoxisEmpty__hwmOfod6B]: hasVariant(
                $state,
                "isEmpty",
                "isEmpty"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rbicr,
                {
                  [sty.textisEmpty__rbicrfod6B]: hasVariant(
                    $state,
                    "isEmpty",
                    "isEmpty"
                  )
                }
              )}
            >
              {"Nenhum item foi adicionado."}
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__dJbT1, {
              [sty.freeBoxisEmpty__dJbT1Fod6B]: hasVariant(
                $state,
                "isEmpty",
                "isEmpty"
              )
            })}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"lineItems"}
              data-plasmic-override={overrides.lineItems}
              hasGap={true}
              className={classNames(projectcss.all, sty.lineItems)}
            >
              <ShoppingCartLineItem
                className={classNames(
                  "__wab_instance",
                  sty.shoppingCartLineItem__lC9Px,
                  {
                    [sty.shoppingCartLineItemisEmpty__lC9Pxfod6B]: hasVariant(
                      $state,
                      "isEmpty",
                      "isEmpty"
                    )
                  }
                )}
                even={true}
              />

              <ShoppingCartLineItem
                className={classNames(
                  "__wab_instance",
                  sty.shoppingCartLineItem__sDpv3
                )}
              />

              <ShoppingCartLineItem
                className={classNames(
                  "__wab_instance",
                  sty.shoppingCartLineItem__fgOd
                )}
                even={true}
              />
            </p.Stack>
            <div
              data-plasmic-name={"scrollSpace"}
              data-plasmic-override={overrides.scrollSpace}
              className={classNames(projectcss.all, sty.scrollSpace)}
            />
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__e1Rk, {
              [sty.freeBoxisAdmin__e1RkWWf5]: hasVariant(
                $state,
                "isAdmin",
                "isAdmin"
              ),
              [sty.freeBoxisEmpty__e1RkFod6B]: hasVariant(
                $state,
                "isEmpty",
                "isEmpty"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__xwlAe, {
                [sty.freeBoxisAdmin__xwlAEwWf5]: hasVariant(
                  $state,
                  "isAdmin",
                  "isAdmin"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3Cm0P
                )}
              >
                {"Total: R$ "}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__zIai4)}>
                {p.renderPlasmicSlot({
                  defaultContents: "20,00",
                  value: args.totalPrice,
                  className: classNames(sty.slotTargetTotalPrice)
                })}
              </div>
            </div>
            <div
              data-plasmic-name={"invalidData"}
              data-plasmic-override={overrides.invalidData}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.invalidData,
                {
                  [sty.invalidDataisAdmin]: hasVariant(
                    $state,
                    "isAdmin",
                    "isAdmin"
                  ),
                  [sty.invalidDataisEmpty]: hasVariant(
                    $state,
                    "isEmpty",
                    "isEmpty"
                  )
                }
              )}
            >
              {"Dados inv\u00e1lidos"}
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rW7Tu, {
                [sty.freeBoxisAdmin__rW7TUwWf5]: hasVariant(
                  $state,
                  "isAdmin",
                  "isAdmin"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ngWcr,
                  {
                    [sty.textisAdmin__ngWcrwWf5]: hasVariant(
                      $state,
                      "isAdmin",
                      "isAdmin"
                    )
                  }
                )}
              >
                {"Nome"}
              </div>
              <TextInput
                data-plasmic-name={"nameInput"}
                data-plasmic-override={overrides.nameInput}
                className={classNames("__wab_instance", sty.nameInput)}
                name={"name"}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, ["nameInput", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={""}
                required={true}
                value={
                  p.generateStateValueProp($state, ["nameInput", "value"]) ?? ""
                }
              />
            </p.Stack>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__uwY6I, {
                [sty.freeBoxisAdmin__uwY6IwWf5]: hasVariant(
                  $state,
                  "isAdmin",
                  "isAdmin"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ntkgf,
                  {
                    [sty.textisAdmin__ntkgfwWf5]: hasVariant(
                      $state,
                      "isAdmin",
                      "isAdmin"
                    )
                  }
                )}
              >
                {"Email"}
              </div>
              <TextInput
                data-plasmic-name={"emailInput"}
                data-plasmic-override={overrides.emailInput}
                className={classNames("__wab_instance", sty.emailInput)}
                name={"name"}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, ["emailInput", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={""}
                required={true}
                value={
                  p.generateStateValueProp($state, ["emailInput", "value"]) ??
                  ""
                }
              />
            </p.Stack>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nmWzQ, {
                [sty.freeBoxisAdmin__nmWzQwWf5]: hasVariant(
                  $state,
                  "isAdmin",
                  "isAdmin"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__idsbd,
                  {
                    [sty.textisAdmin__idsbDwWf5]: hasVariant(
                      $state,
                      "isAdmin",
                      "isAdmin"
                    )
                  }
                )}
              >
                {"Forma de Pagamento"}
              </div>
              <div
                className={classNames(projectcss.all, sty.freeBox__cjmAg, {
                  [sty.freeBoxisAdmin__cjmAGwWf5]: hasVariant(
                    $state,
                    "isAdmin",
                    "isAdmin"
                  )
                })}
              >
                <Select
                  data-plasmic-name={"paymentInput"}
                  data-plasmic-override={overrides.paymentInput}
                  className={classNames("__wab_instance", sty.paymentInput, {
                    [sty.paymentInputisAdmin]: hasVariant(
                      $state,
                      "isAdmin",
                      "isAdmin"
                    )
                  })}
                  onChange={(...eventArgs) => {
                    p.generateStateOnChangeProp($state, [
                      "paymentInput",
                      "value"
                    ])(eventArgs[0]);
                  }}
                  value={p.generateStateValueProp($state, [
                    "paymentInput",
                    "value"
                  ])}
                >
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $props.formasDePagamento;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                  ).map((__plasmic_item_0, __plasmic_idx_0) => {
                    const currentItem = __plasmic_item_0;
                    const currentIndex = __plasmic_idx_0;
                    return (
                      <Select__Option
                        data-plasmic-name={"option"}
                        data-plasmic-override={overrides.option}
                        className={classNames("__wab_instance", sty.option)}
                        key={currentIndex}
                        textValue={currentItem}
                        value={(() => {
                          try {
                            return currentItem;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Pix";
                            }
                            throw e;
                          }
                        })()}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Option 2";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </Select__Option>
                    );
                  })}
                </Select>
              </div>
            </p.Stack>
            <div
              className={classNames(projectcss.all, sty.freeBox__h27MF, {
                [sty.freeBoxisAdmin__h27MFwWf5]: hasVariant(
                  $state,
                  "isAdmin",
                  "isAdmin"
                )
              })}
            >
              <Button
                data-plasmic-name={"backBtn"}
                data-plasmic-override={overrides.backBtn}
                className={classNames("__wab_instance", sty.backBtn)}
                color={"softBlue"}
                showStartIcon={true}
                startIcon={
                  <PlusIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dk1Tj
                  )}
                >
                  {"Adicionar mais"}
                </div>
              </Button>
              <Button
                data-plasmic-name={"checkoutBtn"}
                data-plasmic-override={overrides.checkoutBtn}
                className={classNames("__wab_instance", sty.checkoutBtn)}
                color={"blue"}
                showStartIcon={true}
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__csUxJ
                  )}
                >
                  {"Finalizar compra"}
                </div>
              </Button>
            </div>
          </p.Stack>
          <Loading
            data-plasmic-name={"loading"}
            data-plasmic-override={overrides.loading}
            className={classNames("__wab_instance", sty.loading)}
            hide={true}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "lineItems",
    "scrollSpace",
    "invalidData",
    "nameInput",
    "emailInput",
    "paymentInput",
    "option",
    "backBtn",
    "svg",
    "checkoutBtn",
    "loading"
  ],
  header: ["header"],
  lineItems: ["lineItems"],
  scrollSpace: ["scrollSpace"],
  invalidData: ["invalidData"],
  nameInput: ["nameInput"],
  emailInput: ["emailInput"],
  paymentInput: ["paymentInput", "option"],
  option: ["option"],
  backBtn: ["backBtn", "svg"],
  svg: ["svg"],
  checkoutBtn: ["checkoutBtn"],
  loading: ["loading"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  lineItems: "div";
  scrollSpace: "div";
  invalidData: "div";
  nameInput: typeof TextInput;
  emailInput: typeof TextInput;
  paymentInput: typeof Select;
  option: typeof Select__Option;
  backBtn: typeof Button;
  svg: "svg";
  checkoutBtn: typeof Button;
  loading: typeof Loading;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckout__VariantsArgs;
    args?: PlasmicCheckout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCheckout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCheckout__ArgsType,
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
          internalArgPropNames: PlasmicCheckout__ArgProps,
          internalVariantPropNames: PlasmicCheckout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCheckout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckout";
  } else {
    func.displayName = `PlasmicCheckout.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckout = Object.assign(
  // Top-level PlasmicCheckout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    lineItems: makeNodeComponent("lineItems"),
    scrollSpace: makeNodeComponent("scrollSpace"),
    invalidData: makeNodeComponent("invalidData"),
    nameInput: makeNodeComponent("nameInput"),
    emailInput: makeNodeComponent("emailInput"),
    paymentInput: makeNodeComponent("paymentInput"),
    option: makeNodeComponent("option"),
    backBtn: makeNodeComponent("backBtn"),
    svg: makeNodeComponent("svg"),
    checkoutBtn: makeNodeComponent("checkoutBtn"),
    loading: makeNodeComponent("loading"),

    // Metadata about props expected for PlasmicCheckout
    internalVariantProps: PlasmicCheckout__VariantProps,
    internalArgProps: PlasmicCheckout__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCheckout;
/* prettier-ignore-end */

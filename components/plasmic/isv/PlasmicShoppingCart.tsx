// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: 2L-PECr0xw
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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
import Header from "../../Header"; // plasmic-import: oeaZd66p84/component
import ShoppingCartLineItem from "../../ShoppingCartLineItem"; // plasmic-import: cnD_NnksTl/component
import TextInput from "../../TextInput"; // plasmic-import: ZCE1TfqnzIq/component
import Button from "../../Button"; // plasmic-import: dTivG-jH3lW/component
import Loading from "../../Loading"; // plasmic-import: 3JMpsqmVnQ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicShoppingCart.module.css"; // plasmic-import: 2L-PECr0xw/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: AUsPFN29Z5Y/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1TlDUyNqop/icon
import PlusIcon from "./icons/PlasmicIcon__Plus"; // plasmic-import: TZ5ExugZ2/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: k5kwo7sOrBj/icon

export type PlasmicShoppingCart__VariantMembers = {
  isEmpty: "isEmpty";
};

export type PlasmicShoppingCart__VariantsArgs = {
  isEmpty?: SingleBooleanChoiceArg<"isEmpty">;
};

type VariantPropType = keyof PlasmicShoppingCart__VariantsArgs;
export const PlasmicShoppingCart__VariantProps = new Array<VariantPropType>(
  "isEmpty"
);

export type PlasmicShoppingCart__ArgsType = {
  totalPrice?: React.ReactNode;
};

type ArgPropType = keyof PlasmicShoppingCart__ArgsType;
export const PlasmicShoppingCart__ArgProps = new Array<ArgPropType>(
  "totalPrice"
);

export type PlasmicShoppingCart__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  lineItems?: p.Flex<"div">;
  scrollSpace?: p.Flex<"div">;
  invalidData?: p.Flex<"div">;
  nameInput?: p.Flex<typeof TextInput>;
  emailInput?: p.Flex<typeof TextInput>;
  backBtn?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  checkoutBtn?: p.Flex<typeof Button>;
  loading?: p.Flex<typeof Loading>;
};

export interface DefaultShoppingCartProps {
  totalPrice?: React.ReactNode;
  isEmpty?: SingleBooleanChoiceArg<"isEmpty">;
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

function PlasmicShoppingCart__RenderFunc(props: {
  variants: PlasmicShoppingCart__VariantsArgs;
  args: PlasmicShoppingCart__ArgsType;
  overrides: PlasmicShoppingCart__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

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

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isEmpty",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.isEmpty
          : undefined
      },

      {
        path: "nameInput.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      },

      {
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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
          projectcss.plasmic_tokens,
          plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
          plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
          sty.root,
          { [sty.rootisEmpty]: hasVariant($state, "isEmpty", "isEmpty") }
        )}
      >
        <Header
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames("__wab_instance", sty.header)}
        />

        {(hasVariant($state, "isEmpty", "isEmpty") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__dK8WR, {
              [sty.freeBoxisEmpty__dK8WRyqkGv]: hasVariant(
                $state,
                "isEmpty",
                "isEmpty"
              )
            })}
          >
            {(hasVariant($state, "isEmpty", "isEmpty") ? true : true) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__w92Vj,
                  {
                    [sty.textisEmpty__w92VjyqkGv]: hasVariant(
                      $state,
                      "isEmpty",
                      "isEmpty"
                    )
                  }
                )}
              >
                {"Nenhum item foi adicionado."}
              </div>
            ) : null}
          </div>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__mLvYu)}>
            {(hasVariant($state, "isEmpty", "isEmpty") ? true : true) ? (
              <p.Stack
                as={"div"}
                data-plasmic-name={"lineItems"}
                data-plasmic-override={overrides.lineItems}
                hasGap={true}
                className={classNames(projectcss.all, sty.lineItems, {
                  [sty.lineItemsisEmpty]: hasVariant(
                    $state,
                    "isEmpty",
                    "isEmpty"
                  )
                })}
              >
                {true ? (
                  <ShoppingCartLineItem
                    className={classNames(
                      "__wab_instance",
                      sty.shoppingCartLineItem__tSkQ
                    )}
                    even={true}
                  />
                ) : null}
                {true ? (
                  <ShoppingCartLineItem
                    className={classNames(
                      "__wab_instance",
                      sty.shoppingCartLineItem__fCQA
                    )}
                  />
                ) : null}
                {true ? (
                  <ShoppingCartLineItem
                    className={classNames(
                      "__wab_instance",
                      sty.shoppingCartLineItem__trP6
                    )}
                    even={true}
                  />
                ) : null}
              </p.Stack>
            ) : null}

            <div
              data-plasmic-name={"scrollSpace"}
              data-plasmic-override={overrides.scrollSpace}
              className={classNames(projectcss.all, sty.scrollSpace)}
            />
          </div>
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__avSb)}
          >
            {(hasVariant($state, "isEmpty", "isEmpty") ? true : true) ? (
              <div
                className={classNames(projectcss.all, sty.freeBox__bZiN9, {
                  [sty.freeBoxisEmpty__bZiN9YqkGv]: hasVariant(
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
                    sty.text__riere
                  )}
                >
                  {"Total: R$ "}
                </div>

                <div
                  className={classNames(projectcss.all, sty.freeBox___6PIpe)}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "20,00",
                    value: args.totalPrice,
                    className: classNames(sty.slotTargetTotalPrice)
                  })}
                </div>
              </div>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"invalidData"}
                data-plasmic-override={overrides.invalidData}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.invalidData
                )}
              >
                {"Dados inválidos"}
              </div>
            ) : null}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__az7FN)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hPl3V
                )}
              >
                {"Nome"}
              </div>

              <TextInput
                data-plasmic-name={"nameInput"}
                data-plasmic-override={overrides.nameInput}
                className={classNames("__wab_instance", sty.nameInput)}
                name={"name" as const}
                onChange={(...args) => {
                  p.generateStateOnChangeProp($state, ["nameInput", "value"])(
                    (e => e.target?.value).apply(null, args)
                  );
                }}
                placeholder={"" as const}
                required={true}
                value={p.generateStateValueProp($state, ["nameInput", "value"])}
              />
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dy3J8)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ltFxi
                )}
              >
                {"Email"}
              </div>

              <TextInput
                data-plasmic-name={"emailInput"}
                data-plasmic-override={overrides.emailInput}
                className={classNames("__wab_instance", sty.emailInput)}
                name={"email" as const}
                onChange={(...args) => {
                  p.generateStateOnChangeProp($state, ["emailInput", "value"])(
                    (e => e.target?.value).apply(null, args)
                  );
                }}
                required={true}
                type={"email" as const}
                value={p.generateStateValueProp($state, [
                  "emailInput",

                  "value"
                ])}
              />
            </p.Stack>

            {true ? (
              <div
                className={classNames(projectcss.all, sty.freeBox__dhXtS, {
                  [sty.freeBoxisEmpty__dhXtSyqkGv]: hasVariant(
                    $state,
                    "isEmpty",
                    "isEmpty"
                  )
                })}
              >
                <Button
                  data-plasmic-name={"backBtn"}
                  data-plasmic-override={overrides.backBtn}
                  className={classNames("__wab_instance", sty.backBtn, {
                    [sty.backBtnisEmpty]: hasVariant(
                      $state,
                      "isEmpty",
                      "isEmpty"
                    )
                  })}
                  color={"softBlue" as const}
                  isDisabled={
                    hasVariant($state, "isEmpty", "isEmpty") ? true : undefined
                  }
                  showStartIcon={true}
                  startIcon={
                    <PlusIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___528Rb,
                      {
                        [sty.textisEmpty___528RbyqkGv]: hasVariant(
                          $state,
                          "isEmpty",
                          "isEmpty"
                        )
                      }
                    )}
                  >
                    {hasVariant($state, "isEmpty", "isEmpty")
                      ? "Adicionar"
                      : "Adicionar mais"}
                  </div>
                </Button>

                {(hasVariant($state, "isEmpty", "isEmpty") ? true : true) ? (
                  <Button
                    data-plasmic-name={"checkoutBtn"}
                    data-plasmic-override={overrides.checkoutBtn}
                    className={classNames("__wab_instance", sty.checkoutBtn, {
                      [sty.checkoutBtnisEmpty]: hasVariant(
                        $state,
                        "isEmpty",
                        "isEmpty"
                      )
                    })}
                    color={"blue" as const}
                    isDisabled={
                      hasVariant($state, "isEmpty", "isEmpty")
                        ? true
                        : undefined
                    }
                    showStartIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nNaap,
                        {
                          [sty.textisEmpty__nNaapYqkGv]: hasVariant(
                            $state,
                            "isEmpty",
                            "isEmpty"
                          )
                        }
                      )}
                    >
                      {"Finalizar compra"}
                    </div>
                  </Button>
                ) : null}
              </div>
            ) : null}
          </p.Stack>
        ) : null}

        <Loading
          data-plasmic-name={"loading"}
          data-plasmic-override={overrides.loading}
          className={classNames("__wab_instance", sty.loading)}
          hide={true}
        />
      </p.Stack>
    ) : null
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
  backBtn: ["backBtn", "svg"],
  svg: ["svg"],
  checkoutBtn: ["checkoutBtn"],
  loading: ["loading"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  lineItems: "div";
  scrollSpace: "div";
  invalidData: "div";
  nameInput: typeof TextInput;
  emailInput: typeof TextInput;
  backBtn: typeof Button;
  svg: "svg";
  checkoutBtn: typeof Button;
  loading: typeof Loading;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShoppingCart__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShoppingCart__VariantsArgs;
    args?: PlasmicShoppingCart__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShoppingCart__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicShoppingCart__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicShoppingCart__ArgProps,
          internalVariantPropNames: PlasmicShoppingCart__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicShoppingCart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShoppingCart";
  } else {
    func.displayName = `PlasmicShoppingCart.${nodeName}`;
  }
  return func;
}

export const PlasmicShoppingCart = Object.assign(
  // Top-level PlasmicShoppingCart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    lineItems: makeNodeComponent("lineItems"),
    scrollSpace: makeNodeComponent("scrollSpace"),
    invalidData: makeNodeComponent("invalidData"),
    nameInput: makeNodeComponent("nameInput"),
    emailInput: makeNodeComponent("emailInput"),
    backBtn: makeNodeComponent("backBtn"),
    svg: makeNodeComponent("svg"),
    checkoutBtn: makeNodeComponent("checkoutBtn"),
    loading: makeNodeComponent("loading"),

    // Metadata about props expected for PlasmicShoppingCart
    internalVariantProps: PlasmicShoppingCart__VariantProps,
    internalArgProps: PlasmicShoppingCart__ArgProps
  }
);

export default PlasmicShoppingCart;
/* prettier-ignore-end */

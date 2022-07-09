// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: nz4OkXyiCp9B
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
import Separator from "../../Separator"; // plasmic-import: wUTVsB-fca/component
import OrderItem from "../../OrderItem"; // plasmic-import: XSxN5kXvF2/component
import ShoppingCart from "../../ShoppingCart"; // plasmic-import: 2L-PECr0xw/component
import EmptyMessage from "../../EmptyMessage"; // plasmic-import: jepsdtzBQs/component
import Button from "../../Button"; // plasmic-import: dTivG-jH3lW/component
import Loading from "../../Loading"; // plasmic-import: 3JMpsqmVnQ/component

import { useScreenVariants as useScreenVariantsrLyYkqyGlc01Z } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: rLyYkqyGLC01z/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: nz4OkXyiCp9B/css

import ClockIcon from "./icons/PlasmicIcon__Clock"; // plasmic-import: QYb9XxFjU/icon
import PinIcon from "./icons/PlasmicIcon__Pin"; // plasmic-import: LZ6zTV9o3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1TlDUyNqop/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: k5kwo7sOrBj/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  totalPrice?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>("totalPrice");

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
  options?: p.Flex<"div">;
  shoppingCart?: p.Flex<typeof ShoppingCart>;
  emptyMessage?: p.Flex<typeof EmptyMessage>;
  payBtn?: p.Flex<typeof Button>;
  loading?: p.Flex<typeof Loading>;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign(
    {},

    props.args
  );
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsrLyYkqyGlc01Z()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fhZpR)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__s5ZB
                )}
              >
                {"IGREJA EM SÃO VICENTE"}
              </div>
            </p.Stack>
          ) : null}

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wFFs9)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___8Tr6E)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cUiys
                  )}
                >
                  {"Inverno Crente"}
                </div>
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__wrEd8)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__tc74K)}
                  >
                    <ClockIcon
                      className={classNames(projectcss.all, sty.svg__gJ7Hc)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hS2Be
                      )}
                    >
                      {"30 de julho às 18:00"}
                    </div>
                  </p.Stack>
                ) : null}
                {true ? (
                  <p.Stack
                    as={p.PlasmicLink}
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <PinIcon
                      className={classNames(projectcss.all, sty.svg__cwMa)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__m09Xo
                      )}
                    >
                      {"Rua Jardel França, 18"}
                    </div>
                  </p.Stack>
                ) : null}
              </div>
            ) : null}

            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={
                hasVariant(globalVariants, "screen", "desktop")
                  ? ("400px" as const)
                  : ("100%" as const)
              }
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/isv/images/invernoCrente.jpeg",
                fullWidth: 1268,
                fullHeight: 1600,
                aspectRatio: undefined
              }}
            />
          </p.Stack>

          <Separator
            className={classNames("__wab_instance", sty.separator__veGxi)}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hEwy6
            )}
          >
            {"Escolha o combo"}
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"options"}
            data-plasmic-override={overrides.options}
            hasGap={true}
            className={classNames(projectcss.all, sty.options)}
          >
            <OrderItem
              className={classNames("__wab_instance", sty.orderItem__hq7V5)}
              price={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4O5Ur
                  )}
                >
                  {"R$ 10,00"}
                </div>
              }
            />

            <OrderItem
              className={classNames("__wab_instance", sty.orderItem__hjyHf)}
              description={"Caldo a vontade\nBebida a vontade\n1 Sobremesa"}
              title={"Combo 2"}
            />
          </p.Stack>

          <Separator
            className={classNames("__wab_instance", sty.separator__elFUv)}
          />

          {true ? (
            <ShoppingCart
              data-plasmic-name={"shoppingCart"}
              data-plasmic-override={overrides.shoppingCart}
              className={classNames("__wab_instance", sty.shoppingCart)}
            />
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__a2Eq7)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nzQLq
                )}
              >
                {"Total: R$"}
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__xeh4E)}>
                {p.renderPlasmicSlot({
                  defaultContents: "90.00",
                  value: args.totalPrice,
                  className: classNames(sty.slotTargetTotalPrice)
                })}
              </div>
            </div>
          ) : null}
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__kJ0)}
            >
              <EmptyMessage
                data-plasmic-name={"emptyMessage"}
                data-plasmic-override={overrides.emptyMessage}
                className={classNames("__wab_instance", sty.emptyMessage)}
                isEmpty={true}
              />

              {true ? (
                <Button
                  data-plasmic-name={"payBtn"}
                  data-plasmic-override={overrides.payBtn}
                  className={classNames("__wab_instance", sty.payBtn)}
                  color={"blue" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xwAkv
                    )}
                  >
                    {"Finalizar"}
                  </div>
                </Button>
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
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "link",
    "img",
    "options",
    "shoppingCart",
    "emptyMessage",
    "payBtn",
    "loading"
  ],
  link: ["link"],
  img: ["img"],
  options: ["options"],
  shoppingCart: ["shoppingCart"],
  emptyMessage: ["emptyMessage"],
  payBtn: ["payBtn"],
  loading: ["loading"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  img: typeof p.PlasmicImg;
  options: "div";
  shoppingCart: typeof ShoppingCart;
  emptyMessage: typeof EmptyMessage;
  payBtn: typeof Button;
  loading: typeof Loading;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    options: makeNodeComponent("options"),
    shoppingCart: makeNodeComponent("shoppingCart"),
    emptyMessage: makeNodeComponent("emptyMessage"),
    payBtn: makeNodeComponent("payBtn"),
    loading: makeNodeComponent("loading"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
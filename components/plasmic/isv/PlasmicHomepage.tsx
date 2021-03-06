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
import Header from "../../Header"; // plasmic-import: oeaZd66p84/component
import Separator from "../../Separator"; // plasmic-import: wUTVsB-fca/component
import { ContentfulFetcher } from "../../contentful"; // plasmic-import: AIFoPRZ0EI/codeComponent
import MenuItem from "../../MenuItem"; // plasmic-import: XSxN5kXvF2/component
import { ContentfulRichText } from "../../contentful"; // plasmic-import: U_PL4X9jnS/codeComponent
import CartButton from "../../CartButton"; // plasmic-import: xK4LVBS1m4/component

import { useScreenVariants as useScreenVariantsrLyYkqyGlc01Z } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: rLyYkqyGLC01z/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: nz4OkXyiCp9B/css

import PinIcon from "./icons/PlasmicIcon__Pin"; // plasmic-import: LZ6zTV9o3/icon
import ClockIcon from "./icons/PlasmicIcon__Clock"; // plasmic-import: QYb9XxFjU/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  img?: p.Flex<typeof p.PlasmicImg>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  separator?: p.Flex<typeof Separator>;
  options?: p.Flex<"div">;
  contentfulFetcher?: p.Flex<typeof ContentfulFetcher>;
  menuItem?: p.Flex<typeof MenuItem>;
  contentfulRichText?: p.Flex<typeof ContentfulRichText>;
  cartButton?: p.Flex<typeof CartButton>;
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
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
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
            projectcss.plasmic_tokens,
            plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
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

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__wrEd8)}>
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
                    href={
                      "https://www.google.com/maps/place/R.+Jardel+Fran%C3%A7a,+18+-+Cidade+N%C3%A1utica,+S%C3%A3o+Vicente+-+SP,+11340-340/@-23.952288,-46.411209,16z/data=!4m5!3m4!1s0x94ce1b90972cbc35:0xcd547d49f39bffe5!8m2!3d-23.9522879!4d-46.4112093" as const
                    }
                    platform={"nextjs"}
                    target={"_blank" as const}
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
                      {"Rua Jardel Fran??a, 18"}
                    </div>
                  </p.Stack>
                ) : null}
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
                      {"30 de julho ??s 19:00"}
                    </div>
                  </p.Stack>
                ) : null}
              </div>
            ) : null}
          </p.Stack>

          <Separator
            data-plasmic-name={"separator"}
            data-plasmic-override={overrides.separator}
            className={classNames("__wab_instance", sty.separator)}
          />

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dg52T)}
              id={"menu" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hEwy6
                )}
              >
                {"Card??pio"}
              </div>

              <p.Stack
                as={"div"}
                data-plasmic-name={"options"}
                data-plasmic-override={overrides.options}
                hasGap={true}
                className={classNames(projectcss.all, sty.options)}
              >
                <ContentfulFetcher
                  data-plasmic-name={"contentfulFetcher"}
                  data-plasmic-override={overrides.contentfulFetcher}
                  className={classNames(
                    "__wab_instance",
                    sty.contentfulFetcher
                  )}
                  contentType={"eventMenuItem" as const}
                  limit={1000 as const}
                  noLayout={true}
                  order={"fields.order" as const}
                >
                  <ph.DataCtxReader>
                    {$ctx => (
                      <>
                        {(() => {
                          try {
                            return $ctx.contentfulItems ?? [];
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return [];
                            }
                            throw e;
                          }
                        })().map((currentItem, currentIndex) => (
                          <MenuItem
                            data-plasmic-name={"menuItem"}
                            data-plasmic-override={overrides.menuItem}
                            className={classNames(
                              "__wab_instance",
                              sty.menuItem
                            )}
                            description={
                              <ContentfulRichText
                                data-plasmic-name={"contentfulRichText"}
                                data-plasmic-override={
                                  overrides.contentfulRichText
                                }
                                className={classNames(
                                  "__wab_instance",
                                  sty.contentfulRichText
                                )}
                                richText={currentItem.fields.description}
                              />
                            }
                            id={currentItem.sys.id}
                            image={currentItem.fields.image.fields.file.url}
                            price={
                              (() => {
                                try {
                                  return currentItem.fields.price !== 0;
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return true;
                                  }
                                  throw e;
                                }
                              })()
                                ? (() => {
                                    try {
                                      return (
                                        "R$: " +
                                        currentItem.fields.price.toFixed(2)
                                      );
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return "R$ 20,00";
                                      }
                                      throw e;
                                    }
                                  })()
                                : null
                            }
                            title={(() => {
                              try {
                                return currentItem.fields.name;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "Combo 1";
                                }
                                throw e;
                              }
                            })()}
                          />
                        ))}
                      </>
                    )}
                  </ph.DataCtxReader>
                </ContentfulFetcher>
              </p.Stack>
            </p.Stack>
          ) : null}
          {true ? (
            <CartButton
              data-plasmic-name={"cartButton"}
              data-plasmic-override={overrides.cartButton}
              className={classNames("__wab_instance", sty.cartButton)}
              isEmpty={true}
            />
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "img",
    "link",
    "separator",
    "options",
    "contentfulFetcher",
    "menuItem",
    "contentfulRichText",
    "cartButton"
  ],
  header: ["header"],
  img: ["img"],
  link: ["link"],
  separator: ["separator"],
  options: ["options", "contentfulFetcher", "menuItem", "contentfulRichText"],
  contentfulFetcher: ["contentfulFetcher", "menuItem", "contentfulRichText"],
  menuItem: ["menuItem", "contentfulRichText"],
  contentfulRichText: ["contentfulRichText"],
  cartButton: ["cartButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  img: typeof p.PlasmicImg;
  link: "a";
  separator: typeof Separator;
  options: "div";
  contentfulFetcher: typeof ContentfulFetcher;
  menuItem: typeof MenuItem;
  contentfulRichText: typeof ContentfulRichText;
  cartButton: typeof CartButton;
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

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
    header: makeNodeComponent("header"),
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    separator: makeNodeComponent("separator"),
    options: makeNodeComponent("options"),
    contentfulFetcher: makeNodeComponent("contentfulFetcher"),
    menuItem: makeNodeComponent("menuItem"),
    contentfulRichText: makeNodeComponent("contentfulRichText"),
    cartButton: makeNodeComponent("cartButton"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */

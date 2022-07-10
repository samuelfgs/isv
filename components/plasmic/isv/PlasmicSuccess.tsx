// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: E9GSJtAUla
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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicSuccess.module.css"; // plasmic-import: E9GSJtAUla/css

import CheckCircleIcon from "./icons/PlasmicIcon__CheckCircle"; // plasmic-import: 1HIO6KdHI/icon

export type PlasmicSuccess__VariantMembers = {};

export type PlasmicSuccess__VariantsArgs = {};
type VariantPropType = keyof PlasmicSuccess__VariantsArgs;
export const PlasmicSuccess__VariantProps = new Array<VariantPropType>();

export type PlasmicSuccess__ArgsType = {};
type ArgPropType = keyof PlasmicSuccess__ArgsType;
export const PlasmicSuccess__ArgProps = new Array<ArgPropType>();

export type PlasmicSuccess__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSuccessProps {}

function PlasmicSuccess__RenderFunc(props: {
  variants: PlasmicSuccess__VariantsArgs;
  args: PlasmicSuccess__ArgsType;
  overrides: PlasmicSuccess__OverridesType;

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
    <React.Fragment>
      {}

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
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__jsI9F)}>
            <div className={classNames(projectcss.all, sty.freeBox__lxcmU)}>
              <CheckCircleIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      data-plasmic-name={"h2"}
                      data-plasmic-override={overrides.h2}
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2
                      )}
                    >
                      {"PAGAMENTO APROVADO"}
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            </div>

            <p.PlasmicLink
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Baixar comprovante"}
            </p.PlasmicLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "svg", "text", "h2", "link"],
  header: ["header"],
  svg: ["svg"],
  text: ["text", "h2"],
  h2: ["h2"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  svg: "svg";
  text: "div";
  h2: "h2";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSuccess__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSuccess__VariantsArgs;
    args?: PlasmicSuccess__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSuccess__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSuccess__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSuccess__ArgProps,
      internalVariantPropNames: PlasmicSuccess__VariantProps
    });

    return PlasmicSuccess__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSuccess";
  } else {
    func.displayName = `PlasmicSuccess.${nodeName}`;
  }
  return func;
}

export const PlasmicSuccess = Object.assign(
  // Top-level PlasmicSuccess renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    h2: makeNodeComponent("h2"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSuccess
    internalVariantProps: PlasmicSuccess__VariantProps,
    internalArgProps: PlasmicSuccess__ArgProps
  }
);

export default PlasmicSuccess;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: tnuTwysStr

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
import Button from "../../Button"; // plasmic-import: dTivG-jH3lW/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicCompletedAdminOrder.module.css"; // plasmic-import: tnuTwysStr/css

import CheckCircleIcon from "./icons/PlasmicIcon__CheckCircle"; // plasmic-import: 1HIO6KdHI/icon
import PrintIcon from "./icons/PlasmicIcon__Print"; // plasmic-import: 5JsroXw63/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: k5kwo7sOrBj/icon
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: MP7-FtWLqM/icon

createPlasmicElementProxy;

export type PlasmicCompletedAdminOrder__VariantMembers = {};
export type PlasmicCompletedAdminOrder__VariantsArgs = {};
type VariantPropType = keyof PlasmicCompletedAdminOrder__VariantsArgs;
export const PlasmicCompletedAdminOrder__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCompletedAdminOrder__ArgsType = {};
type ArgPropType = keyof PlasmicCompletedAdminOrder__ArgsType;
export const PlasmicCompletedAdminOrder__ArgProps = new Array<ArgPropType>();

export type PlasmicCompletedAdminOrder__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  h2?: p.Flex<"h2">;
  printBtn?: p.Flex<typeof Button>;
  homeBtn?: p.Flex<typeof Button>;
};

export interface DefaultCompletedAdminOrderProps {}

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

function PlasmicCompletedAdminOrder__RenderFunc(props: {
  variants: PlasmicCompletedAdminOrder__VariantsArgs;
  args: PlasmicCompletedAdminOrder__ArgsType;
  overrides: PlasmicCompletedAdminOrder__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

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
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox___4Zd1S)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___2Cd8S)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__txSgs)}>
                <CheckCircleIcon
                  className={classNames(projectcss.all, sty.svg__xvXht)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xrfub
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
                        {"PEDIDO CONCLUIDO"}
                      </h2>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <Button
                data-plasmic-name={"printBtn"}
                data-plasmic-override={overrides.printBtn}
                className={classNames("__wab_instance", sty.printBtn)}
                color={"green"}
                showStartIcon={true}
                startIcon={
                  <PrintIcon
                    className={classNames(projectcss.all, sty.svg___02JbQ)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__d8YUm
                  )}
                >
                  {"Imprimir"}
                </div>
              </Button>
              <Button
                data-plasmic-name={"homeBtn"}
                data-plasmic-override={overrides.homeBtn}
                className={classNames("__wab_instance", sty.homeBtn)}
                color={"softGreen"}
                showStartIcon={true}
                startIcon={
                  <HomeIcon
                    className={classNames(projectcss.all, sty.svg__scmKv)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7IiDf
                  )}
                >
                  {"Fazer outro pedido"}
                </div>
              </Button>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "h2", "printBtn", "homeBtn"],
  header: ["header"],
  h2: ["h2"],
  printBtn: ["printBtn"],
  homeBtn: ["homeBtn"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  h2: "h2";
  printBtn: typeof Button;
  homeBtn: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompletedAdminOrder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompletedAdminOrder__VariantsArgs;
    args?: PlasmicCompletedAdminOrder__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCompletedAdminOrder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCompletedAdminOrder__ArgsType,
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
          internalArgPropNames: PlasmicCompletedAdminOrder__ArgProps,
          internalVariantPropNames: PlasmicCompletedAdminOrder__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCompletedAdminOrder__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedAdminOrder";
  } else {
    func.displayName = `PlasmicCompletedAdminOrder.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedAdminOrder = Object.assign(
  // Top-level PlasmicCompletedAdminOrder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h2: makeNodeComponent("h2"),
    printBtn: makeNodeComponent("printBtn"),
    homeBtn: makeNodeComponent("homeBtn"),

    // Metadata about props expected for PlasmicCompletedAdminOrder
    internalVariantProps: PlasmicCompletedAdminOrder__VariantProps,
    internalArgProps: PlasmicCompletedAdminOrder__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCompletedAdminOrder;
/* prettier-ignore-end */

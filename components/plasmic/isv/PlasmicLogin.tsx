// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: RtpfTqHPc8

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
import TextInput from "../../TextInput"; // plasmic-import: ZCE1TfqnzIq/component
import Button from "../../Button"; // plasmic-import: dTivG-jH3lW/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: RtpfTqHPc8/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: AUsPFN29Z5Y/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1TlDUyNqop/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: k5kwo7sOrBj/icon

createPlasmicElementProxy;

export type PlasmicLogin__VariantMembers = {};
export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  invalidData?: p.Flex<"div">;
  user?: p.Flex<typeof TextInput>;
  password?: p.Flex<typeof TextInput>;
  signin?: p.Flex<typeof Button>;
};

export interface DefaultLoginProps {}

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

function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

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
        path: "user.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "password.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
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
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__hWjWy)}>
            <div className={classNames(projectcss.all, sty.freeBox__bsiDh)}>
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
                  {"Dados inv\u00e1lidos"}
                </div>
              ) : null}
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__wkvgH)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mmEcN
                    )}
                  >
                    {"Usuario"}
                  </div>
                  <TextInput
                    data-plasmic-name={"user"}
                    data-plasmic-override={overrides.user}
                    className={classNames("__wab_instance", sty.user)}
                    onChange={(...eventArgs) => {
                      p.generateStateOnChangeProp($state, ["user", "value"])(
                        (e => e.target?.value).apply(null, eventArgs)
                      );
                    }}
                    value={
                      p.generateStateValueProp($state, ["user", "value"]) ?? ""
                    }
                  />
                </p.Stack>
              ) : null}
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___19A5C)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gjV6A
                    )}
                  >
                    {"Senha"}
                  </div>
                  <TextInput
                    data-plasmic-name={"password"}
                    data-plasmic-override={overrides.password}
                    className={classNames("__wab_instance", sty.password)}
                    onChange={(...eventArgs) => {
                      p.generateStateOnChangeProp($state, [
                        "password",
                        "value"
                      ])((e => e.target?.value).apply(null, eventArgs));
                    }}
                    value={
                      p.generateStateValueProp($state, ["password", "value"]) ??
                      ""
                    }
                  />
                </p.Stack>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__dulrE)}>
                  <Button
                    data-plasmic-name={"signin"}
                    data-plasmic-override={overrides.signin}
                    className={classNames("__wab_instance", sty.signin)}
                    color={"blue" as const}
                    submitsForm={true}
                  >
                    {"Entrar"}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "invalidData", "user", "password", "signin"],
  header: ["header"],
  invalidData: ["invalidData"],
  user: ["user"],
  password: ["password"],
  signin: ["signin"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  invalidData: "div";
  user: typeof TextInput;
  password: typeof TextInput;
  signin: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogin__ArgsType,
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
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    invalidData: makeNodeComponent("invalidData"),
    user: makeNodeComponent("user"),
    password: makeNodeComponent("password"),
    signin: makeNodeComponent("signin"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */

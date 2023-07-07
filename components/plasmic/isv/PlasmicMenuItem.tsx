// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
// Component: XSxN5kXvF2

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_isv.module.css"; // plasmic-import: 7Kb5LCV89tNWBn4m3y5e9q/projectcss
import sty from "./PlasmicMenuItem.module.css"; // plasmic-import: XSxN5kXvF2/css

export type PlasmicMenuItem__VariantMembers = {};
export type PlasmicMenuItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenuItem__VariantsArgs;
export const PlasmicMenuItem__VariantProps = new Array<VariantPropType>();

export type PlasmicMenuItem__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  price?: React.ReactNode;
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  id?: string;
};
type ArgPropType = keyof PlasmicMenuItem__ArgsType;
export const PlasmicMenuItem__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "price",
  "image",
  "id"
);

export type PlasmicMenuItem__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultMenuItemProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  price?: React.ReactNode;
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  id?: string;
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

function PlasmicMenuItem__RenderFunc(props: {
  variants: PlasmicMenuItem__VariantsArgs;
  args: PlasmicMenuItem__ArgsType;
  overrides: PlasmicMenuItem__OverridesType;
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
      data-menuitem-id={args.id}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__j4S6X)}>
          <div className={classNames(projectcss.all, sty.freeBox__rBsbD)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__wtSy8)}>
                <div className={classNames(projectcss.all, sty.freeBox__gCuoj)}>
                  {p.renderPlasmicSlot({
                    defaultContents: "Combo 1",
                    value: args.title,
                    className: classNames(sty.slotTargetTitle)
                  })}
                </div>
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__uinhy)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___0YXaw)}
                >
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__r6HkW)}
                    >
                      <p.PlasmicImg
                        data-plasmic-name={"img"}
                        data-plasmic-override={overrides.img}
                        alt={""}
                        className={classNames(sty.img)}
                        displayHeight={"130px" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"130px" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={args.image}
                      />
                    </div>
                  ) : null}
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__qrX8)}
                    >
                      {p.renderPlasmicSlot({
                        defaultContents:
                          "1 Caldo\nBebida a vontade\n1 Sobremesa",
                        value: args.description,
                        className: classNames(sty.slotTargetDescription)
                      })}
                      {p.renderPlasmicSlot({
                        defaultContents: "R$ 20,00",
                        value: args.price,
                        className: classNames(sty.slotTargetPrice)
                      })}
                    </p.Stack>
                  ) : null}
                </p.Stack>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuItem__VariantsArgs;
    args?: PlasmicMenuItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuItem__ArgsType,
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
          internalArgPropNames: PlasmicMenuItem__ArgProps,
          internalVariantPropNames: PlasmicMenuItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuItem";
  } else {
    func.displayName = `PlasmicMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItem = Object.assign(
  // Top-level PlasmicMenuItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicMenuItem
    internalVariantProps: PlasmicMenuItem__VariantProps,
    internalArgProps: PlasmicMenuItem__ArgProps
  }
);

export default PlasmicMenuItem;
/* prettier-ignore-end */

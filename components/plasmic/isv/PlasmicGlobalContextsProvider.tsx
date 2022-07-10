// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7Kb5LCV89tNWBn4m3y5e9q
import * as React from "react";
import { ContentfulCredentialsProvider } from "../../contentful"; // plasmic-import: DhIDLXCb2A/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  contentfulCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof ContentfulCredentialsProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, contentfulCredentialsProviderProps } = props;

  return (
    <ContentfulCredentialsProvider
      {...contentfulCredentialsProviderProps}
      accessToken={
        contentfulCredentialsProviderProps &&
        "accessToken" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.accessToken!
          : ("ZhMf0iObSvHFPx861zNK4VNL6kOrURuEQh5R24_QdvE" as const)
      }
      environment={
        contentfulCredentialsProviderProps &&
        "environment" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.environment!
          : ("master" as const)
      }
      space={
        contentfulCredentialsProviderProps &&
        "space" in contentfulCredentialsProviderProps
          ? contentfulCredentialsProviderProps.space!
          : ("1qzqoknl91s3" as const)
      }
    >
      {children}
    </ContentfulCredentialsProvider>
  );
}
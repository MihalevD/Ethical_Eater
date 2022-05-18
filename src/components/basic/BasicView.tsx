import * as React from "react";
import { ComponentProps, ComponentType } from "react";
import { StyleSheet, View } from "react-native";
import Spacing from "../../utils/spacers";

export enum FlexTypes {
  POINT_ONE = 0.1,
  POINT_TWO = 0.2,
  POINT_THREE = 0.3,
  POINT_FOUR = 0.4,
  POINT_FIVE = 0.5,
  POINT_SIX = 0.6,
  POINT_SEVEN = 0.7,
  POINT_EIGHT = 0.8,
  POINT_NINE = 0.9,
  ONE = 1,
}

export type BasicBox<T extends ComponentType<any>> = {
  children?: React.ReactNode;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  spacing?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullPadding?: boolean;
  align?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  direction?: "row" | "column";
  component?: T;
  flex?: keyof typeof FlexTypes | number;
};

export default function BasicView<T extends ComponentType<any>>({
  children,
  style: _style = {},
  left,
  right,
  top,
  bottom,
  spacing,
  fullWidth,
  fullHeight,
  fullPadding,
  align = "flex-start",
  justify = "flex-start",
  direction = "column",
  component = View,
  flex = undefined,
  ...props
}: BasicBox<T> & ComponentProps<T>) {
  const _flex = typeof flex === "number" ? FlexTypes[flex] : flex;

  const styles = StyleSheet.create({
    view: {
      display: "flex",
      flex: _flex,
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      width: fullWidth ? "100%" : undefined,
      height: fullHeight ? "100%" : undefined,
      paddingLeft: left ? (spacing ? spacing : Spacing.small) : undefined,
      paddingRight: right ? (spacing ? spacing : Spacing.small) : undefined,
      paddingTop: top ? (spacing ? spacing : Spacing.small) : undefined,
      paddingBottom: bottom ? (spacing ? spacing : Spacing.small) : undefined,
      padding: fullPadding ? (spacing ? spacing : Spacing.small) : undefined,
    },
  });

  return React.createElement(
    component,
    { ...props, style: [styles.view, _style] },
    children
  );
}

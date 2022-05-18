import React from "react";
import { StyleSheet, Text } from "react-native";
import { TextProps } from "./Themed";
import {
  useFonts,
  FiraSans_200ExtraLight,
  FiraSans_300Light_Italic,
  FiraSans_400Regular,
  FiraSans_500Medium,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";
import AppLoading from "expo-app-loading";

type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

type Props = {
  fontWeight: FontWeight;
  text?: string;
  alignText?: "auto" | "left" | "right" | "center" | "justify";
  fontSize?: number;
  color?: string;
} & TextProps;

const checkFont = (fontWeight: FontWeight) => {
  switch (fontWeight) {
    case "200":
      return "FiraSans_200ExtraLight";
    case "300":
      return "FiraSans_300Light_Italic";
    case "400":
      return "FiraSans_400Regular";
    case "500":
      return "FiraSans_500Medium";
    case "700":
      return "FiraSans_700Bold";
    default:
      return "FiraSans_400Regular";
  }
};

const CustomText: React.FC<Props> = ({
  text: _text,
  fontSize: fontSize,
  fontWeight: fontWeight,
  alignText = "left",
  color: color,
  style: _style,
  ...rest
}) => {
  let [fontsLoaded] = useFonts({
    FiraSans_200ExtraLight,
    FiraSans_300Light_Italic,
    FiraSans_400Regular,
    FiraSans_500Medium,
    FiraSans_700Bold,
  });
  let fontFamily = checkFont(fontWeight);
  const styles = StyleSheet.create({
    text: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: color,
      textAlign: alignText,
    },
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <Text {...rest} style={[styles.text, _style]}>
        {_text}
      </Text>
    );
};

export default CustomText;

import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../utils/Colors";
import CustomText from "../components/basic/BasicTextContainer";
import FontSize from "../utils/fontSizes";
import { textCodes } from "../utils/textCodes";
import LogoSignUp from "../../assets/SignUp.svg";
import BasicView from "../components/basic/BasicView";
import Spacing from "../utils/spacers";
import React from "react";
import {
  useFonts,
  FiraSans_300Light_Italic,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";
import AppLoading from "expo-app-loading";

export default function SignUp({ navigation }) {
  const [name, onChangeName] = React.useState("Name");
  const [email, onChangeEmail] = React.useState("Email");
  const [pass, onChangePass] = React.useState("Password");
  const [passConfirm, onChangePassConfirm] = React.useState("Confirm password");
  let [fontsLoaded] = useFonts({
    FiraSans_300Light_Italic,
    FiraSans_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <BasicView align='center' spacing={Spacing.big} top>
        <BasicView
          justify='flex-start'
          fullWidth
          spacing={Spacing.big}
          top
          left
          bottom
        >
          <CustomText
            fontWeight='700'
            fontSize={FontSize.heading1}
            color={Colors.primary}
            text={textCodes.signUp}
          />
        </BasicView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          keyboardAppearance='dark'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassConfirm}
          value={passConfirm}
          keyboardAppearance='dark'
        />
        <BasicView align='center'>
          <Pressable style={styles.button1} onPress={() => navigation.goBack()}>
            <CustomText
              fontWeight='400'
              fontSize={FontSize.heading3}
              style={styles.buttonText}
              text={textCodes.create}
              color={Colors.primary}
            />
          </Pressable>
          <BasicView direction='row'>
            <CustomText
              fontWeight='400'
              fontSize={FontSize.bodyText3}
              style={styles.buttonText}
              text={textCodes.already}
              color={Colors.reviewName}
            />
            <CustomText
              fontWeight='700'
              fontSize={FontSize.bodyText3}
              style={styles.logInText}
              text={textCodes.logIn}
              color={Colors.primary}
            />
          </BasicView>
        </BasicView>
        <BasicView>
          <LogoSignUp></LogoSignUp>
        </BasicView>
      </BasicView>
    );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "FiraSans_300Light_Italic",
    fontSize: 20,
    height: 65,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    borderColor: Colors.primary,
  },
  button1: {
    backgroundColor: Colors.primaryLight,
    borderRadius: Spacing.small,
    marginTop: Spacing.big,
    width: 300,
    height: 65,
    alignContent: "center",
    borderWidth: 3,
    borderColor: Colors.primary,
  },
  buttonText: {
    textAlign: "center",
    margin: "auto",
    lineHeight: 65,
  },
  logInText: {
    textAlign: "center",
    margin: "auto",
    lineHeight: 65,
    paddingLeft: 10,
  },
});

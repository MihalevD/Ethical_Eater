import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Logo from "../../assets/logo.svg";
import background from "../../assets/BackgroundPhoto.png";
import { Colors } from "../../src/utils/Colors";
import CustomText from "../components/basic/BasicTextContainer";
import BasicView from "../components/basic/BasicView";
import FontSize from "../utils/fontSizes";
import Spacing from "../utils/spacers";
import { textCodes } from "../utils/textCodes";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={background}
      resizeMode='cover'
      style={styles.image}
    >
      <BasicView justify='center' align='center' flex='1' style={styles.blur}>
        <Logo style={styles.logo}></Logo>
        <CustomText
          fontWeight='400'
          fontSize={FontSize.heading1}
          style={styles.heading}
          color={Colors.white}
          text={textCodes.landingHeading}
        />
        <CustomText
          fontWeight='200'
          fontSize={FontSize.bodyText1}
          style={styles.subHeading}
          color={Colors.white}
          text={textCodes.landingSubHeading}
        />
        <Pressable
          style={styles.button1}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <CustomText
            fontWeight='400'
            fontSize={FontSize.heading3}
            style={styles.buttonText}
            text={textCodes.logIn}
            color={Colors.primary}
          />
        </Pressable>
        <Pressable
          style={styles.button2}
          onPress={() => navigation.navigate("SignUp")}
        >
          <CustomText
            fontWeight='400'
            fontSize={FontSize.heading3}
            style={styles.buttonText}
            text={textCodes.signUp}
            color={Colors.primary}
          />
        </Pressable>
      </BasicView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  blur: {
    backgroundColor: "rgba(18,88,41, 0.61)",
  },
  image: {
    flex: 1,
  },
  logo: {
    borderColor: "#ffffff",
    borderWidth: 5,
    borderRadius: 100,
  },
  heading: {
    marginTop: Spacing.big,
    alignSelf: "center",
  },
  subHeading: {
    marginTop: Spacing.xsMedium,
    alignSelf: "center",
    paddingLeft: Spacing.big,
    paddingRight: Spacing.big,
    marginLeft: Spacing.medium,
    marginRight: Spacing.medium,
    textAlign: "center",
  },
  button1: {
    backgroundColor: Colors.white,
    borderRadius: Spacing.small,
    marginTop: Spacing.big,
    width: 300,
    height: 65,
    alignContent: "center",
  },
  button2: {
    backgroundColor: Colors.white,
    borderRadius: Spacing.small,
    marginTop: Spacing.medium,
    width: 300,
    height: 65,
    textAlign: "center",
    opacity: 0.67,
  },
  buttonText: {
    textAlign: "center",
    margin: "auto",
    lineHeight: 65,
  },
});

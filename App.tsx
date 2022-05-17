import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Logo from "./assets/logo.svg";
import background from "./assets/BackgroundPhoto.png";
import { textCodes } from "./src/utils/textCodes";
import FontSize from "./src/utils/fontSizes";
import Spacing from "./src/utils/spacers";
import { Colors } from "./src/utils/colors";

export default function App() {
  return (
    <ImageBackground
      source={background}
      resizeMode='cover'
      style={styles.image}
    >
      <View style={styles.blur}>
        <Logo style={styles.logo}></Logo>
        <Text style={styles.heading}> {textCodes.landingHeading}</Text>
        <Text style={styles.subHeading}> {textCodes.landingSubHeading}</Text>
        <Pressable
          style={styles.button1}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonText}>{textCodes.logIn}</Text>
        </Pressable>
        <Pressable
          style={styles.button2}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonText}>{textCodes.signUp}</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  blur: {
    flex: 1,
    backgroundColor: "rgba(18,88,41, 0.61)",
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: FontSize.heading1,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
  subHeading: {
    marginTop: Spacing.xsMedium,
    fontSize: FontSize.bodyText1,
    color: "#FFFFFF",
    fontWeight: "200",
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
    color: Colors.primary,
    textAlign: "center",
    margin: "auto",
    fontSize: FontSize.heading3,
    lineHeight: 65,
  },
});

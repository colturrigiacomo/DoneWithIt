import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    //marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;

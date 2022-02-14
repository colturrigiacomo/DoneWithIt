import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...rest }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput style={defaultStyles.text} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;

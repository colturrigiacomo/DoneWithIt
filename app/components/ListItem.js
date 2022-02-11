import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </Swipeable>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
export default ListItem;

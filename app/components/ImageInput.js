import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
// import * as Permissions from "expo-permissions";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    //const result = Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "No",
        },
      ]);
  };

  const selectImage = async () => {
    try {
      const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!cancelled) onChangeImage(uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;

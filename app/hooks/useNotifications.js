import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import pushTokenApi from "../api/pushToken";
import navigation from "./rootNavigation";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      pushTokenApi.register(token);
    } catch (error) {
      console.log("Error while retrieving notification token", error);
    }
  };
};

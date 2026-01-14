import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import ConfettiButton from "../../components/ui/confetti-button";
import "react-native-gesture-handler";
import "react-native-reanimated";
import ConfettiAnimation from "../../components/ui/confetti-animation";
import { Router, useRouter } from "expo-router";
// import useHandlePress from "./utils/utils";

const YourApp = () => {
  // const handlepress = useHandlePress();
  const router = useRouter();

  const handlePressLive = () => {
    router.navigate("/(tabs)/listening-live-page");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ConfettiButton title="Click Me" onPress={handlePressLive} />
    </View>
  );
};

export default YourApp;

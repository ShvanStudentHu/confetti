import React, { Component } from "react";
import { Button, Text, StyleSheet, Pressable } from "react-native";

type ConfettiButtonProps = {
  title: string;
  onPress: () => void;
};

const ConfettiButton = ({ title, onPress }: ConfettiButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default ConfettiButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e8eb2a",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#192a75",
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: "#04AA6D",
  },
});

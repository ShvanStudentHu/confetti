import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Confetti, { ConfettiProps } from "react-native-reanimated-confetti";

const ConfettiAnimation = forwardRef((props: ConfettiProps, ref) => {
  const confettiRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    start: () => {
      confettiRef.current?.start();
    },
  }));

  return (
    <View style={styles.container} pointerEvents="none">
      <Confetti
        {...(props as any)}
        ref={confettiRef as any}
        count={100}
        duration={3000}
        colors={["#ff0a54", "#ff477e", "#ff7096", "#ffd166", "#06d6a0"]}
        explosionSpeed={350}
        fallSpeed={3000}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
});

export default ConfettiAnimation;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
});

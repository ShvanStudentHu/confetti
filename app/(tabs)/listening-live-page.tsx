import "react-native-gesture-handler";
import "react-native-reanimated";
import { Text, View, StyleSheet } from "react-native";
import ConfettiAnimation from "../../components/ui/confetti-animation";

const defaultpostRoomScreen = () => {
  return (
    <View style={style.base}>
      <ConfettiAnimation></ConfettiAnimation>
      <Text style={style.headerText}>Your listing is now live!🎉</Text>
      <Text style={style.baseText}>
        But wait.. that was only the first part
      </Text>
    </View>
  );
};

export default defaultpostRoomScreen;

const style = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    margin: 5,
    color: "white",
  },

  baseText: {
    color: "white",
  },
});

import { useRouter } from "expo-router";

export function useHandlePress() {
  const router = useRouter();
  return () => {
    console.log("test");
    router.push("/(tabs)/listening-live-page");
  };
}

export default useHandlePress;

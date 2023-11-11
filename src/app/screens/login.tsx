import { Text, View } from "react-native";
import { InputComponent } from "../components/input";

export function Login () {
  return (
    <View className="bg-background flex-1 items-center justify-center">
      <Text className="text-text">Login</Text>
      <InputComponent />
    </View>
  )
}
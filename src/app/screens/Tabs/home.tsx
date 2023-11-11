import { ButtonComponent } from "@/components/button";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { NavigationProps } from "@/types/types";
import { auth } from "firebaseConfig";

export function Home() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
      <Text>Home</Text>
    </View>
  );
}

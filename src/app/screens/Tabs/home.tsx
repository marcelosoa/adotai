import { ButtonComponent } from "@/components/button";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { NavigationProps } from "types/types";

export function Home() {
  const navigation = useNavigation<NavigationProps>()

  return (
    <View>
      <Text>Home</Text>
      <ButtonComponent onPress={() => navigation.navigate("Login")}>
        <Text>Voltar</Text>
      </ButtonComponent>
    </View>
  );
}

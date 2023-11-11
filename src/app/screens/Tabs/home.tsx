import { ButtonComponent } from "@/components/button";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";

export function Home () {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <ButtonComponent onPress={() => navigation.navigate('Login')}>
        <Text>Voltar</Text>
      </ButtonComponent>
    </View>
  )
}
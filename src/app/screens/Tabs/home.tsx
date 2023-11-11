import { ButtonComponent } from "@/components/button";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { NavigationProps } from "@/types/types";
import { auth } from "firebaseConfig";

export function Home() {
  const navigation = useNavigation<NavigationProps>()

  const logout = () => {
    try {
      auth.signOut()
      navigation.navigate('Login')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <View>
      <Text>Home</Text>
      <ButtonComponent onPress={logout}>
        <Text>Voltar</Text>
      </ButtonComponent>
    </View>
  );
}

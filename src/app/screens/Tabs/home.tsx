import { ButtonComponent } from "@/components/button";
import { useNavigation } from "@react-navigation/native";
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
    <View className="flex-1 bg-background items-center justify-center">
      <Text>Home</Text>
      <ButtonComponent onPress={logout}>
        <Text>Voltar</Text>
      </ButtonComponent>
    </View>
  );
}

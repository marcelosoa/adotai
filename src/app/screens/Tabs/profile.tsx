import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AvatarComponent } from "@/components/avatar";
import { auth } from "firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/types/types";
import { ButtonComponent } from "@/components/button";

export function Profile() {
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
    <View className="bg-background flex-1 items-center">
      <View className="flex items-center justify-between w-full pl-7 pr-7 pt-16 flex-row">
        <MaterialCommunityIcons name="exit-to-app" color={"#ff6d4d"} size={20} onPress={logout}/>
      </View>

      <View className="items-center">
        <AvatarComponent
          size="large"
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGCu3ETf6NPxGijCEaIvANw6fyshVbUJs42fXNSqNI0P_AmBBL'
          }}
        />
        <Text className="text-text mt-6">Zeca Pagodinho</Text>
      </View>

      <View className="mt-4 items-center flex">
        <Text className="text-text">Meus Pets</Text>

      </View>
    </View>
  );
}

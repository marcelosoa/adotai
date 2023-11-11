import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AvatarComponent } from "@/components/avatar";
import { useContext } from "react";
import { AuthContext } from "@/context/useAuthContext";

export function Profile() {
  const { logout } = useContext(AuthContext)

  return (
    <View className="bg-background flex-1 items-center">
      <View className="flex items-center w-full pl-7 pr-7 pt-16 flex-row justify-end">
        <MaterialCommunityIcons name="exit-to-app" color={"#ff6d4d"} size={24} onPress={logout}/>
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

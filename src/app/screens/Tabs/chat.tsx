import { NavigationProps, Mensagens } from "@/types/types";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

export function Chat () {
  const route = useRoute<Mensagens>();

  const { pet } = route.params;

  console.log(pet, 'PET')

  return (
    <View className="flex items-center bg-background flex-1 justify-center">
      <Text>Chat screen</Text>
      <Text>{pet.name}</Text>
      <Text>{pet.color}</Text>
      <Image source={{ uri: pet.photo }} className="w-10 h-10"/>
    </View>
  )
}
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, Image, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProps, PawProfile as PawProfileProps } from "@/types/types";

export function PawProfile() {
  const route = useRoute<PawProfileProps>();
  const navigation = useNavigation<NavigationProps>();

  const { pet } = route.params;

  return (
    <View className="bg-background flex-1">
      <View>
        <Image source={{ uri: pet.photo }} className="h-80 w-screen" />
      </View>

      <View className="mt-2 p-2">
        <View className="flex justify-between flex-row">
        <Text className="text-text font-bold text-3xl">{pet.name}</Text>
        <MaterialCommunityIcons name="share" size={24} onPress={() => console.log('Compartilhara')}/>

        </View>

        <View className="border-b-2 border-gray/70 h-10 flex justify-between flex-row mt-2">
          <Text> Localização: {pet.location} </Text>
          <View>
          <Pressable
            onPress={() => navigation.navigate("FormContact")}
            className="bg-accent w-30 p-2 rounded-full shadow active:bg-primary/5"
          >
            <Text className="text-white/70 font-semibold">Entre em contato</Text>
          </Pressable>

          </View>
        </View>

        <View className="mt-2">
          <Text className="text-text">
            Descrição: {pet.description.descriptionInside}{" "}
          </Text>

          <Text className="text-text">
            Descrição: {pet.description.descriptionInside}{" "}
          </Text>
        </View>

        <View className="mt-4">
          <Text className="text-text font-bold">Situação</Text>
          <View className="">
            <Text>Porte: {pet.description.porte}</Text>
            <Text>Raça: {pet.description.raca}</Text>
            <Text>
              Estado de Saúde: {pet.description.health}{" "}
              <MaterialCommunityIcons
                name="heart"
                size={16}
                color={"#ff6d4d"}
              />
            </Text>
            <Text>
              Vacinas: {pet.description.vacine}{" "}
              <MaterialCommunityIcons
                name="needle"
                size={16}
                color={"#ff6d4d"}
              />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

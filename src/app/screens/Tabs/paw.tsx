import { SearchComponent } from "@/components/search";
import { NavigationProps } from "@/types/types";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

type PetsProps = {
  name: string,
  age: string,
  sex: string,
  type: string
  color: string
  id: number
  description: {
    porte: string,
    raca: string,
    health: string
    vacine: string
  },
  photo: string
}

export function Paw() {
  const navigation = useNavigation<NavigationProps>();
  const [searchTerm, setSearchTerm] = useState("");
  const pets: PetsProps[] = [
    {
      name: "Rodolfo",
      age: "2 anos e 6 meses",
      sex: "male",
      color: "Tricolor",
      type: "cat",
      id: 1,
      description: {
        porte: "Grande",
        raca: "SRD",
        health: "Saudável",
        vacine: 'Todas'
      },
      photo:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTGleQoEl3_6SCG-oVtK7Yc1apwbW_BdnFhIKjsAVMSurkjSQXFlC6K5e-9NBecBsnAKNUviL_MTraH5bE",
    },
    {
      name: "Maya",
      age: "2 anos e 6 meses",
      sex: "male",
      type: "cat",
      color: "Tricolor",
      description: {
        porte: "Grande",
        raca: "SRD",
        health: "Saudável",
        vacine: 'Todas',
      },
      id: 2,
      photo:
        "https://img.olhardigital.com.br/wp-content/uploads/2022/05/shutterstock_gata-tricolor-femea.jpg",
    },
    {
      name: "Rael",
      age: "1 ano e 4 meses",
      sex: "male",
      type: "dog",
      color: "Pirata P/B",
      description: {
        porte: "Grande",
        raca: "SRD",
        health: "Saudável",
        vacine: 'Todas'
      },
      id: 3,
      photo:
        "https://t2.ea.ltmcdn.com/pt/posts/3/9/6/terra_nova_23693_2_600.jpg",
    },
    {
      name: "Ravena",
      age: "2 anos de 6 meses",
      sex: "female",
      type: "cat",
      color: "Preta",
      description: {
        porte: "Médio",
        raca: "SRD",
        health: "Saudável",
        vacine: 'Todas'
      },
      id: 4,
      photo:
        "https://blog-static.petlove.com.br/wp-content/uploads/2022/05/gato-preto-deitado-Petlove.jpg",
    },
  ];
  const [filteredPets, setFilteredPets] = useState(pets);

  const handleSearch = (text: string) => {
    setSearchTerm(text)
    const filtered = pets.filter((pet) =>
      pet.type.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPets(filtered);

  }

  return (
    <View className="bg-background flex-1">
      <View className="bg-primary flex items-center">
        <SearchComponent placeholder="Pesquisar" onChangeText={handleSearch} value={searchTerm}/>
      </View>

      <FlatList
        data={filteredPets}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-1/2 p-4"
            key={item.id}
            onPress={() => navigation.navigate("PawProfile", { id: item.id })}
          >
            <View className="bg-accent/40 rounded-lg">
              {item.photo && (
                <Image
                  source={{ uri: item.photo }}
                  className=" h-20 resizeMode-cover rounded"
                />
              )}
              <View className="bg-background/70 h-[30rem]">
                <View className="flex flex-row items-center justify-between p-1">
                  <Text className="text-text font-bold flex">{item.name}</Text>
                  <Text className="text-text">
                    {item.type === "cat" ? (
                      <MaterialCommunityIcons
                        name="cat"
                        color={"#fafafa"}
                        size={24}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="dog"
                        color={"#fafafa"}
                        size={24}
                      />
                    )}
                  </Text>
                </View>
                <View className="flex text-text flex-col p-2">
                  <Text className="text-text font-bold">
                    Porte: {item.description?.porte}
                  </Text>
                  <Text className="text-text font-light">Raça: {item.description?.raca}</Text>
                  <Text className="text-text font-light">Saúde: {item.description?.health}</Text>
                  <Text className="text-text font-light">Vacinas: {item.description?.vacine}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

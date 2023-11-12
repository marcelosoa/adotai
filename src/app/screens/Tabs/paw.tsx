import { SearchComponent } from "@/components/search";
import { NavigationProps } from "@/types/types";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export type PetsProps = {
  name: string;
  age: string;
  sex: string;
  type: string;
  color: string;
  id: number;
  adotado: boolean,
  description: {
    porte: string;
    raca: string;
    health: string;
    vacine: string;
    descriptionInside?: string
  };
  photo: string;
  location: string;
};

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
      adotado: false,
      description: {
        porte: "Grande",
        raca: "Sem Raça Definida",
        health: "Saudável",
        vacine: "Todas",
        descriptionInside: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      location: "Rio de Janeiro",
      photo:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTGleQoEl3_6SCG-oVtK7Yc1apwbW_BdnFhIKjsAVMSurkjSQXFlC6K5e-9NBecBsnAKNUviL_MTraH5bE",
    },
    {
      name: "Maya",
      age: "2 anos e 6 meses",
      sex: "male",
      type: "cat",
      color: "Tricolor",
      adotado: false,
      description: {
        porte: "Grande",
        raca: "Sem Raça Definida",
        health: "Saudável",
        vacine: "Todas",
        descriptionInside: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      id: 2,
      location: "Rio de Janeiro",
      photo:
        "https://img.olhardigital.com.br/wp-content/uploads/2022/05/shutterstock_gata-tricolor-femea.jpg",
    },
    {
      name: "Rael",
      age: "1 ano e 4 meses",
      sex: "male",
      type: "dog",
      color: "Pirata P/B",
      adotado: false,
      description: {
        porte: "Grande",
        raca: "Sem Raça Definida",
        health: "Saudável",
        vacine: "Todas",
        descriptionInside: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      id: 3,
      location: "Rio de Janeiro",
      photo:
        "https://t2.ea.ltmcdn.com/pt/posts/3/9/6/terra_nova_23693_2_600.jpg",
    },
    {
      name: "Ravena",
      age: "2 anos de 6 meses",
      sex: "female",
      type: "cat",
      adotado: false,
      color: "Preta",
      description: {
        porte: "Médio",
        raca: "SRD",
        health: "Saudável",
        vacine: "Todas",
        descriptionInside: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      id: 4,
      location: "Rio de Janeiro",
      photo:
        "https://blog-static.petlove.com.br/wp-content/uploads/2022/05/gato-preto-deitado-Petlove.jpg",
    },
  ];
  const [filteredPets, setFilteredPets] = useState(pets);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const filtered = pets.filter((pet) =>
      pet.type.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPets(filtered);
  };

  return (
    <View className="bg-background flex-1">
      <View className="bg-accent/50 flex items-center">
        <SearchComponent
          placeholder="Pesquisar"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>

      <FlatList
        data={filteredPets}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-1/2 p-4"
            key={item.id}
            onPress={() => navigation.navigate("PawProfile", { pet: item })}
          >
            <View className="bg-primary/40 rounded-lg">
              {item.photo && (
                <Image
                  source={{ uri: item.photo }}
                  className=" h-20 resizeMode-cover rounded"
                />
              )}
              <View className="bg-accent/70 h-[30rem]">
                <View className="flex flex-row items-center justify-between p-1">
                  <Text className="text-white font-bold flex">{item.name}</Text>
                  <Text className="text-text">
                    {item.type === "cat" ? (
                      <MaterialCommunityIcons
                        name="cat"
                        color={"#f2effa"}
                        size={24}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="dog"
                        color={"#f2effa"}
                        size={24}
                      />
                    )}
                  </Text>
                </View>
                <View className="flex text-text flex-col p-2">
                  <Text className="text-white font-bold">
                    Porte: {item.description?.porte}
                  </Text>
                  <View className="mt-2">
                    <Text className="text-white font-light">
                      Raça: {item.description?.raca}
                    </Text>
                    <Text className="text-white font-light">
                      Saúde: {item.description?.health}
                    </Text>
                    <Text className="text-white font-light">
                      Vacinas: {item.description?.vacine}
                    </Text>
                  </View>
                  <Text className="text-white font-semibold mt-2 whitespace-nowrap">
                    Localização: {item.location}
                  </Text>
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

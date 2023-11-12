import { ButtonComponent } from "@/components/button";
import { InputComponent } from "@/components/input";
import { Text, View } from "react-native";

export function Form() {
  return (
    <View className="flex-1 bg-background items-center mt-10">
      <View className="mt-16">
        <Text>Formulário para adoção responsável:</Text>
      </View>

      <View className="w-full items-center">
        <InputComponent
          disabled={false}
          onChangeText={() => ""}
          placeholder="Nome Completo"
          secureTextEntry={false}
          value=""
          placeholderTextColor="#000"
        />

        <InputComponent
          disabled={false}
          onChangeText={() => ""}
          placeholder="Endereço"
          secureTextEntry={false}
          value=""
          placeholderTextColor="#000"
        />
        <InputComponent
          disabled={false}
          onChangeText={() => ""}
          placeholder="Idade"
          secureTextEntry={false}
          value=""
          placeholderTextColor="#000"
        />
        <InputComponent
          disabled={false}
          onChangeText={() => ""}
          placeholder="Cidade"
          secureTextEntry={false}
          value=""
          placeholderTextColor="#000"
        />
        <InputComponent
          disabled={false}
          onChangeText={() => ""}
          placeholder="Casa ou Apartamento"
          secureTextEntry={false}
          value=""
          placeholderTextColor="#000"
        />
        <InputComponent
          disabled={false}
          onChangeText={() => ""}
          placeholder="Telefone"
          secureTextEntry={false}
          value=""
          placeholderTextColor="#000"
        />


        <Text>Ciente que entraremos em contato para confirmar informações</Text>

        <ButtonComponent onPress={() => ''}>
          <Text className="text-white">Enviar</Text>
        </ButtonComponent>
      </View>
    </View>
  );
}

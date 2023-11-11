import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InputComponent }  from '@/components/input'
import { ButtonComponent } from "@/components/button";
import { useNavigation } from "@react-navigation/native";

export function Login () {
  const navigation = useNavigation()

  return (
    <View className="bg-background flex-1 items-center justify-center">
      <InputComponent
        disabled={false}
        onChangeText={() => console.log('uepa')}
        placeholder="Email"
        value=""
        startIcon={<MaterialCommunityIcons name="email-outline" size={20}/>}
      />

      <InputComponent
        disabled={false}
        onChangeText={() => console.log('uepa')}
        placeholder="Password"
        value=""
        endIcon={<MaterialCommunityIcons name="eye-outline" size={20}/>}
      />

      <ButtonComponent onPress={() => navigation.navigate('Home')}>
        <Text>Criar conta</Text>
      </ButtonComponent>
    </View>
  )
}
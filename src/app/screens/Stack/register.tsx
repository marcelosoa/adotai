import { ButtonComponent } from "@/components/button";
import { InputComponent } from "@/components/input";
import { AuthContext } from "@/context/useAuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { View, Text } from "react-native";

export default function Register () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signUp } = useContext(AuthContext)


  return (
    <View className="bg-background items-center flex flex-1 justify-center">
      <InputComponent
        disabled={false}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
        startIcon={<MaterialCommunityIcons name="email-outline" size={20}/>}
      />

      <InputComponent
        disabled={false}
        placeholder="Senha"
        onChangeText={(password) => setPassword(password)}
        value={password}
        endIcon={<MaterialCommunityIcons name="eye-outline" size={20}/>}
      />

      <ButtonComponent onPress={() => signUp({email, password})}>
        <Text className="text-slate-800 shadow">Teste</Text>
      </ButtonComponent>

      
    </View>
  )
}
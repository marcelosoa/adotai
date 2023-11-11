import { ButtonComponent } from "@/components/button";
import { InputComponent } from "@/components/input";
import { AuthContext, formData } from "@/context/useAuthContext";
import { useTogglePassword } from "@/hooks/useTogglePassword";
import { NavigationProps } from "@/types/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { User, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";
import { useContext, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function Register() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const { togglePassword, visibility } = useTogglePassword()

  const navigation = useNavigation<NavigationProps>()

  const signUp = async ({ email, password }: formData) => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setUser(user)
      navigation.navigate('Main')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="bg-background items-center flex flex-1 justify-center">
      <InputComponent
        disabled={false}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
        secureTextEntry={false}
        startIcon={<MaterialCommunityIcons name="email-outline" size={20} />}
      />

      <InputComponent
        disabled={false}
        placeholder="Senha"
        secureTextEntry={visibility}
        onChangeText={(password) => setPassword(password)}
        value={password}
        endIcon={ visibility ? (
          <MaterialCommunityIcons name="eye-outline" size={20} onPress={togglePassword}/>
        ) :
        <MaterialCommunityIcons name="eye-off-outline" size={20} onPress={togglePassword}/>
        }
      />

      {loading ? (
        <ActivityIndicator color={"#000"} size={"small"} />
      ) : (
        <ButtonComponent onPress={() => signUp({ email, password })}>
          <Text className="text-slate-800 shadow">Cadastrar-se</Text>
        </ButtonComponent>
      )}
    </View>
  );
}

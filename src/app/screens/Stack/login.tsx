import { ActivityIndicator, Alert, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InputComponent } from "@/components/input";
import { ButtonComponent } from "@/components/button";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/useAuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const { signIn, loading } = useContext(AuthContext);

  return (
    <View className="bg-background flex-1 items-center justify-center">
      <InputComponent
        disabled={false}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        value={email}
        startIcon={<MaterialCommunityIcons name="email-outline" size={20} />}
      />

      <InputComponent
        disabled={false}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        value={password}
        endIcon={<MaterialCommunityIcons name="eye-outline" size={20} />}
      />

      {loading ? (
        <ActivityIndicator color={"#000"} size={"small"} />
      ) : (
        <ButtonComponent onPress={() => signIn({email, password})}>
          <Text>Criar conta</Text>
        </ButtonComponent>
      )}
    </View>
  );
}

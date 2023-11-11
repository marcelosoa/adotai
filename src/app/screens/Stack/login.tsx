import { ActivityIndicator, Alert, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InputComponent } from "@/components/input";
import { ButtonComponent } from "@/components/button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { AuthContext, formData } from "@/context/useAuthContext";
import { User, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";
import { NavigationProps } from "types/types";

export function Login() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation<NavigationProps>()

  const signIn = async ({ email, password }: formData) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setUser(user)
      navigation.navigate('Main')
    } catch (error) {
      Alert.alert(error?.message)
    } finally {
      setLoading(false)
    }
  }

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
          <Text>Conectar</Text>
        </ButtonComponent>
      )}
    </View>
  );
}

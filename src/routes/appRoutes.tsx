import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Login } from "../app/screens/login";

export function AppRoutes () {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: true,
      }}>
        <Stack.Screen name="login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Login } from "../app/screens/Stack/login";
import Register from "@/app/screens/Stack/register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/app/screens/Tabs/home";
import { Profile } from "@/app/screens/Tabs/profile";
import AuthProvider from "@/context/useAuthContext";

export function AppRoutes() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons  name="home" color={color} size={size}/>
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons  name="home" color={color} size={size}/>
        }} />
      </Tab.Navigator>
    );
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Main" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

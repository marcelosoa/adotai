import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../app/screens/Stack/login";
import Register from "@/app/screens/Stack/register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/app/screens/Tabs/home";
import { Profile } from "@/app/screens/Tabs/profile";

export function AppRoutes() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function Tabs() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    );
  }

  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Tabs} options={{ headerTitle: 'false', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

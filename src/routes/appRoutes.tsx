import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Login } from "../app/screens/Stack/login";
import Register from "@/app/screens/Stack/register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/app/screens/Tabs/home";
import { Profile } from "@/app/screens/Tabs/profile";
import AuthProvider from "@/context/useAuthContext";
import { Chat } from "@/app/screens/Tabs/chat";
import { Paw } from "@/app/screens/Tabs/paw";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "firebaseConfig";
import { PawProfile } from "@/app/screens/Stack/[id]paw";
import { Form } from "@/app/screens/Stack/form";

export function AppRoutes() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  })

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ 
          headerShown: false, 
          tabBarActiveTintColor: '#ff6d4d',
          tabBarLabelStyle: {
            backgroundColor: '#fafafa',
            color: '#180202',
            fontSize: 12
          }
          }}>
        <Tab.Screen name="Inicio" component={Home} options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons  name="home" color={color} size={size}/>
        }}/>
        <Tab.Screen name="Adote" component={Paw} options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons  name="paw" color={color} size={size}/>
        }}/>
        <Tab.Screen name="Mensagens" component={Chat} options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons  name="message-text" color={color} size={size}/>
        }} />
        <Tab.Screen name="Perfil" component={Profile} options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons  name="account" color={color} size={size}/>
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
          {user ? (
            <Stack.Screen name="Main" component={MyTabs} />

          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
          
          <Stack.Screen name="Initial" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="FormContact" component={Form} options={{ headerShown: true, headerTransparent: true, headerTitle: '' }}/>
          <Stack.Screen name="PawProfile" component={PawProfile} options={{ headerShown: true, headerTransparent: true, headerTitle: '' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

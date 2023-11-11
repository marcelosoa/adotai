import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack'

export type RoutesParamList = {
  Home: undefined,
  Login: undefined,
  Profile: undefined
  Main: undefined
}

export type NavigationProps = StackNavigationProp<RoutesParamList>

export type HomeProp = RouteProp<RoutesParamList, 'Login'>
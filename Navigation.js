import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'

//SCREENS
import LoginScreen from "./Screens/LoginScreen"
import RecoveryScreen from "./Screens/RecoveryScreen"
import RecoveryMessage from "./Screens/RecoveryMessage"
import HomeScreen from "./Screens/HomeScreen"
import SumasLevels from "./Screens/SumasLevels"

const Stack = createNativeStackNavigator();

function Stacks() {
  return (
  <Stack.Navigator 
  initialRouteName="Login"
  >
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Recovery"
        component={RecoveryScreen}
      />
      <Stack.Screen
        name="RecoveryM"
        component={RecoveryMessage}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sumas"
        component={SumasLevels}
      />
    </Stack.Navigator>
  )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stacks/>
        </NavigationContainer>
    )
}
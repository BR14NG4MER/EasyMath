import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'

//SCREENS
import LoginScreen from "./Screens/LoginScreen"
import RecoveryScreen from "./Screens/RecoveryScreen"
import RecoveryMessage from "./Screens/RecoveryMessage"
import HomeScreen from "./Screens/HomeScreen"
import SumasLevels from "./Screens/SumasLevels"
import Register from "./Screens/Register"
import Level from "./Screens/Level"
import Tutoriales from "./Screens/Tutoriales"

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
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="RecoveryM"
        component={RecoveryMessage}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Sumas"
        component={SumasLevels}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Level"
        component={Level}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Tutorial"
        component={Tutoriales}
        options={{headerTitle: ''}}
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
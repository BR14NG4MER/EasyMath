import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'

//SCREENS
import LoginScreen from "./Screens/LoginScreen"
import RecoveryScreen from "./Screens/RecoveryScreen"
import RecoveryMessage from "./Screens/RecoveryMessage"
import HomeScreen from "./Screens/HomeScreen"
import SumasLevels from "./Screens/SumasLevels"
import RestasLevels from "./Screens/RestasLevels"
import MultiLevels from "./Screens/MultiLevels"
import DivLevels from "./Screens/DivLevels"
import Register from "./Screens/Register"
import LevelS from "./Screens/Levels/LevelS"
import LevelR from "./Screens/Levels/LevelR"
import LevelM from "./Screens/Levels/LevelM"
import LevelD from "./Screens/Levels/LevelD"
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
        name="Restas"
        component={RestasLevels}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Multiplicacion"
        component={MultiLevels}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Division"
        component={DivLevels}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="LevelS"
        component={LevelS}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="LevelR"
        component={LevelR}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="LevelM"
        component={LevelM}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="LevelD"
        component={LevelD}
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
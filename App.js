import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList } from 'react-native-web';

const Fondo=(require('./Imagenes/Fondo.png'))

const styles=StyleSheet.create({
  container:{
    width:'100%',
    height: '100%',
    backgroundColor: '#644BFF',
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  Flex2Columnas:{
    flexDirection: 'row',
    flex: 1
  },
  title:{
    fontSize:40,
    color:'white'
  },
  logo:{
    width: 150,
    height: 150
  },
  Fondo:{
    height:'100%',
    width:'100%'
  },
  Alineacion:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  Boton:{
    borderRadius: 50,
    marginBottom: 10
  },
});

function Carga({ navigation }) {
  return (
    <View style={[styles.container]}>
      <ImageBackground source={Fondo} style={[styles.Fondo, styles.Alineacion]}>
        <Image
        style={[styles.logo]}
        source={require('./Imagenes/Mascota.png')}
        />
        <Text style={[styles.title]}>EasyMath.</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        />
      </ImageBackground>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fondo} style={styles.Fondo}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={[styles.title, {margin: 10}]}>EasyMath</Text>
        </View>

        <View style={{ flex: 2, alignItems: 'center'}}>
          <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Nombre de Usuario/Correo Electronico</Text>
          <TextInput style={{width: '55%', height: 40, borderColor: 'black', backgroundColor: '#ABA7A7', borderWidth: 2, textAlign: 'center'}} placeholder='example@fomain.com' placeholderTextColor={'gray'} />
          <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Contraseña</Text>
          <TextInput style={{width: '55%', height: 40, borderColor: 'black', backgroundColor: '#ABA7A7', borderWidth: 2, textAlign: 'center'}} secureTextEntry={true}/>
          <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>¿Olvidaste tu Contraseña?</Text>
          <Button title= 'Ingresar' color='#57D993' onPress={() => navigation.navigate('Home')} style={styles.Boton} />
          <Button title=' ' color='red' onPress={() => navigation.navigate('Recovery')}/>
        </View>
      </ImageBackground>
    </View>
  )
}

function RecoveryPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fondo} style={styles.Fondo}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={[styles.title, {margin: 10}]}>EasyMath</Text>
        </View>

        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Correo Electronico</Text>
          <TextInput style={{width: '55%', height: 40, borderColor: 'black', backgroundColor: '#ABA7A7', borderWidth: 2, textAlign: 'center', marginBottom: 10, borderRadius: 10}} placeholder='example@fomain.com' placeholderTextColor={'gray'} />
          <Button title= 'Recuperar Contraseña' color='#57D993' onPress={() => navigation.navigate('RecoveryMessage')} />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={[styles.row, {justifyContent: 'space-around'}]}>
          <Button title='Volver al Login' color='red' onPress={()=> navigation.navigate('Login')} />
          <Image source={require("./Imagenes/Raton4.png")} style={{width: 100, height: 100}} />
        </View>
      </View>
      </ImageBackground>
    </View>
  )
}

function RecoveryMessage({ navigation} ) {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fondo} style={styles.Fondo}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={[styles.title, {margin: 10}]}>EasyMath</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>Si esa cuenta existe, revise su correo electronico para restablecer su contraseña.</Text>
          <Button title='Regresar a Login' color='red' onPress={() => navigation.navigate('Login')} />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Image source={require("./Imagenes/Raton3.png")} style={{height: 100, width: 100}} />
        </View>
      </ImageBackground>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[styles.Flex2Columnas, {alignItems: 'center'}]}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, marginStart: 10}}>Bienvenido Usuario!</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Image style={{height: 100, width: 100}} source={require("./Imagenes/UserIcon.png")}/>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground source={require("./Imagenes/Tablero.png")} style={{height: 100, width: 170, alignSelf: 'center', justifyContent: 'center'}}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.row}>
          <Image source={require("./Imagenes/UserIcon.png")} style={{height: 50, width: 50}}/>
          <Text style={{fontSize: 10}}>Rango:{'\n'}Aprendiz</Text>
          </View>
          <View style={styles.row}>
          <Image source={require("./Imagenes/UserIcon.png")} style={{height: 50, width: 50}}/>
          <Text style={{fontSize: 10}}>Puntos:{'\n'}0000</Text>
          </View>
        </View>
      </ImageBackground>
      </View>
      
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={[styles.row, {justifyContent: 'space-around'}]}>
          <Button title='Tutorial' color='red' onPress={()=> navigation.navigate('Home')} style={{}}/>
          <Button title='Personaliza a Chippy' color='green' onPress={()=> navigation.navigate('Home')}/>
        </View>
      </View>

      <View style={{flex: 4, backgroundColor: '#35339C'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={[styles.row, {justifyContent: 'space-around'}]}>
            <Button title='Sumas' color='red' onPress={()=> navigation.navigate('Home')}/>
            <Button title='Restas' color='green' onPress={()=> navigation.navigate('Home')}/>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={[styles.row, {justifyContent: 'space-around'}]}>
            <Button title='Multiplicacion' color='red' onPress={()=> navigation.navigate('Home')}/>
            <Button title='Division' color='green' onPress={()=> navigation.navigate('Home')}/>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={[styles.row, {justifyContent: 'space-around'}]}>
            <Button title='Exponentes' color='red' onPress={()=> navigation.navigate('Home')}/>
          </View>
        </View>
        <View style={[styles.row, {justifyContent: 'space-around'}]}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Elige tu tema!</Text>
          <Image source={require("./Imagenes/Raton2.png")} style={{height: 120, width: 85}}/>
        </View>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Carga" component={Carga} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title:'', headerShown: false}} />
        <Stack.Screen name="Recovery" component={RecoveryPassword} />
        <Stack.Screen name="RecoveryMessage" component={RecoveryMessage} />
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

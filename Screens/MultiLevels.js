// SumasLevels.js
import * as React from "react";
import { View, Text, Image, Alert, ScrollView } from "react-native";
import Styles from "../Componentes/Styles";
import { ButtonLevel } from "../Componentes/Buttons";
import { useNavigation } from "@react-navigation/native";
//import { getQuestionsByLevel } from "../Preguntas/questionsSumas1"; // Importa la función

const SumasLevels = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...Styles.container
      }}
    >
      <View
        style={{
          height: '30%'
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: 'space-around'
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginStart: 10,
              textAlignVertical: 'center'
            }}>
            Bienvenido Usuario!
          </Text>
          <Image
            style={{
              height: 100,
              width: 100,
            }}
            source={require("../Imagenes/UserIcon.png")}
          />
        </View>
        <View
          style={{
            width: 300,
            height: 75,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: '#6764F2',
            borderRadius: 15,
            borderWidth: 1
          }}
        >
          <Text
            style={{
              fontSize: 40,
            }}
          >
            Multiplicacion
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#35339C',
          height: '70%'
        }}
      >
        <ScrollView style={{ borderWidth: 2 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-around'
            }}
          >
            <ButtonLevel text="I" onPress={() => navigation.navigate('LevelM', { nivel: 'I' })} />
            <ButtonLevel text="II" onPress={() => navigation.navigate('LevelM', { nivel: 'II' })} />
            <ButtonLevel text="III" onPress={() => alert("Proximamente")} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-around'
            }}
          >
            <ButtonLevel text="IV" onPress={() => alert("Proximamente")} />
            <ButtonLevel text="V" onPress={() => alert("Proximamente")} />
            <ButtonLevel text="VI" onPress={() => alert("Proximamente")} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-around'
            }}
          >
            <ButtonLevel text="???" onPress={() => alert("Proximamente")} />
            <ButtonLevel text="???" onPress={() => alert("Proximamente")} />
            <ButtonLevel text="???" onPress={() => alert("Proximamente")} />
          </View>
          {/* Agrega más botones según sea necesario */}
        </ScrollView>

        <Image
          source={require("../Imagenes/Raton2.png")}
          style={{
            height: 120,
            width: 85,
            alignSelf: 'flex-end',
            marginEnd: 10
          }} />
      </View>
    </View>
  );
}

export default SumasLevels;

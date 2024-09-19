import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Raposa from './assets/images/raposa.png';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>RAPOSA</Text>
      <Text style={styles.texto}>Mamífero da família Canidae.</Text>
      <Image source={Raposa} style={styles.imagem}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4530b2',
  },

  titulo: {
    fontSize: 22,
    color: 'white'
  },

  texto: {
    color: 'white'
  },

  imagem: {
    marginTop: 20,
    width: 150,
    height: 200 
  }

});

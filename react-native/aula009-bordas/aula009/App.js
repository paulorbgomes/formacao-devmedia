import Ract from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Bart from './assets/images/bart-img.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Os Simpsons</Text>
      <Image source={Bart} style={styles.img}/>
      <Text style={styles.texto}>Bart, o filho mais velho!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#feda0a',
  },

  titulo: {
    color: 'black',
    fontSize: 32,
    marginBottom: 20
  },

  texto: {
    color: 'black',
    marginBottom: 20,
    fontSize: 20
  },

  img: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid'
  }
});

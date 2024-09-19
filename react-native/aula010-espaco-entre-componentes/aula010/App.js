import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Figura1 from "./assets/images/figure-1.png";
import Figura2 from "./assets/images/figure-2.png";
import Figura3 from "./assets/images/figure-3.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Mobile Developer</Text>
        <Text style={styles.texto}>Michanne Hawthorne</Text>
        <Image source={Figura1} style={styles.image} />
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Backend Developer</Text>
        <Text style={styles.texto}>Elijah Price / Mr. Glass</Text>
        <Image source={Figura2} style={styles.image} />
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Full Stack Developer</Text>
        <Text style={styles.texto}>Chuck Norris</Text>
        <Image source={Figura3} style={styles.image} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbe9f8",
  },

  card: {
    backgroundColor: "#5450d6",
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#2d1f76",
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 18,
    color: "white",
  },

  texto: {
    color: "white",
    marginBottom: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 75,
    borderColor: "white",
    borderWidth: 2,
  },
});

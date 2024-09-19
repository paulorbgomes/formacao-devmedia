import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Lua from "./assets/images/lua.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Lua} style={styles.img} />
      <View style={styles.boxTexto}>
        <Text style={styles.titulo}>Lua</Text>
        <Text style={styles.texto}>
          A Lua é o satélite natural do{" "}
          <Text style={styles.destaque}>planeta Terra</Text>, distanciados por
          aproximadamente 384.405 Km.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  boxTexto: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: "dotted",
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },

  titulo: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  texto: {
    color: "white",
    textAlign: "center",
  },

  destaque: {
    fontWeight: "bold",
    fontStyle: "italic",
  },

  img: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
});

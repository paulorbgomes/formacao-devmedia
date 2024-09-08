import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Aprendendo a exibir uma imagem</Text>
      <Image
        source={{ uri: "https://www.devmedia.com.br/favicon.png" }}
        style={styles.img}
      />
      <Text>Logo da DevMedia</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0EDC5",
  },

  texto: {
    fontSize: 22,
  },

  img: {
    marginTop: 20,
    marginBottom: 20,
    width: 150,
    height: 150,
  },
});

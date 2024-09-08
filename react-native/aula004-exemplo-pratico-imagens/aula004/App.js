import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.devmedia.com.br/arquivos/cursos/rn_exibindo_imagem/aula_3.png",
        }}
        style={styles.img}
      />
      <Text style={styles.texto}>
        Queen é o nome da lendária banda britânica, criada em 1970 por Freddie
        Mercury e dois ex-músicos do Smile, Brian May e Roger Taylor. A banda
        começou com o hard rock, mas depois mudou seu estilo para pop-rock, o
        que tprnou seu nome icônico.
      </Text>
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
  },

  texto: {
    marginTop: 20,
    textAlign: "center",
  },

  img: {
    width: 400,
    height: 200,
  },
});

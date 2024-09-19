import { StyleSheet } from "react-native";

const estiloConteudo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  img: {
    width: 200,
    height: 120,
    marginBottom: 10,
  },

  conteudo: {
    textAlign: "center",
    marginBottom: 30,
  },
});

export default estiloConteudo;

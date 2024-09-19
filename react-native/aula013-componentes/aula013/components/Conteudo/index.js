import React from "react";
import { View, Text, Image } from "react-native";

import Imagem2 from "../../assets/images/img2.png";
import estiloConteudo from "./estilos.js";

export default function Conteudo() {
  return (
    <View style={estiloConteudo.container}>
      <Text style={estiloConteudo.titulo}>Os principais jogos estão aqui!</Text>
      <Image source={Imagem2} style={estiloConteudo.img} />
      <Text style={estiloConteudo.conteudo}>
        A família Nitendo Switch é o lar de jogos exclusivos de séries como
        Super Smash Bros, The Legend of Zelda, Mario Kart e muitas outras.
      </Text>
    </View>
  );
}

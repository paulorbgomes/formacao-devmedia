import React from "react";
import { View, Text, Image } from "react-native";

import Imagem1 from "../../assets/images/img1.png";
import estilosTopo from "./estilos.js";

export default function Topo() {
  return (
    <View style={estilosTopo.topo}>
      <Image source={Imagem1} style={estilosTopo.img} />
      <Text style={estilosTopo.texto}>Nitendo Switch</Text>
    </View>
  );
}

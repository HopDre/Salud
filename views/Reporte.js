import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Reporte = () => {
  const navigation = useNavigation();

  const [textInputValue, setTextInputValue] = useState("");
  const [textInputValueDos, setTextInputValueDos] = useState("");
  const [codigo, setCodigo] = useState("");


  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };
  const handleTextInputChangeDos = (text) => {
    setTextInputValueDos(text);
  };

  return (
    <View style={styles.container}>
      {/* Menú fijo en la parte inferior con iconos presionables */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Principal")}
        >
          <Icon name="home" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Icon name="person" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Servicio")}
        >
          <Icon name="medkit" size={30} color="#0074BD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personal")}
        >
          <Icon name="reader" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contenido}>
      <Text style={styles.codigoTexto}>
            Detalle aquí el reporte
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Motivo del reporte"
            value={codigo}
            onChangeText={setCodigo}
          />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese aquí los el detalle del reporte"
          multiline
          numberOfLines={7}
          value={textInputValueDos}
          onChangeText={handleTextInputChangeDos}
        />
          <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Reportar</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Reporte;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  contenido: {
    margin: 15,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomMenu: {
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DDDCDC",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: "center",
  },
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#DDDCDC",
    paddingHorizontal: 10,
    paddingTop: 10,
    textAlignVertical: "top",
  },
  codigoTexto: {
    color: "#4BAADD",
    fontSize: 20,
    marginVertical: 10,
    fontWeight:"600"
  },
  button:{
    backgroundColor:"#0074BD",
    paddingVertical:15,
    borderRadius:40,
    marginTop:40
  },
  buttonText:{
    color:"white",
    fontWeight:"900",
    textAlign:"center",
    fontSize:18,
  }
});

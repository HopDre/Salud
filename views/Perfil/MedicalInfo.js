import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const MedicalInfo = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [antecedentes, setAntecedentes] = useState("");
    const [alergias, setAlergias] = useState("");
    const [medicamentos, setMedicamentos] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Menú fijo en la parte inferior con iconos presionables */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Principal")}
        >
          <Icon name="ios-home" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Icon name="ios-person" size={30} color="#0074BD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Servicio")}
        >
          <Icon name="ios-medkit" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personal")}
        >
          <Icon name="ios-reader" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.formulario}>
      <View style={styles.alineamiento}>
          <TextInput
            style={styles.inputAlign}
            placeholder="Altura (cms)"
            keyboardType="phone-pad"
            value={altura}
            onChangeText={setAltura}
          />
          <TextInput
            style={styles.inputAlign}
            placeholder="Peso (kg)"
            keyboardType="phone-pad"
            value={peso}
            onChangeText={setPeso}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Antecedentes quirúrgicos"
          value={antecedentes}
          onChangeText={setAntecedentes}
        />
        <TextInput
          style={styles.input}
          placeholder="Alergias"
          value={alergias}
          onChangeText={setAlergias}
        />
        <TextInput
          style={styles.input}
          placeholder="Medicamentos"
          value={medicamentos}
          onChangeText={setMedicamentos}
        />
        <TouchableOpacity onPress={() => navigation.navigate("EditarPerfil")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Modificar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};
export default MedicalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    position: "relative",
    backgroundColor: "white",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DDDCDC",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  menuItem: {
    alignItems: "center",
  },
  scrollViewContainer: {
    backgroundColor: "#4BAADD",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "left",
    padding: 15,
    fontSize: 18,
    color: "#4BAADD",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    marginTop: 10,
    height: 50,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  alineamiento: {
    flexDirection: "row", // Alinea los elementos en fila
    justifyContent: "space-between", // Espacio uniforme entre los elementos
  },
  inputAlign: {
    width: "48%", // Ancho del 48% para dejar espacio entre los elementos
    backgroundColor: "white",
    marginTop: 10,
    height: 50,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  formulario:{
    marginTop:40,
  }
});
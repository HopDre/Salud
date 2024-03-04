import React, { useState } from "react";
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

const Contacto = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
          <Icon name="person" size={30} color="#0074BD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Servicio")}
        >
          <Icon name="medkit" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personal")}
        >
          <Icon name="reader" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.contenedor}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.textoUno}>Formulario de contacto</Text>
        <Text style={styles.textoUno}>
          Si presentas algún problema con la aplicación, alguna falla,
          comentario o duda, contáctanos mediante este formulario y nos
          comunicaremos a la brevedad contigo para resolver tus dudas.
        </Text>
        <TextInput
          // ref={(input) => {
          //   this.TextInput1 = input;
          // }}
          // onSubmitEditing={() => this.TextInput2.focus()}
          blurOnSubmit={false}
          placeholder="Asunto"
          // onChangeText={(text) => setSubject(text)}
          // value={subject}
          style={styles.input}
        />
        <TextInput
          // ref={(input) => {
          //   this.TextInput2 = input;
          // }}
          blurOnSubmit={false}
          placeholder="Mensaje"
          // onChangeText={(text) => setBody(text)}
          // value={body}
          multiline
          style={styles.inputMsj}
          placeholderTextColor={"grey"}
        />
        {/* <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={value => setBotcheck(value)}
              value={value}
              style={{ height: 0, width: 0, opacity: 0 }} // Hide the input
            />
          )}
          name="botcheck"
          defaultValue=""
        /> */}
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Contacto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BAADD",
    padding: 5,
    position: "relative",
  },
  textoUno: {
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    fontSize:15,
    marginHorizontal:20,
    marginBottom:50,
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
  input: {
    backgroundColor: "white",
    width: 300,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  contenedor: {
    marginVertical: 20,
    flexDirection: "column",
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#4BAADD",
  },
  icono: {
    width: 80,
    height: 80,
  },
  inputMsj: {
    backgroundColor: "white",
    width: 300,
    height: 100,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0074BD",
    marginVertical: 8,
    padding: 10,
    width: 300,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  label: {
    color: "grey",
  },
});

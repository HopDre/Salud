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

const Certificados = () => {
  const navigation = useNavigation();

  const handleContainerPress = () => {
    navigation.navigate("Perfil");
  };

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
    <ScrollView>
    <Text style={styles.titulo}>Certificados</Text>
      <TouchableOpacity onPress={handleContainerPress}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Certificado 1</Text>
            <Text style={styles.text2}>22/01/2024</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContainerPress}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Certificado 2</Text>
            <Text style={styles.text2}>22/01/2024</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContainerPress}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Certificado 3</Text>
            <Text style={styles.text2}>22/01/2024</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContainerPress}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Certificado 4</Text>
            <Text style={styles.text2}>22/01/2024</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.footer}>No tienes más certificados registrados</Text>
    </ScrollView>
      
    </View>
  );
};

export default Certificados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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
    zIndex:100,
  },
  menuItem: {
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#4BAADD",
    justifyContent:"start",
    borderRadius:20,
    padding:5,
    paddingBottom:0,
    marginBottom:10,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flexDirection: "column",
    marginBottom:10,
    paddingHorizontal:20,
  },
  text1: {
    fontSize: 18,
    color:"white"
  },
  text2: {
    fontSize: 16,
    color: "#0074BD",
  },
  titulo: {
    fontSize: 30,
    color:"#0074BD",
    marginBottom:20,
    marginTop:20,
  },
  footer:{
    textAlign:"center",
    marginTop:10,
    marginBottom:80,
  }
});

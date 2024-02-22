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

const DetallesVisitas = () => {
  const navigation = useNavigation();

  const handleContainerPress = () => {
    navigation.navigate("DetallesVisitas");
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
      <View style={styles.contenedorImagen}>
        <Text style={styles.nombreDr}>Dra. Sofía Rodríguez</Text>
        <Image style={styles.fotoDr} source={require("../../assets/doctora.jpg") }></Image>
      </View>
      <View style={styles.contenedorInfo}>
        <Icon name="cash-outline" size={30} color="#4BAADD" style={styles.icono}></Icon>
        <Text style={styles.texto}>$20.000</Text>
      </View>
      <View style={styles.contenedorInfo}>
        <Icon name="location-outline" size={30} color="#4BAADD" style={styles.icono}></Icon>
        <Text style={styles.texto}>Av. Arturo Prat 3412, Santiago</Text>
      </View>
      <View style={styles.contenedorInfo}>
        <Icon name="star-outline" size={30} color="#4BAADD" style={styles.icono}></Icon>
        <Text style={styles.texto}>Valoración</Text>
      </View>
      <View style={styles.contenedorAyuda}>
      <Text style={styles.titulo}>Ayuda</Text>
      </View>

      <TouchableOpacity onPress={handleContainerPress}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Certificado asociado a la consulta</Text>
          </View>
          <Icon name="chevron-forward" size={25} color="white" style={styles.icono}></Icon>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContainerPress}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Informar un problema</Text>
          </View>
          <Icon name="chevron-forward" size={25} color="white" style={styles.icono}></Icon>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContainerPress}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Comentarios sobre la consulta</Text>
          </View>
          <Icon name="chevron-forward" size={25} color="white" style={styles.icono}></Icon>
        </View>
      </TouchableOpacity>
      </ScrollView>

      
    </View>
  );
};
export default DetallesVisitas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        position: "relative",
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
      contenedorImagen:{
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:40,
      },
      fotoDr:{
        width:100,
        height:100,
        borderRadius:100,
      },
      nombreDr:{
        fontSize:18,
        color:"#0074BD",
      },
      contenedorInfo:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
        marginBottom:10,
      },
      icono:{
        marginRight:10,
      },
      texto:{
        color:"#4BAADD",
        fontSize:15,
        fontWeight:"500",
      },
      titulo:{
        fontSize:20,
        color:"#0074BD"
      },
      contenedorAyuda:{
        padding:20,
      },
      itemContainer: {
        flexDirection: "row",
        backgroundColor:"#4BAADD",
        justifyContent:"space-between",
        borderRadius:20,
        padding:10,
        paddingBottom:0,
        marginBottom:10,
      },
      textContainer: {
        flexDirection: "column",
        marginBottom:10,
      },
      text1: {
        fontSize: 18,
        color:"white",
        marginLeft:5,
      },
})
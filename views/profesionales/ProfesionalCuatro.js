import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ProfesionalCuatro = () => {
  const navigation = useNavigation();

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
          <Icon name="medkit" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personal")}
        >
          <Icon name="reader" size={30} color="#0074BD" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contenedorScroll}>
        <Image
          style={styles.head}
          source={require("../../assets/profesionales/4.jpg")}
        ></Image>
        <Text style={styles.titulo}>Kinesiologo Alejandro López</Text>
        <Text style={styles.subtitulo}>
          Para brindar la mejor atención a mis pacientes pongo como prioridad
          las necesidades...
        </Text>
        <View style={styles.contenedor}>
          <View style={styles.subcontenedor}>
            <Text style={styles.tiempo}>+10</Text>
            <Text style={styles.tiempoexp}>Años de experiencia</Text>
          </View>
          <View style={styles.subcontenedor}>
            <Text style={styles.tiempo}>+5</Text>
            <Text style={styles.tiempoexp}>Certificados</Text>
          </View>
          <View style={styles.subcontenedor}>
            <Icon
              name="shield-checkmark"
              size={40}
              color="white"
              marginBottom={10}
              marginTop={5}
            />
            <Text style={styles.tiempoexp}>Perfil verificado</Text>
          </View>
        </View>
        <View style={styles.estrellas}>
          <Icon
            name="star"
            size={40}
            color="#0074BD"
            marginBottom={10}
            marginTop={5}
          />
          <Icon
            name="star"
            size={40}
            color="#0074BD"
            marginBottom={10}
            marginTop={5}
          />
          <Icon
            name="star"
            size={40}
            color="#0074BD"
            marginBottom={10}
            marginTop={5}
          />
          <Icon
            name="star"
            size={40}
            color="#0074BD"
            marginBottom={10}
            marginTop={5}
          />
          <Icon
            name="star"
            size={40}
            color="#0074BD"
            marginBottom={10}
            marginTop={5}
          />
        </View>
        <Text style={styles.calificacion}>
          Calificación promedio del profesional
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Reporte")}>
          <View style={styles.btn}>
            <Icon name="warning" size={40} color="black"></Icon>
            <Text style={styles.buttonText}>Reportar este perfil</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default ProfesionalCuatro;

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
    zIndex: 100,
  },
  menuItem: {
    alignItems: "center",
  },
  head: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  titulo: {
    color: "#0074BD",
    fontSize: 20,
    textAlign: "left",
    marginTop: 10,
    fontWeight: "500",
  },
  subtitulo: {
    color: "#0074BD",
    textAlign: "left",
    marginTop: 10,
    fontSize: 16,
  },
  contenedor: {
    flexDirection: "row",
    maxWidth: "100%",
    backgroundColor: "#0074BD",
    borderRadius: 40,
    padding: 20,
    marginVertical: 40,
    justifyContent: "space-between",
  },
  subcontenedor: {
    width: "33%",
    alignItems: "center",
  },
  tiempo: {
    fontSize: 40,
    color: "white",
  },
  tiempoexp: {
    textAlign: "center",
    color: "white",
  },
  estrellas: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
  },
  calificacion: {
    textAlign: "center",
    color: "#0074BD",
  },
  btn: {
    marginVertical: 40,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

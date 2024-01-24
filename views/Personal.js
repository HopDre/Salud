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

const Personal = () => {
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
          <Icon name="ios-person" size={30} color="#4BAADD" />
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
          <Icon name="ios-reader" size={30} color="#0074BD" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image style={styles.head} source={require("../assets/dr.jpg")}></Image>
        <Text style={styles.titulo}>
          Contamos son un amplio equipo de trabajo
        </Text>
        <Text style={styles.subtitulo}>
          Adaptamos nuestro personal a tus necesidades
        </Text>
        <View style={styles.contenedor}>
          <Image
            style={styles.profesional}
            source={require("../assets/profesionales/1.jpg")}
          ></Image>
          <Text style={styles.nombre}>Dra. Sofía Rodríguez</Text>
          <Text style={styles.descripcion}>
            Soy una persona con grán determinación al momento de atender a mis
            pacientes, haciendo de esta...
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("ProfesionalUno")}>
            <View style={styles.btn}>
              <Text style={styles.buttonText}>Ver perfil</Text>
            </View>
          </TouchableOpacity>
          <Image
            style={styles.profesional}
            source={require("../assets/profesionales/2.jpg")}
          ></Image>
          <Text style={styles.nombre}>Dr. Mateo García</Text>
          <Text style={styles.descripcion}>
            Al momento de atender a mis pacientes trato de generar una conexión
            directa, de esta manera...
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("ProfesionalDos")}>
            <View style={styles.btn}>
              <Text style={styles.buttonText}>Ver perfil</Text>
            </View>
          </TouchableOpacity>
          <Image
            style={styles.profesional}
            source={require("../assets/profesionales/3.jpg")}
          ></Image>
          <Text style={styles.nombre}>Nutricionista Valentina Pérez</Text>
          <Text style={styles.descripcion}>
            Para mis pacientes busco dar la mejor atención posible, brindando
            planificaciones posteriores a la consulta...
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("ProfesionalTres")}>
            <View style={styles.btn}>
              <Text style={styles.buttonText}>Ver perfil</Text>
            </View>
          </TouchableOpacity>
          <Image
            style={styles.profesional}
            source={require("../assets/profesionales/4.jpg")}
          ></Image>
          <Text style={styles.nombre}>Kinesiologo Alejandro López</Text>
          <Text style={styles.descripcion}>
            Para brindar la mejor atención a mis pacientes pongo como prioridad
            las necesidades...
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("ProfesionalCuatro")}>
            <View style={styles.btn}>
              <Text style={styles.buttonText}>Ver perfil</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Personal;

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
    height: 150,
  },
  titulo: {
    color: "#0074BD",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "500",
  },
  subtitulo: {
    color: "#0074BD",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  contenedor: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  profesional: {
    width: 100,
    height: 100,
    borderRadius: 100,
    objectFit: "cover",
    borderWidth: 3,
    borderColor: "#4BAADD",
  },
  nombre: {
    fontSize: 20,
    color: "#0074BD",
    marginVertical: 5,
  },
  btn: {
    backgroundColor: "#0074BD",
    width: 150,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

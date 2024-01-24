import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Ubicacion = () => {
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
          <Icon name="ios-medkit" size={30} color="#0074BD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Personal")}
        >
          <Icon name="ios-reader" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Pago")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Proceder al pago</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Ubicacion;

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
  button: {
    backgroundColor: "#4BAADD",
    paddingVertical: 15,
    borderRadius: 40,
    marginBottom: 80,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    textAlign: "center",
    fontSize: 18,
  },
});

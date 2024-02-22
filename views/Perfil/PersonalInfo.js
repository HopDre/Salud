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
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import "dayjs/locale/es";
import Icon from "react-native-vector-icons/Ionicons";
import RadioGroup from "react-native-radio-buttons-group";

const PersonalInfo = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");
  const [value, setValue] = useState(dayjs());

  const navigation = useNavigation();

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Masculino",
        value: "masculino",
      },
      {
        id: "2",
        label: "Femenino",
        value: "femenino",
      },
      {
        id: "3",
        label: "Otro",
        value: "otro",
      },
    ],
    []
  );
  const [selectedId, setSelectedId] = useState();

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

      <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.input}
          placeholder="RUT"
          value={rut}
          onChangeText={setRut}
        />
        <Text style={styles.textoFecha}>Fecha de nacimiento</Text>
        <View style={styles.calendar}>
          <DateTimePicker
            value={value}
            onValueChange={(date) => setValue(date)}
            mode={"date"}
            locale={"ES"}
            firstDayOfWeek={1}
            selectedItemColor={"#0074BD"}
            calendarTextStyle={styles.textCal}
            selectedTextStyle={styles.textSelecCal}
            headerTextStyle={styles.headerTextCalendar}
            weekDaysTextStyle={styles.weekTextCalendar}
          />
        </View>
        <View style={styles.radiobtn}>
          <Text style={styles.textoFecha}>Género</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout={"row"}
            containerStyle={{ marginBottom: 10 }}
          />
        </View>
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
export default PersonalInfo;

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
  calendar: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
  },
  textoFecha: {
    marginTop: 10,
    marginBottom: 5,
    color: "white",
  },
  button: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 100,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

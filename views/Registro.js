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
import RadioGroup from "react-native-radio-buttons-group";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDos, setPasswordDos] = useState("");
  const [antecedentes, setAntecedentes] = useState("");
  const [alergias, setAlergias] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
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
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/login/header.png")}
        style={styles.header}
      ></Image>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Crear una cuenta</Text>

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
          placeholder="Direccion"
          value={direccion}
          onChangeText={setDireccion}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          value={passwordDos}
          onChangeText={setPasswordDos}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Registrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  titulo: {
    fontSize: 18,
    color: "#FFFF",
    marginBottom: 10,
    fontWeight: "600",
  },
  formulario: {
    backgroundColor: "#4BAADD",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },

  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "grey",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  input: {
    backgroundColor: "white",
    marginTop: 10,
    height: 50,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  placeholder: {
    color: "black",
  },
  button: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  textCal: {
    color: "#4BAADD",
  },
  textSelecCal: {
    color: "white",
  },
  calendar: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
  },
  headerTextCalendar: {
    color: "#4BAADD",
  },
  weekTextCalendar: {
    color: "#0074BD",
  },
  textoFecha: {
    marginTop: 10,
    marginBottom: 5,
    color: "white",
  },
  buttonLabel: {
    fontSize: 16,
    color: "#yourTextColor", // Modifica el color del texto del botón
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
});

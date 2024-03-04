import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Preguntas = () => {
  const initialTexts = [
    "¿Cómo funciona la aplicación para encontrar un profesional de la salud? \n\nLa aplicación utiliza un sistema de búsqueda que te permite filtrar profesionales de la salud por ubicación. Simplemente ingresa tus datos en la solicitud y un profesional se contactará contigo.",
    "¿Qué tipo de profesionales de la salud están disponibles en la aplicación?\n\nEn la aplicación, puedes encontrar una amplia gama de profesionales de la salud, incluyendo médicos generales, especialistas, enfermeras, terapeutas y más.",
    "¿Es seguro compartir información médica personal a través de la aplicación?\n\nSí, la aplicación utiliza medidas de seguridad avanzadas para proteger tu información médica personal. Todos los datos se cifran y se almacenan de forma segura en servidores protegidos.",
    "¿Cómo puedo pagar por los servicios de salud a través de la aplicación? \n\nPuedes pagar por los servicios de salud a través de la aplicación utilizando métodos de pago seguros, como tarjetas de crédito o servicios de pago en línea o también en efectivo.",
    "¿Qué debo hacer si tengo una emergencia médica mientras uso la aplicación? \n\nEn caso de una emergencia médica, por favor llama al número de emergencias de tu área o dirígete al hospital más cercano. La aplicación no debe usarse para emergencias médicas.",
    "¿Qué sucede si no estoy satisfecho con la consulta con el profesional de la salud a través de la aplicación?\n\nSi no estás satisfecho con la consulta, por favor contáctanos para que podamos ayudarte a resolver cualquier problema o inquietud que puedas tener.",
    "¿Puedo obtener recetas médicas a través de la aplicación?\n\nSí, algunos profesionales de la salud pueden proporcionar recetas médicas a través de la aplicación, según su criterio médico.",
    "¿Qué debo hacer si tengo problemas técnicos mientras uso la aplicación durante una consulta?\n\nSi experimentas problemas técnicos durante una consulta, por favor comunícate con nuestro equipo de soporte técnico para recibir asistencia inmediata.",
    "¿Cómo puedo verificar la credibilidad y las credenciales del profesional de la salud que elija a través de la aplicación?\n\nPuedes verificar la credibilidad y las credenciales del profesional de la salud revisando su perfil en la aplicación, donde encontrarás información sobre su formación, experiencia y certificaciones.",
    "¿Qué tipo de preguntas médicas puedo hacer durante una consulta a través de la aplicación?\n\nDurante una consulta a través de la aplicación, puedes hacer preguntas sobre tus síntomas, condiciones médicas, tratamientos recomendados y cualquier otra preocupación relacionada con tu salud.",
    "¿Hay algún costo asociado con registrarse en la aplicación como usuario?\n\nNo, el registro en la aplicación como usuario es gratuito. Sin embargo, pueden aplicarse cargos por los servicios de salud utilizados a través de la aplicación, dependiendo de las tarifas del profesional de la salud seleccionado.",
  ];

  const [visibleTextIndex, setVisibleTextIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    setVisibleTextIndex(visibleTextIndex === index ? null : index);
  };

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
      <ScrollView style={styles.contenedor}>
        <Text style={styles.titulo}>Preguntas frecuentes</Text>
        {initialTexts.map((text, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => toggleTextVisibility(index)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Pregunta {index + 1}</Text>
            </TouchableOpacity>

            {visibleTextIndex === index && (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
  contenedor: {
    flex: 1,
    width: "100%",
    marginBottom:45,
  },
  button: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "left",
  },
  textContainer: {
    marginTop: 5,
    padding: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  titulo: {
    fontSize: 30,
    color: "#0074BD",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Preguntas;

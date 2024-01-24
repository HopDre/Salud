import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "./views/Splash";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Recuperacion from "./views/Recuperacion";
import Principal from "./views/Principal";
import Servicio from "./views/Servicio";
import Perfil from "./views/Perfil";
import Personal from "./views/Personal";
import Ubicacion from "./views/Ubicacion";
import Pago from "./views/Pago";
import Prueba from "./views/Prueba";
import EditarPerfil from "./views/Perfil/EditarPerfil";
import PersonalInfo from "./views/Perfil/PersonalInfo";
import MedicalInfo from "./views/Perfil/MedicalInfo";
import Seguridad from "./views/Perfil/Seguridad";
import Configuracion from "./views/Perfil/Configuracion";
import Visitas from "./views/Perfil/Visitas";
import DetallesVisitas from "./views/Perfil/DetallesVisitas";
import Certificados from "./views/Perfil/Certificados";
import Preguntas from "./views/Perfil/Preguntas";
import Terminos from "./views/Perfil/Terminos";
import Contacto from "./views/Perfil/Contacto";
import ProfesionalUno from "./views/profesionales/ProfesionalUno";
import ProfesionalDos from "./views/profesionales/ProfesionalDos";
import ProfesionalTres from "./views/profesionales/ProfesionalTres";
import ProfesionalCuatro from "./views/profesionales/ProfesionalCuatro";


const App = () => {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Recuperacion" component={Recuperacion} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Servicio" component={Servicio} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Ubicacion" component={Ubicacion} />
        <Stack.Screen name="Pago" component={Pago} />
        <Stack.Screen name="Prueba" component={Prueba} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="MedicalInfo" component={MedicalInfo} />
        <Stack.Screen name="Seguridad" component={Seguridad} />
        <Stack.Screen name="Configuracion" component={Configuracion} />
        <Stack.Screen name="Visitas" component={Visitas} />
        <Stack.Screen name="DetallesVisitas" component={DetallesVisitas} />
        <Stack.Screen name="Certificados" component={Certificados} />
        <Stack.Screen name="Preguntas" component={Preguntas} />
        <Stack.Screen name="Terminos" component={Terminos} />
        <Stack.Screen name="Contacto" component={Contacto} />
        <Stack.Screen name="ProfesionalUno" component={ProfesionalUno} />
        <Stack.Screen name="ProfesionalDos" component={ProfesionalDos} />
        <Stack.Screen name="ProfesionalTres" component={ProfesionalTres} />
        <Stack.Screen name="ProfesionalCuatro" component={ProfesionalCuatro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
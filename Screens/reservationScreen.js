import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import CrearReserva from "./createReservation"; 

const Stack = createNativeStackNavigator();

//Pantalla de lista de reservas (Aun en desarrollo :P)
function ListaReservas({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No tienes reservas activas.</Text>
      <Button title="Crear Reserva" onPress={() => navigation.navigate("CrearReserva")} />
    </View>
  );
}

export default function ReservationsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaReservas" component={ListaReservas} options={{ title: "Mis Reservas" }} />
      <Stack.Screen name="CrearReserva" component={CrearReserva} options={{ title: "Crear Reserva" }} />
    </Stack.Navigator>
  );
}


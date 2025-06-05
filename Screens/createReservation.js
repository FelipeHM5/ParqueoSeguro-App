import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Partes exportadas
export default function CrearReserva({ navigation }) {
  const [parqueadero, setParqueadero] = useState("parqueadero1");
  const [placa, setPlaca] = useState("");
  const [vehiculo, setVehiculo] = useState("Carro");
  const [tiempo, setTiempo] = useState("1 hora");

  // Lógica para guardar reserva 
  const handleReservar = () => {
    
    alert("Reserva creada");
    navigation.goBack(); // volver a la lista de reservas (Mientras no se implemente la lógica de reserva)
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  // Renderizado del formulario de reserva
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Selecciona Parqueadero</Text>
      <Picker
        selectedValue={parqueadero}
        onValueChange={(itemValue) => setParqueadero(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Parqueadero 1" value="parqueadero1" />
        <Picker.Item label="Parqueadero 2" value="parqueadero2" />
        <Picker.Item label="Parqueadero 3" value="parqueadero3" />
      </Picker>

      <Text style={styles.label}>Placa del vehículo</Text>
      <TextInput
        value={placa}
        onChangeText={setPlaca}
        placeholder="ABC123"
        style={styles.input}
      />

      <Text style={styles.label}>Tipo de vehículo</Text>
      <Picker
        selectedValue={vehiculo}
        onValueChange={(itemValue) => setVehiculo(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Carro" value="Carro" />
        <Picker.Item label="Moto" value="Moto" />
        <Picker.Item label="Camioneta" value="Camioneta" />
      </Picker>

      <Text style={styles.label}>Tiempo de reserva</Text>
      <Picker
        selectedValue={tiempo}
        onValueChange={(itemValue) => setTiempo(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="1 hora" value="1 hora" />
        <Picker.Item label="2 horas" value="2 horas" />
        <Picker.Item label="3 horas" value="3 horas" />
      </Picker>

      <View style={styles.buttonContainer}>
        <Button title="Reservar" onPress={handleReservar} color="#82e486" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cancelar" onPress={handleCancelar} color="#ccc" />
      </View>
    </ScrollView>
  );
}

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  picker: {
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

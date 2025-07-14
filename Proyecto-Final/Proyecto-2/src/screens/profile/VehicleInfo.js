// src/screens/profile/VehicleInfo.js
import React from 'react';
import { View,Text, TextInput, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

// NO. Unidad
// Placas
// Modelo
// Marca
// Capacidad de personas
const VehicleInfo = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Información del vehículo</Text>
      <Image
        source={require('../../../assets/images/bus.jpg')}
        style={styles.avatar}
      />
  
      <TextInput style={styles.input} value="123" editable={false} placeholderTextColor="#232A2E"/>
      <TextInput style={styles.input} value="ABC-123" placeholder="Placas" editable={false} placeholderTextColor="#232A2E"/> 
      <TextInput style={styles.input} value="Mercedes Sprinter" placeholder="Modelo" editable={false} placeholderTextColor="#232A2E"/>
      <TextInput style={styles.input} value="Mercedes-Benz" placeholder="Marca" editable={false} placeholderTextColor="#232A2E"/>
      <TextInput style={styles.input} value="20" placeholder="Capacidad de pasajeros" editable={false} placeholderTextColor="#232A2E"/> 
    </View>
  );
};

export default VehicleInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFA500', // Naranja
    textAlign: 'center',
    marginBottom: 15,
  },
  avatar: { 
    width: 160,
    height: 160,
    borderRadius: 80,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#FFA500', // Naranja
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',

    width: '80%',
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});

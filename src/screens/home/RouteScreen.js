import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const RouteScreen = ({ navigation }) => {
  const [auto, setAuto] = useState(false);

  
  // Aquí defines la función
  const handleGoMap = () => {
    navigation.navigate('MapRouteScreen');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo2.jpg')} // ✅ Asegúrate de usar tu ruta correcta
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Ruta de TravelSecure</Text>
      <TextInput placeholder="Punto de llegada" placeholderTextColor="#aaa" style={styles.input} />
      <TextInput placeholder="Punto de salida" placeholderTextColor="#aaa" style={styles.input} />
      <TextInput placeholder="Fecha del Viaje" placeholderTextColor="#aaa" style={styles.input} />

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>Automatico</Text>
        <Switch value={auto} onValueChange={setAuto} trackColor={{ false: '#767577', true: '#FFA500' }} thumbColor={auto ? '#fff' : '#f4f3f4'}  />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGoMap}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D4D4D',
    //232A2E
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 50,
  },
  title: { fontSize: 26, color: '#FFA500', fontWeight: 'bold',textAlign: 'center', marginBottom: 30 },
  input: {backgroundColor: '#fff',fontSize: 16 , color: '#333',borderColor: '#ccc', padding: 12, borderRadius: 10, marginBottom: 15 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, paddingHorizontal: 10 },
  switchLabel: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

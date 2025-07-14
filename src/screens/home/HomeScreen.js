// src/screens/home/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import axios from 'axios';

const TOTAL_BOLETOS = 300;
const TOTAL_ASIENTOS = 35;

const HomeScreen = ({ setIsLoggedIn, navigation }) => {
  const [soldTickets, setSoldTickets] = useState(12);
  const [temperature, setTemperature] = useState(25.5);
  const [humidity, setHumidity] = useState(35);
  // metodos de los botones
  const handleStartRoute = () => {
    navigation.navigate('RouteScreen');
  };

  const handleGoMap = () => {
    navigation.navigate('MapRouteScreen');
  };

  const handleGoProfile = () => {
    navigation.navigate('Profile');
  };

  // Boton de cerrar session
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Ejemplo: simulando obtención de sensores desde MongoDB
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Cambiar por tu URL real
        const res = await axios.get('http://localhost:3000/sensors');
        setTemperature(res.data.temperature);
        setHumidity(res.data.humidity);
        // Si también recibes ocupados desde Mongo, actualiza setSoldTickets(res.data.ocupados)
      } catch (error) {
        console.log('Error al obtener datos:', error);
      }
    };

    fetchData();

    // Refrescar cada 10 segundos
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSellTicket = () => {
    if (soldTickets < TOTAL_BOLETOS) {
      setSoldTickets(soldTickets + 1);
    }
  };

  const handleCancelTicket = () => {
    if (soldTickets > 0) {
      setSoldTickets(soldTickets - 1);
    }
  };

  const occupiedSeats = soldTickets > TOTAL_ASIENTOS ? TOTAL_ASIENTOS : soldTickets;
  const availableSeats = TOTAL_ASIENTOS - occupiedSeats;

  return (
    <View style={styles.container}>
      {/* Header con nombre y avatar */}
      <View style={styles.header}>
        <Text style={styles.name}>Juan Perez</Text>
        <Image source={require('../../../assets/images/chofer.jpg')} style={styles.avatar} />
      </View>

      {/* Clima */}
      <Text style={styles.sectionTitle}>Clima</Text>

      <View style={styles.weather}>
        <Text style={styles.tempBox}>{temperature}°C{'\n'}Temperature</Text>
        <Text style={styles.humBox}>{humidity}%{'\n'}Humidity</Text>
      </View>

      {/* Boletos */}
      <View style={styles.ticketsBox}>
        <Text style={styles.tickets}>Boletos Vendidos: {soldTickets} / {TOTAL_BOLETOS}</Text>
        <TouchableOpacity style={styles.sellButton} onPress={handleSellTicket}>
          <Text style={styles.buttonText}>Vender Boleto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelTicket}>
          <Text style={styles.buttonText}>Cancelar Boleto</Text>
        </TouchableOpacity>
        <Text style={styles.payment}>Pago: Efectivo</Text>
      </View>

      {/* Asientos */}
      <View style={styles.seatsBox}>
        <View style={styles.seatCard}>
          <Text style={styles.seatIcon}>👤</Text>
          <Text style={styles.seatNumber}>{availableSeats}</Text>
          <Text>Disponibles</Text>
        </View>

        <View style={styles.seatCard}>
          <Text style={styles.seatIcon}>🚌</Text>
          <Text style={styles.seatNumber}>{occupiedSeats}</Text>
          <Text>Ocupados</Text>
        </View>
      </View>

      {/* Botones adicionales */}
      <TouchableOpacity style={globalStyles.button} onPress={handleStartRoute}>
        <Text style={globalStyles.buttonText}>Iniciar Ruta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={handleGoProfile}>
        <Text style={globalStyles.buttonText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[globalStyles.button, { backgroundColor: '#f44336' }]} onPress={handleLogout}>
        <Text style={globalStyles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#4D4D4D' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { color: '#FFA500',textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  weather: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  tempBox: { backgroundColor: '#FFA500', color: '#fff',padding: 12, borderRadius: 10, textAlign: 'center', overflow: 'hidden', width: 130 },
  humBox: { backgroundColor: '#fff', color: '#333',padding: 12, borderRadius: 10, textAlign: 'center', overflow: 'hidden', width: 130 },
  ticketsBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  tickets: { fontSize: 16, marginBottom: 12, fontWeight: 'bold', color: '#333'},
  sellButton: { backgroundColor: '#FFA500', padding: 10, borderRadius: 8, width: '80%', marginBottom: 10, alignItems: 'center' },
  cancelButton: { backgroundColor: '#FFA500', padding: 10, borderRadius: 8, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  payment: { marginTop: 10, color: '#333' },
  seatsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
  },
  seatCard: { alignItems: 'center' },
  seatIcon: { fontSize: 20 },
  seatNumber: { fontSize: 20, fontWeight: 'bold' },
});

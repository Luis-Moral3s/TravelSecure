import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker , Polyline} from 'react-native-maps';
import { globalStyles } from '../../styles/globalStyles';

const MapRouteScreen = ({ navigation }) => {
  /*
  const initialRegion = {
    latitude: 32.464996,
    longitude: -116.964785,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }; */

  // Coordenadas de los puntos
  const puntoLlegada = { latitude: 32.464996, longitude: -116.964785 }; // Refugio
  const puntoSalida = { latitude: 32.458262, longitude: -116.938388 }; // Villa del Campo

  const [truckPosition, setTruckPosition] = useState(puntoSalida);

  useEffect(() => {
    let progress = 0;
    const steps = 100;
    const interval = setInterval(() => {
      progress += 1;
      if (progress > steps) {
        clearInterval(interval);
        return;
      }

      // Interpolación lineal para calcular posición
      const lat = puntoSalida.latitude + (puntoLlegada.latitude - puntoSalida.latitude) * (progress / steps);
      const lon = puntoSalida.longitude + (puntoLlegada.longitude - puntoSalida.longitude) * (progress / steps);
      setTruckPosition({ latitude: lat, longitude: lon });
    }, 100); // cada 100ms (0.1 seg)

    return () => clearInterval(interval);
  }, []);


  const initialRegion = {
    latitude: (puntoSalida.latitude + puntoLlegada.latitude) / 2,
    longitude: (puntoSalida.longitude + puntoLlegada.longitude) / 2,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  return (
    <View style={globalStyles.container}>
      {/* Logo arriba */}
      <Image
        source={require('../../../assets/images/logo2.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          //coordinate={{ latitude: 32.464996, longitude: -116.964785 }}
          coordinate={puntoLlegada}
          title="Punto de llegada"
          description="Refugio"
        />
        <Marker
          //coordinate={{ latitude: 32.458262, longitude: 116.938388 }}
          coordinate={puntoSalida}
          title="Punto de salida"
          description="Villa del campo"
          pinColor="blue"
        />
        <Polyline
          coordinates={[puntoSalida, puntoLlegada]}
          strokeColor="#FFA500" // Color naranja (como en tu logo)
          strokeWidth={4}
        />

        <Marker
          coordinate={truckPosition}
          title="Camión"
        >
          <Image
            //source={require('../../../assets/images/icon.png')}
            //style={{ width: 40, height: 40 }}
          />
        </Marker>
      </MapView>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Punto de llegada: Refugio</Text>
        <Text style={styles.label}>Punto de salida: Villa del campo</Text>
        <Text style={styles.label}>Tiempo estimado: 12:30 PM</Text>
        <View style={styles.buttonContainer}>
          <Button title="Confirmar"  color="#FFA500" onPress={() => { alert("Ruta confirmada"); }} />
        </View>
      </View>
    </View>
  );
};

export default MapRouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D4D4D',
  },
  logo: {
    width: 180,
    height: 70,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 30
  },
  map: { width: Dimensions.get('window').width * 0.9, height: '40%', alignSelf: 'center', borderRadius: 15, overflow: 'hidden' },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    //borderTopRightRadius: 20,
    padding: 20,
    margin: 20,
    marginTop: 10,
  },
  label: { 
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },

});

// src/screens/profile/ProfileScreen.js
// src/screens/profile/ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from '../../styles/globalStyles';

const ProfileScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  const pickImage = async (fromCamera = false ) => {
    // Pedir permisos
    
    let permissionResult;

    if(fromCamera){
      permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
        alert('Se necesita permiso para acceder a la cámara.');
        return;
      }
    } 
    else {
      permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert('Se necesita permiso para acceder a la galería.');
        return;
      }
    }

    let result;
    if (fromCamera) {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
    } 
    else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
    }

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        onPress={() =>
          Alert.alert('Seleccionar foto', 'Elige una opción', [
            { text: 'Cámara', onPress: () => pickImage(true) },
            { text: 'Galería', onPress: () => pickImage(false) },
            { text: 'Cancelar', style: 'cancel' },
          ])
        }
      >
        <Image
          source={image ? { uri: image } : require('../../../assets/images/chofer.jpg')}
          style={styles.avatar}
        />
      
      </TouchableOpacity>

      <Text style={styles.name}>Juan Perez</Text>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('DriverInfo')}>
        <Text style={globalStyles.buttonText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Calificacion')}>
        <Text style={globalStyles.buttonText}>Calificación</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('VehicleInfo')}>
        <Text style={globalStyles.buttonText}>Unidad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[globalStyles.button, { backgroundColor: '#E6E6FA' }]} onPress={handleLogout}>
        <Text style={globalStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: { width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginBottom: 10 },
  name: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
});


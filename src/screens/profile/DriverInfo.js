// src/screens/profile/DriverInfo.js
import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import * as ImagePicker from 'expo-image-picker';

const DriverInfo = () => {
  
  const [image, setImage] = React.useState(null);

  const pickImage = async (fromCamera = false) => {
    let result;

    if (fromCamera) {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
    }

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  

  const handleChangePhoto = () => {
    Alert.alert(
      'Seleccionar foto',
      'Elige una opción',
      [
        { text: 'Cámara', onPress: () => pickImage(true) },
        { text: 'Galería', onPress: () => pickImage(false) },
        { text: 'Cancelar', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../../../assets/images/chofer.jpg')}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.button} onPress={handleChangePhoto}>
        <Text style={styles.buttonText}>Cambiar foto</Text>
      </TouchableOpacity>

      <Text style={styles.name}>Juan Perez</Text>

      <TextInput style={styles.input} value="Juan Eduardo" editable={false} placeholderTextColor="#232A2E"/>
      <TextInput style={styles.input} value="Perez Navarrete" editable={false} placeholderTextColor="#232A2E"/>
      <TextInput style={styles.input} value="juan@gmail.com" editable={false} placeholderTextColor="#232A2E"/>
      <TextInput style={styles.input} value="664 736 7648" editable={false} placeholderTextColor="#232A2E"/>
    </View>
  );
};

export default DriverInfo;

const styles = StyleSheet.create({
  
  avatar: { 
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: 'center',
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FFA500',
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  name: { fontSize: 22, fontWeight: 'bold', color: '#FFA500',textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#004AAD', // Azul oscuro del logo
    width: '80%',
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  }, 
  /*
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  name: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  infoBox: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 15,
  },
  infoText: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    textAlign: 'center',
  }, */
});

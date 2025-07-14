import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { Image } from 'react-native';

const LoginScreen = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        

        if (!username || !password) {
            Alert.alert('Error', 'Por favor ingresa correo y contraseña');
            return;
        }

        try {
            // formdata es para enviar el formulario a la API
            const formData = new FormData();
            formData.append('Email', username);
            formData.append('Password', password);

            // 1. Hacer la petición a tu API - La ip de aqui se cambia a la ip de la red para que funcione en expo go
            const response = await fetch('http://192.168.1.111:5000/api/Session/LoginDriver', {
                method: 'POST',
                body: formData,
        
            });

            // esto linea va en el Backend en C# EN LAUNCHSETTINS para correlo localmente
            //"applicationUrl": "https://localhost:5001;http://localhost:5000",
            const data = await response.json();

            // 2. Si las credenciales son correctas
            if (response.ok && data.status === 0) {
                setIsLoggedIn(true); // Cambia el estado de autenticación
                // Opcional: Guardar datos del chofer en AsyncStorage
                // await AsyncStorage.setItem('driver', JSON.stringify(data.driver));
            } else {
                Alert.alert('Error', data.message || 'Credenciales incorrectas');
            }
        } catch (error) {
            Alert.alert('Error', 'No se pudo conectar al servidor');
        }
        
        
    };

    return (
        <View style={globalStyles.container}>
            <Image 
                source={require('../../../assets/images/logo2.jpg')}
                style={globalStyles.logo}
                resizeMode="contain"
            />
            {/*<Text style={globalStyles.title}>Login Chofer</Text> */}
            <TextInput 
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
            style = {globalStyles.input}
            />
            <TextInput 
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            style = {globalStyles.input}
            />
            <TouchableOpacity style={globalStyles.buttonLogin} onPress={handleLogin}>
                <Text style={globalStyles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  
  logo: {
    width: 200,
    height: 80,
    marginBottom: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',     // Centra horizontalmente
    backgroundColor: '#4D4D4D',
    //paddingHorizontal: 40,
    //padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
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
  button: {
    backgroundColor: '#F5A623',
    //padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,

    marginLeft: 40,

    width: '80%',
    height:50,
    justifyContent: 'center',
  },
  buttonLogin: {
    backgroundColor: '#F5A623',
    //padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
    height:50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },  

});

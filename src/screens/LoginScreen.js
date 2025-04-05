import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("1@1.com")
  const [password, setPassword] = useState("123456")

  const handleLogin = () => {
    if(email === "") {
      Alert.alert('❌❌❌','El correo no puede ser vacio')
      return false
    }
    if(password === "") {
      Alert.alert('❌❌❌','El Contraseña no puede ser vacia')
      return false
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      })
      .catch((error) => {
        Alert.alert("❌❌❌", error.code);
      });
  }
  return (
    <SafeAreaView>
      <View style={style.containerTitle}>
        <Text style={style.title}>INICIO DE SESION</Text>
      </View>
      <View style={style.inputContainer}>
        <Ionicons name="at-outline" size={20} color="black" />
        <TextInput
          placeholder="Email"
          style={style.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={style.inputContainer}>
        <Ionicons name="lock-open-outline" size={20} color="black" />
        <TextInput
          placeholder="Password"
          style={style.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Iniciar sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.inputContainer} onPress={() => navigation.navigate('Register')}>
        <Text>¿Aun no tienes cuenta?</Text>
        <Text style={{fontWeight:'bold'}} > Registrate</Text>
      </TouchableOpacity>
    </SafeAreaView >
  )
}

const style = StyleSheet.create({
  containerTitle: {
    alignItems: 'center',
    paddingTop: 150
  },
  title: {
    fontFamily: '',
    fontSize: 25,
    fontWeight: 'lucida grande'
  },
  inputContainer: {
    marginInline: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1.5,
    marginTop: 30,
    width: "80%",
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    width: "80%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginInline: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
})
export default LoginScreen
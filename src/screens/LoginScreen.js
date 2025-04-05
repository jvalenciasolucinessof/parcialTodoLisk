import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

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
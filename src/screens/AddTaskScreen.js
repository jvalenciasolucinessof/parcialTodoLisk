import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { addTask } from '../data/taskFunctions';
import { Ionicons } from "@expo/vector-icons";

const AddTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSaveTask = async () => {
    if (title == "") {
      Alert.alert('❌❌❌', 'El titulo no puede ser vacio')
      return false
    }
    if (description == "") {
      Alert.alert('❌❌❌', 'La Descripcion no puede ser vacia')
      return false
    }
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      completed: false,
    };
    await addTask(newTask);
    navigation.goBack();

  };

  return (
    <SafeAreaView>
      <View style={style.inputContainer}>
        <Ionicons name="filter-outline" size={20} color="black" />
        <TextInput
          placeholder="Titulo"
          style={style.input}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={style.inputContainer}>
        <Ionicons name="attach-outline" size={20} color="black" />
        <TextInput
          placeholder="Descripcion de la Tarea"
          style={style.input}
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <TouchableOpacity style={style.button} onPress={handleSaveTask}>
        <Text style={style.buttonText}>Guardar Tarea</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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

export default AddTaskScreen;


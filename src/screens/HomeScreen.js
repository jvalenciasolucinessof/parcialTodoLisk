import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StyleSheet, Switch, Alert } from 'react-native';
import { deleteTask, getTasks, completeTask } from '../data/taskFunctions';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { signOut } from '@firebase/auth';
import { auth } from '../services/firebaseConfig';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useFocusEffect
  useFocusEffect(
    useCallback(() => {
      const fetchTasks = async () => {
        const storedTasks = await getTasks();
        setTasks(storedTasks);
      };
      fetchTasks();
    }, [])
  );

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    const updatedTasks = await getTasks();
    setTasks(updatedTasks);
  };

  const handleComplete = async (taskId) => {
    await completeTask(taskId);
    const updatedTasks = await getTasks();
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    navigation.navigate('AddTask');
  };

  const handleLogout = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro que deseas cerrar tu sesión?",
      [{
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sí, cerrar sesión",
          onPress: () => {
            signOut(auth)
              .then(() => {
                navigation.replace('Login');
              })
              .catch(err => Alert.alert('Error', 'No se pudo cerrar la sesión'));
          }
        }
      ]
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        bounces={false}
        overScrollMode="never"
        data={tasks}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
            <View style={{
              borderColor: '#e0e0e0',
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
              height: 70,
              backgroundColor: 'white',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => handleComplete(item.id)}>
                  <Ionicons name={item.completed ? 'ban-outline' : 'checkmark-done-outline'} size={24} color="black" />
                </TouchableOpacity>

              </View>
              <View style={{ flex: 4, paddingInline: 20, paddingTop: 10 }}>
                <Text style={{ fontSize: 18, color: item.completed ? 'red' : 'green', fontWeight: 'bold', textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                  {item.title}
                </Text>
                <Text numberOfLines={2} style={{ fontSize: 12, textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                  {item.description}
                </Text>

              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Text>❌</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View style={style.containerBotton}>
        <TouchableOpacity style={style.button} onPress={handleAddTask}>
          <Text style={style.buttonText}>Agregar Tarea</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonLogout} onPress={handleLogout}>
          <Ionicons name="exit-outline" size={35} color="black" />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    marginInline: 10,
    flex: 5,
    borderWidth: 2,
  },
  buttonLogout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginInline: 10,
    borderRadius: 10,

  },
  containerBotton: {
    padding: 10,
    marginTop: 25,
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
})
export default HomeScreen;

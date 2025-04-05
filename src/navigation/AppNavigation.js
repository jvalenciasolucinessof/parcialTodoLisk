

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // import depence stack

//import files Screen
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

const stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <stack.Navigator initialRouteName="Login" >
      <stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <stack.Screen name="AddTask" component={AddTaskScreen} options={{ headerShown: false }} />
      
    </stack.Navigator>
  );
};

export default AppNavigation;

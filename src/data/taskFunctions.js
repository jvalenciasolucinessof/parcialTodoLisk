import AsyncStorage from '@react-native-async-storage/async-storage';

// create task
export const addTask = async (task) => {
  try {
    const storedTasks = await AsyncStorage.getItem('tasks');
    let tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.push(task);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error adding task', error);
  }
};

// get all task
export const getTasks = async () => {
  try {
    const storedTasks = await AsyncStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error('Error getting tasks', error);
    return [];
  }
};

// remove one task
export const deleteTask = async (taskId) => {
  try {
    const storedTasks = await AsyncStorage.getItem('tasks');
    let tasks = storedTasks ? JSON.parse(storedTasks) :
    tasks = tasks.filter(task => task.id !== taskId);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error deleting task', error);
  }
};

// update state task
export const completeTask = async (taskId) => {
  try {
    const storedTasks = await AsyncStorage.getItem('tasks');
    let tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks = tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error completing task', error);
  }
};

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    // import for usign navigation 
    <NavigationContainer> 
      <AppNavigation />
    </NavigationContainer>
  );
}


import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import HomeScreen from './HomeScreen';
import ProductDetailScreen from './ProductDetailScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [showExternalElements, setShowExternalElements] = useState(false);

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'), // Reemplaza con la ubicación correcta de tu fuente
  });

  const toggleExternalElements = () => {
    setShowExternalElements(!showExternalElements);
  };

  if (!loaded) {
    return <AppLoading />; // Muestra una pantalla de carga mientras se cargan las fuentes
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          initialParams={{ showExternalElements }}
        />
        <Tab.Screen name="Detalle Producto" component={ProductDetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

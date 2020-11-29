import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detalleplato from './src/views/Detalleplato';
import FormularioPlato from './src/views/FormularioPlato';
import MenuLs from './src/views/Menu';
import NuevaOrden from './src/views/NuevaOrden';
import ProgresoPedido from './src/views/ProgresoPedido';
import ResumenPedido from './src/views/ResumenPedido';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'red' } }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="DetallePlato"
          component={Detalleplato}
          options={{ title: 'Detalle del plato' }}
        />

        <Stack.Screen
          name="FormularioPlato"
          component={FormularioPlato}
          options={{ title: 'Crear un Nuevo plato' }}
        />

        <Stack.Screen
          name="Menu"
          component={MenuLs}
          options={{ title: 'Menu' }}
        />

        <Stack.Screen
          name="NuevaOrden"
          component={NuevaOrden}
          options={{ title: 'Nueva Orden' }}
        />

        <Stack.Screen
          name="ProgesoPedido"
          component={ProgresoPedido}
          options={{ title: 'Progeso Pedido' }}
        />

        <Stack.Screen
          name="ResumenPedido"
          component={ResumenPedido}
          options={{ title: 'Resumen Pedido' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

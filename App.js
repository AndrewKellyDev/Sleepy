import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DashBoard from './Src/Screens/Dashboard_Screen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FullScreenTab from './Src/Screens/FullScreen';
import AudioPlayer from './Src/Screens/AudioPlayer';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="FullDetails" component={FullScreenTab} />
      </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

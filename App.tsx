import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Home } from './src/Home'

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor='#0D0D0D'
        barStyle='light-content'
        translucent/>
      <Home/>
    </>
  );
}


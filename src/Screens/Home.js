import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { LoginScreen } from './src/Screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> HOME SCREEN </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

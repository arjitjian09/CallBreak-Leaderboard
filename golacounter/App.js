import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';
import React from "react";

const image = { uri: "https://reactjs.org/logo-og.png" };



const App = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [round, onChangeRound] = React.useState(null);
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>Gola Counter</Text>
      <Text>Enter Number of Players:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Players"
        keyboardType="numeric"
      />
      <Text>Enter Number of Rounds:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeRound}
        value={round}
        placeholder="Rounds"
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
    </View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

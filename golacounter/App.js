import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import React from "react";

const image = { uri: "https://reactjs.org/logo-og.png" };


const App = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [round, onChangeRound] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text>Gola Counter</Text>
        <ImageBackground source={image}  resizeMode="cover" style={styles.image}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Number of Players:"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeRound}
        value={round}
        placeholder="Number of Rounds:"
        keyboardType="numeric"
      />
      </ImageBackground>
      <StatusBar style="auto" />
      <Button
        title="Start"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
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
  image:{
    alignSelf:'stretch',
    flex:1,
    justifyContent:'center',
  }
});

export default App;

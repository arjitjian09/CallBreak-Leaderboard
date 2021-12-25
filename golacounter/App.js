import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TextInput, ImageBackground } from 'react-native';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const image = { uri: "https://reactjs.org/logo-og.png" };


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Calculation" component={CalculationScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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





const HomeScreen = ({ navigation }) => {
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
      onPress={() =>
        navigation.navigate('Calculation', { players: [{name:'Lola',score:0},{name:'Dolly',score:0},{name:'Meetha',score:0},{name:'Laalu',score:0},
        {name:'Runal',score:0},], currentround :1 ,rounds:5,noOfPlayers:5 })
      }
    
    />
    </View>
  );
};


const CalculationScreen = ({ navigation, route }) => {
  return (
  <View>
  <Text>{route.params.currentround}</Text>
  {route.params.players.map((prop, key) => {
         return (
           <Text  key={key}>{prop['name']}</Text>
           
         );
      })}
  
  { route.params.currentround === route.params.rounds
  ?
  <Button
      title="Result"
      onPress={() =>
        navigation.navigate('Result', { players: [{name:'Lola',score:0},{name:'Dolly',score:0},{name:'Meetha',score:0},{name:'Laalu',score:0},
        {name:'Runal',score:0},], currentround :route.params.currentround ,rounds:5,noOfPlayers:5 })
      }
    
    />
  :
  <Button
      title="Next Round"
      onPress={() =>
        navigation.navigate('Calculation', { players: [{name:'Lola',score:0},{name:'Dolly',score:0},{name:'Meetha',score:0},{name:'Laalu',score:0},
        {name:'Runal',score:0},], currentround : route.params.currentround+1,rounds:5,noOfPlayers:5 })
      }
    
    />}
  </View>
  );
};

const ResultScreen = ({ navigation, route }) => {
  return (
  <View>
  <Text>Result</Text>
  {route.params.players.map((prop, key) => {
         return (
           <Text  key={key}>{prop['name']} {prop['score']}</Text>
         );
      })}
  
  </View>
  );
};

export default App;

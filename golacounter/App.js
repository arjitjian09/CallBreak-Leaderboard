import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TextInput, ImageBackground, ScrollView } from 'react-native';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Players"
          component={PlayerScreen}
          options={{ title: 'Players Screen' }}
        />
        <Stack.Screen 
        name="Calculation" 
        component={CalculationScreen} />
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
        <ImageBackground source={require('C:/Users/91626/project/CallBreak-Leaderboard/golacounter/assets/Background.jpg')}  resizeMode="cover" style={styles.image}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}
  keyboardShouldPersistTaps='handled'
>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Number of Players:"
        keyboardType="numeric"
      />
      </ScrollView>
      <ScrollView contentContainerStyle={{flexGrow: 1}}
  keyboardShouldPersistTaps='handled'
>
      <TextInput
        style={styles.input}
        onChangeText={onChangeRound}
        value={round}
        placeholder="Number of Rounds:"
        keyboardType="numeric"
      />
      </ScrollView>
      </ImageBackground>
      <StatusBar style="auto" />
    
    <Button
      title="Start"
      onPress={() =>
        navigation.navigate('Players',{noOfPlayer: number, noOfRounds: round} )
        //{ players: [{name:'Lola',score:0},{name:'Dolly',score:0},{name:'Meetha',score:0},{name:'Laalu',score:0},
        //{name:'Runal',score:0},], currentround :1 ,rounds:5,noOfPlayers:5 }
      }
    
    />
    </View>
  );
};

const CalculationScreen = ({ navigation, route }) => {
  return (
  <View>
  <Text>{route.params.rounds}</Text>
  {route.params.players.map((prop, key) => {
         return (
           <Text  key={key}>{prop['name']}</Text>
         );
      })}
  
  
  </View>
  );
};

export default App;

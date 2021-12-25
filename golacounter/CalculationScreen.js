import {  Text, Button, View, TextInput } from 'react-native';
import React from "react";


export const CalculationScreen = ({ navigation, route }) => {
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
  
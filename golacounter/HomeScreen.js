import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TextInput, ImageBackground, ScrollView } from 'react-native';
import React from "react";


const image = { uri: "https://reactjs.org/logo-og.png" };

export const HomeScreen = ({ navigation }) => {
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
          navigation.navigate('Calculation', { players: [{name:'Lola',score:0},{name:'Dolly',score:0},{name:'Meetha',score:0},{name:'Laalu',score:0},
          {name:'Runal',score:0},], currentround :1 ,rounds:5,noOfPlayers:5 })
        }
      
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

  
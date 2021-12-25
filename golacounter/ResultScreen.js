import { StyleSheet, Text, View } from 'react-native';
import React from "react";

export const ResultScreen = ({ navigation, route }) => {
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
  
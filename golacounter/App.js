import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./HomeScreen";
import { CalculationScreen } from "./CalculationScreen";
import { ResultScreen } from "./ResultScreen";

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
        {/* <Stack.Screen
          name="Players"
          component={PlayerScreen}
          options={{ title: 'Players Screen' }}
        /> */}
        <Stack.Screen 
        name="Calculation"
        component={CalculationScreen} />
      <Stack.Screen 
        name="Result" 
        component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  };

export default App;

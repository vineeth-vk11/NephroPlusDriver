
import React from 'react';

import MobileInput from './activities/MobileInput';
import Orders from './activities/Orders';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255,255,255)",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="MobileInput"
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="MobileInput" component={MobileInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

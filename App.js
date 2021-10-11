
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Splash from './activities/Splash';
import Otp_input from './activities/Otp_input';
import Mobile_input from './activities/Mobile_input';
import Orders from './activities/Orders';
import OrderDetails from './activities/OrderDetails';
import OrderComplete from './activities/OrderComplete';

const App=() => {
 

  return (
    <View style={{width:'100%',height:'100%'}}>
      {/* <Mobile_input/> */}
      {/* <Otp_input/> */}
      <Splash/>
      {/* <Orders/> */}
      {/* <OrderDetails/> */}
      {/* <OrderComplete/> */}
    </View>
  );
};

export default App;

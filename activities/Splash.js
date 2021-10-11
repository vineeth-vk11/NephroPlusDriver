
 import React,{Component} from 'react';
 import {
     BackHandler,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   Dimensions
 } from 'react-native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Mobile_input from './Mobile_input';
 import Otp_input from './Otp_input';
 import Orders from './Orders';
 import OrderDetails from './OrderDetails';
 import OrderComplete from './OrderComplete';
 const Stack = createNativeStackNavigator();
 const Splash=()=>{
   return(
    // <View style={styles.main}>
    <Stack.Navigator>
        <Stack.Screen
          name="MobileInput"
          component={Mobile_input}
          options={{ title: 'MobileInput' }}/>
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{ title: 'OrderDetails' }}/>
        <Stack.Screen
          name="OrderComplete"
          component={OrderComplete}
          options={{ title: 'OrderComplete' }}/>
        <Stack.Screen
          name="Otp_input"
          component={Otp_input}
          options={{ title: 'OTP Input' }}/> 
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{ headerShown: false }}/>
    </Stack.Navigator>
        // <Image
        //   style={styles.tinyLogo}
        //   source={require('../components/splash.png')}
        // />
    // </View>
   );
 }
 const styles = StyleSheet.create({
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    tinyLogo: {
        display:'flex',
        alignContent:'center',
        alignItems:'center'
      }
  });
 
 export default Splash;
 
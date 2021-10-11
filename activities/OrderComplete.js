
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
   Dimensions,
   TextInput,
   Button,
   TouchableOpacity
 } from 'react-native';
 const OrderComplete=()=>{
   return(
     <View style={styles.mainContainer}>
      <Image
          style={styles.tinyLogo}
          source={require('../components/icon.png')}
        />
      <View style={styles.main}>
        <Text style={styles.text}>Order #1 completed</Text>
      </View>
    <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'>
          <Text style={styles.label}>order details</Text>
    </TouchableOpacity>
    </View>
   );
 }
 const styles = StyleSheet.create({
    mainContainer:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
     input:{
        borderColor:"#9DC44D",
        borderWidth:1,
        width:'90%',
        marginLeft:50,
        marginRight:50,
        paddingStart:20
     },
     bottom_container:{
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 0,
      width:Dimensions.get('window').width,
   },
    label:{
      backgroundColor:'#9DC44D',
      fontSize:18,
      paddingTop:10,
      paddingBottom:10,
      textAlign:'center',
      color:'#ffffff'
  },

     text:{
        display:'flex',
        marginBottom:'17%',
        fontSize:24,
        fontWeight:'bold'
     },
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    tinyLogo: {
        display:'flex',
        bottom:'30%'
      }
  });
 
 export default OrderComplete;
 
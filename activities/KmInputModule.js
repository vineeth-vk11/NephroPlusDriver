import * as React from 'react';
import { View,TouchableOpacity,TextInput} from 'react-native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const KmInputModule = () => {
  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
        <Modal visible={visible} onDismiss={hideModal} style={{zIndex:1}}>
          <View style={{backgroundColor:'white',marginLeft:20,marginRight:20,zIndex:1,paddingTop:'3%',borderColor:'#9DC44D',borderWidth:1,alignItems:'center'}}>
            <Text style={{fontSize:16,fontWeight:"bold"}}>Enter end KM to confirm driving started</Text>
            <Text style={{color:'#757575',marginTop:'5%'}}>Once the status is set on the order it cannot be changed. So please confirm.</Text>
            <TextInput
            style={{borderColor:"#9DC44D",borderWidth:1,width:'95%',marginTop:'5%',borderRadius:5}}
            placeholder="useless placeholder"
            keyboardType="numeric"
            placeholder="Enter end KM. ex. 12285"
            placeholderTextColor="#7C7C7C"/>   
            <View style={{flexDirection:'row',marginTop:'7%',width:'100%',height:43,backgroundColor:'#F9F9F9',alignItems:'center'}}>
              <TouchableOpacity style={{flex:1,height:'100%',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontWeight:'bold',textAlign:'center',alignItems:'center'}}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,height:'100%',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontWeight:'bold',textAlign:'center',alignItems:'center'}}>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
  );
};

export default KmInputModule;
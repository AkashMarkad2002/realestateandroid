import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const SelectRole = ({navigation}) => {
   
  const [flow,setflow]=useState(0);
  const [border,setborder]=useState(0);
  const [devborder,setdevborder]=useState(0);
  const [ErrorMsg,setErrorMsg]=useState(null);
  
  function decideFlow(){
    if(flow==1){
      navigation.navigate('Login');
      return true
    }
    else if(flow==2){
      navigation.navigate('BrokerLogin')
      return true
    }else{
      //alert('Please Select Role')
      setErrorMsg('*Please select the role.')
      return false
    }
  }

  // function decideFlowAll(){
  //   if(!decideFlow()){


  //   }
  // }



  return (
  

    <SafeAreaView
      style={{
        padding: '5%',
        // alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        flex: 1,
      }}>
        <View>
          
        </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontWeight: '700', color: '#000', fontSize: 24, fontFamily: 'Lato-Regular', }}>
          Select Your Role
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity onPress={()=>{setflow(2);setborder(5);setdevborder(0);setErrorMsg(null)}}>
          <Image source={require('../../Assets/Images/broker.png')} style={{borderColor:'#000000',borderRadius:110,borderWidth:border}}/>
          <Text
            style={styles.text}>
         I'm a Broker
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity onPress={()=>{setflow(1);setdevborder(5);setborder(0);setErrorMsg(null)}}>
          <Image source={require('../../Assets/Images/Devloper.png')} style={{borderColor:'#000000',borderRadius:110,borderWidth:devborder,padding:20}}/>
          <Text
           style={styles.text}>
            I'm a Developer
          </Text>
        </TouchableOpacity>
      </View>
      {ErrorMsg && <Text  style={{alignSelf: 'center', color:'red'}}>{ErrorMsg} </Text>}
      <View>
        <TouchableOpacity
          
          onPress={()=>
             decideFlow()
          }>
          <Text
            style={{
              backgroundColor: '#000',
              color: '#FFFFFF',
              textAlign: 'center',
              overflow: "hidden",
              width: Platform.OS === 'ios' ? '90%' : '90%',
              padding: '5%',
              fontSize: 20,
              fontWeight: '700',
              borderRadius: Platform.OS === 'ios' ? 30 : 100,
              fontFamily:'Lato-Regular',
              alignSelf:'center'
            }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Image source={require('../../Assets/Images/FainLogo.png')} />
      </View>
    </SafeAreaView>
  
  );
};

export default SelectRole;


const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    fontWeight: '500',
    color: '#000',
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    marginTop:'10%'
  }

  
});
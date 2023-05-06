import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonCo = (props) => {
  return (
    <View >
    <TouchableOpacity style={{ justifyContent:'center', alignItems:'center',color:'white', backgroundColor:'black'
     , borderRadius:30}} onPress={props.Press} >
        <Text style={{padding:15, color:'white', fontSize:20, fontWeight:'700'}}>{props.btnname}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default ButtonCo
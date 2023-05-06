import { StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'


const MyProfileCom = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.Press}>
      <View style={styles.cont1}>
        <Image source={props.Img}   />
      </View>
      <View style={styles.cont}>
        <View style={styles.cont2}>
          <Text style={styles.text}>{props.Tit}</Text>
        </View>
        <View style={styles.cont3}>
                  <AntDesign name="right" size={20} color={'#000000'} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MyProfileCom

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontFamily: 'Lato-Bold',
        fontSize:16
    },
    cont2: {
      marginLeft:'10%'  
    },
  cont: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
    container: {
        marginTop: "5%",
        marginBottom:'5%',
    margin: '3%',
    flexDirection: 'row',
  },
});
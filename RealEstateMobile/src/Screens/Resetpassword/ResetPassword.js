

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './New';
import Entypo from 'react-native-vector-icons/Entypo';

const ResetPassword = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Image style={[styles.img, { marginTop: '5%' }]} source={require('../../Assets/Images/forpass.png')} />

      <View>
        <Text style={[styles.pageHeading, { textAlign: 'left', marginBottom: '2%' }]}>RESET PASSWORD</Text>
        <Text style={[styles.normaltext, { textAlign: 'left' }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mi sit hendrerit maecenas massa. </Text>
      </View>

      <View style={styles.forgotpassInput}>
        <Text style={styles.label}>New password*</Text>
        <View>
          <TextInput style={styles.inputBox} placeholder='Enter new Password' placeholderTextColor={'#ADACAC'} />
          {/* <Entypo name='eye' size={20} color={'grey'} /> */}
        </View>

        <Text style={styles.label}>Confirm password*</Text>
        <View style={styless.confirmCpassword}>
          <TextInput style={styles.inputBox} placeholder='Confirm Password' placeholderTextColor={'#ADACAC'} />
          {/* <Entypo name='eye' size={20} color={'grey'} /> */}
        </View>
      </View>



      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.btn}>SUBMIT</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default ResetPassword

const styless = StyleSheet.create({
  Container: {
    margin: 10
  },
  Mainimg: {
    justifyContent: 'center', alignItems: 'center',
  },

  resetPass: {
    fontSize: 24, color: 'black', marginTop: 10, fontWeight: '600'
  },
  resetPaaword: {
    margin: 8
  },
  AboutResetPass: {
    color: 'black', fontSize: 12, fontFamily: 'Lato-Regular',
  },
  newPassword1: {
    color: 'black', fontSize: 17, marginBottom: '4%', fontWeight: '500', fontFamily: 'Lato-Regular',
  },
  newPassword2: {
    color: 'black', fontSize: 17, marginBottom: '4%', marginTop: '3%', fontWeight: '500', fontFamily: 'Lato-Regular',
  },
  textInput: {
    borderWidth: 0.2, borderColor: ' #E1E1E1'
    , padding: '5%', borderRadius: 30, marginLeft: '3%'
  },
  submitButton: {
    backgroundColor: 'black', color: 'white', paddingLeft: '40%', paddingRight: '40%', paddingBottom: '5%', paddingTop: '5%', borderRadius: 30
  },
  submit1: {
    justifyContent: 'center', alignItems: 'center', marginTop: '15%'
  },

})

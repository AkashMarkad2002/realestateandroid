import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './New';
import Entypo from 'react-native-vector-icons/Entypo';
import Login from '../Login/Login';

const ResetPassword = ({ navigation }) => {
  const [Password, setPass] = useState('');
  const [img, setImg] = useState(require('../../Assets/Images/forpass.png'));
  const [passError, setPasswordError] = useState(null);
  const [hide, sethide] = useState(true)
  const [eye, seteye] = useState('eye')
  const [conhide, setconhide] = useState(true)
  const [coneye, setconeye] = useState('eye')

  function hider() {
    if (eye == 'eye') {
      seteye('eye-with-line')
      sethide(false)
    } else {
      seteye('eye')
      sethide(true)
    }
  }

  function hiders() {
    if (coneye == 'eye') {
      setconeye('eye-with-line')
      setconhide(false)
    } else {
      setconeye('eye')
      setconhide(true)
    }
  }



  function validatePassword(text) {
    // const re =
    // /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (text.length < 3 || !re.test(text)) {
      setPasswordError('Please enter a valid password');
      setImg(require('../../Assets/Images/forpassred.png'));
      return false;
    } else {
      setPasswordError(null);
      setImg(require('../../Assets/Images/forpass.png'));
      return true;
    }
  }



  const [ConfirmPassword, setConfirmPass] = useState('');
  const [confirmpassError, setConfirmPasswordError] = useState(null);
  function validateConfirmPassword(text) {

    if (text == Password) {
      console.log(Password);
      console.log(ConfirmPassword);
      setConfirmPasswordError(null);
      setImg(require('../../Assets/Images/forpass.png'));
      return true;
    } else {
      setConfirmPasswordError('Please enter a valid confirm password');
      setImg(require('../../Assets/Images/forpassred.png'));
      return false;
    }
  }


  function validateall() {
    if (validatePassword(Password) && validateConfirmPassword(ConfirmPassword)) {
      navigation.navigate('Login')
    } else {
      validateConfirmPassword(ConfirmPassword)
      validatePassword(Password)


    }
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView>
        <Image style={[styles.img, { marginTop: '5%' }]} source={img} />

        <View>
          <Text
            style={[styles.pageHeading, { textAlign: 'left', marginBottom: '2%', fontSize: 30 }]}>
            RESET PASSWORD
          </Text>
          <Text style={[styles.normaltext, { textAlign: 'left', fontSize: 14 }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mi sit
            hendrerit maecenas massa.{' '}
          </Text>
        </View>

        <View style={styles.forgotpassInput}>
          <Text style={styles.label}>New password*</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderWidth: 0.2,
            borderColor: passError ? 'red' : '#E1E1E1',
            padding: Platform.OS === 'ios' ? '4%' : '1%',
            paddingHorizontal: '4%',
            borderRadius: 30,
            marginVertical: '2%',
          }}>
            <TextInput
              style={{ width: '90%' }}
              placeholder="Enter new password"
              placeholderTextColor={'#ADACAC'}
              value={Password}
              secureTextEntry={hide}
              onChangeText={text => {
                validatePassword(text);
                setPass(text);
              }}
            />
            <TouchableOpacity onPress={() => hider()}>
              <Entypo name={eye} size={20} color={'grey'} />
            </TouchableOpacity>
          </View>
          {passError && (
            <Text style={{ color: 'red', fontSize: 14 }}>{passError}</Text>
          )}

          <Text style={styles.label}>Confirm password*</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderWidth: 0.2,
            borderColor: confirmpassError ? 'red' : '#E1E1E1',
            padding: Platform.OS === 'ios' ? '4%' : '1%',
            paddingHorizontal: '4%',
            borderRadius: 30,
            marginVertical: '2%',

          }}>
            <TextInput
              style={{ width: '90%' }}
              placeholder="Confirm password"
              placeholderTextColor={'#ADACAC'}
              value={ConfirmPassword}
              secureTextEntry={conhide}
              onChangeText={text => {
                validateConfirmPassword(text);
                setConfirmPass(text);
              }}

            />
            <TouchableOpacity onPress={() => hiders()}>
              <Entypo name={coneye} size={20} color={'grey'} />
            </TouchableOpacity>

          </View>
          {confirmpassError && (
            <Text style={{ color: 'red', fontSize: 14 }}>{confirmpassError}</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => {
           navigation.navigate('Login');
          }}
          style={styles.submitBtn}>
          <Text style={styles.btn}>SUBMIT</Text>
        </TouchableOpacity>



        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { navigation.navigate('Login') }} >
          <Text style={{ color: '#2D84EA', fontFamily: 'Lato-Regular', fontSize: 20 }}>Back To Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ResetPassword;

const styless = StyleSheet.create({
  Container: {
    margin: 10,
  },
  Mainimg: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  resetPass: {
    fontSize: 24,
    color: 'black',
    marginTop: 10,
    fontWeight: '600',
    fontFamily: 'Lato-Regular',
  },
  resetPaaword: {
    margin: 8,
  },
  AboutResetPass: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
  },
  newPassword1: {
    color: 'black',
    fontSize: 17,
    marginBottom: '4%',
    fontWeight: '500',
    fontFamily: 'Lato-Regular',
  },
  newPassword2: {
    color: 'black',
    fontSize: 17,
    marginBottom: '4%',
    marginTop: '3%',
    fontWeight: '500',
    fontFamily: 'Lato-Regular',
  },
  textInput: {

    borderWidth: 0.2,
    borderColor: ' #E1E1E1',
    padding: '5%',
    borderRadius: 30,
    marginLeft: '3%',
  },
  submitButton: {
    backgroundColor: 'black',
    color: 'white',
    paddingLeft: '40%',
    paddingRight: '40%',
    paddingBottom: '5%',
    paddingTop: '5%',
    borderRadius: 30,
  },
  submit1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
});












































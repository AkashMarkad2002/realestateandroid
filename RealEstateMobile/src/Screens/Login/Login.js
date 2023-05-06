import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
// import FlashMessage from "react-native-flash-message";
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

Icon.loadFont();

const { height, width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [img, setImg] = useState(require('../../Assets/LoginBlack.png'));
  const [emailError, setEmailError] = useState(null);
  const [Password, setPass] = useState('');
  const [passError, setPasswordError] = useState(null);
  const [eye, seteye] = useState(false)
  const [showLoader, setShowLoader] = useState(false);





  const Logindata = async() => {
    await messaging().registerDeviceForRemoteMessages();
    setShowLoader(true);
    const token = await messaging().getToken();
    console.log("https://node.acebrokers.app/api/v1/user/developerLogin");
    axios({
      method: 'post',
      url: "https://node.acebrokers.app/api/v1/user/developerLogin",
      data: {
        email: Email.toLowerCase(),
        password: Password,
        deviceToken:token,
        deviceType:Platform.OS==="ios"?"iOS":"android"


      }
    }).then(function (response) {
      AsyncStorage.setItem("token", response.data.result.token);
      AsyncStorage.setItem('userType',response.data.result.userType);
      AsyncStorage.setItem('user',response.data.result._id)
      AsyncStorage.setItem('Password',Password)
      AsyncStorage.setItem("ApplicationUsed", "Used");
     
      
      if (response.data.responseCode === 200) {
        // showMessage({
        //   message: response.data.responseMessage,
        //   type: "success",
        //   icon: "success",
        //   duration: 2000,
        // });
        if(isSelected){
          AsyncStorage.setItem('userCredentials', JSON.stringify({
            Email: Email.toLowerCase(),
            password: Password,
          }))
        }
        else{
          AsyncStorage.removeItem('userCredentials')
        }
        
        navigation.navigate("BootomTabNav");
        setShowLoader(false);
        
      } else {
        showMessage({
          message: response.data.responseMessage,
          type: "warning",
          icon: "warning",
          duration: 2000,
        });
        
      }
    }).catch(function (error) {
      const message = error.response?.data?.responseMessage
        ? error.response?.data?.responseMessage
        : "Something went wrong";
      setShowLoader(false);
      // setEmailError('Incorrect crediantials')
      // setPasswordError('Incorrect crediantials')
      console.log(message)

      showMessage({
        message: message,
        type: "danger",
        icon: "danger",
        duration: 2000
      });

    })
  }


  const [isSelected, setSelection] = useState(false);


  function validateEmail(text) {
    const re =
      /^([A-Z|a-z|0-9](\.|_|-){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (text.length < 3 || !re.test(text)) {
      setEmailError('Please enter a valid email address');
      setImg(require('../../Assets/loginRed.png'))

      return false;
    } else {
      setEmailError(null);
      setImg(require('../../Assets/LoginBlack.png'))
      // navigation.navigate('BootomTabNav')
      return true;
    }
  }
  function validatePassword(text) {
    // const re =
    //   /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@#$!%*?&]{8,}$/;
    if (text.length < 3 || !re.test(text)) {
      setPasswordError('Please enter a valid password');
      setImg(require('../../Assets/loginRed.png'));
      return false;
    } else {
      setPasswordError(null);
      setImg(require('../../Assets/LoginBlack.png'));
      return true;
    }
  }


  // useEffect(()=>{
  //   const nav=navigation.addListener('focus', () => {
  //   getUserCredentials()
  //   })
  //   return nav;
  // },[navigation])



  const getUserCredentials = async() => {
    const userCred = await AsyncStorage.getItem('userCredentials');
    console.log(userCred)
    if(userCred){
      const parsedCred = JSON.parse(userCred)
      console.log(parsedCred.Email, parsedCred.password, 'userCredentials');
      setEmail(parsedCred.Email ? parsedCred.Email : '');
      setPass(parsedCred.password ? parsedCred.password : '')
    }
  }
  




  function validate() {
    if (validateEmail(Email) && validatePassword(Password)) {
      Logindata()
    } else {
      validateEmail(Email)
      validatePassword(Password)
    }

  }

  const Loginuser = () => {

    setShowLoader(true);
    axios({
      method: 'POST',
      url: 'https://node.acebrokers.app/api/v1/user/developerLogin',
      data: {
        "email": Email,
        "password": Password
      }
    }).then(function (response) {
      setShowLoader(false);
      if (response.data.responseCode === 200) {
        console.log('Response user login', response.data.result.token);
        AsyncStorage.setItem('token', response.data.result.token);
        AsyncStorage.setItem('userType',response.data.result.userType);
        console.log('usertype:======',response.data.result.userType);
        
        // showMessage({
        //   message: response.data.message,
        //   type: "success",
        //   icon: "success",
        //   duration: 2000,
        // });
        navigation.navigate("BootomTabNav");
      } else {
        // showMessage({
        //   message: response.data.message,
        //   type: "warning",
        //   icon: "warning",
        // });
      }
    }).catch(function (error) {
      console.log('Error user response', error.response);
      const message = error.response?.data?.message
        ? error.response?.data?.message : "Something went wrong";
      setShowLoader(false);
      showMessage({
        message: message,
        type: "danger",
        icon: "danger",
        duration: 2000
      })
    })
  }


  return (

    <SafeAreaView>


      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imgcontainer}>
            <Image source={img} />
          </View>

          <View style={styles.bottomcontainer}>
            <View style={styles.btmcont1}>
              <View>
                <Text style={styles.login}>LOGIN</Text>
                <Text style={styles.
                  dev}>DEVELOPER</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.switchrole} onPress={() => { navigation.navigate('SelectRole') }} >Switch Role</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: "8%" }} >
              <View>
                <Text style={{ fontSize: 20, fontWeight: '500', color: '#000000', fontFamily: 'Lato-Regular', }}>
                  Email address*
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: '4%',
                    paddingVertical: Platform.OS === 'ios' ? '3%' : '0.01%',
                    borderRadius: 100,
                    borderColor: emailError ? 'red' : '#E1E1E1',
                    marginVertical: '2%',
                  }}>

                  <View style={{ width: '90%', marginVertical: '2%', }}>
                    <TextInput

                      placeholder="Enter email address"
                      placeholderTextColor={'#ADACAC'}
                      placeholderTextSize={14}
                      placeholderTextFontWeight={'400'}
                      style={{ color: '#000000' }}
                      maxLength={320}
                      value={Email}
                      onChangeText={text => {
                        console.log(Email)
                        validateEmail(text);
                        setEmail(text);
                      }}></TextInput>

                  </View>

                  <View>
                    <Foundation name="mail" size={19} color={'#ADACAC'} />
                  </View>
                </View>
                {emailError && (
                  <Text style={{ color: 'red', marginTop: '-2%' }}>{emailError}</Text>
                )}
              </View>

              <View>
                <Text style={{ fontSize: 20, fontWeight: '500', color: '#000000', fontFamily: 'Lato-Regular', marginTop: '1%' }}>
                  Password*
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: '4%',
                    paddingVertical: Platform.OS === 'ios' ? '3%' : '0.01%',
                    borderRadius: 100,
                    borderColor: passError ? 'red' : '#E1E1E1',
                    marginVertical: '2%',
                  }}>
                  <View style={{ width: '90%', marginVertical: '2%', }}>
                    <TextInput
                      secureTextEntry={eye ? false : true}
                      placeholder="Enter password"
                      placeholderTextColor={'#ADACAC'}
                      placeholderTextSize={14}
                      placeholderTextFontWeight={'400'}
                      minLength={8}
                      maxLength={16}

                      style={{ color: '#000000' }}
                      value={Password}
                      //secureTextEntry={hide}
                      onChangeText={text => {
                        validatePassword(text);
                        setPass(text);
                      }}></TextInput>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => seteye(!eye)} >

                      <Entypo name={eye ? 'eye-with-line' : "eye"} size={18} color={'#ADACAC'} />
                    </TouchableOpacity>
                  </View>
                </View>
                {passError && (
                  <Text style={{ color: 'red', marginTop: '-2%' }}>{passError}</Text>
                )}
              </View>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkview}>
                <CheckBox

                  tintColors={
                    { true: Platform.OS === 'ios' ? '#000000' : '#000000', false: Platform.OS === 'ios' ? 'grey' : '#000000' }}

                  value={isSelected}
                  onCheckColor={'#ffffff'}
                  // animationDuration={false}
                  boxType={'square'}
                  onAnimationType={'fill'}
                  onFillColor={'#000000'}
                  onTintColor={'grey'}
                  //  transform={{'translateX'(10), 'translateY'(10)}}
                  onValueChange={(newValue)=>{
                    console.log(newValue)

                    setSelection(newValue)
                
                  }
                  }
                  

                  style={[
                    { transform: Platform.OS === 'ios' ? [{ scaleX: 0.8 }, { scaleY: 0.8 }] : [{ scaleX: 1.2 }, { scaleY: 1.2 }] }, { marginTop: Platform.OS === 'ios' ? '30%' : '0.01%' }]
                  }
                // ref={check}
                />
                <Text style={styles.remember}>Remember me</Text>
              </View>

              <TouchableOpacity onPress={() =>
                
               { navigation.navigate('ForgotPass');
               setEmailError(null);
               setPasswordError(null);
               }}>
                <Text style={styles.remember}>Forgot password ?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('BootomTabNav')}>
              <Text style={styles.btn}>{showLoader ? <ActivityIndicator color={"white"} /> : "LOGIN"}</Text>
            </TouchableOpacity>

            <View
            style={{
              //borderWidth: 1,
              alignItems: 'center',
              flexDirection: 'row',
              marginTop:'7%',
              //width: '99%',
              //height: '10%',
              marginBottom: '3%',
            }}>
            <Text style={styles.lasttxt}>
              By accessing this platform,you accept the
              <Text
                style={{ color: '#2D84EA' }}
                onPress={() => navigation.navigate('TermsAndConditions')}>
                {' '}
                Terms & Conditions{' '}
              </Text>
              and
              <Text
                style={{ color: '#2D84EA' }}
                onPress={() => navigation.navigate('PrivacyPolicy')}>
                {' '}
                Privacy Policy{' '}
              </Text>
            </Text>
          </View> 

          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    padding: '5%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'flex-start'
  },
  imgcontainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  bottomcontainer: {
    width: '100%',
    height: '70%',
    borderColor: 'red',



  },
  btmcont1: {
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  login: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Lato-Regular',
  },
  dev: {
    fontSize: 14,
    fontWeight: '400',
    color: '#909090',
    fontFamily: 'Lato-Regular',
  },

  switchrole: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2D84EA',
    fontFamily: 'Lato-Regular',
  },

  input: {
    flexDirection: 'row',
    borderColor: 'green',
    borderWidth: 1,
  },
  checkboxContainer: {
    marginTop: '4%',


    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  checkview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
  },

  remember: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Lato-Regular'
  },
  lasttxt: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  btn: {
    marginTop: '5%',
    backgroundColor: '#000',
    overflow: 'hidden',
    color: '#FFFFFF',
    textAlign: 'center',
    width: '100%',
    overflow: "hidden",
    padding: '5%',
    fontSize: 20,
    fontWeight: '700',

    borderRadius: Platform.OS === 'ios' ? 30 : 100,

    fontFamily: 'Lato-Regular',

  },
});


// ADded





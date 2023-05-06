import { View, Text, TextInput, Image, TouchableOpacity, Platform, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
const { height, width } = Dimensions.get('window');
import axios from 'axios';
import { showMessage } from "react-native-flash-message";









const ForgotPass = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [img, setImg] = useState(require('../../Assets/forgotPassBlackImg.png'));
  const [emailError, setEmailError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  function validateEmail(text) {
    const re =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (text.length < 3 || !re.test(text)) {
      setEmailError('Please enter a valid email address');
      setImg(require('../../Assets/ForgotPassRedImg.png'))
      return false;
    } else {
      setEmailError(null);
      setImg(require('../../Assets/forgotPassBlackImg.png'))

      return true;
    }
  }
  function validate() {

    if (validateEmail(Email)) {

      forgetpassdata()
      // navigation.navigate('Otpverify')
    }

    ;
  }

  const forgetpassdata = () => {
    setShowLoader(true);
    axios({
      method: 'post',
      url: "https://node-realestate.mobiloitte.com/api/v1/user/forgotPassword",
      data: {
        email: Email,
      }

    }).then(function (response) {
      console.log("Response", response.data);
      setShowLoader(false);
      if (response.data.responseCode === 200) {
        showMessage({
          message: response.data.responseMessage,
          type: "success",
          icon: "success",
          duration: 2000,
        });
        navigation.navigate('Otpverify')
      } else {
        showMessage({
          message: response.data.responseMessage,
          type: "warning",
          icon: "warning",
          duration: 2000,
        });
      }


    }).catch(function (error) {
      console.log("Error", error.response?.data?.responseMessage);
      const message = error.response?.data?.responseMessage
        ? error.response?.data?.responseMessage
        : "Something went wrong";
      setShowLoader(false);
      showMessage({
        message: message,
        type: "danger",
        icon: "danger",
        // duration: 2000
      });

    })


  }



  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View
          style={{
            backgroundColor: ' #F5F5F5',
            padding: '5%',
            height: height,
            // justifyContent: 'space-between',
          }}>
          <Image
            source={img}
            style={{ height: '40%', width: '70%', alignSelf: 'center' }}
          />

          <View >
            <View>
              <Text style={{ color: '#000', fontWeight: '700', fontSize: 30, fontFamily: 'Lato-Regular' }}>
                FORGOT PASSWORD
              </Text>
            </View>
            <View style={{ marginTop: Platform.OS === 'ios' ? '1%' : '3%' }}>
              <Text style={{ color: '#000', fontWeight: '400', fontSize: 14, fontFamily: 'Lato-Regular' }}>
                Please enter the email you'd like your password reset information
                sent to
              </Text>
            </View>
          </View>
          <View >
            <View style={{ marginTop:'5%' }} >
              <Text style={{ color: '#000', fontWeight: '500', fontSize: 24, fontFamily: 'Lato-Regular' }}>
                Email address*
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: '4%',
                borderRadius: 100,
                borderColor: emailError ? 'red' : 'grey',
                marginVertical: '2%',
             
                //height: Platform.OS === 'ios' ? 50 : 100
              }}>
              <View style={{ width: '90%'}}>
                <TextInput
                  style={{ marginVertical: Platform.OS === 'ios' ? '5%' : '2%', }}
                  placeholderTextColor="#ADACAC"
                  placeholder="Enter email address"
                  placeholderTextSize={14}
                  placeholderTextFontWeight={'400'}
                  value={Email.trim()}
                  onChangeText={text => {
                    validateEmail(text);
                    setEmail(text);
                  }}
                />

              </View>

              <View>
                <Foundation name="mail" size={20} color={'#ADACAC'} />
              </View>
            </View>
            {emailError && (
              <Text style={{ color: 'red', fontFamily: 'Lato-Regular' }}>{emailError}</Text>
            )}
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Otpverify')}>
              <Text
                style={{
                  backgroundColor: '#000',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  overflow: 'hidden',
                  width: '100%',
                  padding: '5%',
                  fontSize: 20,
                  fontWeight: '700',
                  borderRadius: Platform.OS === 'ios' ? 30 : 100,
                  fontFamily: 'Lato-Regular',
                  marginTop:'10%' 
                }}>
                SEND
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ textAlign: 'center', color: '#2D84EA', fontSize: 18, fontFamily: 'Lato-Regular', marginTop:'5%'  }}>
                Back to login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>


    </SafeAreaView>
  );
};

export default ForgotPass;

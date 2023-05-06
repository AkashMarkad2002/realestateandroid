
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions,SafeAreaView,Platform } from 'react-native';
import React, { useState } from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window');

const ContactUs = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [FullName, setFullName] = useState('');
  const [FullNameError, setFullNameError] = useState(null);


  function validateFullName(text) {
    const FullNameReg = /(?=^.{0,20}$)^\S+[a-zA-Z-]+\s[a-zA-Z-]+\S+$/;
    if (text.length == 0) {
      setFullNameError('Full Name is required');
      return false
    } else if (text.length < 3) {
      setFullNameError('min 3 character');
      return false
    } else if (FullNameReg.test(text)) {
      setFullNameError(null);
      return true;
    } else {
      setFullNameError(
        'Please Enter valid Full Name.'
      );
      return false;
    }
  }

  function validateEmail(text) {
    const re =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (text.length < 3 || !re.test(text)) {
      setEmailError('Please enter a email address.');

      return false;
    } else {
      setEmailError(null);


      return true;
    }
  }

  function validate() {
    if (validateEmail(Email) && validateFullName(FullName)) {
        navigation.navigate('Helpm');
    } else {
      validateEmail(Email)
      validateFullName(FullName)
    }
  };


  return (
    <SafeAreaView>


    
    <ScrollView style={{
      padding: '5%', height: Platform.OS === 'ios' ? '100%' : '100%',backgroundColor: Platform.OS==='ios'?'#F5F5F5F':null
    }}>
      <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="arrowleft" size={25} color="#000000" onPress={() => navigation.goBack()} />
        <Text
          style={{
            color: '#000000',
            fontSize: 24,
            fontWeight: '700',
            paddingHorizontal: '5%',
            fontFamily: 'Lato-Regular',
          }}>
          Contact Us
        </Text>
      </View>

      <View style={{ marginTop: '5%', height: height * 0.3, }}>
        <Image
          style={{ height: height * 0.3, width: '100%', resizeMode: 'contain', position: 'relative' }}

          source={require('../../Assets/Images/contactus.png')}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#E1E1E1',
          paddingHorizontal: '4%',
          borderRadius: 25,
          marginTop: 10,
          
        }}>
        <TextInput
        style={{marginVertical:Platform.OS === 'ios' ? '5%' :null,}}
          placeholderTextColor="#ADACAC"
          placeholder="Enter your name"
          maxLength={16}
          placeholderTextSize={14}
          placeholderTextFontWeight={'400'}
          value={FullName}
              onChangeText={txt => {
                setFullName(txt);
                validateFullName(txt);
              }}
        ></TextInput>
      </View>
      {FullNameError && (
        <Text style={{ color: 'red', marginLeft: 15 }}>{FullNameError}</Text>
      )}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#E1E1E1',
          justifyContent: 'space-between',
          paddingHorizontal: '4%',
          borderRadius: 25,
          marginTop: 10
        }}>
        <TextInput
        style={{marginVertical:Platform.OS === 'ios' ? '5%' :null,}}
          placeholderTextColor="#ADACAC"
          placeholder="Enter your email address"
          placeholderTextSize={14}
          placeholderTextFontWeight={'400'}

          value={Email.trim()}
          onChangeText={text => {
            validateEmail(text);
            setEmail(text);
          }}></TextInput>



      </View>
      {emailError && (
        <Text style={{ color: 'red', marginLeft: 15 }}>{emailError}</Text>
      )}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#E1E1E1',
          justifyContent: 'space-between',
          paddingHorizontal: '4%',

          borderRadius: 25,
          marginTop: 10
        }}>
        <TextInput
          multiline={true}
          style={{ textAlignVertical: 'top',marginVertical:Platform.OS === 'ios' ? '5%' :null, height: Platform.OS === 'ios'? 95 :null}}
          numberOfLines={7}
          placeholderTextColor="#ADACAC"
          placeholder="Comments"
          placeholderTextSize={14}
          placeholderTextFontWeight={'400'}></TextInput>
      </View>
      <View>
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              fontWeight: '700',
              textAlign: 'center',
              fontFamily: 'Lato-Regular',
            }}>
            Contact Us
          </Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              width: '50%'
            }}>
            <Fontisto name="email" size={40} color='#ADACAC'
            />
            <View style={{ marginHorizontal: '5%' }}>
              <Text style={{ fontsize: 14, fontWeight: '400', color: '#000' }}>Email</Text>
              <Text style={{ fontsize: 12, fontWeight: '700', color: '#ADACAC' }}>de-pramod@123</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              width: '45%',
              alignItems: 'flex-start'
            }}>
            <MaterialIcons name="call" size={40}
              color='#ADACAC' />
            <View style={{ marginHorizontal: '10%', }}>
              <Text style={{ fontsize: 14, fontWeight: '400', color: '#000' }}>Contact us</Text>
              <Text style={{ fontsize: 12, fontWeight: '400', color: '#ADACAC' }}>9858585858</Text>
            </View>
          </View>

        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            validate();
          }} >
          <Text
            style={{
              backgroundColor: '#000',
              color: '#FFFFFF',
              textAlign: 'center',
              overflow:'hidden',
              width: '100%',
              padding: '5%',
              fontSize: 20,
              fontWeight: '700',
              borderRadius:  Platform.OS === 'ios' ? 30 : 100,
              marginVertical: height * 0.02,
              fontFamily: 'Lato-Regular',
              
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </ScrollView>
    </SafeAreaView>
   
  );
};



export default ContactUs;
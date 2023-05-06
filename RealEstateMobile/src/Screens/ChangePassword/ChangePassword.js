import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonCo from '../../Components/ButtonCo';
import Entypo from 'react-native-vector-icons/Entypo';

const ChangePassword = ({ navigation }) => {
  const [OldPass, setOldPass] = useState('');
  const [OldPassError, setOldPassError] = useState(null);
  const [Pass, setPass] = useState('');
  const [PassError, setPassError] = useState(null);
  const [ConformPass, setConformPass] = useState('');
  const [ConformPassError, setConformPassError] = useState(null);
  const [eye, seteye] = useState(false)
  const [eye1, seteye1] = useState(false)
  const [eye2, seteye2] = useState(false)





  function validateOldPass(text) {
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (text.length == 0) {
      setOldPassError('*Please enter a valid old password.');
    }
    else if (passReg.test(text)) {
      setOldPassError(null);
      return true;
    } else {
      setOldPassError('*Please enter a valid old password.');
      return false;
    }
  }

  function validatePass(text) {
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if( text == OldPass){
      setPassError('*Password should not match with New Password');

    
    }
    else if (passReg.test(text)) {
      setPassError(null);
      return true;
    }else if (text.length == 0) {
      setPassError('*Password must contain a uppercase letter, a number & a special character');

    } else {
      setPassError('*Password must contain a uppercase letter, a number & a special character');
      return false;
    }
  }

  function validateConformPass(text) {
    if (text === '') {
      setConformPassError('*Confirm Password should match with New Password');
    }
    else if (text !== Pass) {
      setConformPassError('*Confirm Password should match with New Password');
      return false;
    } else {
      setConformPassError(null);
      return true;
    }

  }

  function onSave() {
    if (validateOldPass(OldPass) && validatePass(Pass) && validateConformPass(ConformPass)) {
      //setFormError(null)
      // navigation.navigate('Login');
      return true;

    } else {
      validatePass(Pass);
      validateConformPass(ConformPass);
      validateOldPass(OldPass);
      return false;
      //setFormError('Please fill all the  information');
    }

  }
  return (
    <SafeAreaView style={{backgroundColor: Platform.OS==='ios'?'#F5F5F5F':null}}>
    <ScrollView style={{ }}>
      <View style={styles.Container}>
        <View style={styles.cont1}>
          <View style={styles.arroweditprilfecont}>
            <AntDesign name="arrowleft" size={30} color={'#000000'} onPress={() => navigation.goBack()} />
            <Text style={styles.edittext}>Change Password</Text>
          </View>
        </View>

        <View style={styles.inputcont}>
            <Text style={styles.inputtitle}>Old Password*</Text>
            <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              borderRadius: 100,
              borderColor: '#E1E1E1',
              
            }}>
            <View style={{ width: '80%', marginVertical:Platform.OS === 'ios' ? '5%' :null,  }}>
              <TextInput
                secureTextEntry={eye ? false : true}
                placeholder="Enter old password"
                placeholderTextColor={'#ADACAC'}
                placeholderTextSize={14}
                // placeholderTextFontWeight={'400'}
                minLength={8}
                maxLength={16}

                style={{ color: '#000000' }}
                value={OldPass}
                //secureTextEntry={hide}
                onChangeText={(txt) => {
                  validateOldPass(txt);
                  setOldPass(txt);
                }}></TextInput>
            </View>
            <View>
              <TouchableOpacity onPress={() => seteye(!eye)} >

                <Entypo name={eye ? 'eye-with-line' : "eye"} size={18} color={'#ADACAC'} />
              </TouchableOpacity>
            </View>
          </View>
            <Text style={styles.errormsg}>{OldPassError}</Text>

            <Text style={styles.inputtitle}>New Password*</Text>
            <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              borderRadius: 100,
              borderColor: '#E1E1E1',
              
            }}>
            <View style={{ width: '80%', marginVertical:Platform.OS === 'ios' ? '5%' :null, }}>
              <TextInput
                secureTextEntry={eye1 ? false : true}
                placeholder="Enter new password"
                placeholderTextColor={'#ADACAC'}
                placeholderTextSize={14}
                // placeholderTextFontWeight={'400'}
                minLength={8}
                maxLength={16}

                style={{ color: '#000000' }}
                // value={Password}
                //secureTextEntry={hide}
                onChangeText={(txt) => {
                  validatePass(txt);
                  setPass(txt);
                }}></TextInput>
            </View>
            <View>
              <TouchableOpacity onPress={() => seteye1(!eye1)} >

                <Entypo name={eye1 ? 'eye-with-line' : "eye"} size={18} color={'#ADACAC'} />
              </TouchableOpacity>
            </View>
          </View>
                <Text style={styles.errormsg}>{PassError}</Text>
            <Text style={styles.inputtitle}>Confirm Password*</Text>
            <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              borderRadius: 100,
              borderColor: '#E1E1E1',
              
            }}>
            <View style={{ width: '80%', marginVertical:Platform.OS === 'ios' ? '5%' :null, }}>
              <TextInput

                secureTextEntry={eye2 ? false : true}
                placeholder="Enter confirm password"

                // secureTextEntry={eye2 ? false : true}
                // placeholder="Enter old password"

                placeholderTextColor={'#ADACAC'}
                placeholderTextSize={14}
                // placeholderTextFontWeight={'400'}
                minLength={8}
                maxLength={16}

                style={{ color: '#000000' }}
                value={ConformPass}
                //secureTextEntry={hide}
                onChangeText={(txt) => {
                  validateConformPass(txt);
                  setConformPass(txt);
                }}></TextInput>
            </View>
            <View>
              <TouchableOpacity onPress={() => seteye2(!eye2)} >

                <Entypo name={eye2 ? 'eye-with-line' : "eye"} size={18} color={'#ADACAC'} />
              </TouchableOpacity>
            </View>
          </View>
            <Text style={styles.errormsg}>{ConformPassError}</Text>
          
        </View>
        <View>
          <ButtonCo btnname="SAVE" Press={() => {
            if (onSave()){
              navigation.navigate('Myaccount')
            }
           ;
          
          }} />
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};



export default ChangePassword;

const styles = StyleSheet.create({
  Container: {
    padding: '5%',

    
  },
  cont1: {
  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  arroweditprilfecont: {
   
    flexDirection: 'row',
    alignItems: 'center',
  },
  edittext: {
    fontSize: 24,
    fontWeight: '700',
    paddingLeft: '3%',
    color: '#000000',
    fontFamily: 'Lato-Regular',
  },
  imgcont: {
   
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: '3%',
  },
  inputbox: {
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 30,
    paddingLeft: '8%',
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    fontWeight: '400',
    color: '#000000',
    //marginVertical: '2%',
  },
  inputcont: {
    marginVertical: '5%',
    // borderWidth: 1,
    marginTop: '12%',
    marginBottom: '12%'
    // height:'80%'
  },
  inputtitle: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',

    color: '#000000',
    marginBottom: '4%'
  },
  inputcont1: {
    //borderWidth:1, 
    marginTop: '2%'
  },
  errormsg: {
    color: 'red',
    padding:5,
    fontSize: 10,
    fontFamily: 'Lato-Bold',
    fontWeight: '400',

  },

});

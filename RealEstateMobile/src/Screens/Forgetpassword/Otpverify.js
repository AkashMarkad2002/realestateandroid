



import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Modal,
  Pressable,
  Platform,
  SafeAreaView
} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { styles } from './New';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { validatePathConfig } from '@react-navigation/native';


const Otpverify = ({ navigation }) => {
  const [opacity, setOpacity] = useState(1)
  const [modalVisible, setModalVisible] = useState(false);
  const [color, setColor] = useState('#000')

  const [img, setImg] = useState(require('../../Assets/Images/ov1.png'))
  const [error, setError] = useState(null)
  const [time, setTime] = useState(0)
  const [timer, setTimer] = useState(60);
  const [code, setCode] = useState('')

  // useEffect(()=>{
  //     setOpacity(0.1)
  //     setModalVisible(true);
  //     setTimeout(() => {
  //       setModalVisible(false);
  //       setOpacity(1)
  //     }, 3000);
  // },[])


  const timeOutCallback = useCallback(() => {
    setTimer(currTimer => currTimer - 1);

  }, []);

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
    if (timer == 1) {
      setTime(1)
    }
  }, [timer, timeOutCallback]);

  const resetTimer = function () {
    if (!timer) {
      setTimer(56);
    }
  };

  function validateCode(code) {
    if (code == '0000') {
      setError(null);
      navigation.navigate('ResetPassword');
      setColor('#000')
      setImg(require('../../Assets/Images/ov1.png'))
      return 0

    } else {
      setColor('red')
      setImg(require('../../Assets/Images/otpred.png'))
      setError('Please enter a valid OTP')
    }


  }







  return (
    <ScrollView style={[styles.mainContainer, { opacity: opacity }]}>
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ padding: 20, backgroundColor: '#000000' }}>

              </View>
              <View style={{ padding: 35, justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name="checkcircle" size={25} color={'#000'} />
                <Text style={{
                  marginBottom: 15,
                  fontSize: 25,
                  textAlign: "center",
                  color: '#000',
                  margin: '2%',
                  fontFamily: 'Lato-BoldItalic',

                }}>SUCCESS!</Text>
                <Text style={{
                  marginBottom: 15,
                  fontSize: 15,
                  textAlign: "center",
                  color: '#585858'
                }}>OTP sent Successfully!!</Text>
              </View>

            </View>
          </View>
        </Modal>
        <Text style={styles.pageHeading}>OTP Verification</Text>

        <Image
          source={img}
          style={styles.img}
        />

        <View>
          <Text style={styles.normaltext}>
            Please enter the 4 digits OTP sent on your registered email address.
          </Text>
          <OTPInputView
            style={{
              height: 60,
              width: '80%',
              alignSelf: 'center',
              marginTop: '10%',
            }}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={[styles.otpinputbox, { borderColor: color }]}
            codeInputHighlightStyle={styles.otpBoxHighlight}
            editable
            onCodeFilled={code => {
              return setCode(code);
            }}
          />
          {error && <Text style={{ color: 'red', marginLeft: '10%', margin: '2%' }}>{error}</Text>}
          <View style={[styles.inlinetext, { display: time == 1 ? 'none' : 'flex' }]}>
            <Text style={styles.normaltext}>Resend code in </Text>
            <Text style={[styles.normaltext, styles.timer,]}>{timer} {''}</Text>
            <Text style={styles.normaltext}>s</Text>
          </View>
          <TouchableOpacity onPress={() => { setTime(0); resetTimer() }} style={[styles.inlinetext, { display: time == 1 ? 'flex' : 'none' }]}>
            <Text style={[styles.normaltext, { color: '#000' }]}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonView}>
          <TouchableOpacity onPress={()=>navigation.navigate('ResetPassword')}>
            <Text style={styles.btn}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Otpverify;
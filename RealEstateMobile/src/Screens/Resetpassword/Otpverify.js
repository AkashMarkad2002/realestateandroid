
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
} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { styles } from './New';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Otpverify = () => {
  const [opacity, setOpacity] = useState(1)
  const [modalVisible, setModalVisible] = useState(false);
  const [color, setColor] = useState('#000')
  const [btns, setbtn] = useState(0)
  const [img, setImg] = useState(require('../../Assets/Images/ov1.png'))
  const [error, setError] = useState(null)
  const [time,setTime]=useState(0)
  const [timer, setTimer] = useState(60);
  const timeOutCallback = useCallback(() => {
    setTimer(currTimer => currTimer -1);
    
  }, []);

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
    if(timer==1){
      setTime(1)
    }
  }, [timer, timeOutCallback]);

  const resetTimer = function () {
    if (!timer) {
      setTimer(56);
    }
  };

  function validateCode(code) {
    var newCode = code;

    if (newCode == '0000') {
      setOpacity(0.1)
      setModalVisible(true);
      setError(null)
      setTimeout(() => {
        setModalVisible(false);
        setOpacity(1)
      }, 3000);
      setColor('#000')
      setImg(require('../../Assets/Images/ov1.png'))
      setbtn(3)
      return 0

    } else {
      setbtn(0)
      setColor('red')
      setImg(require('../../Assets/Images/otpred.png'))
      setError('Please enter valid OTP')
    }


  }

  function Nav() {
    if (btns == 3) {
      navigation.navigate('ResetPassword')
    }
  }

  return (



    <ScrollView style={[styles.mainContainer, { opacity: opacity }]}>
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
              }}>OTP verified Successfully!!</Text>
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
            console.log(`Code is ${code}, you are good to go!`);
            return validateCode(code);
          }}
        />
        {error && <Text style={{ color: 'red', marginLeft: '10%', margin: '2%' }}>{error}</Text>}
        <View style={[styles.inlinetext,{display:time==1?'none':'flex'}]}>
          <Text style={styles.normaltext}>Resend code in </Text>
          <Text style={[styles.normaltext, styles.timer,]}>{timer} {''}</Text>
          <Text style={styles.normaltext}>s</Text>
        </View>
        <TouchableOpacity onPress={()=>{setTime(0);resetTimer()}} style={[styles.inlinetext,{display:time==1?'flex':'none'}]}>
        <Text style={[styles.normaltext,{color:'#000'} ]}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonView}>
        <TouchableOpacity onPress={() => { Nav() }}>
          <Text style={styles.btn}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>


  )
}

export default Otpverify
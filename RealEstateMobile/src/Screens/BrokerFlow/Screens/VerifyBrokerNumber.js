
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ActivityIndicator
} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { styles } from '../../Forgetpassword/New.js';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { validatePathConfig } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { showMessage } from "react-native-flash-message";
import axios from 'axios';
import CountDown from "react-native-countdown-component";
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyBrokerNumber = (props) => {
  const [opacity, setOpacity] = useState(1)
  const [modalVisible, setModalVisible] = useState(false);
  const [color, setColor] = useState('#000')
  const [btns, setbtn] = useState(0)
  const [img, setImg] = useState(require('../../../Assets/Images/ov1.png'))
  const [error, setError] = useState(null)
  const [timer, setTimer] = useState(60);
  const [code, setCode] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showLoader1, setShowLoader1] = useState(false);
  const [Showtimer, setShowtimer] = useState(true)

  // useEffect(
  //   () => {
  //     setModalVisible(true)
  //     setOpacity(0.1);
  //     setTimeout(() => {
  //       setModalVisible(false);
  //       setOpacity(1)
  //     }, 3000);

  //   }, []
  // )

  const PostOtpApi = () => {
    setShowLoader(true);
    axios({
      method: "POST",
      url: "https://node-realestate.mobiloitte.com/api/v1/user/verifyOTP",
      data: {
        mobileNumber: props?.route?.params?.mNumber ? props?.route?.params?.mNumber : null,
        otp: code
      },
    })
      .then(function (response) {
        AsyncStorage.setItem("token", response.data.result.token);
        console.log("Response", response.data);
        setShowLoader(false);
        setColor('#0000')
        if (response.data.responseCode === 200) {

          showMessage({
            message: response.data.responseMessage,
            type: "success",
            icon: "success",
            duration: 2000,
          });
          console.log(response.data.responseMessage,)

          props.navigation.navigate("CompleteProfile", { Mnumber: props?.route?.params?.mNumber ? props?.route?.params?.mNumber : null });


        } else {
          showMessage({
            message: response.data.responseMessage,
            type: "warning",
            icon: "warning",
            duration: 2000,
          });
        }
      })
      .catch(function (error) {
        console.log("Error", error);
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
      });
  };

  const ResendOtpApi = () => {
    console.log(props?.route?.params?.cCode)
    setShowLoader1(true);
    axios({
      method: "PUT",
      url: "https://node-realestate.mobiloitte.com/api/v1/user/resendOTP",
      data: {
        mobileNumber: props?.route?.params?.mNumber ? props?.route?.params?.mNumber : null,
        countryCode: props.route.params.cCode
      },
    })
      .then(function (response) {
        console.log("Response", response.data);
        setShowLoader1(false);
        setTimer(60)
        setShowtimer(true)
        setCode("")
        if (response.data.Status === 200) {
          showMessage({
            message: response.data.responseMessage,
            type: "success",
            icon: "success",
            duration: 2000,
          });

        } else {
          showMessage({
            message: response.data.responseMessage,
            type: "warning",
            icon: "warning",
            duration: 2000,
          });
        }
      })
      .catch(function (error) {
        console.log("Error", error.response);
        const message = error.response?.data?.responseMessage
          ? error.response?.data?.responseMessage
          : "Something went wrong";
        setShowLoader1(false);
        showMessage({
          message: message,
          type: "danger",
          icon: "danger",
          // duration: 2000
        });
      });
  };

  //   } else {
  //     setColor('red')
  //     setImg(require('../../../Assets/Images/otpred.png'))
  //     setError('Please enter valid OTP')
  //   }

  // const timeOutCallback = useCallback(() => {
  //   setTimer(currTimer => currTimer - 1);

  // }, []);

  // useEffect(() => {
  //   timer > 0 && setTimeout(timeOutCallback, 1000);
  //   if (timer == 1) {
  //     setTime(1)
  //   }
  // }, [timer, timeOutCallback]);

  // const resetTimer = function () {
  //   if (!timer) {
  //     setTimer(56);
  //   }
  // };

  // function validateCode(code) {
  //   if (code == '0000') {
  //     setOpacity(0.1)
  //     setModalVisible(true);
  //     setError(null)
  //     setTimeout(() => {
  //       setModalVisible(false);
  //       setOpacity(1);
  //       navigation.navigate('CompleteProfile')
  //     }, 3000);
  //     setColor('#000')
  //     setImg(require('../../../Assets/Images/ov1.png'))
  //     return 0

  //   } else {
  //     setColor('red')
  //     setImg(require('../../../Assets/Images/otpred.png'))
  //     setError('Please enter valid OTP')
  //   }


  // }

  const codeValidate = () => {
    if (code.length < 4) {
      setError('Please enter valid OTP')
    } else {
      setError(null);
      PostOtpApi()
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


        <Image
          source={img}
          style={styles.img}
        />

        <View>
          <Text style={styles.pageHeading}>Verify phone number</Text>
          <Text style={[styles.normaltext, { textAlign: 'left' }]}>
            Enter the OTP send on your mobile {'\n'}number - {props?.route?.params?.mNumber ? props?.route?.params?.mNumber : null}
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
              setCode(code)
            }}
          />
          {error && <Text style={{ color: 'red', marginLeft: '10%', margin: '2%' }}>{error}</Text>}
          {Showtimer && <View style={[styles.inlinetext,]}>
            <Text style={styles.normaltext}>Resend code in </Text>
            <CountDown
              size={12}
              until={timer}
              onFinish={() => setShowtimer(false)}
              digitStyle={{
                // backgroundColor: "#000000",
                // borderWidth: 2,
                // borderColor: "#1CC625",
                fontWeight: "bold",
              }}
              digitTxtStyle={[styles.normaltext, styles.timer,]}
              timeLabelStyle={[styles.normaltext, styles.timer,]}
              timeToShow={["S"]}
              timeLabels={{ s: null }}
              style={{ alignItems: 'center' }}
            />
            {/* <Text style={[styles.normaltext, styles.timer,]}>{timer} {''}</Text> */}
            <Text style={styles.normaltext}>s</Text>
          </View>
          }
          {!Showtimer &&
            <TouchableOpacity onPress={() => { ResendOtpApi() }} style={[styles.inlinetext,]}>
              <Text style={[styles.normaltext, { color: '#000' }]}>
                {showLoader1 ? <ActivityIndicator color={"black"} /> : "Resend OTP"}</Text>
            </TouchableOpacity>
          }
        </View>
        <View style={styles.ButtonView}>
          <TouchableOpacity onPress={() => { props.navigation.navigate("CompleteProfile") }}>
            <Text style={styles.btn}>
              {showLoader ? <ActivityIndicator color={"white"} /> : "SUBMIT"}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default VerifyBrokerNumber;


import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
ActivityIndicator

} from 'react-native';
import React, {
  useState, useRef
} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PhoneInput from 'react-native-phone-number-input';
import contry, { flag, name, phonecode } from '../../../../contry.json';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { showMessage } from "react-native-flash-message";

const { height, width } = Dimensions.get('window');

const BrokerLogin = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(null);
  const [disablePhoneInp, setdisablePhoneInp] = useState(false)
  const [img, setImg] = useState(require('../../../Assets/LoginBlack.png'));
  const [Value, setValue] = useState('+91')
  const [flag, setFlag] = useState("🇮🇳")
  const [showLoader, setShowLoader] = useState(false);

  

  

  const phoneInput = useRef(null);







  const PostData = () => {
    setShowLoader(true);
    axios({
      method: "POST",
      url: "https://node-realestate.mobiloitte.com/api/v1/user/userRegister",
      data: {
        mobileNumber: phoneNumber,
        deviceToken:""
      },
    })
      .then(function (response) {
        console.log("Response", response.data);
        setShowLoader(false);
        if (response.data.responseCode === 200) {
          showMessage({
            message: response.data.responseMessage,
            type: "success",
            icon: "success",
            duration: 2000,
          });
          console.log(response.data.responseMessage, phoneNumber, Value,'-=-=-=-=')
          navigation.navigate("VerifyBrokerNumber",{mNumber:phoneNumber,cCode:Value});
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
      });
  };


  function ValidatePhone(Phone) {
    const re = /^([0-9]{10,14})$/;
    if (Phone === '') {
      setPhoneError('Please enter a valid number')
      setImg(require('../../../Assets/loginRed.png')
      )
      return false;
    }
    else if (!re.test(Phone)) {
      setPhoneError('Enter valid phone number')
      setImg(require('../../../Assets/loginRed.png'));
      return false;

    }
    else {
      setPhoneError(null)
      setImg(require('../../../Assets/LoginBlack.png'));
      return true;
    }
  }

  

  function Validate() {
    if (ValidatePhone(phoneNumber)) {
      PostData()
      
    }
  }

  const renderLabel = (item) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', fontFamily: 'Lato-Regular' }}>
            {item.flag}
          </Text>
          <Text style={{ paddingHorizontal: 10, fontFamily: 'Lato-Regular', color: 'black' }}>
            {item.name}
          </Text>
        </View>
        <Text style={{ fontFamily: 'Lato-Regular', color: 'black', }}>
          {item.phonecode}
        </Text>
      </View>
    );
  };


  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <AntDesign name="arrowleft" size={30} color={'#000000'} onPress={() => { navigation.goBack() }} />
      </View>
      <View style={styles.imgView}>
        <Image source={img} style={styles.img} />
      </View>
      <View>
        <Text style={styles.pageHeading}>Create Account</Text>
        <Text style={styles.pagetext}>Enter your mobile number to verify your account.</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.pagetag}>Mobile Number</Text>
      </View>

      <View style={styles.MainContainer}>




        <View style={{
          flexDirection: 'row',
          width: '100%',
          height: 50,
          backgroundColor: '#F5F5F5',
          borderRadius: 50,
          borderWidth: 0.5,
          borderColor:'#E1E1E1'
        }}>
          <Dropdown
            style={{ width: 80, marginLeft: "2%", color: "white" }}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={[styles.inputSearchStyle, { fontFamily: 'Lato-Regular', fontSize: 14, padding: 5 }]}
            iconStyle={styles.iconStyle}
            data={contry}
            search
            maxHeight={250}
            containerStyle={{
              width: width * 0.85
            }}
            labelField="phonecode"
            valueField="phonecode"
            searchPlaceholder="Search by country code..."
            value={Value}
            // onFocus={() => setIsFocus(true)}
            // onBlur={() => setIsFocus(false)}
            autoScroll={false}
            onChange={(item) => {
              setValue(item.phonecode);
              setFlag(item.flag);
              // setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Text
                style={{
                  color: "#547597",
                }}
              >
                {flag}
              </Text>
            )}
            renderItem={renderLabel}
          />
          <View
            style={{
              width: 1,
              height: "100%",
              backgroundColor: "gray",
              marginLeft: 10,
            }}
          ></View>
          <TextInput
            style={{
              color: "black",
              fontFamily: "Lato-Regular",
              fontSize: 14,
              width: "60%",
              marginLeft: 10,
              padding: 15
            }}
            maxLength={10}
            placeholderTextColor={"#8E8E8E"}
            placeholder="Enter your number    "
            keyboardType={"number-pad"}
            onChangeText={(text) => {
              setPhoneNumber(text), ValidatePhone(text)
            }}
          />
        </View>


      </View>
      <Text style={{ color: 'red' }}>{phoneError}</Text>

      

      {/* {phoneError && (<Text style={{ color: 'red' }}>{phoneError}</Text>)}
        
    */}


      <TouchableOpacity onPress={() => {
        navigation.navigate("VerifyBrokerNumber")
      }}>
        <Text
          style={styles.btn}>
          {showLoader ? <ActivityIndicator color={"white"} /> : "Next"}
        </Text>
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

    </ScrollView>
  )
}

export default BrokerLogin

const styles = StyleSheet.create({
  mainContainer: {
    padding: '5%'
  },
  TextInput: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    borderWidth: 0.5


  },
  lasttxt: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  imgView: {
    marginVertical: 10,
    alignItems: 'center',

  },
  img: {
    width: width * 0.5,
    height: height * 0.3
  },

  pageHeading: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Lato-Regular',
  },
  pagetext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ADADAD',
    fontFamily: 'Lato-Regular',
    marginTop:5

  },
  form: {
    marginVertical: height * 0.03
  },


  pagetag: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Lato-Regular',

  },
  btn:Platform.OS === 'ios' ?{
    backgroundColor: '#000',
    color: '#FFFFFF',
    textAlign: 'center',
    width: '100%',
    padding: '5%',
    fontSize: 20,
    fontWeight: '700',
    borderRadius: 30,
    marginTop: height * 0.04,
    fontFamily: 'Lato-Regular',
    overflow:'hidden'
  } :{
    backgroundColor: '#000',
    color: '#FFFFFF',
    textAlign: 'center',
    width: '100%',
    padding: '5%',
    fontSize: 20,
    fontWeight: '700',
    borderRadius: 100,

    marginTop: height * 0.04,
    fontFamily: 'Lato-Regular',
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },


  phoneNumberView: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    borderWidth: 0.5


  },



});

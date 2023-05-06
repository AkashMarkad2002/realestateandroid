import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Dimensions,
  Platform,
  SafeAreaView

} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonCo from '../../Components/ButtonCo';
import PhoneInput from 'react-native-phone-number-input';
import contry, { flag, name, phonecode } from '../../../contry.json';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { height, width } = Dimensions.get('window');

const EditProfile = ({ navigation }) => {

  const [FirstName, setFirstName] = useState('');
  const [FirstNameError, setFirstNameError] = useState(null);
  const [LastName, setLastName] = useState('');
  const [LastNameError, setLastNameError] = useState(null);
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState(null);
  const [PhoneNumberError, setPhoneNumberError] = useState(null);
  const [City, setCity] = useState('');
  const [CityError, setCityError] = useState(null);
  const [OrgName, setOrgName] = useState('');
  const [OrgNameError, setOrgNameError] = useState(null);
  const [Address, setAddress] = useState('');
  const [AddressError, setAddressError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [opacity, setOpacity] = useState(1)
  const [Value, setValue] = useState('+91')
  const [flag, setFlag] = useState("🇮🇳")
  const [showLoader1, setShowLoader1] = useState(false);

  const phoneInput = useRef(null);

  useEffect(()=>{
    fetchUser()
  })

  function validateFirstName(text) {
    const FirstNameReg = /^[A-Z]([a-z 0-9]\1{2})+$/;
    /^(?!.*([A-Za-z0-9\.@_#-])\1{2})[A-Za-z0-9][A-Za-z0-9\.@_#-]{3,30}$/;
    if (text.length == 0) {
      setFirstNameError('Please enter a first name.');
    } else if (text.length < 3) {
      setFirstNameError('min 3 character');
    } else if (FirstNameReg.test(text)) {
      setFirstNameError(null);
      return true;
    } else {
      setFirstNameError(
        'Please Enter a valid First Name. First letter  should be capital',
      );
      return false;
    }
  }

  function validateLastName(text) {
    const FirstNameReg = /^[A-Z]([a-z 0-9]\1{2})+$/;
    /^(?!.*([A-Za-z0-9\.@_#-])\1{2})[A-Za-z0-9][A-Za-z0-9\.@_#-]{3,30}$/;
    if (text.length == 0) {
      setLastNameError('Please enter a last name.');
    } else if (text.length < 3) {
      setLastNameError('min 3 character');
    } else if (FirstNameReg.test(text)) {
      setLastNameError(null);
      return true;
    } else {
      setLastNameError(
        'Please Enter a valid last Name. First letter  should be capital',
      );
      return false;
    }
  }

  function validateEmail(text) {
    const mailReg =
      /^([A-Z|a-z|0-9](\.|_|-){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (text.length == 0) {
      setEmailError('Please enter a email address.');
    } else if (mailReg.test(text)) {
      setEmailError(null);
      return true;
    } else {
      setEmailError('Please Enter a valid mail Id');
      return false;
    }
  }

  function validateOrgName(text) {
    const FirstNameReg = /^[A-Z]([a-z 0-9]\1{2})+$/;

    if (text.length == 0) {
      setOrgNameError('Please enter a organisation name.');
    } else if (text.length < 3) {
      setOrgNameError('min 3 character');
    } else if (FirstNameReg.test(text)) {
      setOrgNameError(null);
      return true;
    } else {
      setOrgNameError(
        'Please Enter a valid Organisation name. First letter  should be capital',
      );
      return false;
    }
  }

  function ValidatePhone(Phone) {
    const re = /^([0-9]{10,14})$/;
    if (Phone === '') {
      setPhoneError('Please enter a phone number')

      return false;
    } else if (!re.test(Phone)) {
      setPhoneError('*Enter a valid phone number')

      return false;

    }
    else {
      setPhoneError(null)

      return true;
    }
  }

  function validateCity(text) {
    const FirstNameReg = /^[A-Z]([a-z 0-9]\1{2})+$/;

    if (text.length == 0) {
      setCityError('Please enter a city.');
    } else if (text.length < 3) {
      setCityError('min 3 character');
    } else if (FirstNameReg.test(text)) {
      setCityError(null);
      return true;
    } else {
      setCityError(
        'Please Enter a valid City Name. First letter  should be capital',
      );
      return false;
    }
  }

  function validateAddress(text) {
    const FirstNameReg = /^[A-Z]([a-z 0-9]\1{2})+$/;

    if (text.length == 0) {
      setAddressError('Please enter a full address .');
    } else if (text.length < 3) {
      setAddressError('min 3 character');
    } else if (FirstNameReg.test(text)) {
      setAddressError(null);
      return true;
    } else {
      setAddressError(
        'Please Enter a valid Address. First letter  should be capital',
      );
      return false;
    }
  }

  const fetchUser = async() => {
    const token = await AsyncStorage.getItem('token');
    console.log(token,'@edit profile');
    axios({
      method:'get',
      url:'https://node-realestate.mobiloitte.com/api/v1/admin/listDeveloper',
      headers:{
        token:token
      }
    }).then(function(response){
      console.log('fetchUser response',response.data);
    }).catch(function(error){
      console.log('fetchUser error: ',error.response);
    })
    // const configurationObject = {
    //   method: 'get',
    //   url: `https://node-realestate.mobiloitte.com/api/v1/admin/listDeveloper`,
    // };
    console.log(response.data);
  };

  const updateProfileApi = async () => {
    console.log("log")
    setShowLoader1(true);
    const token = await AsyncStorage.getItem('token')
    axios({
      method: "PUT",
      url: "https://node-realestate.mobiloitte.com/api/v1/admin/editDeveloper",
      headers: {
        token: token
      },
      data: {
        firstName: FirstName,
        address: Email,
        mobileNumber: props.route.params.Mnumber,
        city: City
      },
    })
      .then(function (response) {
        console.log("Response", response.data);
        setShowLoader1(false);
        setOpacity(0.1)
        if (response.data.responseCode === 200) {
          setModalVisible(true);
          showMessage({
            message: response.data.responseMessage,
            type: "success",
            icon: "success",
            duration: 2000,
          });
          console.log(response.data.responseMessage,)
          setTimeout(() => {
            setModalVisible(false)
            setOpacity(1)
            props.navigation.navigate('FooterTabBR')
          }, 2000);

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
        setShowLoader1(false);
        showMessage({
          message: message,
          type: "danger",
          icon: "danger",
          // duration: 2000
        });
      });
  };



  function onPressUpdate() {
    if (validateFirstName(FirstName) && validateCity(City) && ValidatePhone(phoneNumber) && validateLastName(LastName) && validateOrgName(OrgName) && validateEmail(Email)
    ) {
      updateProfileApi()
      //setFormError(null)
      //navigation.navigate('Login');
      setOpacity(0.1)
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false)
        navigation.navigate('FooterTabBR')
      }, 3000);


    } else {
      validateCity(City); ValidatePhone(phoneNumber); validateLastName(LastName); validateOrgName(OrgName); validateEmail(Email)
        ;

      //setFormError('Please fill all the  information');
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

    <SafeAreaView style={{ backgroundColor: '#F5F5F5' }}>
      <ScrollView style={[{ backgroundColor: '#F5F5F5' }, { opacity: opacity }]} showsVerticalScrollIndicator={false}>

        <View style={styles.Container}>
          <View style={styles.cont1}>
            <View style={styles.arroweditprilfecont}>
              <AntDesign name="arrowleft" size={30} color={'#000000'} onPress={() => { navigation.goBack() }} />
              <Text style={styles.edittext}>Edit Profile</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')} >
              <Image source={require('..//..//Assets/Images/Bell.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.imgcont}>
            <Image source={require('..//..///Assets/Images/EditProfile.png')} style={styles.imgstyle} />
          </View>
          <View style={styles.inputcont}>
            <TextInput
              style={styles.inputbox}
              placeholder="Enter first name"
              placeholderTextColor={'#ADACAC'}
              maxLength={30}
              value={FirstName}
              onChangeText={txt => {
                setFirstName(txt);
                validateFirstName(txt);
              }}></TextInput>

            <Text style={styles.errormsg}>{FirstNameError}</Text>

            <TextInput
              style={styles.inputbox}
              placeholder="Enter last name"
              placeholderTextColor={'#ADACAC'}
              maxLength={30}
              value={LastName}
              onChangeText={txt => {
                setLastName(txt);
                validateLastName(txt);
              }}></TextInput>

            <Text style={styles.errormsg}>{LastNameError}</Text>

            <TextInput
              style={styles.inputbox}
              placeholder="Enter email address"
              placeholderTextColor={'#ADACAC'}
              maxLength={30}
              value={Email}
              onChangeText={txt => {
                setEmail(txt);
                validateEmail(txt);
              }}></TextInput>

            <Text style={styles.errormsg}>{EmailError}</Text>

            <TextInput
              style={styles.inputbox}
              placeholder="Enter organisation name"
              placeholderTextColor={'#ADACAC'}
              maxLength={30}
              value={OrgName}
              onChangeText={txt => {
                setOrgName(txt);
                validateOrgName(txt);
              }}></TextInput>

            {OrgNameError && <Text style={styles.errormsg}>{OrgNameError}</Text>}

            <View style={{
              flexDirection: 'row',
              width: '100%',
              height: 47,
              backgroundColor: '#F5F5F5',
              borderColor: '#E1E1E1',
              borderRadius: 50,
              borderWidth: 1,
              marginTop: '5%'
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
                      color: "#fff",
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
                  backgroundColor: "#E1E1E1",
                  marginLeft: 10,

                }}
              ></View>
              <TextInput
                style={{
                  color: "black",
                  fontFamily: 'Lato-Regular',
                  fontSize: 14,
                  width: "60%",
                  marginLeft: 10,
                  padding: 5
                }}
                maxLength={10}
                placeholderTextColor={"#8E8E8E"}
                placeholder="Enter your number  "
                keyboardType={"number-pad"}
                onChangeText={(text) => {
                  setPhoneNumber(text), ValidatePhone(text)
                }}
              />
            </View>




            <Text style={styles.errormsg}>{phoneError}</Text>

            <TextInput
              style={styles.inputbox}
              placeholder="Enter city"
              placeholderTextColor={'#ADACAC'}
              maxLength={30}
              value={City}

              onChangeText={txt => {
                setCity(txt);
                validateCity(txt);
              }}></TextInput>

            {CityError && <Text style={styles.errormsg}>{CityError}</Text>}




            <TextInput
              style={styles.inputbox1}
              placeholder="Enter full address(Optional)"
              placeholderTextColor={'#ADACAC'}
              maxLength={50}
              value={Address}
              onChangeText={txt => {
                setAddress(txt);
                validateAddress(txt);
              }}></TextInput>

            {AddressError && <Text style={styles.errormsg}>{AddressError}</Text>}



          </View>
          <View style={{ marginTop: '10%' }}>

            <ButtonCo
              btnname="UPDATE"
              Press={() => {
                onPressUpdate();
              }}
            />
          </View>
        </View>
        <Modal

          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ padding: 20, backgroundColor: '#000000' }}>

              </View>
              <View style={{ padding: 20 }}>
                <Text style={styles.modalText}>PROFILE UPDATED  </Text>
                <Text style={styles.modalText1}>SUCCESSFULLY !!</Text>

              </View>

            </View>
          </View>
        </Modal>



      </ScrollView>
    </SafeAreaView>
  );
};


export default EditProfile;

const styles = StyleSheet.create({

  centeredView: {
    // marginTop:'50%',
    alignSelf: 'center'
  },

  Container: {
    padding: '5%',


  },
  modalText: {
    // marginBottom: 15,
    fontSize: 24,
    textAlign: "center",
    fontStyle: 'italic',
    color: '#000',
    fontWeight: '800',
    fontFamily: 'Lato-Regular'
  },
  modalText1: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
    fontStyle: 'italic',
    color: '#000',
    fontWeight: '800',
    fontFamily: 'Lato-Italic'
  },
  cont1: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phoneNumberView: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    borderWidth: 0.1,

    marginBottom: '3%',

    borderWidth: 1,
    borderColor: '#E1E1E1',
    //marginTop:'5%'



  },
  modalView: {
    margin: 70,
    width: '100%',
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: '80%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
  imgstyle: { resizeMode: 'contain', height: 110, width: 110, marginTop: '3%', marginBottom: '3%' },
  imgcont: {
    // borderWidth: 1,
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
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    color: '#000000',
    marginTop: '0.5%',
    padding: Platform.OS === 'ios' ? 14 : null,



  },
  inputbox1: {
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 30,
    paddingLeft: '8%',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    color: '#000000',
    marginTop: '5%',
    padding: Platform.OS === 'ios' ? 14 : null,



  },
  inputcont: {
    // justifyContent:'space-between'
    // marginVertical: '2%',
    //borderWidth: 1,
  },
  errormsg: {
    color: 'red',
    //paddingLeft:'5%',
    fontSize: 10,
    fontFamily: 'Lato-Regular',
    fontWeight: '400',

    // marginHorizontal: '5%',
    marginTop: '1%'

  },
});

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button, Dimensions, Modal, SafeAreaView, Platform,ActivityIndicator
} from 'react-native';
import React, { useState, useRef } from 'react';
import FontAwesome
    from 'react-native-vector-icons/FontAwesome';
import AntDesign
    from 'react-native-vector-icons/AntDesign';
// import PhoneInput from 'react-native-phone-number-input';
import contry, { flag, name, phonecode } from '../../../../contry.json';
import { Dropdown } from 'react-native-element-dropdown';
import isMobilePhone from "validator/es/lib/isMobilePhone";
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('window');

const CompleteProfile = (props) => {
    const [opacity, setOpacity] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);
    const [FirstName, setFirstName] = useState('');
    const [FirstNameError, setFirstNameError] = useState(null);
    const [LastName, setLastName] = useState('');
    const [LastNameError, setLastNameError] = useState(null);
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneError, setPhoneError] = useState(null);
    const [Value, setValue] = useState('+91')
    const [flag, setFlag] = useState("🇮🇳")
    const [showLoader1, setShowLoader1] = useState(false);

    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [PhoneNumberError, setPhoneNumberError] = useState(null);
    const [City, setCity] = useState('');
    const [CityError, setCityError] = useState(null);
    const [OrgName, setOrgName] = useState('');
    const [OrgNameError, setOrgNameError] = useState(null);
    const [Address, setAddress] = useState('');
    const [AddressError, setAddressError] = useState(null);

    // const phoneInput = useRef(null);

    const updateProfileApi = async() => {
        console.log("log")
        setShowLoader1(true);
        const token = await AsyncStorage.getItem('token')
        axios({
          method: "PUT",
          url: "https://node-realestate.mobiloitte.com/api/v1/user/updateProfile",
          headers: {
            token: token
          },
          data: {
            firstName:FirstName,
            email:Email,
            mobileNumber: props.route.params.Mnumber,
            city:City,
            organizationName:OrgName
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

    //   React.useEffect(() => {
    //         getProfileApi();
        
    //   }, []);

      const getProfileApi = async() => {
        const token = await AsyncStorage.getItem('token')
        axios({
          method: "GET",
          url: "https://node-realestate.mobiloitte.com/api/v1/user/getProfile",
          headers: {
            token: token
          },
        })
          .then(function (response) {
            console.log("Response", response.data);
            if (response.data.responseCode === 200) {
                setFirstName(response?.data?.result?.firstName? response?.data?.result?.firstName:'')
                setEmail(response?.data?.result?.email? response?.data?.result?.email:'')
                setPhoneNumber(response?.data?.result?.mobileNumber? response?.data?.result?.mobileNumber:'')
                setOrgName(response?.data?.result?.organizationName? response?.data?.result?.organizationName:'')
                setCity(response?.data?.result?.city? response?.data?.result?.city:'')
              showMessage({
                message: response.data.responseMessage,
                type: "success",
                icon: "success",
                duration: 2000,
              });
              console.log(response.data.responseMessage,)
              
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

    // function validateFirstName(text) {
    //     const FirstNameReg = /^[a-zA-Z ]*$/;
    //     if (text.length == 0) {
    //         setFirstNameError('*Please enter a valid name');
    //     } else if (!FirstNameReg.test(text)) {
    //         setFirstNameError('*Please enter a valid name');
    //         return true;
    //     } else {
    //         setFirstNameError(null);
    //         return false;
    //     }
    // }
    const validateFirstName = (name) => {
        var nameRegex = /^[a-zA-Z ]{2,30}$/;
        if (name === "" || name === undefined || name === null) {
          setFirstNameError("Please enter a valid name");
          return false;
        } else if (!nameRegex.test(name)) {
          setFirstNameError("Please enter a valid name");
          return false;
        } else {
          setFirstNameError(null);
          return true;
        }
      };


    function validateEmail(text) {
        const mailReg =
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (text.length == 0) {
            setEmailError('Please Enter valid mail id');
        } else if (mailReg.test(text)) {
            setEmailError(null);
            return true;
        } else {
            setEmailError('Please Enter valid mail id');
            return false;
        }
    }

 
    const validateOrgName = (text) => {
        var pat1 = /^[a-zA-Z ]*$/;
        if (text.length == 0) {
          setOrgNameError("Please enter your orgnization name");
          return false
        } else if (!pat1.test(text)) {
          setOrgNameError("Please enter valid name");
          return false
        } else {
          setOrgNameError(null);
          return true
        }
      };


    var ValidatePhone = (phone) => {
        var Regex = /^\(?([1-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phone === "" || phone === undefined || phone === null) {
          setPhoneError("*Please enter valid phone number");
          return false
        } else if (!isMobilePhone(phone, "en-IN")) {
          setPhoneError("*Please enter valid phone number");
          return false
        } else {
          setPhoneError(null);
          return true;
        }
      };


    const validateCity = (text) => {
        var pat1 = /^[a-zA-Z ]*$/;
        if (text.length == 0) {
          setCityError("Please enter your city");
          return false
        } else if (!pat1.test(text)) {
          setCityError("Please enter valid city");
          return false
        } else {
          setCityError(null);
          return true
        }
      };


    function onPressUpdate() {
        if (validateFirstName(FirstName) && validateEmail(Email) && validateCity(City) && validateOrgName(OrgName) 
        && ValidatePhone(phoneNumber)
         ) {updateProfileApi()
            //setFormError(null)
            //navigation.navigate('Login');
            // setOpacity(0.1)
        } else {

            validateCity(City); 
            validateOrgName(OrgName); 
            validateFirstName(FirstName)  
            validateEmail(Email)
            ValidatePhone(phoneNumber)
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
        <SafeAreaView>

            <ScrollView style={{ opacity: opacity }}>
                <View style={styles.Container}>
                    <View style={styles.cont1}>
                        <Text style={styles.edittext}>Complete Your Profile</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Myaccount')} >
                            <View style={styles.callus}>
                                <FontAwesome name='phone' size={10} color={'#FFFFFF'}
                                    style={styles.iconStyle} />
                                <Text style={styles.callustext}>Call us</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.imgcont}>
                            <Image source={require('../../../Assets/Images/Devloper.png')} style={{ resizeMode: 'cover' }} />
                        </View>
                        <AntDesign name='pluscircle' size={20} color={'#000000'}
                            style={styles.plusicon} />
                    </View>

                    <View style={styles.inputcont}>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Enter your name*"
                            placeholderTextColor={'#ADACAC'}
                            maxLength={30}
                            value={FirstName}
                            onChangeText={txt => {
                                setFirstName(txt);
                                validateFirstName(txt);
                            }}></TextInput>
                        {FirstNameError && (<Text style={styles.errormsg}>{FirstNameError}</Text>)}
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Enter email address*"
                            placeholderTextColor={'#ADACAC'}
                            maxLength={30}
                            value={Email.trim()}
                            onChangeText={txt => {
                                setEmail(txt);
                                validateEmail(txt);
                            }}></TextInput>
                        {EmailError && (<Text style={styles.errormsg}>{EmailError}</Text>)}
                        {/*   <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        defaultCode="IN"
                        layout="first"
                        placeholder='Enter your number'
                        keyboardType='numeric'


                        containerStyle={styles.phoneNumberView}
                        textContainerStyle={{ paddingVertical: 0, borderTopEndRadius: 50, borderBottomEndRadius: 50, backgroundColor: '#F5F5F5', borderLeftWidth: 0.5, marginVertical:'1.5%' }}
                        onChangeText={text => {
                            setPhoneNumber(text), ValidatePhone(text)
                        }}
                    />
                    {PhoneNumberError &&(<Text style={styles.errormsg}>{PhoneNumberError}</Text>)}*/}

                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            height: 50,
                            marginTop: '5%',
                            backgroundColor: '#F5F5F5',
                            borderRadius: 50,
                            borderWidth: 1,

                            borderColor: 'rgba(225, 225, 225, 1)'
                        }}>

                            <Dropdown
                                style={{ width: 80, marginLeft: "2%", color: "white" }}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={[styles.inputSearchStyle, { fontFamily: 'Lato-Regular', fontSize: 14, padding: 5 }]}
                                iconStyle={styles.iconStyle1}
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
                                    height: "80%",
                                    marginTop:5,
                                    backgroundColor: "rgba(173, 172, 172, 1)",
                                    marginLeft: 10,
                                }}
                            ></View>
                            <TextInput
                                style={{
                                    color: "black",
                                    fontFamily: "Lato-Regular",
                                    fontSize: 16,
                                    width: "60%",
                                    marginLeft: 10,
                                    padding: 15
                                }}
                                value={phoneNumber}
                                maxLength={10}
                                // placeholderTextColor={"#000000"}
                                placeholder=""
                                keyboardType={"number-pad"}
                                onChangeText={(text) => {
                                    setPhoneNumber(text), ValidatePhone(text)
                                }}
                            />
                        </View>
                        {phoneError && <Text style={styles.errormsg}>{phoneError}</Text>}

                        {/* ////////updated phone input*/}
                        <TextInput
                            style={styles.inputbox}
                            placeholder="Enter the organisation name*"
                            placeholderTextColor={'#ADACAC'}
                            maxLength={30}
                            value={OrgName}
                            onChangeText={txt => {
                                setOrgName(txt);
                                validateOrgName(txt);
                            }}></TextInput>
                        {OrgNameError && (<Text style={styles.errormsg}>{OrgNameError}</Text>)}

                        <TextInput
                            style={styles.inputbox}
                            placeholder="City*"
                            placeholderTextColor={'#ADACAC'}
                            maxLength={30}
                            value={City}
                            keyboardType={'default'}
                            onChangeText={txt => {
                                setCity(txt);
                                validateCity(txt);
                            }}></TextInput>
                        {CityError && (<Text style={styles.errormsg}>{CityError}</Text>)}


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
                                    <Text style={styles.modalText}>THANKS FOR JOINING WITH US</Text>
                                    <Text style={styles.modalText1}>Account verification under process. Connect with you shortly !!</Text>
                                </View>

                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity onPress={() => {
                       props.navigation.navigate('FooterTabBR')

                    }}>
                        <Text
                            style={styles.btn}>
                            {showLoader1 ? <ActivityIndicator color={"white"} /> : "SUBMIT"}
                        </Text>
                    </TouchableOpacity>
                </View>
            
        </ScrollView>
        </SafeAreaView>
    );
};

export default CompleteProfile;

const styles = StyleSheet.create({
    Container: {
        padding: '5%',
    },
    cont1: {
        marginVertical: 10
    },

    edittext: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'Lato-Regular',
    },
    callus: {

        backgroundColor: '#84BFBC',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        padding: 5,
        borderRadius: 100

    },
    callustext: {
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        fontWeight: '500',
        color: '#000000',
        marginHorizontal: 5

    },
    phoneNumberView: {
        width: '100%',
        // height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'rgba(225, 225, 225, 1)',
        borderWidth: 1,
        color: '#000000',
        marginTop: '5%'



    },
    iconStyle: Platform.OS === 'ios' ? {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 10,
        width: 20,
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden'
    } : {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 40,
        width: 20,
        alignItems: 'center',
        textAlign: 'center'
    },
    imgcont: {
        // borderWidth: 1,
        width: 112,
        height: 112,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 56,
        overflow: 'hidden',
        alignSelf: 'center',


        zIndex: -1,
        marginBottom: 10,
    },
    plusicon: {
        position: 'absolute',
        zIndex: 1,
        left: '62%',
        top: 70,
    },
    inputbox: Platform.OS === 'ios' ? {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        color: '#000000',
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(225, 225, 225, 1)',
        padding: 15,
        borderRadius: 30,

    } : {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        color: '#000000',
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(225, 225, 225, 1)',
        paddingVertical: 10,
        paddingLeft: 15,

        borderRadius: 30,
        marginTop: '5%',

    },
    inputbox1: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        color: '#000000',
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(225, 225, 225, 1)',
        paddingVertical: 10,
        paddingLeft: 15,

        borderRadius: 30,


    },
    inputcont: {
        // marginVertical: '2%',
        //borderWidth: 1,
    },
    errormsg: {
        color: 'red',
        //paddingLeft:'5%',
        fontSize: 10,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        marginVertical: 3
    },
    btn: Platform.OS === 'ios' ? {
        backgroundColor: '#000',
        color: '#FFFFFF',
        textAlign: 'center',
        width: '100%',
        padding: '5%',
        fontSize: 20,
        fontWeight: '700',
        borderRadius: 30,
        marginTop: height * 0.02,
        fontFamily: 'Lato-Regular',
        overflow: 'hidden'
    } : {
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
    modalView: {
        marginTop: '50%',
        margin: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 10,
        fontSize: 24,
        textAlign: "center",
        color: '#000',
        fontWeight: '800',
        fontStyle: 'italic'
    },
    modalText1: {
        marginBottom: 15,
        fontSize: 16,
        textAlign: "center",
        color: '#000',
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
    }
});

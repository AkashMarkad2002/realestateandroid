import { View, Text, StyleSheet, ScrollView,Dimensions,
    TouchableOpacity, Image, TextInput, Modal,Platform, SafeAreaView } from 'react-native'
import React, {
    useState, useRef
} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import contry, { flag, name, phonecode } from '../../../contry.json';
import { Dropdown } from 'react-native-element-dropdown';


const { height, width } = Dimensions.get('window');

const LoanDev = ({ navigation }) => {

    const [FirstName, setFirstName] = useState('');
    const [FirstNameError, setFirstNameError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [opacity, setOpacity] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneError, setPhoneError] = useState(null)
    const [nameerror, setnameerror] = useState(null)
    const [name, setname] = useState(null)
    const [amount, setamount] = useState('');
    const [amounterror, setamounterror] = useState(null)

    const [Value, setValue] = useState('+91')
    const [flag, setFlag] = useState("🇮🇳")



    const phoneInput = useRef(null);


    function validateFirstName(text) {
        const FirstNameReg = /^[A-Z][a-zA-Z]{2,}(?: [A-Z][a-zA-Z]+){0,1}$/;
        if (text.length == 0) {
            setFirstNameError('*Please enter a valid name');
        }   else {
            setFirstNameError(
              null
            );
            return true;
        }
    }

    function validateamount (text){
        if (text == '') {
            setamounterror('*Please enter a valid amount');
            return false;
        }else{
            setamounterror(null);
            return true;
        }
    }


 function ValidatePhone(Phone)
 {
    const re = /^([0-9]{10,14})$/;
    if (Phone === '') {
      setPhoneError('*Please enter phone number')

      return false;
    }
    // else if(Phone.length == 11 ){
    //   // setAttribute('maxlength',10)




    // }
    else if (!re.test(Phone)) {
      setPhoneError('*Enter Valid Phone Number')
    
      return false;

    }
    else {
      setPhoneError(null)

      return true;
    }
  }

    // function Validate() {
    //     if (ValidatePhone(phoneNumber) && validateFirstName(FirstName) && validateamount (amount) ) {
    //         navigation.navigate('VerifyBrokerNumber');
    //     }
    // }


  
    function visible() {

        if (ValidatePhone(phoneNumber) && validateFirstName(FirstName)   && validateamount (amount)) {
          
          setModalVisible(true);
          setOpacity(0.1);
          setTimeout(() => {
            
           
            setModalVisible(false)
            setOpacity(1);
         
            navigation.navigate('Dashboard');
              }, 2000);
            
        }
        else {
          
            validateFirstName(FirstName)
            validateamount (amount)
            return false;
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
        <ScrollView style={[{ flex: 1 }, { opacity: opacity }]} showsVerticalScrollIndicator={false} >
            <SafeAreaView>

           
            <View style={styles.Container}>

                <View style={styles.cont1}>
                    <View style={styles.arroweditprilfecont}>

                        <Text style={styles.edittext}>Get a loan</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')} >
                        <Image source={require('../../Assets/Images/Bell.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imgcontainer}>
                    <Image source={require('../../Assets/Images/Loan.png')} style={{ resizeMode:'contain', alignSelf:'center'}}  />

                </View>
                <View>
                    <Text style={styles.edittext}>Kindly share the details</Text>
                </View>
                <View style={{ justifyContent: 'space-between' }}>

                    <View
                        style={[styles.inputContainer, { marginTop: '10%' }]}>
                        <TextInput
                            placeholderTextColor="#ADACAC"
                            placeholder="Enter client name"
                            placeholderTextSize={14}
                            placeholderTextFontWeight={'400'} 
                            maxLength={40}
                            value={FirstName}
                            onChangeText={txt => {
                                setFirstName(txt);
                                validateFirstName(txt);
                            }}
                            ></TextInput>
                    </View>
                    {FirstNameError &&(<Text style={styles.errormsg}>{FirstNameError}</Text>)}
                 
        <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 50,
            backgroundColor: '#F5F5F5',
            borderRadius: 50,
            borderWidth: 1,
            borderColor:'#E1E1E1',
            marginTop:'2%'

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
      {phoneError && <Text style={styles.errormsg}>{phoneError}</Text>}
                    <View
                        style={styles.inputContainerloan}>
                        <TextInput
                            placeholderTextColor="#ADACAC"
                            placeholder="Enter loan amount"
                            placeholderTextSize={14}
                            keyboardType='numeric'
                            maxLength={16}
                            value={amount}
                            onChangeText={(txt) => {
                                setamount(txt);
                            validateamount(txt)}}

                            placeholderTextFontWeight={'400'}></TextInput>
                    </View>
                   {amounterror &&  <Text style={styles.errormsg}>{amounterror}</Text>}  

                    <View>
                        <TouchableOpacity onPress={() => { visible() }}
                            style={styles.buttonconatiner}>
                            <Text
                                style={{
                                    textAlign:'center',
                                    color: '#FFF',
                                    fontSize: 20,
                                    fontWeight: '700',
                                    fontFamily: 'Lato-Regular'
                                }}>
                                APPLY
                            </Text>
                        </TouchableOpacity>
                    </View>

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
                        <View style={{ padding: 25 }}>
                            <Text style={styles.modalText}>THANKS FOR APPLYING</Text>
                            <Text style={styles.modalText1}>WE WILL CONNECT WITH YOU SHORTLY !!</Text>

                        </View>

                    </View>
                </View>
            </Modal>
            </SafeAreaView>
        </ScrollView>
        
    )
}

export default LoanDev

export const styles = StyleSheet.create({
    errormsg: {
        color: 'red',
        //paddingLeft:'5%',
        fontSize: 10,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        marginVertical:3
    },
    Container: {
        padding: '5%',


    },
    modalText: {
        marginBottom: 15,
        fontSize: 22,
        textAlign: "center",
        color: '#000',
        // fontWeight: '800',
        fontFamily: 'Lato-BoldItalic'
    },
    modalText1: {
        marginBottom: 15,
        fontSize: 16,
        textAlign: "center",
        color: '#000',
        // fontWeight: '800',
        fontFamily: 'Lato-Regular',
    },
    phoneNumberView: {
        width: '108.8%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
        borderWidth: 0.1,
        marginLeft: '-4.3%',
        borderColor: '#E1E1E1',


    },
    modalView: {
        margin: 50,
        backgroundColor: "white",
        shadowColor: "#000",
        marginTop: '75%',
        // alignSelf:'center',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
        marginLeft: '2%',
        textAlign: 'center',
        marginTop:'2%'
    },
    imgcontainer: {
        marginTop: '5%',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#E1E1E1',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        borderRadius: 25,
        marginTop: '2%',
        paddingVertical:Platform.OS === 'ios' ? 16 : null
    },
    inputContainerloan: {
        borderWidth: 1,
        borderColor: '#E1E1E1',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        borderRadius: 25,
        marginTop: '2%',
        paddingVertical:Platform.OS === 'ios' ? 16 : null
    },
    buttonconatiner:Platform.OS === 'ios' ?{
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

})
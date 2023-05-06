import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Platform
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


const EditBrokersProfile = ({ navigation }) => {
  const [FirstName, setFirstName] = useState('');
  const [FirstNameError, setFirstNameError] = useState(null);
  const [LastName, setLastName] = useState('');
  const [LastNameError, setLastNameError] = useState(null);
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState(null);

  const [OrgName, setOrgName] = useState('');
  const [OrgNameError, setOrgNameError] = useState(null);

  const [AgencyAddress, setAgencyAddress] = useState('');
  const [AgencyAddressError, setAgencyAddressError] = useState(null);


  const [Pancard, setPancard] = useState('');
  const [Pancarderror, setPancarderror] = useState(null);
  const [Upi, setUpi] = useState('');
  const [Upierror, setUpierror] = useState(null);



  function validateFirstName(text) {
    const FirstNameReg = /^[A-Z]([a-z 0-9]\1{2})+$/;
    /^(?!.*([A-Za-z0-9\.@_#-])\1{2})[A-Za-z0-9][A-Za-z0-9\.@_#-]{3,30}$/;
    if (text.length == 0) {
      setFirstNameError('First name is required');
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
      setLastNameError('Last name is required');
    } else if (text.length < 3) {
      setLastNameError('min 3 character');
    } else if (FirstNameReg.test(text)) {
      setLastNameError(null);
      return true;
    } else {
      setLastNameError(
        'Please Enter a valid First Name. First letter  should be capital',
      );
      return false;
    }
  }

  function validateEmail(text) {
    const mailReg =
      /^([A-Z|a-z|0-9](\.|_|-){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (text.length == 0) {
      setEmailError('Mail id  required');
    } else if (mailReg.test(text)) {
      setEmailError(null);
      return true;
    } else {
      setEmailError('Please enter  valid mail id');
      return false;
    }
  }

  function validateOrgName(text) {
    const FirstNameReg = /^[A-Z]([a-z 0-9]\1{2})+$/;

    if (text.length == 0) {
      setOrgNameError('Please enter the organisation name.');
    } else if (text.length < 3) {
      setOrgNameError('min 3 character');
    } else if (FirstNameReg.test(text)) {
      setOrgNameError(null);
      return true;
    } else {
      setOrgNameError(
        'Please Enter a valid organisation name. First letter should be capital',
      );
      return false;
    }
  }





  function validateAgencyAddress(text) {
    const FirstNameReg = /^[A-Z]([a-z 0-9]\1{2})+$/;

    if (text.length == 0) {
      setAgencyAddressError('Please enter valid agency address');
    } else if (text.length < 3) {
      setAgencyAddressError('Please enter valid agency address');
    } else if (FirstNameReg.test(text)) {
      setAgencyAddressError(null);
      return true;
    } else {
      setAgencyAddressError(
        'Please enter valid agency address',
      );
      return false;
    }
  }

  function Pancardvalidate(text) {
    const panreg = /[A-Z]{5}[0-9]{4}[A-Z]{1}/gm;

    if (text.length == '') {
      setPancarderror('Please enter a valid pancard number');
      return false;
    } else if (!panreg.test(text)) {
      setPancarderror('Please enter a valid pancard number');
      return false;


    } else {
      setPancarderror(null);

      return true;
    }

  }

  function Upivalidation(text) {
    const upireg = /[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}/gm


    if (text.length == '') {
      setUpierror('Please enter a valid UPI number');
      return false;
    } else if (!upireg.test(text)) {
      setUpierror('Please enter a valid UPI number');
      return false;
    } else {
      setUpierror(null);

      return true;
    }
  }


  function onPressUpdate() {
    if (validateFirstName(FirstName) && validateLastName(LastName) && validateOrgName(OrgName) && validateEmail(Email) && validateAgencyAddress(AgencyAddress) && Pancardvalidate(Pancard) && Upivalidation(Upi)

    ) {

      return true;
    } else {
      validateLastName(LastName); validateOrgName(OrgName); validateEmail(Email); Pancardvalidate(Pancard); Upivalidation(Upi);
      validateAgencyAddress(AgencyAddress)
      //setFormError('Please fill all the  information');
      return false;
    }

  }

  return (
    <SafeAreaView style={{ backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : null }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <View style={styles.cont1}>
            <View style={styles.arroweditprilfecont}>
              <AntDesign name="arrowleft" size={30} color={'#000000'} onPress={() => navigation.goBack()} />
              <Text style={styles.edittext}>Edit Profile</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')} >
              <Image source={require('../../../Assets/Images/Bell.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.imgcont}>
            <Image source={require('../../../Assets/Images/EditProfile.png')} style={{ resizeMode: 'contain', height: 100, width: 100 }} />
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
            {FirstNameError && <Text style={styles.errormsg}>{FirstNameError}</Text>}
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
            {LastNameError && <Text style={styles.errormsg}>{LastNameError}</Text>}
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
            {EmailError && <Text style={styles.errormsg}>{EmailError}</Text>}
            <TextInput
              style={styles.inputbox}
              placeholder="Agency name"
              placeholderTextColor={'#ADACAC'}
              maxLength={30}
              value={OrgName}
              onChangeText={txt => {
                setOrgName(txt);
                validateOrgName(txt);
              }}></TextInput>
            {OrgNameError && <Text style={styles.errormsg}>{OrgNameError}</Text>}

            <TextInput
              style={styles.inputbox}
              placeholder="Enter the Office Address"
              placeholderTextColor={'#ADACAC'}
              maxLength={50}
              value={AgencyAddress}
              onChangeText={txt => {
                setAgencyAddress(txt);
                validateAgencyAddress(txt);
              }}></TextInput>
            {AgencyAddressError && <Text style={styles.errormsg}>{AgencyAddressError}</Text>}

            <TextInput
              style={styles.inputbox}
              placeholder="Enter PAN Number"
              placeholderTextColor={'#ADACAC'}
              maxLength={50}
              value={Pancard}
              onChangeText={(text) => { Pancardvalidate(text); setPancard(text) }}></TextInput>
          </View>
          <Text style={styles.errormsg} >{Pancarderror}</Text>
          <View>
            <Text style={styles.pantext}>Upload PAN card Image</Text>
            <Text style={styles.pansmtext}>Front side of PAN Card</Text>
            <Image source={require('../../../Assets/Images/pancard.png')} style={{ width: '100%', marginTop: 10 }} />
          </View>
          <View>
            <TextInput
              style={styles.inputbox}
              placeholder="Enter Upi Id"
              placeholderTextColor={'#ADACAC'}
              maxLength={30}

              value={Upi} onChangeText={(text) => { Upivalidation(text); setUpi(text); }}></TextInput>
          </View>
          <Text style={styles.errormsg} >{Upierror}</Text>
          <View>
            <TouchableOpacity style={styles.new} onPress={() => {
              if (onPressUpdate()) {
                navigation.goBack()
              }
            }}><Text style={styles.updatetxt}>UPDATE</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditBrokersProfile;

const styles = StyleSheet.create({
  updatetxt: {
    color: '#ffffff', alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Lato-Regular',

  },
  new: {
    backgroundColor: '#000',
    color: '#FFFFFF',
    textAlign: 'center',
    width: '100%',
    padding: '3.5%',
    marginTop: '3%',

    fontWeight: '700',
    borderRadius: 100,

  },
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
    // borderWidth: 1,

    justifyContent: 'center',

    marginTop: '3%',
  },
  inputbox: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    color: '#000000',
    width: '100%',
    borderWidth: 1,
    paddingLeft: "6%",
    padding: Platform.OS === 'ios'?'5%':'3%',
    borderColor: '#E1E1E1',
    borderRadius: 30,
    marginTop: '4%',
    
    
  },
  inputcont: {
    // marginVertical: '2%',
    //borderWidth: 1,
  
  },
  errormsg: {
    color: 'red',
    //paddingLeft:'5%',
    fontSize: 10,
    marginTop: '2%',

    fontFamily: 'Lato-Regular',
    fontWeight: '400',
  },
  pantext: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    color: '#000'
  },
  pansmtext: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
    color: '#000'
  }
});
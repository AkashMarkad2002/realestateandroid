
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import ConformBookingCard from './../BottomTabNavigator/Component/ConformBookingCard';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const { height, width } = Dimensions.get('window');

const arr = [
  {
    key: 1,
    BrokerName: 'Rajan Pathak',
    ClientName: 'Abhinav',
    Attendee: 'Umair',
    UnitNumber: '12A',
    Status: 'Accepted',
    RequestedDate: '12-04-2022',
  },
  {
    key: 2,
    BrokerName: 'Rajan Pathak',
    ClientName: 'Abhinav',
    Attendee: 'Umair',
    UnitNumber: '12A',
    Status: 'Accepted',
    RequestedDate: '12-04-2022',
  },
  {
    key: 3,
    BrokerName: 'Rajan Pathak',
    ClientName: 'Abhinavvvvv',
    Attendee: 'Umair',
    UnitNumber: '12A',
    Status: 'Accepted',
    RequestedDate: '12-04-2022',
  },
  {
    key: 4,
    BrokerName: 'Rajan Pathak',
    ClientName: 'Abhinavvvvv',
    Attendee: 'Umair',
    UnitNumber: '12A',
    Status: 'Accepted',
    RequestedDate: '12-04-2022',
  },
];



const ConformBooking = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Visible, setVisible] = useState(false);
  const [filterbg, setfilterbg] = useState(1)



  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  function filterText() {
    setfilterbg == '1'
    console.log('timmer')



  }

  return (

    <SafeAreaView>
    <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.Container}>
        <View style={styles.cont1}>
          <TouchableOpacity onPress={() =>{navigation.goBack() }}>
            <MaterialIcons name='keyboard-backspace' size={35} color={'#000000'} />
          </TouchableOpacity>
          <Text
            style={{

              color: '#000000',
              fontFamily: 'Lato-Regular',

              fontSize: 24,
              fontWeight: '700', marginLeft: '4%',

            }}>
            Confirm Bookings
          </Text>

        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '2%', }}>
          <Text style={{ fontSize: 18, fontFamily: 'Lato-Regular' }}>12 JAN 2022</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',  padding: 1,marginLeft:'33.5%' }}>
            <TouchableOpacity onPress={showDatePicker}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'skyblue',
                  borderWidth: 1,

                  padding: '4%',
                  borderRadius: 5,
                  alignItems: 'center',
                  borderColor: '#3596F0',


                }}>
                <Text style={{ marginHorizontal: '5%' }}>Select Date </Text>
                <FontAwesome5 name="calendar" size={14} color={'#111'} />
              </View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </TouchableOpacity >

          </View>
        </View>

        <FlatList
          data={arr}
          renderItem={({ item }) => {
            return (
              <View>

                <ConformBookingCard />
              </View>
            );
          }}
        />
        {/* <ConformBookingCard /> */}
        <View style={{ backgroundColor: 'red' }} >
          <Modal
            transparent={true}
            visible={Visible}

          >
            <TouchableWithoutFeedback style={{ backgroundColor: '#000000aa', flex: 1 }} onPress={() => { setVisible(!Visible) }} >
              <View style={{ backgroundColor: "white", marginLeft: '60%', marginTop: '43%', width: '35%' }}>
                <View style={{ marginTop: '8%', marginBottom: '4%', paddingHorizontal: '10%', }}>
                  <TouchableOpacity onPress={() => { setfilterbg(0); setVisible(!Visible) }}><Text style={{ backgroundColor: filterbg == 0 ? 'black' : '#fff', color: filterbg == 0 ? '#fff' : '#000' }}>Filter by Status</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => { setfilterbg(1); setVisible(!Visible) }} ><Text style={{ backgroundColor: filterbg == 1 ? 'black' : '#fff', color: filterbg == 1 ? '#fff' : '#000' }}>Accepted</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => { setfilterbg(2); setVisible(!Visible) }}><Text style={{ backgroundColor: filterbg == 2 ? 'black' : '#fff', color: filterbg == 2 ? '#fff' : '#000' }}>Fake Client Visit</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => { setfilterbg(3); setVisible(!Visible) }}><Text style={{ backgroundColor: filterbg == 3 ? 'black' : '#fff', color: filterbg == 3 ? '#fff' : '#000' }}>Repetitive Client Visit</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => { setfilterbg(4); setVisible(!Visible) }}><Text style={{ backgroundColor: filterbg == 4 ? 'black' : '#fff', color: filterbg == 4 ? '#fff' : '#000' }}>Not Visited</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => { setfilterbg(5); setVisible(!Visible) }}><Text style={{ backgroundColor: filterbg == 5 ? 'black' : '#fff', color: filterbg == 5 ? '#fff' : '#000' }}>Booked</Text></TouchableOpacity>
                </View>




              </View>
            </TouchableWithoutFeedback>

          </Modal>

        </View>





      </View>

    </ScrollView>
    </SafeAreaView>


  );
};

export default ConformBooking;

const styles = StyleSheet.create({


  Container: {
    padding: '5%',
    paddingHorizontal: '4.5%',

    width: width,


  },
  cont1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //marginBottom:'3%',
  },
  cont2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#727578',
    borderRadius: 25,
    paddingHorizontal: '5%',
    marginVertical: '5%',
  },
  textinput: {
    height: 40,
  },
  // filterbyStatus:{
  //   backgroundColor: History.filterbg ==0 ? 'red' :'#fff'
  // }
});
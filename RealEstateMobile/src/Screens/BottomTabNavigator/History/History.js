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
  SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import PropertyCard2 from './PropertyCard2';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Entypo from 'react-native-vector-icons/Entypo';

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
    Status: 'Fake Client Visit',
    RequestedDate: '12-04-2022',
  },
  {
    key: 3,
    BrokerName: 'Rajan Pathak',
    ClientName: 'Abhinavvvvv',
    Attendee: 'Umair',
    UnitNumber: '12A',
    Status: 'Booked',
    RequestedDate: '12-04-2022',
  },
  {
    key: 4,
    BrokerName: 'Rajan Pathak',
    ClientName: 'Abhinavvvvv',
    Attendee: 'Umair',
    UnitNumber: '12A',
    Status: 'Not Visited',
    RequestedDate: '12-04-2022',
  },
  {
    key: 5,
    BrokerName: 'Rajan Pathak',
    ClientName: 'Abhinavvvvv',
    Attendee: 'Umair',
    UnitNumber: '12A',
    Status: 'Repetitive Client Visit',
    RequestedDate: '12-04-2022',
  },
];



const History = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Visible, setVisible] = useState(false);
  const [filterbg, setfilterbg] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [status, setStatus] = useState('')



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
  function colors(text) {
    if (text == 'Accepted') {
      return '#56B808'
    } else if (text == 'Fake Client Visit') {
      return '#D20707'
    } else if (text == 'Not Visited') {
      return '#02249C'
    } else {
      return '#FECF2A'
    }
  }

  return (


    <ScrollView style={{ flex: 1, opacity: opacity }}>
      <SafeAreaView>
        <View style={styles.Container}>
          <View style={styles.cont1}>
            <Text
              style={{

                color: '#000000',
                fontFamily: 'Lato-Regular',

                fontSize: 24,
                fontWeight: '700',
              }}>
              History
            </Text>

          </View>
          <View style={styles.cont2}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={'#727578'}
              placeholderTextSize={14}
              style={styles.textinput}
            />
            <EvilIcons name="search" size={25} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2, marginBottom: '2%' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Lato-Regular' }}>12-04-2022</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 1, width: '40%' }}>
              <TouchableOpacity onPress={showDatePicker}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'skyblue',
                    borderWidth: 1,
                    padding: '2%',
                    borderRadius: 5,
                    alignItems: 'center',
                    borderColor: '#3596F0',

                  }}>
                  <Text style={{ marginHorizontal: '5%', color: '#030303' }}>Select Date</Text>
                  <FontAwesome5 name="calendar" size={14} color={'#111'} />
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity >
              <TouchableOpacity onPress={() => { setVisible(!Visible); setOpacity(0.1) }}>
                <Entypo name="sound-mix" size={20} color={'#000'} style={{ transform: [{ rotate: '90deg' }] }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{display:filterbg==0?'none':'flex'}}>
            <FlatList
              data={arr}
              renderItem={({ item }) => {
                if (item.Status == status)
                  return (
                    <View>
                      <PropertyCard2
                        Broker_Name={item.BrokerName}
                        Client_Name={item.ClientName}
                        Attendees={item.Attendee}
                        Unit_Number={item.UnitNumber}
                        Statuss={item.Status}
                        Requested_Date={item.RequestedDate}
                        StatusColor={colors(item.Status)}
                      />
                    </View>
                  );
              }}
            />
          </View>
          <View style={{display:filterbg==0?'flex':'none'}}>
            <FlatList
              data={arr}
              renderItem={({ item }) => {
                  return (
                    <View>
                      <PropertyCard2
                        Broker_Name={item.BrokerName}
                        Client_Name={item.ClientName}
                        Attendees={item.Attendee}
                        Unit_Number={item.UnitNumber}
                        Statuss={item.Status}
                        Requested_Date={item.RequestedDate}
                        StatusColor={colors(item.Status)}
                      />
                    </View>
                  );
              }}
            />
          </View>

          {/* <PropertyCard2 /> */}
          <View style={{ backgroundColor: 'red' }} >
            <Modal
              transparent={true}
              visible={Visible}

            >
              <TouchableWithoutFeedback style={{ backgroundColor: '#000000aa', flex: 1 }} onPress={() => { setVisible(!Visible) }} >
                <View style={{ backgroundColor: "white", marginLeft: '60%', marginTop: '43%', width: '35%' }}>
                  <View style={{ marginTop: '8%', marginBottom: '4%', }}>
                    <TouchableOpacity onPress={() => { setfilterbg(0); setVisible(!Visible); setOpacity(1) }}><Text style={{ backgroundColor: filterbg == 0 ? 'black' : '#fff', color: filterbg == 0 ? '#fff' : '#000', paddingHorizontal: '10%', }}>Filter by Status</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setfilterbg(1); setVisible(!Visible); setOpacity(1);setStatus('Accepted') }} ><Text style={{ backgroundColor: filterbg == 1 ? 'black' : '#fff', color: filterbg == 1 ? '#fff' : '#000', paddingHorizontal: '10%', }}>Accepted</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setfilterbg(2); setVisible(!Visible); setOpacity(1);setStatus('Fake Client Visit') }}><Text style={{ backgroundColor: filterbg == 2 ? 'black' : '#fff', color: filterbg == 2 ? '#fff' : '#000', paddingHorizontal: '10%', }}>Fake Client Visit</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setfilterbg(3); setVisible(!Visible); setOpacity(1);setStatus('Repetitive Client Visit') }}><Text style={{ backgroundColor: filterbg == 3 ? 'black' : '#fff', color: filterbg == 3 ? '#fff' : '#000', paddingHorizontal: '10%', }}>Repetitive Client Visit</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setfilterbg(4); setVisible(!Visible); setOpacity(1);setStatus('Not Visited') }}><Text style={{ backgroundColor: filterbg == 4 ? 'black' : '#fff', color: filterbg == 4 ? '#fff' : '#000', paddingHorizontal: '10%', }}>Not Visited</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setfilterbg(5); setVisible(!Visible); setOpacity(1);setStatus('Booked') }}><Text style={{ backgroundColor: filterbg == 5 ? 'black' : '#fff', color: filterbg == 5 ? '#fff' : '#000', paddingHorizontal: '10%', }}>Booked</Text></TouchableOpacity>
                  </View>




                </View>
              </TouchableWithoutFeedback>

            </Modal>

          </View>





        </View>
      </SafeAreaView>

    </ScrollView>


  );
};

export default History;

const styles = StyleSheet.create({


  Container: {
    padding: '5%',
    paddingHorizontal: '4.5%',


  },
  cont1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cont2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#727578',
    borderRadius: 25,
    paddingHorizontal: '5%',
    marginVertical: '4%',
  },
  textinput: {
    height: 40,
  },
  // filterbyStatus:{
  //   backgroundColor: History.filterbg ==0 ? 'red' :'#fff'
  // }
});
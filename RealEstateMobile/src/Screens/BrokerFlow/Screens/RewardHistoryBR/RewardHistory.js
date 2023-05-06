import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Rewardhistoryvisit from './RewardHistoryVisit/Rewardhistoryvisit';
import Rewardhistorybook from './RewardHistoryBooking/Rewardhistorybook';

const RewardHistory = ({ navigation }) => {
  const [page, setPage] = useState('flex');
  const [pendingpage, setPendingPage] = useState('none');
  const [display, setdisplay] = useState(true);

  function TodayPage() {
    setPage('flex');
    setPendingPage('none');
    setdisplay(true);
  }


  function PendingPage() {
    setPage('none');
    setPendingPage('flex');
    setdisplay(false);
  }

  return (
    <SafeAreaView>
    <View style={{ height: Platform.OS === 'ios' ? '100%' : '100%'}}>
      <View style={styles.Container}>
        <View style={styles.cont1}>
          <View style={styles.arroweditprilfecont}>
            <AntDesign
              name="arrowleft"
              size={30}
              color={'#000000'}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.edittext}>Rewarded History</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={require('../../../../Assets/Images/Bell.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: '5%'}}>

          <TouchableOpacity style={{ width: '50%' }} onPress={() => { TodayPage() }}>
            <Text
              style={{
                color: display ? '#FFFFFF' : '#000000',
                fontSize: 12,
                fontFamily: 'Lato-Regular',
                textAlign: 'center',
                backgroundColor: display ? '#000000' : '#DFDFDF',
                padding: '7%',
                width: '100%',
              }}>
              Visits
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '50%' }} onPress={() => { PendingPage() }}>
           
              <Text
                style={{
                  color: display ? '#000000' : '#FFFFFF',
                  fontSize: 12,
                  textAlign: 'center',
                  backgroundColor: display ? '#DFDFDF' : '#000000',
                  padding: '7%',
                  fontFamily: 'Lato-Regular',
                  width: '100%',
                }}>
                Bookings
              </Text>
          </TouchableOpacity>
        </View>
        <View>

          {display ? <Rewardhistoryvisit /> :
            <Rewardhistorybook />}
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default RewardHistory;

const styles = StyleSheet.create({


  Container: {
    padding: '3%',
  },
  cont1: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arroweditprilfecont: {
    // borderWidth: 1,
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




});


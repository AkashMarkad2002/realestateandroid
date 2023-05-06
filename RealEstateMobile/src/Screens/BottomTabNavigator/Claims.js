import { View, Text, TouchableOpacity, ScrollView, Dimensions,Platform } from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PropertyCard2 from './Component/PropertyCard2';
import PropertyCard3 from './Component/PropertyCard3';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');

const Claims = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [page, setPage] = useState('flex')
  const [pendingpage, setPendingPage] = useState('none');
  const [display, setdisplay] = useState(true)
  const [opacity, setOpacity] = useState(1)


  function TodayPage() {
    setPage('flex')
    setPendingPage('none')
    setdisplay(true)

  }

  function PendingPage() {
    setPage('none')
    setPendingPage('flex')
    setdisplay(false)

  }

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

  const handleopacity = () => {
    setOpacity(0.1);
    setTimeout(() => {
      setOpacity(1);
      
    }, 2000);
  }
  
  return (
    <SafeAreaView>
    <View style={{ margin: '5%', opacity:opacity }}>
      <Text style={{ fontSize: 24, fontWeight: '700', color: '#000000',fontFamily:'Lato-Regular' }}>
        Requested Claims
      </Text>
      <View style={{ flexDirection: 'row', marginTop: '5%' }}>
        <TouchableOpacity style={{ width: '50%' }} onPress={() => { TodayPage() }}>
          <Text
            style={{
              color: display ? '#FFFFFF' : '#000000',
              fontSize: 12,
              textAlign: 'center',
              fontFamily:"Lato-Regular",
              backgroundColor: display ? '#000000' : '#FFFFFF',
              padding: '10%',
              width: '100%',
            }}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '50%' }} onPress={() => { PendingPage() }}>
          <Text
            style={{
              color: display ? '#000000' : '#FFFFFF',
              fontSize: 12,
              textAlign: 'center',
              fontFamily:"Lato-Regular",
              backgroundColor: display ? '#FFFFFF' : '#000000',
              padding: '10%',
              width: '100%',
            }}>
            Pending
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: pendingpage,height:height*0.85 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: '5%',
          }}>
          <Text style={{ fontSize: 14, color: '#000000', fontFamily:"Lato-Regular", }}>12 JAN 2022</Text>
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
              <Text style={{ marginHorizontal: '5%',fontFamily:"Lato-Regular", fontWeight:'500', fontSize:14, color:'#595959' }}>Select Date</Text>
              <FontAwesome5 name="calendar" size={14} color={'#111'} />
            </View>
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <ScrollView showsVerticalScrollIndicator={false} >
          
            <PropertyCard2 Backgroundo={handleopacity} />
            <PropertyCard2  Backgroundo={handleopacity} />
            <PropertyCard2  Backgroundo={handleopacity} />
            <PropertyCard2  Backgroundo={handleopacity} />
            <PropertyCard2  Backgroundo={handleopacity} />
        

        </ScrollView>
      </View>
      <View >
        <ScrollView showsVerticalScrollIndicator={false} style={{ display: page,height:height*0.85,}}>
         
            <View>
              <Text style={{fontSize:20,fontWeight:'700',color:'#000000',fontFamily:'Lato',marginVertical: '5%'}}>Today's Claims</Text>
            </View>
            <PropertyCard3  Backgroundo={handleopacity} />
            <PropertyCard3  Backgroundo={handleopacity} />
            <PropertyCard3   Backgroundo={handleopacity}/>
            <PropertyCard3  Backgroundo={handleopacity} />
            <PropertyCard3   Backgroundo={handleopacity}/>

          

        </ScrollView>
      </View>
     


    </View>
    </SafeAreaView>
  );
};

export default Claims;
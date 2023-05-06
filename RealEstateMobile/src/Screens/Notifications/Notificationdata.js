import {StyleSheet, Text, View, FlatList, TouchableOpacity,} from 'react-native';
import React from 'react'
import Notificationcomp from './Notificationcomp';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { SafeAreaView } from 'react-native-safe-area-context';

const Notificationdata = ({navigation}) => {
    const data = [
      {
        key: 1,
        Date: 'Today, December 25 2022',
        Img1: require('../../Assets/Images/Group1.png'),
        Title1: 'Visit Cancelled!',
        Des1: 'You have canceled visits at Semie Apartment',
        Img2: require('../../Assets/Images/Group2.png'),
        Title2: 'New Project Listed!',
        Des2: 'You have new Project listed Successful',
      },
        {
           
        key: 2,
        Date: 'Yesterday, December 24 2022',
        Img1: require('../../Assets/Images/Group3.png'),
        Title1: 'Visit Completed!',
        Des1: 'You have complete visits at Semie Apartment',
        Img2: require('../../Assets/Images/Group2.png'),
        Title2: 'New Project Listed!',
        Des2: 'You have new Project listed Successful',
      
      },
        {
           
        key: 3,
        Date: 'Monday, December 24 2022',
        Img1: require('../../Assets/Images/Group1.png'),
        Title1: 'Visit Cancelled!',
        Des1: 'You have canceled visits at Semie Apartment',
        Img2: require('../../Assets/Images/Group2.png'),
        Title2: 'New Project Listed!',
        Des2: 'You have new Project listed Successful',
    
      },
    ];
  return (
    <SafeAreaView style={{backgroundColor: Platform.OS==='ios'?'#FFFFFF':null}} >

    <View style={styles.container}>
      <View style={styles.Notify}>
        <TouchableOpacity style={{marginHorizontal: Platform.OS === 'ios' ?'3%' : null}} >
          <AntDesign
            name="arrowleft"
            size={25}
            color={'#000000'}
            style={{marginVertical: '40%'}}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            
          }}>
          <View style={styles.Not}>
            <Text style={styles.text}>Notifications</Text>
          </View>

        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <Notificationcomp
              date={item.Date}
              img1={item.Img1}
              img2={item.Img2}
              tit1={item.Title1}
              tit2={item.Title2}
              des1={item.Des1}
              des2={item.Des2}
            />
          );
        }}
      />
    </View>
    </SafeAreaView>
  );
}

export default Notificationdata

const styles = StyleSheet.create({
    Not: {
        marginHorizontal: '4%', marginVertical: '3%', flexDirection: 'row', 
        
    },
  text: {
    color: '#000000',
    fontFamily:'Lato-Regular',
    fontSize: 24,
    fontWeight:'700'
  },
  Notify: {
      flexDirection: 'row',
      alignItems:'center',
      padding:10
   
  },
  container: {
    height: Platform.OS === 'ios' ? '100%' : '100%',
    backgroundColor: '#ffffff',
    // padding: '5%',
  },
});
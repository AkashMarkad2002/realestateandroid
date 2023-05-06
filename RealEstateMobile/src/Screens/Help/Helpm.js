import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
// import Helpd from './Helpd';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Myaccount from '../../Screens/Myaccount/Myaccount'
import Helpc from './Helpc';
const Helpm = ({ navigation }) => {
   const arr = [
     {
       key: 1,
       title: 'FAQs',
       screen:'Faq'
     },
     {
       key: 2,
       title: 'Contact Us',
       screen:'Contactus'
     },
     {
       key: 3,
       title: 'Terms & Conditions',
       screen:'TermsAndConditions'
     },
     {
       key: 4,
       title: 'Privacy Policy',
       screen:'PrivacyPolicy'
     },
     {
       key: 5,
       title: 'About Us',
       screen:'AboutUs'
     },
   ];
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <View style={styles.cont1}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack('Myaccount');
            }}>
            <AntDesign name="arrowleft" size={25} color={'#000000'} />
          </TouchableOpacity>
          <Text style={styles.Heading}>Help</Text>
        </View>
        <View style={{marginTop: '15%'}}>
          <View style={styles.cot}>
            <FlatList
              data={arr}
              renderItem={({item}) => {
                return (
                  <View style={styles.cont}>
                    <View style={styles.line1}></View>
                    <Helpc
                      Tit={item.title}
                      Press={() => {
                        navigation.navigate(item.screen);
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Helpm;

const styles = StyleSheet.create({
  cont: {
    // marginTop: '15%',
  },
  line1: {
    //   marginTop:'10%',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  contain: {
    margin: '5%',
  },
  cont1: {
    // margin: '3%',
    flexDirection: 'row',
    marginTop: '8%',
  },
  Heading: {
    marginLeft: '6%',
    color: '#111111',
    fontFamily: 'Lato-Bold',
    fontSize: 24,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

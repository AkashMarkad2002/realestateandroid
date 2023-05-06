import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Helpc from './Helpc';
const Helpd = () => {
  const arr = [
    {
      key: 1,
      title: 'FAQs',


    },
    {
      key: 2,
      title: 'Contact Us',


    },
    {
      key: 3,
      title: 'Terms & Conditions',


    },
    {
      key: 4,
      title: 'Privacy Policy',


    },
    {
      key: 5,
      title: 'About US',


    },
  ];
  return (
    <View style={styles.cot}>
      <FlatList
        data={arr}
        renderItem={({item}) => {
          return (
            <View style={styles.cont}>
              <View style={styles.line1}></View>
              <Helpc Tit={item.title}/>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Helpd;

const styles = StyleSheet.create({
  cont: {
    // marginTop: '15%',
  },
  line1: {
    //   marginTop:'10%',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
});

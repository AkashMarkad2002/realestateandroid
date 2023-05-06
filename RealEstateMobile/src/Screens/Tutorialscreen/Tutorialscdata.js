import {StyleSheet, Text, View, FlatList, TouchableOpacity, Animated} from 'react-native';
import React from 'react'
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Tutorialcomp from './Tutorialcomp';
import {styles} from '../Resetpassword/New';
import { Appearance } from 'react-native';
import { useRef } from 'react';
import { useState } from 'react';

const colorScheme = Appearance.getColorScheme();





const Tutorialscdata = ({navigation}) => {
  // const [currentIndex, setcurrentIndex] = useState(0)

  // const scrollx = useRef(new Animated.Value(0)).current;


    const data = [
      {
        key: 1,
        img: require('../../Assets/Images/Rec3.png'),
      },
      {
        key: 2,
        img: require('../../Assets/Images/Rec1.png'),
      },
      {
        key: 3,

        img: require('../../Assets/Images/Rec2.png'),
      },
    ];


  return (
    <View style={{flex:1, backgroundColor: '#fff',}}>
      <View style={{width: '100%'}}>
        <SwiperFlatList

        // onScroll={Animated.event([{nativeEvent: {contentOffset : {x : scrollx }} }], { useNativeDriver: false})}


          showPagination
          horizontal={true}
          paginationStyle={{
            marginBottom: '-4%',
            // justifyContent:'space-between'
          }}
          paginationStyleItem={{
            width: 7,
            height: 7,
          }}
          paginationDefaultColor="#D9D9D9"
          paginationActiveColor="#1E1E1E"
          data={data}
          renderItem={({item}) => {
            return <Tutorialcomp Img={item.img} Id={item.key} />;
          }}
        />
      </View>
      <View style={{height: '22%', justifyContent: 'space-evenly',}}>
        <View style={{alignSelf: 'center',marginTop:'6%'}}>
          <TouchableOpacity  onPress={() => { navigation.navigate('Login') }}>
            <Text onPress={() => {navigation.navigate('SelectRole')}} style={{fontFamily:'Roboto-Regular', fontWeight:'400', fontSize:18}}>skip</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity  onPress={() => {
          navigation.navigate('SelectRole')
        }}
          style={{ marginBottom: '4%',  }}

        >
          <Text  style={[styles.btn, {width: '90%', alignSelf: 'center'}]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Tutorialscdata

const styless = StyleSheet.create({});

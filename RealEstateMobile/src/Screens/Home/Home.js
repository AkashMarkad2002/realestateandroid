import { View, Text } from 'react-native'
import React from 'react'
import ButtonCo from '../../Components/ButtonCo'
import Tutorialscdata from '../Tutorialscreen/Tutorialscdata';
const Home = () => {
  return (
    <View>
      <Text style={{ fontFamily:'Lato-Regular',}}>Home</Text>

      <ButtonCo />
    </View>
  );
}

export default Home
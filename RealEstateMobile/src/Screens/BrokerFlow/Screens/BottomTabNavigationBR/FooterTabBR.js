import { View, Text, Image } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyProfileBR from '../MyProfileBR/MyProfileBR';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LoanBr from '../LoanBR/LoanBr';
import ShortListedBR from '../ShortListedBR/ShortListedBR';
import Homebr from '../HomeBr/Homebr';
import RewardBR from '../RewardBr/RewardBR';



const Nav = createBottomTabNavigator();
const FooterTabBR = () => {


  return (
    <Nav.Navigator screenOptions={{
      headerShown: false, tabBarShowLabel: true,
      tabBarActiveTintColor: '#000', 
    }}>
      <Nav.Screen name='Home' component={Homebr}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name='home' size={25} color={color} />),
        }} />
      <Nav.Screen name='Favourites' component={ShortListedBR}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name='favorite' size={25} color={color} />),
        }} />
      <Nav.Screen name='Rewards' component={RewardBR}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome5 name='award' size={25} color={color} />),
        }} />
      <Nav.Screen name='Loan' component={LoanBr} 
      NAvPress={() => {change ()}}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image source={focused ? require('../../../../../src/Assets/Images/loanbagblack.png') :require('../../../../../src/Assets/Images/loanbag.png')} style={{ resizeMode: 'contain', height: 30, width: 30, }} />
            
            ),
        }} />
      <Nav.Screen name='Account' component={MyProfileBR} 
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome5 name='user-cog' size={25} color={color} />),
        }} />
    </Nav.Navigator>
  )
}

export default FooterTabBR
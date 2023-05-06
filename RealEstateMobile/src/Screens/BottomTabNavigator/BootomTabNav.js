import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashborad from './Dashborad';
import Claims from './Claims';

import Account from './Account';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Myaccount from '../Myaccount/Myaccount';
import History from './History/History';
import LoanDev from './LoanDev';


const Tab= createBottomTabNavigator();

const BootomTabNav = () => {

    
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:true,
        tabBarActiveTintColor:'#000',
        
    }}  >
       <Tab.Screen name='Dashboard' component={Dashborad}
       options={{
        tabBarIcon:({focused,color})=>(
            
               <MaterialIcons name='dashboard' size={30} color={color}/> 
           
        ),
    }}/>
       <Tab.Screen name='Claims' component={Claims}
       options={{
        tabBarIcon:({focused,color})=>(
              
               <AntDesign name='calendar' size={30} color={color} /> 
            
        ),
    }}/>
       <Tab.Screen name='History' component={History} options={{
           tabBarIcon:({focused,color})=>(
              
                  <MaterialIcons name='history' size={30} color={color}/> 

               
           ),
       }}/>
       <Tab.Screen name='Loan' component={LoanDev} 
      NAvPress={() => {change ()}}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image source={focused ? require('../../Assets/Images/loanbagblack.png') :require('../../Assets/Images/loanbag.png')} style={{ resizeMode: 'contain', height: 30, width: 30, }} />
            
            ),
        }} />
       <Tab.Screen name='Myaccount' component={Myaccount} options={{
           tabBarIcon:({focused,color})=>(
              
                  <FontAwesome5 name='user-cog' size={25} color={color}/> 

               
           ),
           
       }}/>
   </Tab.Navigator>
  )
}

export default BootomTabNav
import { View, Text, SafeAreaView, Platform } from 'react-native';
import React, { useEffect ,useContext} from 'react';
import { NavigationContainer, DarkTheme, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/Screens/Splash/Splash';
import ResetPassword from './src/Screens/Forgetpassword/ResetPassword ';
import Otpverify from './src/Screens/Forgetpassword/Otpverify';
import BootomTabNav from './src/Screens/BottomTabNavigator/BootomTabNav';
import Onboarding from './src/Screens/Onboarding/Onboarding'
import SelectRole from './src/Screens/ChoicePage/SelectRole';
import Login from './src/Screens/Login/Login';
import ForgotPass from './src/Screens/Forgetpassword/ForgotPass';
import AboutProperty from './src/Screens/BottomTabNavigator/Component/AboutProperty';
import EditProfile from './src/Screens/EditProfile/EditProfile';
import ChangePassword from './src/Screens/ChangePassword/ChangePassword';
import Helpm from './src/Screens/Help/Helpm';
import Faq from './src/Screens/Faqs/Faq';
import ContactUs from './src/Screens/ContactUs/ContactUs';
import PrivacyAndPolicy from './src/Screens/PrivacyAndPolicy/PrivacyAndPolicy';
import TermsAndConditions from './src/Screens/TermsAndConditions/TermsAndConditions';
import AboutUs from './src/Screens/AboutUs/AboutUs';
import BrokerLogin from './src/Screens/BrokerFlow/Screens/BrokerLogin';
import VerifyBrokerNumber from './src/Screens/BrokerFlow/Screens/VerifyBrokerNumber';
import CompleteProfile from './src/Screens/BrokerFlow/Screens/CompleteProfile';
import FooterTabBR from './src/Screens/BrokerFlow/Screens/BottomTabNavigationBR/FooterTabBR';
import DashboardBR from './src/Screens/BrokerFlow/Screens/DashboardBR/DashboardBR';
import LoanBr from './src/Screens/BrokerFlow/Screens/LoanBR/LoanBr';
import RewardHistory from './src/Screens/BrokerFlow/Screens/RewardHistoryBR/RewardHistory';
import EditBrokersProfile from './src/Screens/BrokerFlow/Screens/EditBrokersProfile';
import Homebr from './src/Screens/BrokerFlow/Screens/HomeBr/Homebr';
import ProjectDeatilBr from './src/Screens/BrokerFlow/Screens/HomeBr/ProjectDeatilBr';
import BrokerBooking from './src/Screens/BrokerFlow/Screens/BrokerBookingBR/BrokerBooking';
import ConformBooking from './src/Screens/ConformBooking/ConformBooking'
import Claims from './src/Screens/BottomTabNavigator/Claims';
import SearchProjectBR from './src/Screens/BrokerFlow/Screens/SearchBR/SearchProjectBR';
import RewardBR from './src/Screens/BrokerFlow/Screens/RewardBr/RewardBR';
import Notificationdata from './src/Screens/Notifications/Notificationdata';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator

          initialRouteName="Splash" screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Onboarding" component={Onboarding} />

          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="SelectRole" component={SelectRole} />
          <Stack.Screen name="Notification" component={Notificationdata} />

          {/* Developer Flow  <Stack.Screen name="Tutorialscdata" component={Tutorialscdata} />*/}

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="BootomTabNav" component={BootomTabNav} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          {/* <Stack.Screen name="Popup" component={Popup} /> */}
          <Stack.Screen name="Otpverify" component={Otpverify} />
          <Stack.Screen name="AboutProperty" component={AboutProperty} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Helpm" component={Helpm} />
          <Stack.Screen name="Faq" component={Faq} />
          <Stack.Screen name="Contactus" component={ContactUs} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyAndPolicy} />
          <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          
          {/* BrokerFlow */}

          <Stack.Screen name='BrokerLogin' component={BrokerLogin} />
          <Stack.Screen name='VerifyBrokerNumber' component={VerifyBrokerNumber} />
          <Stack.Screen name='CompleteProfile' component={CompleteProfile} />
          <Stack.Screen name="FooterTabBR" component={FooterTabBR} />
          <Stack.Screen name='EditBrokersProfile' component={EditBrokersProfile} />
          <Stack.Screen name="DashboardBR" component={DashboardBR} />
          <Stack.Screen name="RewardHistory" component={RewardHistory} />
          <Stack.Screen name="ProjectDeatilBr" component={ProjectDeatilBr} />
          <Stack.Screen name="BrokerBooking" component={BrokerBooking} />
          <Stack.Screen name="SearchProjectBR" component={SearchProjectBR} />
          <Stack.Screen name="RewardBR" component={RewardBR} />
          <Stack.Screen name="BrokerBookingBR" component={BrokerBooking} />

         
          {/* <Stack.Screen name="buttton" component={ButtonCo} />
         
          <Stack.Screen name="Myaccount" component={Myaccount} />
          
          <Stack.Screen name="Contactus" component={ContactUs} />
         
          <Stack.Screen name="Notification" component={Notificationdata} />
          <Stack.Screen name='History' component={History} />
          <Stack.Screen name='ConformBooking' component={ConformBooking} />
          <Stack.Screen name='Claims' component={Claims} />
          <Stack.Screen name='NotificationDeveloper' component={NotificationDeveloper} /> */}




          {/* Broker Flow */}

          {/* 
          <Stack.Screen name='BrokerLoginSet' component={BrokerLoginSet} />
          <Stack.Screen name='VerifyBrokerNumber' component={VerifyBrokerNumber} />
          <Stack.Screen name='CompleteProfile' component={CompleteProfile} />
          <Stack.Screen name='EditBrokersProfile' component={EditBrokersProfile} />
          <Stack.Screen name="FooterTabBR" component={FooterTabBR} />
          <Stack.Screen name="DashboardBR" component={DashboardBR} />
          <Stack.Screen name="LoanBr" component={LoanBr} />
          {/* <Stack.Screen name="BrokerFilter" component={BrokerFilter} /> */}
          {/* <Stack.Screen name="MyProfileBR" component={MyProfileBR} />
          <Stack.Screen name="RewardHistory" component={RewardHistory} />
          <Stack.Screen name="HomeBr" component={Homebr} />
          <Stack.Screen name="ProjectDeatilBr" component={ProjectDeatilBr} />
          <Stack.Screen name="BrokerBooking" component={BrokerBooking} />
          <Stack.Screen name="SearchProjectBR" component={SearchProjectBR} />
          <Stack.Screen name="BrokerBookingBR" component={BrokerBooking} />
          <Stack.Screen name="RewardBR" component={RewardBR} />

          <Stack.Screen name='BottomSlider' component={BottomSlider} />
          <Stack.Screen name='ShortlistedFilter' component={ShortlistedFilter} />  */}

          



        </Stack.Navigator>

      </NavigationContainer>
  )
}

export default App
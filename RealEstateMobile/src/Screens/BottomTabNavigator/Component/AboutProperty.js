import { View, Text, Image, Dimensions, ScrollView,Platform, } from 'react-native';
import React from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { data } from '../../../Components/PropertyDetails';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwosome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('window');

const AboutProperty = ({ navigation }) => {
  return (
    <ScrollView style={{ marginVertical: '5%', }} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: '5%',
          marginBottom: '2%',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
        <AntDesign name="arrowleft" size={30} color={'#000000'} onPress={() => { navigation.goBack() }} />
        <Text style={{ color: '#000000', fontSize: 24, paddingLeft: '5%', fontFamily: 'Lato-Bold', fontWeight: '700' }}>Project Details</Text>
        {/* <Ionicons
          name="ios-notifications-outline"
          size={30}
          color={'#000000'}
          onPress={() => { navigation.navigate('Notification') }}
        /> */}
      </View>
      <View>
        <SwiperFlatList
          showPagination
          horizontal={true}
          paginationStyle={{
            marginBottom: '-3%',
            justifyContent: 'space-between',
          }}
          paginationStyleItem={{
            width: 7,
            height: 7,
          }}
          paginationDefaultColor="#D9D9D9"
          paginationActiveColor="#1E1E1E"
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{ width: width, height: height * 0.3, padding: '3%' }}>
                <View style={{ borderRadius: 10 }}>
                  <Image
                    source={item.img}
                    style={{ width: '100%', height: '100%', borderRadius: 10 }}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={{ marginTop: '6%', paddingHorizontal: '5%', }}>
        <View
          style={{

            flexDirection: 'row',
            alignItems: 'center',

            //borderWidth:1,
          }}>
          <FontAwosome5 name="city" size={20} color={'black'} />
          <Text
            style={{
              color: '#000',
              marginHorizontal: '5%',
              fontSize: 24,
              fontWeight: '700',
              fontFamily: 'Lato-Regular'
            }}>
            {data[0].tittle}
          </Text>
        </View>
        <View
          style={{
            marginTop: '3%',
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            //marginHorizontal: '5%',
            //borderWidth: 1,
            //width: width
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Ionicons
              name="location"
              size={20}
              color={'black'}
              style={{ borderBottomColor: '#000', borderBottomWidth: 3 }}
            />
            <Text
              style={{
                color: '#000',
                marginHorizontal: '5%',
                fontSize: 12,
                fontWeight: '500',
              }}>
              {data[0].address}
            </Text>
          </View>
          <Text style={{
            backgroundColor: 'rgba(53,150,240,0.2)', borderWidth: 2, borderColor: '#3596F0', paddingVertical: '2%', borderRadius:Platform.OS === 'ios'? 16:30, color: '#000000', fontSize: 10,overflow:Platform.OS === 'ios'? 'hidden':'visible',
            fontWeight: '500', fontFamily: 'Lato-Regular', paddingHorizontal: '3%',
            alignContent: 'center'
          }}>Residential Apartment</Text>

        </View>
        <View style={{  borderTopColor: 'grey', borderTopWidth: 1, marginTop: '3%', paddingTop: '3%' }} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: "#000", fontSize: 18, marginBottom: '2%', fontWeight: '500', fontFamily: 'Lato-Regular' }}>Possession :</Text>
            <Text style={{ color: "#000", fontSize: 18, marginBottom: '2%', fontWeight: '700', fontFamily: 'Lato-Regular' }}>Jul 2025</Text>
          </View>

          <Text style={{ color: "#000", fontSize: 16, marginBottom: '2%', fontWeight: '700', fontFamily: 'Lato-Regular' }}>About</Text>
          <Text style={{ fontSize: 14, color: '#696969', fontFamily: 'Lato-Regular' }}>
            Enjoy a blissful living experience in Hero Homes. This residential project encompasses 2 BHK apartments in Sector-104, Gurgaon and brings you the best of both the worlds – excellent aesthetics and exemplary
            lifestyle. Its unique highlights include facilities like Video Door Security, Community Hall,Multipurpose
            Court, Reflexolo Park,Bar/Chill-Out Lounge and many others. All of these and the ot features make this project a true value for money. And you can now bu your exclusive 2 BHK apartment with a super built-up area of 1099.0 sq. ft. is available at Rs. 87 Lac.
          </Text>
          <Text style={{ color: "#000", fontSize: 16, marginVertical: '2.8%', fontWeight: '700', }}>Subscription Details</Text>
          <View style={{ marginTop: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '1%', alignItems: 'center' }}>
              <Text style={{ width: '60%', fontSize: 14, color: '#696969', }}>Total Subscription Amount</Text>
              <Text style={{ width: '10%', fontSize: 14, color: '#696969', }}>:</Text>
              <FontAwesome name='rupee' color={'#000000'} size={14} style={{ alignSelf: 'center', marginHorizontal: 3 }} />
              <Text style={{ fontSize: 14, color: '#000000', fontWeight: '500' }}>2000000</Text>
            </View>

          </View>
        </View>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AboutProperty;
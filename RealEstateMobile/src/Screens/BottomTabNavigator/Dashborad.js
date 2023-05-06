import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React from 'react'
import Ioniconns from 'react-native-vector-icons/Ionicons';
import FontAwosome5 from 'react-native-vector-icons/FontAwesome5';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';



const { height, width } = Dimensions.get('window');

const Dashboard = ({ navigation }) => {
    const [isLoggedin,setisLoggedin]=useState(false);
    const [name,setName]=useState('')
    
    // useEffect(async()=>{
    //     const token = await AsyncStorage.getItem('token')
    //     console.log('token 1:',token)
    //     if(token){
    //         setisLoggedin(true);
    //         axios.get('https://node-realestate.mobiloitte.com/api/v1/user/getProfile').
    //         then(function(response){
    //             getData(res.data.firstName)
    //         })
           
    //     }else{
    //         setisLoggedin(false)
    //     }
    // },[])

    function getData(names){
        setName(names);
    }
    const data = [
        {
            id: '0',
            img: require('../../Assets/Images/propertyImage.png'),
            tittle: 'Experion The Westerlies',
            address: 'St 163,Sector 108, GurGoan',
            date: '12-04-2022',
            claims: 20
        },
        {
            id: '1',
            img: require('../../Assets/Images/propertyImage.png'),
            tittle: 'Experion The Westerlies',
            address: 'St 163,Sector 108, GurGoan',
            date: '12-04-2022',
            claims: 20
        },
        {
            id: '2',
            img: require('../../Assets/Images/propertyImage.png'),
            tittle: 'Experion The Westerlies',
            address: 'St 163,Sector 108, GurGoan',
            date: '12-04-2022',
            claims: 20
        },
        {
            id: '3',
            img: require('../../Assets/Images/propertyImage.png'),
            tittle: 'Experion The Westerlies',
            address: 'St 163,Sector 108, GurGoan',
            date: '12-04-2022',
            claims: 20
        },
        {
            id: '4',
            img: require('../../Assets/Images/propertyImage.png'),
            tittle: 'Experion The Westerlies',
            address: 'St 163,Sector 108, GurGoan',
            date: '12-04-2022',
            claims: 20
        },
    ]
    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
            <View style={styles.profileimg}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../Assets/Images/re1.png')} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.nameid}>#12321434</Text>
                    </View>
                </View>
                <Ioniconns style={styles.notificationIcon} name='ios-notifications-outline' size={25} color={'black'} onPress={() => { navigation.navigate('Notification') }} />
            </View>


            <View style={[styles.TotalCoins, styles.elevation]}>
                <Text style={styles.numberStyle}>10</Text>
                <Text style={styles.blockTitles}>Total Claims</Text>
            </View>

            <View style={styles.firsttwo}>
                <View style={[styles.TodayClaims, styles.elevation]}>
                    <MaterialCommunityIcons name='office-building' color={'#FFFFFF'} size={26} style={[styles.iconArrangement, { marginTop: '4%' }]} />
                    <View>
                        <Text style={styles.numberStyle}>05</Text>
                        <Text style={styles.blockTitles}>Today's Claims</Text>
                    </View>
                </View>
                <View style={[styles.Subcription, styles.elevation]}>
                    <FontAwesome name='rupee' color={'#FFFFFF'} size={26} style={styles.iconArrangement} />
                    <View>
                        <Text style={styles.numberStyle}>90,000</Text>
                        <Text style={styles.blockTitles}>Subscription Left</Text>
                    </View>

                </View>
            </View>

            <View style={styles.secondtwo}>
                <TouchableOpacity style={[styles.ConfirmBooking, styles.elevation,]} onPress={() => {navigation.navigate('ConformBooking')}} >
                    <Image source={require('../../Assets/Images/locatin1.png')} style={[styles.iconArrangement, { height: 18.63, width: 16.925, marginRight: '5%',alignSelf:'flex-start',marginTop:'8%' }]} />
                    <View>
                        <Text style={styles.numberStyle}>05</Text>
                        <Text style={styles.blockTitles}>Confirm Booking</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.PendingClaims, styles.elevation]} onPress={() => {navigation.navigate('Claims')}} >
                    <Ionicons name='ios-file-tray-full-outline' color={'#FFFFFF'} size={26} style={styles.iconArrangement} />

                    <View>
                        <Text style={styles.numberStyle}>90,000</Text>
                        <Text style={styles.blockTitles}>Pending claims</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.ProjectList}>
                <Text style={styles.pageHeadings}>Find Your Listed Projects</Text>
            </View>
       

     

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('AboutProperty')}>
                            <View style={styles.propertyCard}>
                                <View style={{width:width*0.30}}>
                                   
                                        <Image source={item.img} style={styles.img} />
                                    
                                </View>
                                <View style={styles.propertyInfo} >
                                    <View style={styles.propertyName}>
                                        <FontAwosome5 style={styles.cityIcon} name='city' size={15} color={'black'} />
                                        <Text style={styles.propertyTitle}>:</Text>
                                        <Text style={styles.propertyTitle}>{item.tittle} </Text>
                                    </View>
                                    <View style={styles.propertyName}>
                                        <Ioniconns style={styles.cityIcon} name='location' size={15} color={'black'} />
                                        <Text style={styles.propertyTitle}>:</Text>
                                        <Text style={styles.propertyTitle1}>{item.address}</Text>
                                    </View>
                                    <View style={styles.propertyClaim}>
                                        <View style={{ justifyContent: 'space-around' }}>
                                            <Text style={styles.listedDate}>Listed Date</Text>
                                            <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                                                <Materiallcons name='date-range' size={15} color={'black'} />
                                                <Text style={styles.propertyDate}>{item.date}</Text>
                                            </View>

                                        </View>
                                        <View >
                                            <Text style={styles.listedClaims}> Number of Claims</Text>
                                            <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                                                <Image source={require('../../Assets/Images/clainvector.png')}/>
                                                <Text style={styles.propertyClaimNumber}> {item.claims}</Text>
                                            </View>

                                        </View>
                                    </View>

                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
       

            
           
            <View style={{ marginBottom: 20 }}>

            </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Dashboard

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: '5%',
        marginBottom: 1
    },
    profileimg: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    nameContainer: {
        justifyContent: 'center', margin: '5%',
    },
    name: {
        color: '#000000', fontWeight: '700', fontFamily:'Lato', fontSize:20
    },
    nameid: {
        color: '#696969', fontSize: 12, fontWeight:'500', fontFamily:'Lato',textAlign:'left',
    },
    notificationIcon: {
        justifyContent: 'center', alignItems: 'center'
    },
    TotalCoins: {
        backgroundColor: '#469EEE', padding: '10%', marginVertical: '3%', borderRadius: 20, justifyContent: 'center', alignItems: 'center'
    },
    elevation: {
        elevation: 20,
        shadowColor: '#171717',
    },
    TodayClaims: {
        backgroundColor: '#1AB1B0', padding: '8%', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 20, width: '48%', flexDirection: 'row'
    },
    numberStyle: {
        color: '#FFFFFF', fontSize: 26, fontWeight: '700', fontFamily:'Lato-Regular', textAlign:'left'
    },
    numberStyle1: {
        color: '#FFFFFF', fontSize: 26, fontWeight: '700', fontFamily:'Lato-Regular', textAlign:'center'
    },
    blockTitles: {
        fontSize: 14, color: '#FFFFFF', fontWeight: '600', fontFamily:'Lato-Regular', textAlign:'center'
    },
    iconArrangement: {
        marginTop: '6%', marginRight: '5%'
    },
    Subcription: {
        backgroundColor: '#F16937', justifyContent: 'center', alignItems: 'flex-start', padding: '8%', borderRadius: 20, width: '48%', flexDirection: 'row'
    },
    ConfirmBooking: {
        backgroundColor: '#FB5A7C', padding: '6.5%', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 20, width: '48%',
        flexDirection: 'row'
    },
    PendingClaims: {
        backgroundColor: '#8677FE', justifyContent: 'center', alignItems: 'flex-start', padding: '8%', borderRadius: 20, width: '48%', flexDirection: 'row'
    },
    ProjectList: {
        marginVertical: '4%', borderBottomColor: 'grey', borderBottomWidth: 1,
    },
    firsttwo: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%',
    },
    secondtwo: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%'
    },
    pageHeadings: {
        fontSize: 20, color: '#000000', fontWeight: '700', marginBottom: '1%', fontSize:20, fontFamily:'Lato-Regular'

    },
    propertyCard: {
        flexDirection: 'row', borderWidth: 0.9, marginBottom: '2%', padding: '2%', borderColor: 'grey', borderRadius: 15, width: width * 0.9
    },
    img: {
        width: width * 0.3,
        borderRadius: 10,
        resizeMode:'cover',
        position:'absolute',
        height:'100%'

    },
    propertyInfo: {
        justifyContent: 'space-between', marginHorizontal: '3%', marginVertical: '2%',width:'60%'
    },
    propertyName: {
        flexDirection: 'row', alignItems: 'center', 
    },
    propertyTitle: {
        color: '#000000', fontSize: 11,  marginHorizontal: '3%',flexShrink: 2, fontWeight:'500'
    },
    propertyTitle1: {
        color: '#000000', fontSize: 11,  marginHorizontal: '4.5%',flexShrink: 2,fontWeight:'500'
    },
    propertyClaim: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '2%'
    },
    propertyDate: {
        fontSize: 12, fontWeight: '500', color: '#000000'
    },
    propertyClaimNumber: {
        fontSize: 12, fontWeight: '500', color: '#000000'
    },
    cityIcon: {
        width:20,
        margin: '2%',
        alignSelf: 'center'
    },
    listedDate: {

        fontSize: 10,
        fontFamily:'Lato-Regular',
        fontWeight:'400'
    },
    listedClaims: {
        fontSize: 10,
        fontFamily:'Lato-Regular',
         fontWeight:'400',

        fontSize: 10,color:'#696969'
    },
   
    Container: {
        padding: '5%',


    },
    cont1: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arroweditprilfecont: {

        flexDirection: 'row',
        alignItems: 'center',
    },
    edittext: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: '3%',
        color: '#000000',
        fontFamily: 'Lato',
        marginLeft: '5%',
    },
    numberStylef: {
        color: '#000000', fontSize: 26, fontWeight: '700', alignSelf: 'center'
    },
    blockTitlesf: {
        fontSize: 14, color: '#000000', alignSelf: 'center', textAlign: 'center'
    },
})

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,

    TouchableOpacity,
    SafeAreaView

} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from '../../../BottomTabNavigator/Dashborad'



const DashboardBR = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : null }}>
            <ScrollView style={{ height: Platform.OS === 'ios' ? '100%' : '100%' }}>
                <View style={styles.Container}>

                    <View style={styles.cont1}>
                        <View style={styles.arroweditprilfecont}>
                            <AntDesign name="arrowleft" size={30} color={'#000000'} onPress={() => navigation.goBack()} />
                            <Text style={styles.edittext}>Dashboard</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Notification')} >
                            <Image source={require('../../../../Assets/Images/Bell.png')} />
                        </TouchableOpacity>
                    </View>



                    <View style={[styles.TotalCoins, styles.elevation]}>
                        <Text style={styles.numberStylef}>10</Text>
                        <Text style={styles.blockTitlesf}>Total Visits</Text>
                    </View>
                    <View style={styles.firsttwo}>
                        <View style={[styles.TodayClaims, styles.elevation]}>

                            <View style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <Text style={styles.numberStyle1}>10</Text>
                                <Text style={styles.blockTitles}>Earned Rewards Over Visits</Text>
                            </View>
                        </View>
                        <View style={[styles.Subcription, styles.elevation]}>

                            <View>
                                <Text style={styles.numberStyle1}>07</Text>
                                <Text style={styles.blockTitles}>Earnd Rewards Over Bookings</Text>
                            </View>

                        </View>


                    </View>
                    <View style={styles.secondtwo}>
                        <TouchableOpacity style={[styles.ConfirmBooking, styles.elevation]} onPress={() => { navigation.navigate('RewardHistory') }} >

                            <View>
                                <Text style={styles.numberStyle1}>10</Text>
                                <Text style={styles.blockTitles}>Pending Rewards Over Visits</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.PendingClaims, styles.elevation]} onPress={() => { navigation.navigate('BrokerBooking') }} >


                            <View>
                                <Text style={styles.numberStyle1}>07</Text>
                                <Text style={styles.blockTitles}>Pending Rewards Over Bookings</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DashboardBR




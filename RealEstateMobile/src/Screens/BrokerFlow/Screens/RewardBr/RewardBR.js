import { View, Text, StyleSheet, ScrollView, Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Ioniconns from 'react-native-vector-icons/Ionicons';
// import { property } from './PropertyDetail';
import { property } from '../BrokerBookingBR/PropertyDetail';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwosome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from 'react-native-swiper-flatlist/src/themes';
import { SafeAreaView } from 'react-native-safe-area-context';


const { height, width } = Dimensions.get('window');

const RewardBR = ({ navigation }) => {

    const [Visible, setVisible] = useState(false);
    const [AllVisible, setAllVisible] = useState(false);
    const [filterbg, setfilterbg] = useState(1)
    const [tabToggle, settabToggle] = useState(0)
    const [head, setHead] = useState(0)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
    const [opacity, setopacity] = useState(1)
    const [value, setvalue] = useState('All')
    const [status, setStatus] = useState(0)
    const [statusFilter, setFilterStatus] = useState(0)

    const showDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible);
        setopacity(0.1)
    };
    const showDatePicker1 = () => {
        setDatePickerVisibility1(!isDatePickerVisible1);
        setopacity(0.1)
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible);
        setopacity(1)
    };
    const hideDatePicker1 = () => {
        setDatePickerVisibility1(!isDatePickerVisible1);
        setopacity(1)
    };

    const handleConfirm = date => {
        console.warn('A date has been picked: ', date);
        hideDatePicker();
    };
    const handleConfirm1 = date => {
        console.warn('A date has been picked: ', date);
        hideDatePicker1();
    };
   

    function colors(text) {
        if (text == 'Approved') {
            return '#56B808'
        } else if (text == 'Declined') {
            return '#D20707'
        } else if (text == 'Pending') {
            return '#02249C'
        } else {
            return '#FECF2A'
        }
    }


    function callDis(text) {
        if (text == 'Pending') {
            return 'flex'
        } else {
            return 'none'
        }
    }



    return (
        <ScrollView style={[styles.mainContainer, { opacity: opacity }]} showsVerticalScrollIndicator={false}>
            <SafeAreaView>


                <View style={styles.headAllign}>
                    <Text style={styles.texthead}>Rewards</Text>
                    <Ioniconns style={styles.notificationIcon} name='ios-notifications-outline' size={25} color={'black'} onPress={() => { navigation.navigate('Notification') }} />
                </View>
                <View style={[styles.headAllign, , { display: head == 0 ? 'flex' : 'none' }]}>
                    <Text style={styles.tittletext}>Today's Rewards</Text>
                    <TouchableOpacity onPress={() => { setVisible(!Visible); setopacity(0.1) }} style={{ backgroundColor: 'skyblue', padding: 5, borderRadius: 40, paddingHorizontal: 10, flexDirection: 'row', borderWidth: 1, borderColor: '#3596F0', alignItems: 'center' }}>
                        <Text style={{ color: '#000' }}>{value}</Text>
                        <Ioniconns name='chevron-down-outline' size={20} color={'#000'} />
                    </TouchableOpacity>
                </View>
                <Modal
                    transparent={true}
                    visible={Visible}

                >
                    <TouchableWithoutFeedback style={{ backgroundColor: '#000000aa', flex: 1 }} onPress={() => { setVisible(!Visible) }} >
                        <View style={{ backgroundColor: "white", marginLeft: '60%', marginTop: '40%', width: '35%', }}>
                            <View style={{ marginBottom: '4%' }}>
                                <TouchableOpacity onPress={() => { setfilterbg(0); setVisible(!Visible); setopacity(1); setvalue('All'); setFilterStatus(0) }}><Text style={{ backgroundColor: filterbg == 0 ? 'black' : '#fff', color: filterbg == 0 ? '#fff' : '#000', padding: 5 }}>All</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => { setfilterbg(1); setVisible(!Visible); setopacity(1); setvalue('Approved'); setFilterStatus(1) }} ><Text style={{ backgroundColor: filterbg == 1 ? 'black' : '#fff', color: filterbg == 1 ? '#fff' : '#000', padding: 5 }}>Approved</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => { setfilterbg(2); setVisible(!Visible); setopacity(1);; setvalue('Pending'); setFilterStatus(1) }}><Text style={{ backgroundColor: filterbg == 2 ? 'black' : '#fff', color: filterbg == 2 ? '#fff' : '#000', padding: 5 }}>Pending</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => { setfilterbg(3); setVisible(!Visible); setopacity(1); setvalue('Rewarded'); setFilterStatus(1) }}><Text style={{ backgroundColor: filterbg == 3 ? 'black' : '#fff', color: filterbg == 3 ? '#fff' : '#000', padding: 5 }}>Rewarded</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => { setfilterbg(4); setVisible(!Visible); setopacity(1); setvalue('Declined'); setFilterStatus(1) }}><Text style={{ backgroundColor: filterbg == 4 ? 'black' : '#fff', color: filterbg == 4 ? '#fff' : '#000', padding: 5 }}>Declined</Text></TouchableOpacity>
                            </View>




                        </View>
                    </TouchableWithoutFeedback>

                </Modal>
                <View style={styles.headAllign}>
                    <TouchableOpacity onPress={() => { settabToggle(0); setHead(0); setStatus(0); setvalue('All'); setFilterStatus(0) }}
                        style={[styles.topbtn, { backgroundColor: tabToggle == 0 ? "#000" : '#DFDFDF' }]}>

                        <Text style={{ color: tabToggle == 0 ? '#FFFFFF' : '#000', textAlign: 'center' }} >Today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { settabToggle(1); setHead(1); setStatus(1) }}
                        style={[styles.topbtn, { backgroundColor: tabToggle == 1 ? "#000" : '#DFDFDF' }]}>

                        <Text style={{ color: tabToggle == 1 ? '#FFFFFF' : '#000', textAlign: 'center' }} >Pending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { settabToggle(2); setHead(2); setStatus(0); setFilterStatus(0) }}
                        style={[styles.topbtn, { backgroundColor: tabToggle == 2 ? "#000" : '#DFDFDF' }]}>

                        <Text style={{ color: tabToggle == 2 ? '#FFFFFF' : '#000', textAlign: 'center' }}>All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: head == 1 ? 'flex' : 'none', marginTop: 5 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '5%',
                        }}>
                        <Text style={{ fontSize: 14, color: '#000000', fontFamily: "Lato-Regular", }}>12 Jan 2022</Text>
                        <TouchableOpacity onPress={()=>{showDatePicker()}}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: 'skyblue',
                                    borderWidth: 1,
                                    padding: 5,
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    borderColor: '#3596F0',

                                }}>
                                <Text style={{ marginHorizontal: 10, fontFamily: "Lato-Regular", fontWeight: '500', fontSize: 14, color: '#595959' }}>Select Date</Text>
                                <FontAwesome5 name="calendar" size={14} color={'#FFFFFF'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        isDarkModeEnabled={false}

                    />
                </View>
                <View style={{ display: head == 2 ? 'flex' : 'none' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '5%',
                        }}>
                        <Text style={{ fontSize: 14, color: '#000000', fontFamily: "Lato-Regular", }}>12 Jan 2022</Text>
                        <TouchableOpacity onPress={()=>{showDatePicker1()}}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: 'skyblue',
                                    borderWidth: 1,
                                    padding: 5,
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    borderColor: '#3596F0',

                                }}>
                                <Text style={{ marginHorizontal: 10, fontFamily: "Lato-Regular", fontWeight: '500', fontSize: 14, color: '#595959' }}>Select Date</Text>
                                <FontAwesome5 name="calendar" size={14} color={'#FFFFFF'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setAllVisible(!AllVisible); setopacity(0.1) }}>
                            <Entypo name="sound-mix" size={20} color={'#000'} style={{ transform: [{ rotate: '90deg' }] }} />
                            <Modal
                                transparent={true}
                                visible={AllVisible}

                            >
                                <TouchableWithoutFeedback style={{ backgroundColor: '#000000aa', flex: 1 }} onPress={() => { setAllVisible(!AllVisible) }} >
                                    <View style={{ backgroundColor: "white", marginLeft: '60%', marginTop: '40%', width: '35%', }}>
                                        <View style={{ marginBottom: '4%' }}>
                                            <TouchableOpacity onPress={() => { setfilterbg(0); setAllVisible(!AllVisible); setopacity(1); setFilterStatus(0); setvalue('All') }}><Text style={{ backgroundColor: filterbg == 0 ? 'black' : '#fff', color: filterbg == 0 ? '#fff' : '#000', padding: 5 }}>All</Text></TouchableOpacity>
                                            <TouchableOpacity onPress={() => { setfilterbg(1); setAllVisible(!AllVisible); setopacity(1); setFilterStatus(1); setvalue('Approved') }} ><Text style={{ backgroundColor: filterbg == 1 ? 'black' : '#fff', color: filterbg == 1 ? '#fff' : '#000', padding: 5 }}>Approved</Text></TouchableOpacity>
                                            <TouchableOpacity onPress={() => { setfilterbg(2); setAllVisible(!AllVisible); setopacity(1); setFilterStatus(1); setvalue('Pending') }}><Text style={{ backgroundColor: filterbg == 2 ? 'black' : '#fff', color: filterbg == 2 ? '#fff' : '#000', padding: 5 }}>Pending</Text></TouchableOpacity>
                                            <TouchableOpacity onPress={() => { setfilterbg(3); setAllVisible(!AllVisible); setopacity(1); setFilterStatus(1); setvalue('Rewarded') }}><Text style={{ backgroundColor: filterbg == 3 ? 'black' : '#fff', color: filterbg == 3 ? '#fff' : '#000', padding: 5 }}>Rewarded</Text></TouchableOpacity>
                                            <TouchableOpacity onPress={() => { setfilterbg(4); setAllVisible(!AllVisible); setopacity(1); setFilterStatus(1); setvalue('Declined') }}><Text style={{ backgroundColor: filterbg == 4 ? 'black' : '#fff', color: filterbg == 4 ? '#fff' : '#000', padding: 5 }}>Declined</Text></TouchableOpacity>
                                        </View>




                                    </View>
                                </TouchableWithoutFeedback>

                            </Modal>
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible1}
                        mode="date"
                        onConfirm={handleConfirm1}
                        onCancel={hideDatePicker1}
                        isDarkModeEnabled={false}

                    />
                </View>
                <View style={{ display: status == 1 ? 'flex' : 'none' }}>
                    <FlatList
                        data={property}
                        renderItem={({ item }) => {
                            if (item.Status == 'Pending')
                                return (
                                    <View
                                        style={styles.propertyCard}>
                                        <View style={{ width: width * 0.3 }}>
                                            <Image
                                                source={require('../../../../Assets/Images/propertyImage.png')}
                                                style={{ width: width * 0.3, borderRadius: 10, position: 'absolute', height: '100%' }}
                                            />
                                        </View>
                                        <View style={styles.propertyInfo}>
                                            <View style={[styles.propertyName, { justifyContent: 'space-between' }]}>
                                                <View style={styles.propertyName}>
                                                    <FontAwosome5
                                                        style={styles.cityIcon}
                                                        name="city"
                                                        size={15}
                                                        color={'black'}
                                                    />
                                                    <Text style={{ width: '3%', fontSize: 13, color: '#000000', fontWeight: '700' }}>:</Text>
                                                    <Text style={styles.propertyTitle}>{item.propertyName}</Text>
                                                </View>
                                                <TouchableOpacity style={{ backgroundColor: 'green', padding: 5, width: 20, borderRadius: 20, alignItems: 'center', display: callDis(item.Status) }}>
                                                    <FontAwesome name="phone" size={10} color={'#FFF'} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.propertyName}>
                                                <Ioniconns
                                                    style={styles.cityIcon}
                                                    name="location"
                                                    size={15}
                                                    color={'black'}
                                                />
                                                <Text style={{ width: '3%', fontSize: 13, color: '#000000', fontWeight: '700' }}>:</Text>
                                                <Text style={styles.propertyTitle}>
                                                    {item.location}
                                                </Text>
                                            </View>
                                            <View style={{ width: '100%', margin: '2%' }}>
                                                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '2%', }}>
 <Text style={{ width: '50%', fontSize: 10, color: '#696969' }}>{item.feild4}</Text>
 <Text style={{ width: '50%', fontSize: 10, color: '#000000' }}>{item.UnitNumber}</Text>
 </View> */}
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                    <View style={{ width: '50%', marginBottom: '2%' }}>
                                                        <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild1}</Text>

                                                        <Text style={{ fontSize: 10, color: '#000000' }}>{item.BrokerName}</Text>
                                                    </View>
                                                    <View style={{ width: '50%', marginBottom: '2%' }}>
                                                        <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild2}</Text>

                                                        <Text style={{ fontSize: 10, color: '#000000' }}>{item.ClientName}</Text>
                                                    </View>
                                                </View>

                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                    <View style={{ width: '50%', marginBottom: '2%' }}>
                                                        <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild5}</Text>

                                                        <View style={{ fontSize: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                            <FontAwesome5 name="calendar" size={10} color={'#000'} />
                                                            <Text style={{ fontSize: 10, color: '#000000' }}>{item.RequestDate}</Text>
                                                        </View>

                                                    </View>
                                                    <View style={{ width: '50%', marginBottom: '2%' }}>
                                                        <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild3}</Text>
                                                        <Text style={{ fontSize: 10, color: '#000000' }}>{item.Attendee}</Text>
                                                    </View>


                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                    <Text style={{ fontSize: 10, color: '#696969', width: '50%' }}>{item.feild6}</Text>

                                                    <Text style={{ fontSize: 10, width: '50%', color: colors(item.Status) }}>{item.Status}</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                )

                        }}
                    />
                </View>
                <View style={{ display: status == 0 ? 'flex' : 'none' }}>
                    <View style={{ display: statusFilter == !0 ? 'flex' : 'none' }}>
                        <FlatList
                            data={property}
                            renderItem={({ item }) => {
                                if (item.Status == value)
                                    return (
                                        <View
                                            style={styles.propertyCard}>
                                            <View style={{ width: width * 0.3 }}>
                                                <Image
                                                    source={require('../../../../Assets/Images/propertyImage.png')}
                                                    style={{ width: width * 0.3, borderRadius: 10, position: 'absolute', height: '100%' }}
                                                />
                                            </View>
                                            <View style={styles.propertyInfo}>
                                                <View style={[styles.propertyName, { justifyContent: 'space-between' }]}>
                                                    <View style={styles.propertyName}>
                                                        <FontAwosome5
                                                            style={styles.cityIcon}
                                                            name="city"
                                                            size={15}
                                                            color={'black'}
                                                        />
                                                        <Text style={{ width: '3%', fontSize: 13, color: '#000000', fontWeight: '700' }}>:</Text>
                                                        <Text style={styles.propertyTitle}>{item.propertyName}</Text>
                                                    </View>
                                                    <TouchableOpacity style={{ backgroundColor: 'green', padding: 5, width: 20, borderRadius: 20, alignItems: 'center', display: callDis(item.Status) }}>
                                                        <FontAwesome name="phone" size={10} color={'#FFF'} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.propertyName}>
                                                    <Ioniconns
                                                        style={styles.cityIcon}
                                                        name="location"
                                                        size={15}
                                                        color={'black'}
                                                    />
                                                    <Text style={{ width: '3%', fontSize: 13, color: '#000000', fontWeight: '700' }}>:</Text>
                                                    <Text style={styles.propertyTitle}>
                                                        {item.location}
                                                    </Text>
                                                </View>
                                                <View style={{ width: '100%', margin: '2%' }}>
                                                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '2%', }}>
 <Text style={{ width: '50%', fontSize: 10, color: '#696969' }}>{item.feild4}</Text>
 <Text style={{ width: '50%', fontSize: 10, color: '#000000' }}>{item.UnitNumber}</Text>
 </View> */}
                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                        <View style={{ width: '50%', marginBottom: '2%' }}>
                                                            <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild1}</Text>

                                                            <Text style={{ fontSize: 10, color: '#000000' }}>{item.BrokerName}</Text>
                                                        </View>
                                                        <View style={{ width: '50%', marginBottom: '2%' }}>
                                                            <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild2}</Text>

                                                            <Text style={{ fontSize: 10, color: '#000000' }}>{item.ClientName}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                        <View style={{ width: '50%', marginBottom: '2%' }}>
                                                            <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild5}</Text>

                                                            <View style={{ fontSize: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                                <FontAwesome5 name="calendar" size={10} color={'#000'} />
                                                                <Text style={{ fontSize: 10, color: '#000000' }}>{item.RequestDate}</Text>
                                                            </View>

                                                        </View>
                                                        <View style={{ width: '50%', marginBottom: '2%' }}>
                                                            <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild3}</Text>
                                                            <Text style={{ fontSize: 10, color: '#000000' }}>{item.Attendee}</Text>
                                                        </View>


                                                    </View>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                        <Text style={{ fontSize: 10, color: '#696969', width: '50%' }}>{item.feild6}</Text>

                                                        <Text style={{ fontSize: 10, width: '50%', color: colors(item.Status) }}>{item.Status}</Text>
                                                    </View>

                                                </View>
                                            </View>
                                        </View>
                                    )

                            }}
                        />
                    </View>
                    <View style={{ display: statusFilter == 0 ? 'flex' : 'none' }}>
                        <FlatList
                            data={property}
                            renderItem={({ item }) => {
                                return (
                                    <View
                                        style={styles.propertyCard}>
                                        <View style={{ width: width * 0.3 }}>
                                            <Image
                                                source={require('../../../../Assets/Images/propertyImage.png')}
                                                style={{ width: width * 0.3, borderRadius: 10, position: 'absolute', height: '100%' }}
                                            />
                                        </View>
                                        <View style={styles.propertyInfo}>
                                            <View style={[styles.propertyName, { justifyContent: 'space-between' }]}>
                                                <View style={styles.propertyName}>
                                                    <FontAwosome5
                                                        style={styles.cityIcon}
                                                        name="city"
                                                        size={15}
                                                        color={'black'}
                                                    />
                                                    <Text style={{ width: '3%', fontSize: 13, color: '#000000', fontWeight: '700' }}>:</Text>
                                                    <Text style={styles.propertyTitle}>{item.propertyName}</Text>
                                                </View>
                                                <TouchableOpacity style={{ backgroundColor: 'green', padding: 5, width: 20, borderRadius: 20, alignItems: 'center', display: callDis(item.Status) }}>
                                                    <FontAwesome name="phone" size={10} color={'#FFF'} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.propertyName}>
                                                <Ioniconns
                                                    style={styles.cityIcon}
                                                    name="location"
                                                    size={15}
                                                    color={'black'}
                                                />
                                                <Text style={{ width: '3%', fontSize: 13, color: '#000000', fontWeight: '700' }}>:</Text>
                                                <Text style={styles.propertyTitle}>
                                                    {item.location}
                                                </Text>
                                            </View>
                                            <View style={{ width: '100%', margin: '2%' }}>
                                                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '2%', }}>
 <Text style={{ width: '50%', fontSize: 10, color: '#696969' }}>{item.feild4}</Text>
 <Text style={{ width: '50%', fontSize: 10, color: '#000000' }}>{item.UnitNumber}</Text>
 </View> */}
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                    <View style={{ width: '50%', marginBottom: '2%' }}>
                                                        <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild1}</Text>

                                                        <Text style={{ fontSize: 10, color: '#000000' }}>{item.BrokerName}</Text>
                                                    </View>
                                                    <View style={{ width: '50%', marginBottom: '2%' }}>
                                                        <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild2}</Text>

                                                        <Text style={{ fontSize: 10, color: '#000000' }}>{item.ClientName}</Text>
                                                    </View>
                                                </View>

                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                    <View style={{ width: '50%', marginBottom: '2%' }}>
                                                        <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild5}</Text>

                                                        <View style={{ fontSize: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                            <FontAwesome5 name="calendar" size={10} color={'#000'} />
                                                            <Text style={{ fontSize: 10, color: '#000000' }}>{item.RequestDate}</Text>
                                                        </View>

                                                    </View>
                                                    <View style={{ width: '50%', marginBottom: '2%' }}>
                                                        <Text style={{ fontSize: 10, color: '#696969' }}>{item.feild3}</Text>
                                                        <Text style={{ fontSize: 10, color: '#000000' }}>{item.Attendee}</Text>
                                                    </View>


                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                    <Text style={{ fontSize: 10, color: '#696969', width: '50%' }}>{item.feild6}</Text>

                                                    <Text style={{ fontSize: 10, width: '50%', color: colors(item.Status) }}>{item.Status}</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                )

                            }}
                        />
                    </View>

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default RewardBR

const styles = StyleSheet.create({
    mainContainer: {
        padding: '5%'
    },
    headAllign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,


    },
    texthead: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 30,
        color: '#000000'
    },
    notificationIcon: {
        justifyContent: 'center', alignItems: 'center'
    },
    topbtn: {

        fontSize: 12,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '32%'
    },
    tittletext: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 24,
        color: '#000000'
    },
    card: {
        display: 'flex',
        flexDirection: 'row', borderWidth: 0.9, marginBottom: '2%', padding: '2%', borderColor: 'grey', borderRadius: 15, width: width * 0.9
    },
    propertyCard: {
        display: 'flex',
        flexDirection: 'row', borderWidth: 0.9, marginBottom: '2%', padding: '2%', borderColor: 'grey', borderRadius: 15, width: width * 0.9
    },
    propertyInfo: {
        justifyContent: 'space-between', marginHorizontal: '1.5%', marginVertical: '2%', width: width * 0.5,
    },
    propertyName: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexShrink: 2
    },
    propertyTitle: {
        color: 'black', fontSize: 13, fontWeight: '700', flexShrink: 2
    },
    feildName: {
        color: '#696969',
        fontSize: 8,
        fontWeight: '400',
        fontFamily: 'Lato'
    },
    feildhighlighth: {
        color: '#000',
        fontWeight: '500',
        fontSize: 9,
        fontFamily: 'Lato'
    },
    propertyClaim: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '2%'
    },
    propertyDate: {
        fontSize: 12, fontWeight: '700', color: 'black'
    },
    propertyClaimNumber: {
        fontSize: 12, fontWeight: '700', color: 'black'
    },
    cityIcon: {
        margin: '2%',
        alignSelf: 'center',
        width: '5%', fontSize: 10
    },
    listedDate: {
        fontSize: 10,
    },

})
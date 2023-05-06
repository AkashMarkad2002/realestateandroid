import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Modal, Dimensions } from 'react-native'
import React,{ useState} from 'react'
import {styles} from "./ShortListedBR"
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { height, width } = Dimensions.get('window');

const ShortListedCom = ({navigation}) => {
    const [ModalVisibe, setModalVisible] = useState(false);
    const [opacity, setOpacity] = useState(1)
    const [ClaimPopup, setClaimPopup] = useState(false);
    return (
        <View>
            <View style={styles.Cont2}>

                <TouchableOpacity onPress={() => navigation.navigate(ProjectDeatilBr)}>
                    <View >
                        <Image style={styles.BuldingImg} source={require('../../../../Assets/Images/Bulding.png')} />
                        <View style={{ justifyContent: 'space-between', width: '100%', position: 'absolute', height: '100%', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', alignSelf: 'center', width: '100%', height: '80%' }}>
                                <View style={{ flexDirection: 'row', backgroundColor: 'white', margin: 10, padding: 5, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../../Assets/Images/RFA.png')} />
                                    <Text style={{ fontSize: 10, fontWeight: '500', color: 'black' }}>Building India</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 50, margin: 5 }}>
                                        <Ionicons name='call-sharp' size={15} color={'grey'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 50, margin: 5 }}>
                                        <AntDesign name='staro' size={15} color={'grey'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.claimImg} onPress={() => {
                                setClaimPopup(true); setOpacity(0.1); setTimeout(() => {
                                    setClaimPopup(false)
                                    setOpacity(1)
                                }, 3000);
                            }}>
                                <Image source={require('../../../../Assets/Images/ClaimsImg.png')} />
                            </TouchableOpacity>
                            <Modal animationType='slide' transparent={true} visible={ClaimPopup} >

                                <View style={styles.ClaimPopupMessages}>
                                    <View>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Complete your profile</Text>
                                        <TextInput style={styles.profileInput} placeholder='Enter PAN Number' placeholderTextColor={'grey'} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Upload the PAN image</Text>
                                        <TextInput style={styles.profileInput} placeholder=' Enter the UPI ID' placeholderTextColor={'grey'} />
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <Text style={styles.SubmitButton}>SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>

                        </View>
                    </View>
                </TouchableOpacity>


                <View style={{ borderWidth: 1, borderColor: 'grey', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 7 }}>

                    <View style={styles.BuldingInfo}>
                        <Text style={styles.BuldingName}>Experion The Westerlies</Text>
                        <Text style={styles.BuldingId}>RERA No. 52152641</Text>
                    </View>
                    <View style={styles.AddressInfo}>
                        <Text style={styles.Address}>3,4 BHK Residential Apartment</Text>
                        <Text style={styles.Broker}>Brokerage !</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons style={{ marginLeft: '2%' }} name='location' size={13} color={'grey'} />
                        <Text style={styles.Address2}>St. 163, Sector-108 Gurgaon</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <FontAwesome style={styles.RupeeIcon} name='rupee' size={12} color={'black'} />
                            <Text style={styles.Lac}>20 to 70 Lac.</Text>
                            <Text style={styles.possession}>Possession : </Text>
                            <Text style={{ fontSize: 11, color: 'black' }}>Jul 2025</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 10, color: '#E46D17' }}>Under Construction</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10, color: 'grey', marginLeft: '5.5%' }}>Listed date</Text>
                            <FontAwesome style={{ marginLeft: '5%' }} name='calendar-o' size={12} color={'black'} />
                            <Text style={{ fontSize: 12, color: 'black', marginLeft: '2%' }}>12-04-2022</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ borderBottomRightRadius: 20, width: width * 0.35 }}>
                                <Text style={{ backgroundColor: 'black', color: 'white', padding: 7, borderBottomRightRadius: 20, textAlign: 'center' }}>Sales Brochure</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default ShortListedCom
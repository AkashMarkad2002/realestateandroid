import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, ScrollView, Modal, Share } from 'react-native'
import React, { useState,useRef,useEffect } from 'react'
import ProjectDeatilBr from './ProjectDeatilBr';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { parseSync } from '@babel/core';
import { beginEvent } from 'react-native/Libraries/Performance/Systrace';
import BrokerFilter from '../BrokerFilter/BrokerFilter';
import ImagePicker from 'react-native-image-crop-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RBSheet from "react-native-raw-bottom-sheet";


const { height, width } = Dimensions.get('window');

const Homebr = ({ navigation }) => {
    const [ModalVisibe, setModalVisible] = useState(false);
    const [ModalVisibe1, setModalVisible1] = useState(false);
    const [ModalVisibe2, setModalVisible2] = useState(false);
    const [ShModalVisibe, setShModalVisible] = useState(false);
    const [ShModalVisibe1, setShModalVisible1] = useState(false);
    const [InsentiveModalVisibe, setInsentiveModalVisibe] = useState(false);
    const [opacity, setOpacity] = useState(1)
    const [ClaimPopup, setClaimPopup] = useState(false);
    const [UploadImage, setUploadImage] = useState(false)
    const [first, setfirst] = useState("file:///storage/emulated/0/Android/data/com.real_estate_hardik/files/Pictures/f05fcb95-0df0-4673-9785-3b2d95bd8d8c.jpg")
    const [Pancard, setPancard] = useState('');
    const [Pancarderror, setPancarderror] = useState(null);
    const [Upi, setUpi] = useState('');
    const [Upierror, setUpierror] = useState(null);
    const [imageerror, setimageerror] = useState(null);
    const [star, setstar] = useState(true);
    const [star1, setstar1] = useState(true)
    const [ClaimReward, setClaimReward] = useState(false);
    const refRBSheet = useRef();
    const [bg, setbg] = useState('white')

    function clickClaim() {
        setClaimReward(false);
        setOpacity(1)
        
    }

    function Pancardvalidate(text) {
        const panreg = /[A-Z]{5}[0-9]{4}[A-Z]{1}/gm;

        if (text.length == '') {
            setPancarderror('Please enter a valid pancard number');
            return false;
        } else if (!panreg.test(text)) {
            setPancarderror('Please enter a valid pancard number');
            return false;
        } else {
            setPancarderror(null);
            return true;
        }

    }

    function Upivalidation(text) {
        const upireg = /[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}/gm


        if (text.length == '') {
            setUpierror('Please enter a valid UPI number');
            return false;
        } else if (!upireg.test(text)) {
            setUpierror('Please enter a valid UPI number');
            return false;
        } else {
            setUpierror(null);

            return true;
        }
    }

    function imagepickervalidation(image) {
        if (first == "file:///storage/emulated/0/Android/data/com.real_estate_hardik/files/Pictures/f05fcb95-0df0-4673-9785-3b2d95bd8d8c.jpg") {
            setimageerror('Please select pancard image');
            return false;
        } else {
            setimageerror(null);

            return true;
        }

    }




    function Pickerimage() {


        ImagePicker.openPicker({
            width: 150,
            height: 98,
            cropping: true
        }).then(image => {
            console.log(image);
            setUploadImage(image.path[0]);

            setfirst(image.path);
            setimageerror(null);

        });
    }


    function clickClaim() {
        setClaimReward(false);
        setRequest(true);
        setTimeout(() => {
            setRequest(false)
            setOpacity(1)
        }, 3000);
    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
                //    url:'https://api.arya.ai/images/test.pdf'
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (

        <ScrollView style={[styles.Container, { opacity: opacity }]} showsVerticalScrollIndicator={false} >
            <SafeAreaView >

                <View style={styles.HeaderProfile}>
                    <View style={styles.UserPhotoName}>
                        <View>
                            <Image style={styles.ProfileImg} source={require('../../../../Assets/Images/UmaiProfile.png')} />
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.UserName}> Hi Umair !!</Text>
                            <Text style={styles.UserName1}>Welcome To Brokers World</Text>
                        </View>
                    </View>
                    <View style={styles.NotificationAndIncentive}>
                        <TouchableOpacity onPress={() => {
                            setInsentiveModalVisibe(true); setOpacity(0.1);
                        }}>
                            <Image source={require('../../../../Assets/Images/Incentives.png')} style={{ marginHorizontal: 20 }} />
                        </TouchableOpacity>

                        <Modal animationType='slide' transparent={true} visible={InsentiveModalVisibe}  >
                            <View style={styles.IncentivesPopupMessages}>
                                <View style={{ alignSelf: 'flex-end', position: 'absolute', margin: '2%' }}>
                                    <TouchableOpacity onPress={() => {
                                        setInsentiveModalVisibe(false)
                                        setOpacity(1)
                                    }
                                    }><Entypo name="cross" size={20} color={'black'} /></TouchableOpacity>

                                </View>
                                <View style={styles.PopupRewardText}>
                                    <Text style={styles.RewardTextPopup}>REWARD LIST</Text>
                                </View>
                                <View style={styles.PopRewardDescription}>
                                    <Text style={styles.Booking}>Visit Incentives And Booking Incentive</Text>
                                </View>
                                <View style={styles.PopRewardAboutInfo}>
                                    <Text style={styles.PopRewardAbout}>Bonus Commissions for Off-Market Transactions: We understand the value of having the first look at a deal that has not yet hit the market. As such, we will pay you a bonus commission, in addition to any seller  aid commissions, for off-market deals that you present to us.
                                    </Text>
                                    <Text style={styles.PopRewardAbout}>
                                        Equity Participation: If you believe in a deal that  you show us, we would love to have you as a partner. For any deals that you would like to be a part of, we would be glad to give you an opportunity to participate by crediting the full value of all or part of your commission into the deal.
                                    </Text>

                                    <Text style={styles.PopRewardAbout}>
                                        Back-End Listings: Loyalty means a lot to us. So if we purchase a property from you, we give you the opportunity to exclusive list the property for us when we are prepared to sell it.
                                    </Text>
                                </View>
                            </View>
                        </Modal>

                        <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} >

                            <Ionicons name='notifications-outline' size={20} color={'black'} />
                        </TouchableOpacity>

                    </View>
                </View>
                <TouchableOpacity>

                    <View style={styles.SearchBar} >
                        <TouchableOpacity style={styles.search} onPress={() => { navigation.navigate('SearchProjectBR') }}>
                            <TextInput style={styles.searchText} placeholder='Search' placeholderTextColor={'#727578'} maxLength={0} />
                            <TouchableOpacity style={styles.searchIcon} onPress={() => { navigation.navigate('SearchProjectBR') }}
                            >
                                <Ionicons name='search' size={18} color={'grey'} />
                            </TouchableOpacity>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('BrokerFilter') }}>
                            <Image source={require('../../../../Assets/Images/Filter.png')} style={{ resizeMode: 'contain', height: 20, width: 20 }} />

                        </TouchableOpacity>

                        {/* <Modal animationType='slide' transparent={true} visible={ModalVisibe}  > */}
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.LatestProjectText}> Find Latest Projects</Text>
                </View>


                <TouchableOpacity onPress={() => navigation.navigate('ProjectDeatilBr')} >
                    <Image style={styles.BuldingImg} source={require('../../../../Assets/Images/Bulding.png')} />
                    <View style={styles.AboutBuldingImg}>
                        <View style={styles.AboutBuldingIconsAndImg}>

                            <View style={styles.AboutBuldingRFAImg}>
                                <Image source={require('../../../../Assets/Images/RFA.png')} />
                                <Text style={{ fontSize: 10, fontWeight: '500', color: 'black' }}>Building India</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>



                                <TouchableOpacity style={styles.Icons}>
                                    <Ionicons name='ios-location' size={15} color={'grey'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Icons}>
                                    <Ionicons name='call-sharp' size={15} color={'grey'} />
                                </TouchableOpacity>



                                <TouchableOpacity style={styles.Icons} onPress={() => { setstar(!star); setShModalVisible1(true); setOpacity(1); setOpacity(0.1) }}>
                                    {star ? <AntDesign name='staro' size={15} color={'grey'} /> : <AntDesign name='star' size={15} color={'#FFA412'} />}
                                </TouchableOpacity>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={ShModalVisibe1}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <View style={{ padding: 20, backgroundColor: '#000000' }}>

                                            </View>
                                            <View style={{ alignSelf: 'flex-end', marginRight: '4%', marginTop: '-8%' }}>
                                                <TouchableOpacity onPress={() => {
                                                    setShModalVisible1(false);
                                                    setOpacity(1)
                                                }
                                                }>

                                                    <Entypo name="cross" size={20} color={'white'} />
                                                </TouchableOpacity>


                                            </View>

                                            <View style={{ padding: 20,paddingVertical:'20%' }}>

                                                <Text style={styles.modalText}>PROJECT ADDED TO YOUR  </Text>
                                                <Text style={styles.modalText1}>SHORTLIST</Text>

                                            </View>


                                        </View>
                                    </View>
                                </Modal>

                            </View>
                        </View>
                        <TouchableOpacity style={styles.claimImg} onPress={() => {
                            setClaimPopup(true); setOpacity(0.1);

                        }}>
                            <Image source={require('../../../../Assets/Images/ClaimsImg.png')} />
                        </TouchableOpacity>


                        <Modal animationType='slide' transparent={true} visible={ModalVisibe}   >

                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#000000aa' }}>
                                <View style={styles.IncentivesPopupMessages}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                                        <Text style={styles.RewardTextPopup}>REWARD LIST </Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                                        <Text style={styles.Booking}>Visit Incentives And Booking Incentive</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: '5%', width: '90%' }}>
                                        <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', marginBottom: '3%' }}>Bonus Commissions for Off-Market Transactions: We understand the value of having the first look at a deal that has not yet hit the market. As such, we will pay you a bonus commission, in addition to any seller  aid commissions, for off-market deals that you present to us.
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', marginBottom: '3%' }}>
                                            Equity Participation: If you believe in a deal that  you show us, we would love to have you as a partner. For any deals that you would like to be a part of, we would be glad to give you an opportunity to participate by crediting the full value of all or part of your commission into the deal.
                                        </Text>

                                        <Text style={{ color: 'black', fontSize: 10, fontWeight: '400', marginBottom: '3%' }}>
                                            Back-End Listings: Loyalty means a lot to us. So if we purchase a property from you, we give you the opportunity to exclusive list the property for us when we are prepared to sell it.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </Modal>



                    </View>
                </TouchableOpacity>



                <View style={styles.AboutBuldingImgDescription}>

                    <View style={styles.BuldingInfo}>
                        <Text style={styles.BuldingName}>Experion The Westerlies</Text>
                        <Text style={styles.BuldingId}>RERA No. 52152641</Text>
                    </View>
                    <View style={styles.AddressInfo}>
                        <Text style={styles.Address}>3,4 BHK Residential Apartment</Text>
                        <View >
                            <TouchableOpacity style={styles.AboutBuldingDescriptionBrokeges} onPress={() => { setModalVisible1(true); setOpacity(1); setOpacity(0.1); }}>
                                <Text style={styles.Broker}>BROKERAGE</Text>
                                <AntDesign name='infocirlceo' size={12} color={'black'} />
                            </TouchableOpacity>
                            <Modal animationType='slide' transparent={true} visible={ModalVisibe1} >
                                <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: '80%', margin: '10%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}> Brokerage Details </Text>
                                        <View style={{ alignSelf: 'flex-end', marginRight: '4%', marginTop: '-5%' }}>
                                            <TouchableOpacity onPress={() => {
                                                setModalVisible1(false);
                                                setOpacity(1)
                                            }
                                            }>

                                                <Entypo name="cross" size={20} color={'black'} />
                                            </TouchableOpacity>


                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginVertical: 10, marginTop: 10 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Segment
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            STT on Share Trading
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Equity Delivery
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            0.1% on both Buy and Sell
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Equity Intraday
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            0.025% on the Sell Side
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Equity Future
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            0.01% on Sell Side
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', flexShrink: 2, marginBottom: 5 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Equity Options
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            0.017% on Sell Side(on Premium)
                                        </Text>
                                    </View>
                                </View>
                            </Modal>


                        </View>

                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 2 }}>
                        <Ionicons style={{ marginLeft: '1.3%' }} name='location' size={13} color={'grey'} />
                        <Text style={styles.Address2}>St. 163, Sector-108 Gurgaon</Text>
                    </View>
                    <View style={styles.AboutBuldingMoney}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <FontAwesome style={styles.RupeeIcon} name='rupee' size={12} color={'black'} />
                            <Text style={styles.Lac}>20 to 70 Lac.</Text>
                            <Text style={styles.possession}>Possession : </Text>
                            <Text style={{ fontSize: 11, color: 'black' }}>Jul 2025</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 10, color: '#E46D17', marginHorizontal: 5 }}>Under Construction</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <View>
                            <TouchableOpacity style={{ borderBottomRightRadius: 20, width: width * 0.35 }} onPress={() => { refRBSheet.current.open() }}>
                                <Text style={{ backgroundColor: 'black', color: 'white', padding: 7, borderBottomRightRadius: 20, textAlign: 'center', fontWeight: '500' }}>Sales Brochure</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ProjectDeatilBr')}><Image style={styles.BuldingImg} source={require('../../../../Assets/Images/Bulding.png')} /></TouchableOpacity>

                    <View style={styles.AboutBuldingImg}>
                        <View style={styles.AboutBuldingIconsAndImg}>

                            <View style={styles.AboutBuldingRFAImg}>
                                <Image source={require('../../../../Assets/Images/RFA.png')} />
                                <Text style={{ fontSize: 10, fontWeight: '500', color: 'black' }}>Building India</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.Icons}>
                                    <Ionicons name='ios-location' size={15} color={'grey'} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.Icons}>
                                    <Ionicons name='call-sharp' size={15} color={'grey'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Icons} onPress={() => { setstar1(!star1); setShModalVisible(true); setOpacity(1); setOpacity(0.1) }}>
                                    {star1 ? <AntDesign name='staro' size={15} color={'grey'} /> : <AntDesign name='star' size={15} color={'#FFA412'} />}
                                </TouchableOpacity>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={ShModalVisibe}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <View style={{ padding: 20, backgroundColor: '#000000' }}>

                                            </View>
                                            <View style={{ alignSelf: 'flex-end', marginRight: '4%', marginTop: '-8%' }}>
                                                <TouchableOpacity onPress={() => {
                                                    setShModalVisible(false);
                                                    setOpacity(1)
                                                }
                                                }>

                                                    <Entypo name="cross" size={20} color={'white'} />
                                                </TouchableOpacity>


                                            </View>

                                            <View style={{ padding: 20,paddingVertical:'20%' }}>

                                                <Text style={styles.modalText}>PROJECT ADDED TO YOUR  </Text>
                                                <Text style={styles.modalText1}>SHORTLIST</Text>

                                            </View>


                                        </View>
                                    </View>
                                </Modal>
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
                        <Modal transparent={true} visible={ClaimPopup} >

                        

                            <View style={styles.ClaimPopupMessages}>
                                <View style={{ alignSelf: 'flex-end' }}>
                                    <TouchableOpacity onPress={() => {
                                        setClaimPopup(false)
                                        setOpacity(1)
                                    }
                                    }><Entypo name="cross" size={20} color={'black'} /></TouchableOpacity>

                                </View>
                                <View>

                                    <Text style={styles.ClaimImgInputTextPopMessages}>Complete your profile</Text>
                                    <TextInput style={styles.profileInput} value={Pancard} placeholder='Enter PAN Number' placeholderTextColor={'grey'} autoCapitalize="characters" maxLength={10} onChangeText={(text) => { Pancardvalidate(text); setPancard(text) }} />

                                </View>
                                <Text style={{ color: 'red' }} >{Pancarderror}</Text>
                                <View >
                                    <Text style={styles.ClaimImgInputTextPopMessages}>Upload the PAN image</Text>
                                    <TouchableOpacity style={{ width: '50%', height: "50%", alignSelf: 'center' }} onPress={() => { Pickerimage(); setUploadImage(false) }} >

                                        <Image source={UploadImage ? { uri: first } : require('../../../../Assets/Images/Picker.png')} style={{ alignSelf: 'center', resizeMode: 'contain', width: '100%', height: '100%' }} />
                                        {/* <Image source={{uri:first}} style={{height:100, width:100}} /> */}
                                    </TouchableOpacity>
                                    {imageerror && <Text style={{ color: 'red' }} >{imageerror}</Text>}
                                    <TextInput style={styles.profileInput} placeholder=' Enter the UPI ID' placeholderTextColor={'grey'} value={Upi} onChangeText={(text) => { Upivalidation(text); setUpi(text); }} />
                                    <Text style={{ color: 'red' }} >{Upierror}</Text>
                                </View>
                                <View >
                                    <TouchableOpacity onPress={() => {
                                        if (Pancardvalidate(Pancard) && Upivalidation(Upi) && imagepickervalidation(first)) {

                                            setClaimPopup(false)
                                            // setOpacity(1)
                                            setClaimReward(true)
                                        } else {
                                            Upivalidation(Upi);
                                            imagepickervalidation(first)
                                            return false;
                                        }
                                    }}>
                                        <Text style={styles.SubmitButton}>SUBMIT</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Modal>
                    </View>
                </View>
                <Modal animationType='slide' transparent={true} visible={ClaimReward}>
                                                            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: '30%', margin: '10%' }} >
                                                                {/* <Text style={{ fontSize: 18, color: 'black', marginBottom: 7, fontWeight: '500' }}>Claim Your Reward</Text> */}
                                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}> Claim Your Reward</Text>
                                                                    <View style={{ alignSelf: 'flex-end', marginRight: '4%', marginTop: '-5%' }}>
                                                                        <TouchableOpacity onPress={() => {
                                                                            setClaimReward(false);
                                                                            setOpacity(1)
                                                                        }
                                                                        }><Entypo name="cross" size={30} color={'black'} /></TouchableOpacity>

                                                                    </View>
                                                                </View>
                                                                <View style={{ margin: 10 }}>

                                                                    <View >
                                                                        <Text style={styles.ClaimPopProperties}>Project Name</Text>
                                                                        <TextInput style={styles.CliamImgInputText} placeholder='Experion the westerlies' placeholderTextColor={'grey'} color={'black'} />
                                                                    </View>

                                                                    <View >
                                                                        <Text style={styles.ClaimPopProperties}>Developer Name</Text>
                                                                        <TextInput style={styles.CliamImgInputText} placeholder='Arivind Tyagi' placeholderTextColor={'grey'} color={'black'} />
                                                                    </View>

                                                                    <View >
                                                                        <Text style={styles.ClaimPopProperties}>Client Name</Text>
                                                                        <TextInput style={styles.CliamImgInputText} placeholder='Enter the Client Name' placeholderTextColor={'grey'} color={'black'} />
                                                                    </View>

                                                                    <View >
                                                                        <Text style={styles.ClaimPopProperties}>Attendee Name</Text>
                                                                        <TextInput style={styles.CliamImgInputText} placeholder='Pramod' placeholderTextColor={'grey'} color={'black'} />
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, textAlign: 'justify', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Text style={{ color: '#FD0000', fontSize: 10, textAlign: 'justify' }}>Disclaimer :</Text>
                                                                        <Text style={{ fontSize: 8, color: 'black', textAlign: 'justify' }}>Any bogus claim can lead to getting blocked on the platform.</Text>
                                                                    </View>
                                                                </View>
                                                                <View>
                                                                    <TouchableOpacity style={{ padding: 10, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius: 40 }}
                                                                        onPress={() => {
                                                                            clickClaim()
                                                                        }}>
                                                                        <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', padding: 5 }}>Claim Reward</Text>
                                                                    </TouchableOpacity>

                                                                </View>
                                                            </View>

                                                        </Modal>


                <View style={styles.AboutBuldingImgDescription}  >

                    <View style={styles.BuldingInfo}>
                        <Text style={styles.BuldingName}>Experion The Westerlies</Text>
                        <Text style={styles.BuldingId}>RERA No. 52152641</Text>
                    </View>
                    <View style={styles.AddressInfo}>
                        <Text style={styles.Address}>3,4 BHK Residential Apartment</Text>
                        <View >
                            <TouchableOpacity style={styles.AboutBuldingDescriptionBrokeges} onPress={() => { setModalVisible2(true); setOpacity(1); setOpacity(0.1) }}>
                                <Text style={styles.Broker}>BROKERAGE</Text>
                                <AntDesign name='infocirlceo' size={12} color={'black'} />
                            </TouchableOpacity>
                            <Modal animationType='slide' transparent={true} visible={ModalVisibe2} >
                                <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: '80%', margin: '10%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '800' }}> Brokerage Details</Text>
                                        <View style={{ alignSelf: 'flex-end', marginRight: '4%', marginTop: '-5%' }}>
                                            <TouchableOpacity onPress={() => {
                                                setModalVisible2(false);
                                                setOpacity(1)
                                            }
                                            }>

                                                <Entypo name="cross" size={20} color={'black'} />
                                            </TouchableOpacity>



                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginVertical: 10, marginTop: 10 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Segment
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            STT on Share Trading
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Equity Delivery
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            0.1% on both Buy and Sell
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Equity Intraday
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            0.025% on the Sell Side
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Equity Future
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            0.01% on Sell Side
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', flexShrink: 2, marginBottom: 5 }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', width: '37%' }}>
                                            Equity Options
                                        </Text>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', flexShrink: 2, flexWrap: 'wrap' }}>
                                            0.017% on Sell Side(on Premium)
                                        </Text>
                                    </View>
                                </View>
                            </Modal>


                        </View>

                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 2 }}>
                        <Ionicons style={{ marginLeft: '1.3%' }} name='location' size={13} color={'grey'} />
                        <Text style={styles.Address2}>St. 163, Sector-108 Gurgaon</Text>
                    </View>
                    <View style={styles.AboutBuldingMoney}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <FontAwesome style={styles.RupeeIcon} name='rupee' size={12} color={'black'} />
                            <Text style={styles.Lac}>20 to 70 Lac.</Text>
                            <Text style={styles.possession}>Possession : </Text>
                            <Text style={{ fontSize: 11, color: 'black' }}>Jul 2025</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 10, color: '#E46D17', marginHorizontal: 5 }}>Under Construction</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <View>
                            <TouchableOpacity style={{ borderBottomRightRadius: 20, width: width * 0.35 }} onPress={() => { refRBSheet.current.open() }}>
                                <Text style={{ backgroundColor: 'black', color: 'white', padding: 7, borderBottomRightRadius: 20, textAlign: 'center', fontWeight: '500' }}>Sales Brochure</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>


                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10, marginRight: 5 }} >

                    <Modal animationType='slide' transparent={true} visible={ClaimReward}>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: '30%', margin: '10%' }} >
                            {/* <Text style={{ fontSize: 18, color: 'black', marginBottom: 7, fontWeight: '500' }}>Claim Your Reward</Text> */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}> Claim Your Reward</Text>
                                <View style={{ alignSelf: 'flex-end', marginRight: '4%', marginTop: '-5%' }}>
                                    <TouchableOpacity onPress={() => {
                                        setClaimReward(false);
                                        setOpacity(1)
                                    }
                                    }><Entypo name="cross" size={30} color={'black'} /></TouchableOpacity>

                                </View>
                            </View>
                            <View style={{ margin: 10 }}>

                                <View >
                                    <Text style={styles.ClaimPopProperties}>Project Name</Text>
                                    <TextInput style={styles.CliamImgInputText} placeholder='Experion the westerlies' placeholderTextColor={'grey'} color={'black'} />
                                </View>

                                <View >
                                    <Text style={styles.ClaimPopProperties}>Developer Name</Text>
                                    <TextInput style={styles.CliamImgInputText} placeholder='Arivind Tyagi' placeholderTextColor={'grey'} color={'black'} />
                                </View>

                                <View >
                                    <Text style={styles.ClaimPopProperties}>Client Name</Text>
                                    <TextInput style={styles.CliamImgInputText} placeholder='Enter the Client Name' placeholderTextColor={'grey'} color={'black'} />
                                </View>

                                <View >
                                    <Text style={styles.ClaimPopProperties}>Attendee Name</Text>
                                    <TextInput style={styles.CliamImgInputText} placeholder='Pramod' placeholderTextColor={'grey'} color={'black'} />
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, textAlign: 'justify', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#FD0000', fontSize: 10, textAlign: 'justify' }}>Disclaimer :</Text>
                                    <Text style={{ fontSize: 8, color: 'black', textAlign: 'justify' }}>Any bogus claim can lead to getting blocked on the platform.</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={{ padding: 10, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius: 40 }}
                                    onPress={() => {
                                        clickClaim()
                                    }}>
                                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', padding: 5 }}>Claim Reward</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </Modal>
                </View>
                <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "transparent"
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}
                    >
                        <>
                            <View style={{ margin: 10, width: 100 }}>
                                <Image source={require('../../../../Assets/Images/newbuildimg.png')} style={{ width: 100, height: 100, resizeMode: 'cover', overflow: 'hidden', borderRadius: 10 }} />
                                <TouchableOpacity style={{ borderRadius: 20, borderWidth: 1, borderColor: '#000', position: 'absolute', alignSelf: 'flex-end', right: 5, top: 5, backgroundColor: 'white', padding: 2 }} onPress={() => {
                                    if (bg == 'white') {
                                        setbg('black')
                                    } else {
                                        setbg('white')
                                    }
                                }}>
                                    <View style={{ backgroundColor: bg, padding: 8, borderRadius: 20, }}></View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => { if (bg == 'black') { onShare(); } }}>
                                <Text style={{ color: '#fff', backgroundColor: '#000', padding: 10, fontSize: 20, fontWeight: '700', margin: 10, borderRadius: 40, textAlign: 'center', paddingVertical: 15 }}>DOWNLOAD</Text>
                            </TouchableOpacity>

                        </>

                    </RBSheet>




            </SafeAreaView>
        </ScrollView >
    )
}

export default Homebr

const styles = StyleSheet.create({
    Container: {
        flex: Platform.OS === 'ios' ? null : 1,
        marginHorizontal: '5%', marginVertical: Platform.OS === 'ios' ? null : "5%"
    },
    UserPhotoName: {
        flexDirection: 'row', alignItems: 'center', width: '50%'
    },
    HeaderProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3%'
    },
    NotificationAndIncentive: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    ProfileImg: {
        borderRadius: 20
    },
    userInfo: {
        marginRight: '10%', marginHorizontal: 5
    },
    UserName: {
        color: 'black', fontSize: 16, fontWeight: '700'
    },
    UserName1: {
        color: '#1E1E1E',
        fontSize: 12, fontWeight: '400'
    },
    SearchBar: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4%',
    },
    search: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 0.5, borderColor: 'grey', borderRadius: 25, width: width * 0.82, paddingVertical: Platform.OS === 'ios' ? '2.3%' : '0.0001%'
    },
    searchText: {
        marginLeft: '4%', fontSize: 10, color: 'black', width: '87%'
    },
    searchIcon: {
        marginRight: 15
    },
    LatestProjectText: {
        fontSize: 20, color: 'black', fontWeight: '700', marginBottom: 15
    },
    BuldingImg: {
        width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20
    },
    BuldingInfo: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 2
    },
    AddressInfo: {
        flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2
    },
    BuldingName: {
        color: 'black', fontSize: 18, marginLeft: '1.8%', fontWeight: '700'
    },
    BuldingId: {
        fontSize: 10, color: 'black', fontWeight: '700', fontFamily: 'Lato-Regular', marginHorizontal: 5
    },
    DFA: {
        position: 'absolute', width: '9%', height: '1.2%', marginLeft: '5.6%', marginTop: '5%'
    },
    blankimg: {
        position: 'absolute', margin: '2.4%', borderRadius: 20
    },
    buldingIndia: {
        // position: 'absolute',
        color: 'black', position: 'absolute', fontSize: 10, marginLeft: '21%', marginTop: '6%', fontWeight: '700'
    },
    modalText: {
        marginBottom: 10,
        fontSize: 24,
        textAlign: "center",
        color: '#000',
        fontWeight: '800',
        fontStyle: 'italic'
    },
    modalText1: {

        fontSize: 22,
        textAlign: "center",
        color: '#000',
        fontWeight: '800',
        fontFamily: 'Lato-Regular',
        fontStyle: 'italic'
    },
    Address: {
        fontSize: 10, color: '#1E1E1E', marginLeft: '1.8%'
    },
    Broker: {
        fontSize: 10, color: '#1E1E1E', fontWeight: '600', fontWeight: '900', textShadowColor: '#999999', textShadowColor: '	#E8E8E8',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    Address2: {
        fontSize: 10, color: '#585858'
    },
    Lac: {
        fontSize: 10, color: 'black', marginHorizontal: 5
    },
    possession: {
        color: 'black', fontSize: 10,
    },
    RupeeIcon: {
        marginLeft: '5%'
    },
    IncentivesPopupMessages: {
        backgroundColor: 'white', borderWidth: 1, borderColor: '#FFD463', borderRadius: 8, margin: '5%', paddingVertical: '8%', marginTop: '45%'
    },
    RewardTextPopup: {
        color: '#E00B0B', fontFamily: 'Lato-BoldItalic', fontSize: 28,

    },
    Booking: {
        color: '#E00B0B', fontSize: 14, fontFamily: Platform.OS === 'ios' ? 'Lato-Regular' : 'Lato-Medium'
    },
    claimImg: {

        justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10, marginRight: 5

    },
    ClaimPopupMessages: {
        justifyContent: 'center', alignContent: 'center',
        margin: '10%', backgroundColor: 'white', borderWidth: 1, borderColor: '#FFD463', borderRadius: 8,
        marginVertical: '35%', padding: '5%'
    },
    profileInput: {
        borderWidth: 0.7, borderColor: 'grey', borderRadius: 25, marginHorizontal: '1%', paddingHorizontal: 10, marginTop: '3%',
        paddingVertical: Platform.OS === 'ios' ? 11 : null
    },
    SubmitButton: {
        padding: '5%', backgroundColor: 'black', borderRadius: Platform.OS === 'ios' ? 25 : 40, color: 'white', textAlign: 'center', marginTop: '-20%', overflow: 'hidden',
    },
    PopupRewardText: {
        justifyContent: 'center', alignItems: 'center', marginTop: '5%'
    },
    PopRewardDescription: {
        justifyContent: 'center', alignItems: 'center', marginTop: '2%'
    },
    PopRewardAbout: {
        color: 'black', fontSize: 10, fontWeight: '400', marginBottom: '3%'
    },
    PopRewardAboutInfo: {
        justifyContent: 'center', alignItems: 'center', margin: '5%', width: '90%'
    },
    AboutBuldingImg: {
        justifyContent: 'space-between', width: '100%', position: 'absolute', height: '100%',
    },
    AboutBuldingIconsAndImg: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', alignSelf: 'center', width: '100%', height: '80%'
    },
    AboutBuldingRFAImg: {
        flexDirection: 'row', backgroundColor: 'white', margin: 10, padding: 8, borderRadius: 20, alignItems: 'center'
    },
    Icons: {
        backgroundColor: 'white', padding: 10, borderRadius: 50, margin: 5
    },
    ClaimImgInputTextPopMessages: {
        fontSize: 16, color: 'black', fontWeight: '500', fontSize: 16, color: 'black', fontWeight: '500',
    },
    AboutBuldingImgDescription: {
        borderWidth: 1, borderColor: 'grey', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 7, marginTop: '1%',

    },
    AboutBuldingDescriptionBrokeges: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 5, elevation: 5

    },
    AboutBuldingMoney: {
        flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginBottom: 5
    },
    modalView: {
        marginTop: '50%',
        margin: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    ClaimPopProperties: {
        fontSize: 13, color: 'black', marginBottom: 5, fontWeight: '400'
    },
    ClaimPopPlaceHolder: {
        borderWidth: 1, borderColor: 'grey', borderRadius: 25,
    },
    ShareContactStarIcons: {
        backgroundColor: 'white', padding: 10, borderRadius: 50, margin: 5
    },
    CliamImgInputText: {
        borderWidth: 1, borderColor: 'grey', borderRadius: 25, padding: 10,
    }

})

import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView, TextInput, Modal, Share, Platform, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwosome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RBSheet from "react-native-raw-bottom-sheet";




const { height, width } = Dimensions.get('window');

const ProjectDeatilBr = ({ navigation }) => {
    const [ModalVisibe, setModalVisible] = useState(false);
    const [ModalVisibe1, setModalVisible1] = useState(false);
    const [ClaimReward, setClaimReward] = useState(false);
    const [Request, setRequest] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [star, setstar] = useState(true);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [ClaimPopup, setClaimPopup] = useState(false);
    const [UploadImage, setUploadImage] = useState(false)
    const [first, setfirst] = useState("file:///storage/emulated/0/Android/data/com.real_estate_hardik/files/Pictures/f05fcb95-0df0-4673-9785-3b2d95bd8d8c.jpg")
    const [Pancard, setPancard] = useState('');
    const [Pancarderror, setPancarderror] = useState(null);
    const [Upi, setUpi] = useState('');
    const [Upierror, setUpierror] = useState(null);
    const [imageerror, setimageerror] = useState(null);
    const [Clientname, setClientname] = useState("")
    const [ClientnameError, setClientnameError] = useState(null)
    const [Unitnumber, setUnitnumber] = useState('')
    const [UnitnumberError, setUnitnumberError] = useState(null)
    const [Date, setDate] = useState('')
    const refRBSheet = useRef();
  const [bg,setbg]=useState('white')




    function Clientnamevalidation(text) {
        if (text.length == '') {
            setClientnameError('Please enter a name');
            return false;
        } else {
            setClientnameError(null);
            return true
        }
    }


    function Unitnumbervalidation(text) {
        if (text.length == '') {
            setUnitnumberError('Please enter unit number');
            return false;
        } else {
            setUnitnumberError(null);
            return true
        }
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

    const showDatePicker = () => {
        setDatePickerVisibility(true);
        setOpacity(0.1)
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        setOpacity(1)
    };

    const handleConfirm = date => {
        setDate(date)
        console.warn('A date has been picked: ', date);
        hideDatePicker();
    };

    function clickClaim() {
        setClaimReward(false);
        setRequest(true);
        setTimeout(() => {
            setRequest(false)
            setOpacity(1)
        }, 3000);
    }






    const [showmodal, setshowmodal] = useState(false);
    const datamodal = [
        {
            key: 1,
            img1: require('../../../../Assets/Images/BrProperty.png'),
        },
        {
            key: 2,
            img1: require('../../../../Assets/Images/BrProperty.png'),
        },
        {
            key: 3,
            img1: require('../../../../Assets/Images/BrProperty.png'),
        },
        {
            key: 4,
            img1: require('../../../../Assets/Images/BrProperty.png'),
        },
    ]



    const data = [
        {
            key: 1,
            img: require('../../../../Assets/Images/ProjectBulding.png'),
        },
        {
            key: 2,
            img: require('../../../../Assets/Images/ProjectBulding.png'),
        },
        {
            key: 3,
            img: require('../../../../Assets/Images/ProjectBulding.png'),
        },
        {
            key: 4,
            img: require('../../../../Assets/Images/ProjectBulding.png'),
        },
    ]

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
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

    function offmodel() {
        setRequest(true)
        setTimeout(() => {
            setRequest(false)
            setOpacity(1)

        }, 2000);



    }

    return (
        <SafeAreaView style={[styles.Container, { opacity: opacity }]}>
            <ScrollView>
                <SafeAreaView>


                    <Modal animationType='slide' transparent={true} visible={Request}>
                        <View style={{ marginTop: '50%', margin: Platform.OS === 'ios' ? '1%' : '10%' }}>
                            <View style={{ backgroundColor: 'black', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 10 }}>
                                <Text> </Text>
                            </View>
                            <View style={{ backgroundColor: '#FFFFFF', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 30, justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ color: 'black', fontWeight: '800', fontFamily: 'Lato-Regular', fontSize: 18, textAlign: 'center', paddingVertical: 30, fontStyle: 'italic' }}>YOUR REQUEST WILL BE PROCESSED SHORTY</Text>
                            </View>
                        </View>

                    </Modal>
                    <View>
                        <View style={styles.header}>
                            <AntDesign style={{ margin: 10, }} name="arrowleft" size={30} color={'#000000'} onPress={() => { navigation.goBack() }} />
                            <Text style={{ fontSize: 24, fontWeight: '700', margin: 5, color: 'black' }}>Project Details</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => { setshowmodal(true); setOpacity(0.1) }} >

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
                                                    <TouchableOpacity onPress={() => { setshowmodal(true); setOpacity(0.1) }}   >

                                                        <Image
                                                            source={item.img}
                                                            style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                                        />



                                                    </TouchableOpacity>




                                                    <View style={{ justifyContent: 'space-between', width: '100%', position: 'absolute', height: '100%', }}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', alignSelf: 'center', width: '100%', height: '80%' }}>
                                                            <View style={{ flexDirection: 'row', backgroundColor: 'white', margin: 10, padding: 5, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                                                <Image source={require('../../../../Assets/Images/RFA.png')} />
                                                                <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>Building India</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                                                <TouchableOpacity style={styles.ShareContactStarIcons}>
                                                                    <Ionicons name='ios-location' size={15} color={'grey'} />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={styles.ShareContactStarIcons} onPress={() => { onShare() }}>
                                                                    <FontAwosome5 name='share-alt' size={15} color={'grey'} />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={styles.ShareContactStarIcons}>
                                                                    <Ionicons name='call-sharp' size={15} color={'grey'} />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={styles.ShareContactStarIcons} onPress={() => { setstar(!star) }}>
                                                                    {star ? <AntDesign name='staro' size={15} color={'grey'} /> : <AntDesign name='star' size={15} color={'#FFA412'} />}
                                                                </TouchableOpacity>
                                                            </View>

                                                        </View>
                                                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10, marginRight: 5 }} >
                                                            <TouchableOpacity onPress={() => {
                                                                // setClaimReward(true);
                                                                setClaimPopup(true)
                                                                setOpacity(0.1);
                                                            }} >
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
                                                    </View>
                                                </View>

                                            </View>
                                        );
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View>

                        <Modal animationType='slide' transparent={true} visible={showmodal} style={styles.mod}>

                            <TouchableOpacity onPress={() => {
                                setshowmodal(false)
                                setOpacity(1)
                            }}>
                                <View style={{ marginVertical: '10%', margin: '2.5%' }} >

                                    <Entypo name="cross" size={30} color={'black'} />
                                </View>
                            </TouchableOpacity>
                            <SwiperFlatList
                                showPagination
                                paginationStyle={{
                                    marginBottom: '16%',
                                    justifyContent: 'space-between',
                                }}

                                paginationDefaultColor="#D9D9D9"
                                paginationActiveColor="#1E1E1E"
                                data={datamodal}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ width: width, }}>
                                            <Image source={item.img1} style={styles.im} />
                                        </View>
                                    )
                                }}
                            />
                            </Modal>
                        </View>
                    </View>
                    <Modal animationType='slide' transparent={true} visible={showmodal} style={styles.mod}>

                        <TouchableOpacity onPress={() => {
                            setshowmodal(false)
                            setOpacity(1)
                        }}>
                            <Entypo name="cross" size={30} color={'black'} />
                        </TouchableOpacity>
                        <SwiperFlatList
                            showPagination
                            paginationStyle={{
                                marginBottom: '15%',
                                justifyContent: 'space-between',
                            }}

                            paginationDefaultColor="#D9D9D9"
                            paginationActiveColor="#1E1E1E"
                            data={datamodal}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: width, }}>
                                        <Image source={item.img1} style={styles.im} />
                                    </View>
                                )
                            }}
                        />
                    </Modal>
                    <View style={{ margin: '4%' }}>
                        <View style={styles.BuldingName}>
                            <Text style={styles.wester}>Experion The Westerlies</Text>
                            <Text style={styles.ReraNo}>RERA No. 52152641</Text>
                        </View>
                        <View style={styles.AddressInfo}>
                            <Text style={styles.Address}>3,4 BHK Residential Apartment</Text>
                            <View style={{ alignItems: 'center' }} >
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { setModalVisible1(true); setOpacity(1); setOpacity(0.1) }}>
                                    <Text style={styles.Broker}>BROKERAGE</Text>
                                    <Feather name="info" size={14} style={{ marginHorizontal: '1%' }} />
                                </TouchableOpacity>
                                <Modal animationType='slide' transparent={true} visible={ModalVisibe1} >
                                    <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: '80%', margin: '10%' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontWeight: '800' }}> Brokerage Details</Text>
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
                        <View style={{ flexDirection: "row", marginTop: '1%' }}>
                            <Ionicons name='location' size={13} color={'grey'} style={{ marginLeft: '-1%' }} />
                            <Text style={styles.Address2}>St. 163, Sector-108 Gurgaon</Text>
                        </View>
                        <View style={{ marginTop: '0.5%' }} >

                            <Text style={styles.Address2}>2,200 - 2,764 sq.ft</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: '1%' }}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <FontAwesome style={styles.RupeeIcon} name='rupee' size={12} color={'black'} />
                                <Text style={styles.Lac}>20 to 70 Lac.</Text>
                                <Text style={styles.possession}>Possession : </Text>
                                <Text style={{ fontSize: 11, color: 'black' }}>Jul 2025</Text>
                            </View>

                            <View>
                                <Text style={{ fontSize: 10, color: '#E46D17', marginLeft: '10%', alignSelf: 'flex-end' }}>Under Construction</Text>
                            </View>

                        </View>

                        <View style={styles.Buttons}>
                            <TouchableOpacity style={styles.BookButton} onPress={() => {




                                setModalVisible(true); setOpacity(0.1); setTimeout(() => {
                                    setModalVisible(false)
                                    setOpacity(1)
                                }, 32000);
                            }}
                            >



                                <Text style={styles.book}>Book</Text>
                            </TouchableOpacity>
                            <Modal animationType='slide' transparent={true} visible={ModalVisibe} >
                                <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: '40%', margin: '10%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}> Booking Details</Text>
                                        <View style={{ alignSelf: 'flex-end', marginRight: '4%', marginTop: '-5%' }}>
                                            <TouchableOpacity onPress={() => {
                                                setModalVisible(false);
                                                setOpacity(1)
                                            }
                                            }>

                                                <Entypo name="cross" size={20} color={'black'} />
                                            </TouchableOpacity>


                                        </View>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <View>
                                            <TextInput style={styles.BookPopup} placeholder='Enter client Name' placeholderTextColor={'grey'} maxLength={30}
                                                value={Clientname}
                                                onChangeText={txt => {
                                                    setClientname(txt);
                                                    Clientnamevalidation(txt);
                                                }}
                                            />

                                            {setClientnameError && <Text style={{ color: 'red', marginBottom: '2%', marginTop: '-5%' }}>{ClientnameError}</Text>}
                                        </View>


                                        <View>
                                            <TextInput style={styles.BookPopup}
                                                value={Unitnumber} placeholder='Enter the unit number' placeholderTextColor={'grey'}
                                                keyboardType='numeric'

                                                onChangeText={txt => {
                                                    setUnitnumber(txt);
                                                    Unitnumbervalidation(txt);
                                                }}
                                            />
                                            {setUnitnumberError && <Text style={{ color: 'red', marginBottom: '2%', marginTop: '-5%' }} >{UnitnumberError}</Text>}
                                        </View>
                                        <View style={[styles.BookPopup, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 0, paddingHorizontal: 10, paddingVertical: Platform.OS === 'ios' ? 10 : null }]}>
                                            <TextInput placeholder='Select the booked date' placeholderTextColor={'grey'} value={Date} />
                                            <TouchableOpacity onPress={showDatePicker}>
                                                <Entypo name='calendar' />
                                            </TouchableOpacity>
                                            <DateTimePickerModal
                                                isVisible={isDatePickerVisible}
                                                mode="date"
                                                onConfirm={handleConfirm}
                                                onCancel={hideDatePicker}


                                            />

                                        </View>
                                        <View>
                                            <TouchableOpacity style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', padding: 16, borderRadius: 25, marginVertical: 10 }} onPress={() => {

                                                if (Clientnamevalidation(Clientname) && Unitnumbervalidation(Unitnumber)) {


                                                    setModalVisible(false); setOpacity(1); offmodel(); setOpacity(0.1)
                                                } else {
                                                    Clientnamevalidation(Clientname);
                                                    Unitnumbervalidation(Unitnumber);

                                                }
                                            }}>
                                                <Text style={{ color: 'white', fontWeight: '700' }}>BOOK</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <TouchableOpacity style={styles.BookButton} onPress={() => refRBSheet.current.open()}>
                                <Text style={{ padding: '2%', color: 'white', fontWeight: '600' }}>Sales Brochure</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.About}>About</Text>
                            <Text style={styles.Apartment}>Residential Apartment</Text>

                            <Text style={styles.Discription}>Enjoy a blissful living experience in Hero Homes. This residential
                                project encompasses 2 BHK apartments in Sector-104, Gurgaon and
                                brings you the best of both the worlds - excellent aesthetics and exemplary lifestyle. Its unique highlights include facilities like Video
                                Door Security, Community Hall, Multipurpose Court, Reflexology Park,Bar/Chill-Out Lounge and many others.
                                All of these and the other features make this project a true value for money. And you can now buy your exclusive 2 BHK apartment with a super built-up area of 1099.0 sq. ft. is available at Rs. 87 Lac.</Text>
                        </View>
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProjectDeatilBr;


const styles = StyleSheet.create({
    Container: {

    },
    im: {
        alignSelf: 'center',

        width: width * 0.8,
        height: height * 0.6,
        marginTop: height * 0.1,
        borderRadius: 10,

        marginHorizontal: 8

    },
    mod: {
        marginTop: '40%',

    },
    imgStyle: {
        borderRadius: 10, width: '90%'
    },
    Claims: {
        justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', top: 200, left: 210
    },
    BuldingName: {
        marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    wester: {
        fontSize: 16, fontWeight: '700', fontFamily: 'Lato-Regular', color: 'black'
    },
    ReraNo: {
        fontSize: 10, fontWeight: '700', fontFamily: 'Lato-Regular', color: 'black'
    },
    AddressInfo: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%'
    },
    Address: {
        fontSize: 10, color: '#1E1E1E', fontWeight: '400'
    },
    Broker: {
        fontSize: 14, color: '#1E1E1E', fontWeight: '600', fontWeight: '900', textShadowColor: '#999999', textShadowColor: '	#E8E8E8',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 1,
    },
    Address2: {
        fontSize: 10, color: '#1E1E1E', fontWeight: '400'
    },
    Lac: {
        fontSize: 10, color: 'black', marginHorizontal: 5
    },
    possession: {
        color: 'black', fontSize: 10, marginLeft: '0.5%'
    },
    About: {
        fontSize: 16, fontWeight: '700', marginTop: '4%', color: 'black', fontFamily: 'Lato-Regular'
    },
    Apartment: {
        fontSize: 10, fontWeight: '400', marginTop: '1%', color: '#1E1E1E', fontFamily: 'Lato-Regular'
    },
    Discription: {
        fontSize: 14, fontWeight: '400', marginTop: '4%', color: 'black', textAlign: 'justify', color: '#696969', fontFamily: 'Lato-Regular'
    },
    BookButton: {
        backgroundColor: 'black', padding: '2%', borderRadius: 25, marginBottom: '10%', marginHorizontal: 5
    },
    book: {
        paddingLeft: '10%', paddingRight: '10%', paddingTop: '2%', paddingBottom: '2%', color: 'white', fontWeight: '600', marginHorizontal: 5
    },
    Buttons: {
        flexDirection: 'row', alignItems: 'center', marginTop: '6%', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: 'grey',
    },
    header: {
        flexDirection: 'row', alignItems: 'center'
    },
    BookPopup: {
        borderRadius: 25, borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 15
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
})
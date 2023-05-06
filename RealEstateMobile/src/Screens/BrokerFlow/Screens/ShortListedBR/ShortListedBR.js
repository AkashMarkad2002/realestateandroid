import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';




const { height, width } = Dimensions.get('window');

const Homebr = ({ navigation }) => {
    const [ModalVisibe, setModalVisible] = useState(false);
    const [opacity, setOpacity] = useState(1)
    const [ClaimPopup, setClaimPopup] = useState(false);
    const [UploadImage, setUploadImage] = useState(false)
    const [first, setfirst] = useState("file:///storage/emulated/0/Android/data/com.real_estate_hardik/files/Pictures/f05fcb95-0df0-4673-9785-3b2d95bd8d8c.jpg")
    const [Pancard, setPancard] = useState('');
    const [Pancarderror, setPancarderror] = useState(null);
    const [Upi, setUpi] = useState('');
    const [Upierror, setUpierror] = useState(null);
    const [imageerror, setimageerror] = useState(null);
    const [deletecard, setdeletecard] = useState(true);
    const [deletecard1, setdeletecard1] = useState(true);


    function Pancardvalidate(text) {
        const panreg = /[A-Z]{5}[0-9]{4}[A-Z]{1}/gm;

        if (text.length == '') {
            setPancarderror('Please enter a valid pancard number');
            return false;
        } else if (!panreg.test(text)) {
            setPancarderror('Please enter a valid pancard number');
            return false;
            console.log('all okay')

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
            setimageerror('Please select Pancard image');
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



    function Pickerimage() {


        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setUploadImage(image.path[0]);
            setfirst(image.path)

        });
    }

    return (

        <ScrollView style={[styles.Container, { opacity: opacity }]} showsVerticalScrollIndicator={false}>
            <SafeAreaView>


                <View style={styles.SearchBar}>
                    <Text style={styles.heading} >Shortlisted Projects</Text>


                    <View style={styles.disort} >

                        <Ionicons name='search' size={20} color={'grey'} style={{ marginHorizontal: '4%' }} onPress={() =>{navigation.navigate('SearchProjectBR')}}  />
                        <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} >

                            <Ionicons name='notifications-outline' size={20} color={'black'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('BrokerFilter') }}>
                            <Image source={require('../../../../Assets/Images/Filter.png')} style={{ resizeMode: 'contain', height: 18, width: 18 }} />
                        </TouchableOpacity>
                    </View>
                </View>


                {deletecard && <View>


                    <View >
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
                                    <TouchableOpacity style={styles.Icons} onPress={() => { setdeletecard(!deletecard) }}>
                                        <AntDesign name='star' size={15} color={'#FFA412'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.claimImg} onPress={() => {
                                setClaimPopup(true); setOpacity(0.1);
                            }}>
                                <Image source={require('../../../../Assets/Images/ClaimsImg.png')} />
                            </TouchableOpacity>


                        </View>
                    </View>
                    <View style={styles.AboutBuldingImgDescription}>

                        <View style={styles.BuldingInfo}>
                            <Text style={styles.BuldingName}>Experion The Westerlies</Text>
                            <Text style={styles.BuldingId}>RERA No. 52152641</Text>
                        </View>
                        <View style={styles.AddressInfo}>
                            <Text style={styles.Address}>3,4 BHK Residential Apartment</Text>
                            <View style={styles.AboutBuldingDescriptionBrokeges}>
                                <Text style={styles.Broker}>Brokerage </Text>
                                <AntDesign name='infocirlceo' size={12} color={'black'} />
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
                                <TouchableOpacity style={{ borderBottomRightRadius: 20, width: width * 0.35 }} onPress={() => navigation.navigate('ProjectDeatilBr')}>
                                    <Text style={{ backgroundColor: 'black', color: 'white', padding: 7, borderBottomRightRadius: 20, textAlign: 'center', fontWeight: '500' }}>Sales Brochure</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>}






               { deletecard1 && <View>

                    <View>
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
                                    <TouchableOpacity style={styles.Icons} onPress={() => { setdeletecard1(!deletecard1) }} >
                                        <AntDesign name='star' size={15} color={'#FFA412'} />
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

                            <Modal transparent={true} visible={ClaimPopup} >
                            {/* <Modal
 animationType="slide"
 transparent={true}
 style={{width: '100%', alignSelf: 'center', height: '100%', justifyContent: 'flex-start', backgroundColor:'green'}}
 visible={ClaimPopup}
 > */}


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
                                <View>
                                    <Text style={styles.ClaimImgInputTextPopMessages}>Upload the PAN image</Text>
                                    <TouchableOpacity style={{ marginVertical: '3%', width: '50%', height: "50%", alignSelf: 'center' }} onPress={() => { Pickerimage(); setUploadImage(false) }} >

                                        <Image source={UploadImage ? { uri: first } : require('../../../../Assets/Images/Picker.png')} style={{ alignSelf: 'center', resizeMode: 'contain', width: '100%', height: '100%' }} />
                                        {/* <Image source={{uri:first}} style={{height:100, width:100}} /> */}
                                    </TouchableOpacity>
                                    {imageerror && <Text style={{ color: 'red' }} >{imageerror}</Text>}
                                    <TextInput style={styles.profileInput} placeholder=' Enter the UPI ID' placeholderTextColor={'grey'} value={Upi} onChangeText={(text) => { Upivalidation(text); setUpi(text); }} />
                                    <Text style={{ color: 'red' }} >{Upierror}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        if (Pancardvalidate(Pancard) && Upivalidation(Upi) && imagepickervalidation(first)) {

                                            setClaimPopup(false)
                                            setOpacity(1)
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



                    <View style={styles.AboutBuldingImgDescription}>

                        <View style={styles.BuldingInfo}>
                            <Text style={styles.BuldingName}>Experion The Westerlies</Text>
                            <Text style={styles.BuldingId}>RERA No. 52152641</Text>
                        </View>
                        <View style={styles.AddressInfo}>
                            <Text style={styles.Address}>3,4 BHK Residential Apartment</Text>
                            <View style={styles.AboutBuldingDescriptionBrokeges}>
                                <Text style={styles.Broker}>Brokerage </Text>
                                <AntDesign name='infocirlceo' size={12} color={'black'} />
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
                                <TouchableOpacity style={{ borderBottomRightRadius: 20, width: width * 0.35 }} onPress={() => navigation.navigate('ProjectDeatilBr')}>
                                    <Text style={{ backgroundColor: 'black', color: 'white', padding: 7, borderBottomRightRadius: 20, textAlign: 'center', fontWeight: '500' }}>Sales Brochure</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View> }





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
    disort: {
        flexDirection: 'row', justifyContent: 'space-between',


    },
    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: 'black'


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
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 0.5, borderColor: 'grey', borderRadius: 25, width: width * 0.82,
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
        fontSize: 10, color: 'black', fontWeight: '700', fontFamily: 'Lato', marginHorizontal: 5
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
    Address: {
        fontSize: 10, color: '#1E1E1E', marginLeft: '1.8%'
    },
    Broker: {
        fontSize: 10, color: '#1E1E1E', fontWeight: '600'
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
        backgroundColor: 'white', borderWidth: 1, borderColor: '#FFD463', borderRadius: 8, marginTop: 150
    },
    RewardTextPopup: {
        color: '#E00B0B', fontStyle: 'italic', fontWeight: '800', fontSize: 24,
    },
    Booking: {
        color: '#E00B0B', fontSize: 14,
    },
    claimImg: {

        justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10, marginRight: 5

    },
    ClaimPopupMessages: {
        margin: '5%', backgroundColor: 'white', borderWidth: 1, borderColor: '#FFD463', borderRadius: 8, marginTop:'10%', padding: '5%'
    },
    profileInput: {
        borderWidth: 0.7, borderColor: 'grey', borderRadius: 25, marginHorizontal: '1%', paddingHorizontal: 10, marginTop: '2%',
        paddingVertical: Platform.OS === 'ios' ? '3.3%' : null,
    },
    SubmitButton: {
        padding: '5%', backgroundColor: 'black', borderRadius: Platform.OS === 'ios' ? 25 : 40, color: 'white', textAlign: 'center', marginTop: '-8%',
        overflow: Platform.OS === 'ios' ? 'hidden' : null,
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
        fontSize: 16, color: 'black', fontWeight: '500', fontSize: 16, color: 'black', fontWeight: '500', marginTop: '1%'
    },
    AboutBuldingImgDescription: {
        borderWidth: 1, borderColor: 'grey', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 7,overflow:'hidden'
    },
    AboutBuldingDescriptionBrokeges: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 5
    },
    AboutBuldingMoney: {
        flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginBottom: 5
    }

})

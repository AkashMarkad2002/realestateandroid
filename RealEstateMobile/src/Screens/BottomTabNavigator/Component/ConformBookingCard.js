import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ioniconns from 'react-native-vector-icons/Ionicons';
import FontAwosome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RadioButtonRN from 'radio-buttons-react-native';

const { height, width } = Dimensions.get('window');

const ConformBookingCard = () => {
  const [page, setPage] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [rejectmodalVisible, setRejectModalVisible] = useState(false);
  
  const data = [
    {
        label: 'Client Not Visited'
    },
    {
        label: 'Fake Client  Visit'
    },
    {
        label: 'Repetivie Client  Visit'
    }
];

  return (
    <View
      style={styles.propertyCard}>
      <View style={{width: width * 0.35, margin:1, paddingHorizontal:'1.5%'}}>
        <Image
          source={require('../../../Assets/Images/newbuildimg.png')}
          style={{ width: width * 0.36, borderRadius: 10,position:'absolute',height:'100%'}}
        />
      </View>
      <View style={styles.propertyInfo}>
        <View style={styles.propertyName}>
          <FontAwosome5
            style={styles.cityIcon}
            name="city"
            size={15}
            color={'black'}
          />
          <Text style={{ width: '3%', fontSize: 13, color: '#000000', fontWeight: '700', marginHorizontal:'2%', fontFamily:'Lato-Regular' }}>:</Text>
          <Text style={styles.propertyTitle}>Experion The Westerlies</Text>
        </View>
        <View style={styles.propertyName}>
          <Ioniconns
            style={styles.cityIcon}
            name="location"
            size={15}
            color={'black'}
          />
          <Text style={{ width: '3%', fontSize: 13, color: '#000000', fontWeight: '700', marginHorizontal:'2%' }}>:</Text>
          <Text style={styles.propertyTitle1}>
            St. 163, Sector-108 Gurgaon
          </Text>
        </View>
        <View style={{ width: '100%', margin: '2%' }}>
          <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', marginBottom: '2%' }}>

            <Text style={{ width: '46%', fontSize: 10,color:'#696969' }}>Broker Name</Text>
            <Text style={{ width: '8%', fontSize: 10, color: '#000000' ,textAlign:'center' }}>:</Text>
            <Text style={{ width: '46%', fontSize: 10, color: '#000000' }}>Rajan Pathak</Text>

          </View>
          <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', marginBottom: '2%' }}>
            <Text style={{ width: '46%', fontSize: 10,color:'#696969' }}>Client Name</Text>
            <Text style={{ width: '8%', fontSize: 10, color: '#000000' ,textAlign:'center' }}>:</Text>
            <Text style={{ width: '46%', fontSize: 10, color: '#000000' }}>Abhinav</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', marginBottom: '2%' }}>
            <Text style={{ width: '46%', fontSize: 10,color:'#696969' }}>Attendee</Text>
            <Text style={{ width: '8%', fontSize: 10, color: '#000000' ,textAlign:'center' }}>:</Text>
            <Text style={{ width: '46%', fontSize: 10, color: '#000000' }}>Umair</Text>
          </View>

          <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', marginBottom: '2%' }}>

            <Text style={{ width: '45%', fontSize: 10,color:'#696969' }}>Unit Number</Text>
            <Text style={{ width: '8%', fontSize: 10, color: '#000000', marginLeft: '4.5%' }}>:</Text>
            <Text style={{ width: '20%', fontSize: 10, color: '#000000', marginLeft: '-4%' }}>12A</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', marginBottom: '2%' }}>

            <Text style={{ width: '45%', fontSize: 10,color:'#696969' }}>Status</Text>
            <Text style={{ width: '10%', fontSize: 10, color: '#000000',marginLeft: '4.5%' }}>:</Text>
            <Text style={{ width: '40%', fontSize: 10, color: '#2DE200',marginLeft: '-4.5%' }}>Booked</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', marginBottom: '2%' }}>
            <Text style={{ width: '45%', fontSize: 10,color:'#696969' }}>Booked Date</Text>

            <Text style={{ width: '10%', fontSize: 10, color: '#000000',marginLeft: '4.5%' }}>:</Text>
            <View style={{ width: '45%', fontSize: 10, flexDirection: 'row' }}>

              <FontAwesome5 name="calendar" size={10} color={'#000'} style={{marginLeft: '-7%'}} />
              <Text style={{ fontSize: 10, color: '#000000',marginLeft: '3%' }}>12-04-2020</Text>
            </View>

          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'flex-end', alignItems:'flex-end'}}>
          <TouchableOpacity onPress={() => {
            setModalVisible(true)
            setTimeout(() => {
              setModalVisible(false)
            }, 3000);
          }
          }>
            <Text style={{ fontSize: 13, fontWeight: '500', padding: '5%', backgroundColor: '#000000', color: '#FFFFFF', textAlign: 'center', alignSelf: 'center', paddingHorizontal: '15%', borderBottomRightRadius:21 }}>CONFIRM</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => {
            setRejectModalVisible(true)
          }}>
            <Text style={{ fontSize: 12, fontWeight: '500', padding: '4%', backgroundColor: '#FF3D3D', color: '#FFFFFF', marginHorizontal: '2%', borderRadius: 100, textAlign: 'center', alignSelf: 'center', paddingHorizontal: '8%' }}>Decline</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ backgroundColor: '#000', padding: 20 }}>
            </View>
            <View style={{ alignItems: 'center', padding: 35 }}>
              <Text style={styles.modalText}>THANKS FOR YOUR</Text>
              <Text style={styles.modalText1}>CONFIRMATION!!</Text>
            </View>

          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={rejectmodalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ backgroundColor: '#000', padding: 20, justifyContent: 'center' }}>
            </View>
            <View style={{ padding: 20, justifyContent: 'center' }}>
              <View>
                <Text style={[styles.modalText,{fontSize:14}]}>PLEASE SELECT THE PARTICULAR ACTION</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <RadioButtonRN
                  data={data}
                  selectedBtn={(e) => console.log(e)}
                  box={false}
                  circleSize={5}
                  activeColor={'#000'}
                  deactiveColor={'#000'}
                />
              </View>

              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, backgroundColor: '#000', width: 100, padding: 7, alignSelf: 'center', borderRadius: 100 }} onPress={() => setRejectModalVisible(false)}>
                <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500' }}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ConformBookingCard;

const styles = StyleSheet.create({
  propertyCard: {
    display: 'flex',
    flexDirection: 'row', borderWidth: 0.9, marginBottom: '2%', paddingLeft: '2%', borderColor: 'grey', borderRadius: 20, width: width * 0.9,overflow:'hidden'
  },
  propertyInfo: {
    justifyContent: 'space-between', paddingTop: '2%', width: width * 0.5,  marginLeft:'3%'
  },
  propertyName: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexShrink: 2 ,marginBottom:'2.5%'
  },
  propertyTitle: {
    color: 'black', fontSize: 12, fontWeight: '700', flexShrink: 2,fontFamily:'Lato-Regular'
  },
  propertyTitle1: {
    color: 'black', fontSize: 11, fontWeight: '700', flexShrink: 2,fontFamily:'Lato-Regular'
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
  listedClaims: {
    fontSize: 10
  },
  modalView: {
    marginTop: '50%',
    margin: '10%',
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 10,
    fontSize: 24,
    textAlign: "center",
    color: '#000',
    fontWeight:'800',
    fontStyle:'italic'
  },
  modalText1: {
    marginBottom: 15,
    fontSize: 22,
    textAlign: "center",
    color: '#000',
    fontWeight:'700',
    fontStyle:'italic'
  }
})
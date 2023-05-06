import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, Modal, Pressable, SafeAreaView, Platform } from 'react-native'
import React, { useState } from 'react'
import Myacccomp from './Myacccomp';
import AntDesign from 'react-native-vector-icons/AntDesign';





const arr = 
Platform.OS === 'ios' ?
[
  {
    key: 1,
    title: 'Edit Profile',
    screen: 'EditProfile',

    img: require('../../Assets/Images/eprof.png'),

  },
  {
    key: 2,
    title: 'Change Password',
    screen: 'ChangePassword',

    img: require('../../Assets/Images/chpass.png'),

  },
  {
    key: 3,
    title: 'Help',
    img: require('../../Assets/Images/Help.png'),
    screen: 'Helpm',



  },
  {
    key: 4,
    title: 'Logout',
    action: 'Logout',
    screen: null,

    img: require('../../Assets/Images/Log.png'),

  },
  
  {
    key: 5 ,
    title: 'Delete Account' ,
    action:   'Deactivate',
    screen: null,

    img: require('../../Assets/delete.png') ,

  },
] : [
  {
    key: 1,
    title: 'Edit Profile',
    screen: 'EditProfile',

    img: require('../../Assets/Images/eprof.png'),

  },
  {
    key: 2,
    title: 'Change Password',
    screen: 'ChangePassword',

    img: require('../../Assets/Images/chpass.png'),

  },
  {
    key: 3,
    title: 'Help',
    img: require('../../Assets/Images/Help.png'),
    screen: 'Helpm',



  },
  {
    key: 4,
    title: 'Logout',
    action: 'Logout',
    screen: null,

    img: require('../../Assets/Images/Log.png'),

  }, 

]


const Myaccount = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);


  let operation = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 8000);

  };

  const route = () => {
    setModalVisible(false);
  }
  const routeyes = () => {
    setModalVisible(false);
    navigation.navigate('SelectRole')

  }
  //deactivate acccount
  const [modalVisible1, setModalVisible2] = useState(false);


  let operation1 = () => {
    setModalVisible2(true);
    setTimeout(() => {
      setModalVisible2(false);
    }, 8000);

  };

  const route1 = () => {
    setModalVisible2(false);
  }
  const routeyes1 = () => {
    setModalVisible2(false);
    navigation.navigate('Login')

  }



  return (
    <SafeAreaView style={{backgroundColor: Platform.OS==='ios'?'#FFFFFF':null}}>
      <>
        <View style={styles.container}>
          <View style={styles.contpre}>
            {/* Heading My account and bell icon*/}
            <View style={styles.cont1}>
              <Text style={styles.Heading}>My Account</Text>

            </View>
            {/*Heading My account and bell icon */}

            {/*Profile section */}

            <View style={styles.Profsec}>
              <TouchableOpacity>
                <Image source={require('../../Assets/Images/prof.png')} />
              </TouchableOpacity>
              <View style={styles.viewname}>
                <Text style={styles.name}>Arvind Tyagi</Text>
                <Text style={styles.phnum}>+91 9936595085</Text>
              </View>
              <TouchableOpacity style={styles.veri}>
                <Text style={styles.vtext}>Verified</Text>
              </TouchableOpacity>

            </View>

            {/*Profile section */}
            <View style={styles.cn}>
              {/* <Myaccdata
            Pressed={() => {
              navigation.navigate('Helpm');
            }}
          />*/}
              <View style={styles.cot}>
                <FlatList
                  data={arr}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <View style={styles.line1}></View>
                        <Myacccomp
                          key={item.key}
                          Tit={item.title}
                          Img={item.img}
                          Icon={item.icon}
                          Press={() => {
                            if (item.action == 'Logout') {

                              operation(item.action)

                            }
                            else if (item.action == 'Deactivate') {
                              operation1(item.action)
                            }

                            else {

                              navigation.navigate(item.screen);
                            }
                          }}
                        />
                        <View style={styles.line1}></View>


                      </View>
                    );
                  }}
                />

              </View>
            </View>
          </View>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView1}>
              <View style={styles.modalViewDEC}>
                <Text style={styles.modalText}>Logout</Text>
                <Text style={styles.modalText1}>
                  Are You Sure, You Want To Logout ?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity style={styles.yesbtn}
                    onPress={() => routeyes()}
                  >
                    <Text style={{ padding: 10, color: 'white', fontFamily: 'Lato-Regular' }}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Nobtn}

                    onPress={() => route()}
                  >
                    <Text style={{ padding: 10, color: '#000000', fontFamily: 'Lato-Regular' }}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}>
            <View style={styles.centeredView1}>
              <View style={styles.modalViewDEC}>
                <Text style={styles.modalTextDEC}>DELETE YOUR ACCOUNT</Text>
                <Text style={styles.modalText1}>
                  Are you sure, you want to delete your account ?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity style={styles.yesbtn}
                    onPress={() => routeyes1()}
                  >
                    <Text style={{ padding: 10, color: 'white', fontFamily: 'Lato-Regular' }}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Nobtn}

                    onPress={() => route1()}
                  >
                    <Text style={{ padding: 10, color: '#000000', fontFamily: 'Lato-Regular' }}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

        </View>
      </>
    </SafeAreaView>
  );
}

export default Myaccount



const styles = StyleSheet.create({
  line1: {
    //   marginTop:'10%',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  cn: {
    marginTop: '8%',
  },
  //Profile section
  Profsec: {
    marginTop: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewname: {
    alignSelf: 'center',
    marginRight: '12%',
  },
  name: {
    color: '#000000',
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
  phnum: {
    color: '#696969',
    fontSize: 12,
  },
  veri: {
    backgroundColor: '#2DC115',
    alignSelf: 'center',
    padding: '1%',
    paddingHorizontal: '3%',
    marginBottom: '2%',
  },
  vtext: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    // margin:'1%'
  },
  /************************************/

  //Heading My account and bell icon styling
  cont1: {
    margin: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Heading: {
    color: '#111111',
    fontFamily: 'Lato-Regular',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24
  },
  bell: {
    marginTop: '1%',
  },

  /************************************/

  //  whole container
  container: {
    backgroundColor: '#ffffff',

    height: Platform.OS === 'ios' ? '100%' : '100%',
  },
  contpre: {
    margin: '5%',
  },
  Nobtn: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    backgroundColor: '#ABABAB',
    width: '44%',
  },
  yesbtn: {
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'black',
    width: '44%',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    // marginTop:'50%',
    alignSelf: 'center'
  },
  // centeredView1: {
  //    marginTop:'50%',
  // alignSelf:'center'
  // },
  centeredView1: {
    // marginTop:'50%',
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center'

  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  modalViewDEC: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    // paddingTop:48,
    padding: 30,


    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: '10%',
    color: '#000',
  },
  modalTextDEC: {
    marginBottom: 15,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    width: '100%',
    marginTop: '4%',
    marginBottom: '10%',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#000',
  },
  modalText1: {
    marginBottom: 15,
    fontSize: 14,
    textAlign: 'center',
    color: '#727578',
  },
});

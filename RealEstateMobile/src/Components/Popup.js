import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const Popup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      > 
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{padding:20,backgroundColor:'#000000'}}>

            </View>
            <View style={{padding:20}}>
            <Text style={styles.modalText}>THANK FOR JOINING WITH US</Text>
            <Text style={styles.modalText1}>Account verification under process. Connect with you shortly !!</Text>
            </View>
           
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
            setModalVisible(true)
            setTimeout(() => {
            setModalVisible(false)
        }, 3000);}
        }
            
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    
    marginTop: 22
  },
  modalView: {
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
    marginBottom: 15,
    fontSize:24,
    textAlign: "center",
    color:'#000',
    fontWeight:'800',
    fontFamily:'Lato'
  },
  modalText1: {
    marginBottom: 15,
    fontSize:16,
    textAlign: "center",
    color:'#000',
    fontWeight:'400',
    fontFamily:'Lato'
  }
});

export default Popup;
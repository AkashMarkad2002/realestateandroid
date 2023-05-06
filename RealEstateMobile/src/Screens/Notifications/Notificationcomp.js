import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';


const Notificationcomp = props => {
  return (
    <View >
      <View >
        <View style={styles.date}> 
          <Text> {props.date}</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.head1}>
            <Image source={props.img1} />
            <View style={styles.sec1}>
              <Text style={styles.text1}>{props.tit1}</Text>
              <Text style={styles.text2}>{props.des1}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.head1}>
            <Image source={props.img2} />
            <View style={styles.sec1}>
              <Text style={styles.text1}>{props.tit2}</Text>
              <Text style={styles.text2}>{props.des2}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notificationcomp;

const styles = StyleSheet.create({
    date: {
  
        marginVertical:'3%',
        marginHorizontal:'6%',
        
    },
  head1: {
    flexDirection: 'row',
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth : 1,
borderBottomColor:'#E1E1E1',
borderTopColor:'#E1E1E1',
paddingVertical:'2%',
paddingHorizontal:'7%',
    // borderRadius: 10,
    marginVertical: '2%',

  },
  sec1: {
    alignSelf: 'center',
    width: '70%',
    padding: '5%',
  },


  text1: {
    color: '#000000',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  text2: {
    color: '#727578',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
});
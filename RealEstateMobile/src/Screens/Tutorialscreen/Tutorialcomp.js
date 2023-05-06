import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();
const {width,height} = Dimensions.get('window');



const Tutorialcomp = props => {
  return (
    <View  >
      <ScrollView>
        <View style={{width:width}}>
          <Image source={props.Img} style={styles.im1} />
        </View>

        <View>
          <View style={styles.v3}>
            <Text style={[styles.t1,  { color: colorScheme ? '#000000' : '#000000' }]}>
              The Biggest Real Estate App of the Century
            </Text>
            <View style={styles.v4}>
              <Text style={[styles.t2, { color: colorScheme ? '#000000' : '#000000' }]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                adipiscing nibh sed dolor. Vulputate neque facilisi tortor ipsum
                sit. Arcu nunc commodo neque
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tutorialcomp;

const styles = StyleSheet.create({
  v4: {
    alignSelf: 'center',
    marginTop: '3%',

    marginLeft: 30,
    marginRight: 30,
  },
  t2: {
    alignSelf: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  t1: {
    marginTop: '5%',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 24,
    color: 'black',
   paddingHorizontal:'10%'
  },
  im1: {
    width: width * 1.2,
    height: height * 0.6,

    // height:"83%",
    resizeMode: 'cover',
    overflow:'hidden'
  },
  v3: {
    // position: 'absolute',
    // marginTop:'120%'

    borderRadius: 30,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: -30,
   
 
    textAlign:'center',
    

    width: width,
    backgroundColor: '#fff',
  },
});

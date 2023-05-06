import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Rewardhistoryvisitchild = props => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.cont1}>
          <Image source={props.Img} style={{  alignSelf:'center', height:'105%'}} />
          <View style={styles.con1}>
            {/*head1*/}
            <View style={styles.head1}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../../../..//Assets/Images/Buildingvector.png')}
                  style={styles.bvec}
                />
                <Entypo name={'dots-two-vertical'} style={styles.dots} />
              </View>
              <Text style={styles.propname}>{props.PropertyN}</Text>
            </View>
            <View style={styles.head1}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../../../..//Assets/Images/Locationvec.png')}
                  style={styles.bvec}
                />
                <Entypo name={'dots-two-vertical'} style={styles.dots} />
              </View>

              <Text style={styles.locname}>{props.Loc}</Text>
            </View>
            {/*head2*/}
            <View style={styles.head2}>
              <View >
                <Text style={styles.f1}>{props.f1}</Text>
                <Text style={styles.devn}>{props.DevelopN}</Text>
                <Text style={styles.f5}>{props.f5}</Text>
                <View style={{flexDirection:'row',alignItems:'center',  marginTop:'2%'}}>
                <Image source={require('../../../../../Assets/dateh.png')}style={{height:'75%',width:'10%',marginRight:'3%'}}/>
                <Text style={styles.reqd}>{props.RequestD}</Text>
                </View>
                <Text style={styles.f6}> {props.f6}</Text>
            
              </View>
              <View>
                <Text style={styles.f2}>{props.f2}</Text>
                <Text style={styles.clin}>{props.ClientN}</Text>

                <Text style={styles.f3}>{props.f3}</Text>
                <Text style={styles.att}>{props.Att}</Text>
                <Text style={styles.f7}>{props.f7}</Text>
              
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Rewardhistoryvisitchild;

const styles = StyleSheet.create({
  cont1: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: '2.9%',
    paddingVertical: '2.5%',
    margin: '1.5%',
    flexDirection: 'row',
    borderColor:'#E1E1E1',
   
  },
  con1: {
    marginHorizontal: '2%',
  },
  //   ////////////////////////////head1
  head1: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '60%',


  },

  bvec: {
    color: '#000000',
   

  },
  dots: {
    color: '#000000',
  },
  propname: {
    fontFamily: 'Lato-Bold',
    fontSize: 13,
    fontWeight: '500',
    color: '#000000',

  },
  locname: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#000000',
    marginTop:'2%'
  },
  //////////////////////////head2////////////////
  head2: {

    marginTop:'2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '76%',
  },
  f1: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
  marginTop:'3%'
  },
  f2: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%'
   

  },
  f3: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%'
  },
  f5: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%'
   
  },
  devn: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'2%'
  },
  clin: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%'
  },
  att: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%'
  },
  reqd: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%'

  },
  f6: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%'
  
  },
  Ramt: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%'
  },
  f7: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#000000',
    marginTop:'3%'
  },
  stat: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#AFA91C',
    marginTop:'3%'
  },
});

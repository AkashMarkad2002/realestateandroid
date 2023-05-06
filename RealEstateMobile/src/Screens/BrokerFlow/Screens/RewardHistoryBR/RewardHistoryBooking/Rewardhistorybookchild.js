import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Rewardhistorybookchild = props => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.cont1}>
          <Image source={props.Img} />
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
              <View>
              <Text style={styles.f4}>{props.f4}</Text>
                <Text style={styles.f1}>{props.f1}</Text>
                <Text style={styles.devn}>{props.DevelopN}</Text>
                <Text style={styles.f5}>{props.f5}</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:'3%'}}>
                <Image source={require('../../../../../Assets/dateh.png')} style={{height:'75%',width:'10%',marginRight:'3%'}}/>
                <Text style={styles.reqd}>{props.RequestD}</Text>
                </View>
           
               
              </View>
              <View style={{marginRight:'5%'}}>
              <Text style={styles.un}>{props.UN}</Text>
                <Text style={styles.f2}>{props.f2}</Text>
                <Text style={styles.clin}>{props.ClientN}</Text>

                <Text style={styles.f3}>{props.f3}</Text>
                <Text style={styles.att}>{props.Att}</Text>
                
              

              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Rewardhistorybookchild;

const styles = StyleSheet.create({
  //you can start  
  cont1: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: '3%',
    paddingVertical: '1.5%',
    margin: '1.5%',
    borderColor:'#E1E1E1',
    flexDirection: 'row',
width:'97%'
  },
  con1: {
    marginHorizontal: '2%',
  },
  //   ////////////////////////////head1
  head1: {
    flexDirection: 'row',

    width: '64%',
    paddingVertical: '0.5%',
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
  },
  //////////////////////////head2////////////////
  head2: {
    paddingVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '79%',
  },
  f1: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%',
  },
  f2: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%',
  },
  f3: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%',
  },
  f4: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%',
  },
  un: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%',
  },
  f5: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%',
  },
  devn: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%',
  },
  clin: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%',
  },
  att: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%',
  },
  reqd: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#000000',
    marginTop:'3%',
  },
  f6: {
    fontFamily: 'Lato-Regular',
    fontSize: 9,
    color: '#696969',
    marginTop:'3%',
  },
  Ramt: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#000000',
    marginTop:'3%',
  },
  f7: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#696969',
    marginTop:'3%',
  },
  stat: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#AFA91C',
    marginTop:'3%',
  },
});
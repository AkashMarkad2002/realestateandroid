import {StyleSheet, Text, View, TouchableOpacity, Animated, LayoutAnimation} from 'react-native';
import React,{useRef, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Bodytoggleanimation } from './Bodytoggleanimation';
const Faqcomp = props => {
    const [showContent, setshowContent] = useState(false)
    const animationController = useRef(new Animated.Value(0)).current;

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContent ? 0 : 1,
            useNativeDriver:true,
        }
        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(Bodytoggleanimation);
        setshowContent(!showContent);
    }
    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });
  return (
      <View style={styles.container}>
          <View style={styles.cont}>
              <TouchableOpacity onPress={() => toggleListItem()}>
                  <View style={styles.header}>
                      <Text style={styles.title}>{props.Tit}</Text>
                      <Animated.View style={{transform:[{rotateZ:arrowTransform}],alignSelf: 'center',marginTop:-6,marginLeft:'6%'}}>
                          <MaterialIcons name={'keyboard-arrow-down'} size={25} color={'#000000' } />
                      </Animated.View>
                  </View>
              </TouchableOpacity>
              
              {showContent && <View style={styles.bodytext}>
                  <Text style={styles.body}>{props.Bod}</Text>
              </View>}
          </View>
    </View>
  );
};

export default Faqcomp;

const styles = StyleSheet.create({
    cont: {
      margin:'2%'  
    },
  container: {
    flex: 1,
        backgroundColor: '#ffffff',
        
 overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

       
    },
    title: {

        fontFamily:'Lato-Regular',
        fontSize: 14,
        color: '#000000',
    },
    body: {
        fontFamily: 'Lato-Regular',
        fontSize:12
    },
    bodytext: {
        marginVertical:'2%'
    }
});

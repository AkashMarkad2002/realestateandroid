import {StyleSheet, Text, TouchableOpacity, View,Animated} from 'react-native';
import React,{useState,useRef} from 'react';
import Svg, {G, Circle} from 'react-native-svg';

const NextButton = ({percentage , scrollTo}) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;




  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

const animation = (toValue)=>{
    return Animated.timing (progressAnimation,{
        toValue,
        duration:250,
        useNativeDriver:true
    }).start()
}


  return (
    <View style={{ justifyContent:'center', alignItems: 'center'}}>
      <Svg width={size} heigth={size}>
<Circle
stroke="#E6E7E8"
cx={center}
cy={center}
r={radius}
strokeWidth={strokeWidth}/>

        <Circle
          stroke="#F4338F"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * 25 )/ 100}
          
        />
      </Svg>


<TouchableOpacity style={styles.next} onPress={scrollTo}>
<Text style={styles.t}>Next</Text>
</TouchableOpacity>

    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
    next:{
        position: 'absolute',
        backgroundColor:'#000000',
        borderRadius:30,
        paddingHorizontal:"40%" ,
        alignSelf: 'center',
        justifyContent:'center',
    alignItems:'center',
 
    paddingVertical:"4%",
   },
   t:{
    color:'#ffffff',
fontSize:19,


   }
});

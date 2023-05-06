import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Onboarding')
        }, 3000)
    },[])
  return (
    <SafeAreaView style={{backgroundColor:'#FFFFFF'}}>

    <View style={styles.container}>
      <Image source={require('../../Assets/Images/logosp.gif')} style={{resizeMode:'cover'}}/>
    </View>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container:{
      // flex: Platform.OS === 'ios' ? 1 : null,
      justifyContent:'center', alignItems:'center',width:'100%',height:'100%'
  },
  text:{
    fontSize:24,
    fontWeight:'700',
    color:'black',
    fontFamily:'Lato-Regular',

  }
})

export default Splash
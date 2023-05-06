
import { ScrollView, StyleSheet, Text, View,Platform,SafeAreaView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const PrivacyAndPolicy = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView style={{ height: Platform.OS === 'ios' ? '100%' : '100%',backgroundColor: Platform.OS==='ios'?'#F5F5F5F':null}} showsVerticalScrollIndicator={false}>
      
        <View style={styles.Container}>
        <View style={styles.cont1}>
          <View style={styles.arroweditprilfecont}>
            <AntDesign name="arrowleft" size={30} color={'#000000'}  onPress={() => navigation.goBack()} />
            <Text style={styles.edittext}>Privacy Policy</Text>
          </View>
        </View>
        <View>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eleifend egestas aliquam faucibus ultrices eget enim. Tortor leo non ornare urna, sagittis enim. Sed felis convallis egestas egestas justo, tortor. Euismod elementum pellentesque egestas viverra nec egestas rhoncus. Id ullamcorper orci convallis tellus nibh aenean vulputate. {'\n'}
Risus sed elit faucibus tincidunt nunc proin. Laoreet enim massa bibendum urna libero vestibulum elit nulla. Mi cras fames blandit molestie a cursus risus. Porta quis amet lobortis odio velit velit a, mattis mattis. Purus metus, nisi ut est congue urna, non. Etiam adipiscing massa dictum sit lorem purus. Lorem at luctus suspendisse quisque accumsan donec sed varius in. Ultrices nulla viverra phasellus adipiscing arcu massa tempor. Fringilla sit ultrices augue velit pretium.{'\n'}
Blandit vel, pharetra, morbi ac aliquet sem. Bibendum ut iaculis odio id volutpat et. Venenatis turpis tellus arcu a ut. Risus augue a, ornare at lobortis vitae, eu. Duis eu tellus ut orci pretium. Pellentesque mauris et aliquet elit, massa amet arcu. Nulla mauris pellentesque semper tincidunt amet non justo, ut.{'\n'}
Nisl suspendisse nunc risus sapien. Feugiat id viverra faucibus dictum. Amet viverra semper vestibulum viverra nascetur orci erat. At lobortis donec accumsan, ut quis risus. Arcu ultrices vitae donec non. Sagittis, velit nunc potenti in porta viverra. Vel malesuada nulla cras malesuada vulputate quam cras. Nisl ut maecenas leo sollicitudin faucibus tortor, porta. Et fringilla euismod mattis lacus sit sit felis. Eu, dui in morbi id id risus. Turpis vehicula ut felis turpis risus.{'\n'}
Tempus aliquam id sit cras nam sed nunc augue elit. Phasellus varius sagittis etiam adipiscing sit et condimentum. Odio sed adipiscing est venenatis, ipsum tincidunt. Ullamcorper malesuada diam nunc ullamcorper tempor leo quisque vulputate at. Proin leo tristique volutpat nulla.
Vulputate hac pellentesque aliquam congue nibh. Egestas suspendisse diam dictum velit facilisis. Porttitor bibendum pellentesque habitasse sit quis congue cursus. Sem lobortis tincidunt tortor aliquet mauris aenean ipsum nibh. Scelerisque facilisi sit purus rutrum. Nunc sed dictumst malesuada id lorem nulla. Pellentesque nisl et ut ut eu lacus. Velit dignissim id facilisis diam et velit elit quis fames. Enim sit ut non nunc, mi lectus non urna, gravida.{'\n'}
Lacus sit at euismod purus aenean eu lectus vulputate quis.</Text>
        </View>
      
    </View>
   
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default PrivacyAndPolicy

const styles = StyleSheet.create({
    Container: {
        padding: '5%',
     
    
    
      
      },
      cont1: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
     
      
      },
      arroweditprilfecont: {
    
        flexDirection: 'row',
        alignItems: 'center',
      },
      edittext: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: '3%',
        color: '#000000',
        fontFamily:'Lato-Regular',
      },
      text:{
        fontFamily:'Lato-Regular',
        fontSize:14,
        fontWeight:'400',
        color:'#727578',
        marginTop:'5%',
        textAlign:'justify'
    }
}) 
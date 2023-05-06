import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window');
const Onboardingitem = ({ item }) => {
    const { width,height } = useWindowDimensions()

    return (
        <View style={[styles.container, { width: width, }]}>
            <View>
                <Image source={item.img} style={[styles.img, { width:width, resizeMode: 'cover',height:height*0.63 }]} />
            </View>
            <View style={styles.cont}>
                <Text style={styles.title}>{item.Tit}</Text>

                <Text style={styles.Des}>{item.Des}</Text>
            </View>

        </View>
    )
}

export default Onboardingitem

const styles = StyleSheet.create({
    cont: {
        // backgroundColor:'red',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginBottom: '5%',
        backgroundColor: '#fff',
        overflow: 'hidden',
        marginTop:-60,
        padding:'5%',
        width:width

        
    },
    container: {
        flex: 1,
        
        
        backgroundColor: '#fff',

    }, img: {
        alignItems:'flex-start'
    
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        paddingHorizontal: 20,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center',

    },
    Des: {
        fontSize: 14,
        paddingHorizontal: 21,
        color: '#000000',


        textAlign: 'center',
    }
})
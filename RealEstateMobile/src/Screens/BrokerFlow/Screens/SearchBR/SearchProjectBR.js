import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image,Platform } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'



const { height, width } = Dimensions.get('window');
const SearchProjectBR = ({ navigation }) => {
    const [history, sethistory] = useState('flex');
    const [found, notfound] = useState('none')
    return (
        <SafeAreaView style={{backgroundColor:'#FFFFFF'}}>
        <View style={styles.MainContainer}>
             <SafeAreaView>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <AntDesign
                        name="arrowleft"
                        size={30}
                        color='#000000'
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.SearchBar}>
                <View style={styles.search}>
                    <TextInput style={styles.searchText} placeholder='Search' placeholderTextColor={'#727578'} onChangeText={() => {
                        notfound('none')
                        sethistory('flex')
                    }} />

                    <TouchableOpacity style={styles.searchIcon} onPress={() => {
                        sethistory('none');
                        notfound('flex')
                    }}>
                        <Ionicons name='search' size={18} color={'grey'} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={[styles.searchimg, { display: found }]}>
                <Image
                    source={require('../../../../Assets/Images/Search1.png')}
                    style={styles.searchimgno}
                />
                <View>
                    <Text style={styles.text}>
                        No Data Found
                    </Text>
                </View>
            </View>

            <View style={{ display: history }}>
                <TouchableOpacity style={styles.arrowUpRightIcon}>
                    <Text>
                        dlf prime tower
                    </Text>
                    <MaterialCommunityIcons
                        name='arrow-top-right'
                        size={25} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.arrowUpRightIcon}>
                    <Text>
                        dlf prime tower
                    </Text>
                    <MaterialCommunityIcons
                        name='arrow-top-right'
                        size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowUpRightIcon}>
                    <Text>
                        dlf prime tower
                    </Text>
                    <MaterialCommunityIcons
                        name='arrow-top-right'
                        size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowUpRightIcon}>
                    <Text>
                        dlf prime tower
                    </Text>
                    <MaterialCommunityIcons
                        name='arrow-top-right'
                        size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowUpRightIcon}>
                    <Text>
                        dlf prime tower
                    </Text>
                    <MaterialCommunityIcons
                        name='arrow-top-right'
                        size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowUpRightIcon}>
                    <Text>
                        dlf prime tower
                    </Text>
                    <MaterialCommunityIcons
                        name='arrow-top-right'
                        size={25} />
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        </View>
        </SafeAreaView>
    )
}
export default SearchProjectBR

const styles = StyleSheet.create({
    MainContainer: {
        padding: '5%',
        backgroundColor: '#FFFFFF',
        height:Platform.OS==='ios'?'100%':'100%'
        
    },

    SearchBar: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '4%',
    },
    search: {
        flexDirection: 'row', alignItems: 'center', borderWidth: 0.5, borderColor: 'grey', borderRadius: 25, width: width * 0.85,overflow:'hidden',padding:Platform.OS === 'ios'?'3%':null
    },
    searchText: {
        marginLeft: '4%', fontSize: 14, color: 'black', width: '87%',padding:'3%'
    },
    searchIcon: {
        marginLeft: '90%', position: 'absolute'
    },
    searchimg: {
        alignItems: 'center',
        marginTop: '25%'
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontWeight: '700',
        fontSize: 30,
        textAlign: 'center'
    },
    arrowUpRightIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '4%'
    },
    searchimgno:{
        height:'60%',width:'60%'
    }

    
}) 
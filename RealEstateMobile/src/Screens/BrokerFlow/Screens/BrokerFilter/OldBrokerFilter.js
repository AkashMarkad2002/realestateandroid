import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Dropdown } from 'react-native-element-dropdown'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },

]
const OldBrokerFilter = ({navigation}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={{marginVertical:5}}>
                    <TouchableOpacity onPress={() =>{navigation.goBack()}} >

                    <AntDesign name="close" size={15} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.filtertxt}>
                        Filter
                    </Text>

                </View>
                <View>
                    <Text style={styles.textHead}>
                        City
                    </Text>

                    <View>

                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Search City' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.textHead}>
                        Category
                    </Text>
                    <View style={styles.veiwArrange}>
                        <TouchableOpacity style={{backgroundColor:'#1AB1B0',padding:15,alignItems:'center',borderRadius:10,width:'33%',height:100,justifyContent:'space-between'}}>
                            <Image source={require('../../../../Assets/Images/v1.png')}/>
                            <Text style={{color:'#FFFFFF'}}>Residential</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#F16937',padding:15,alignItems:'center',borderRadius:10,width:'33%',height:100,justifyContent:'space-between'}}>
                        <Image source={require('../../../../Assets/Images/v2.png')}/>
                            <Text style={{color:'#FFFFFF'}}>Commercial</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#8677FE',padding:15,alignItems:'center',borderRadius:10,width:'33%',height:100,justifyContent:'space-between'}}>
                        <Image source={require('../../../../Assets/Images/v3.png')}/>
                            <Text style={{color:'#FFFFFF'}}>Villa</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.textHead}>
                            Type
                        </Text>
                    </View>
                    <View style={styles.veiwArrange}>
                        <View style={styles.box}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, textAlign: 'center', padding: 15,fontWeight:'400',color:'#000' }}>
                                    Developer Projects
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.box}>
                            <Text style={{ fontSize: 12, textAlign: 'center', padding: 15,fontWeight:'400',color:'#000'  }}>
                                Individual House Builder
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.textHead}>
                            Construction Status
                        </Text>
                    </View>
                    <View style={styles.veiwArrange}>
                        <View style={[styles.box, { width: '48%' }]}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, textAlign: 'center', padding: 15,fontWeight:'400',color:'#000'  }}>
                                    Under Construction
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.box, { width: '48%' }]}>
                            <Text style={{ fontSize: 12, textAlign: 'center', padding: 15,fontWeight:'400',color:'#000'  }}>
                                Ready To Move
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.textHead}>
                            Possession Date
                        </Text>
                    </View>
                    <View style={styles.veiwArrange}>
                        <TouchableOpacity style={[styles.box, { borderRadius: 5, width: '31%', padding: 7, }]}>
                            <Text style={styles.boxedText}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box, { borderRadius: 5, width: '31%', padding: 7, }]}>
                            <Text style={styles.boxedText}>Next Month</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box, { borderRadius: 5, width: '31%', padding: 7, }]}>
                            <Text style={styles.boxedText}>Next Year</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#000', marginVertical: 5 }}>
                        OR
                    </Text>
                </View>
                <View style={[styles.veiwArrange, { borderRadius: 50, borderColor: '#E1E1E1', borderWidth: 1, paddingHorizontal:15}]}>
                    <TextInput placeholder='Select Date' style={{ width: '85%', fontSize: 12, fontWeight: '400', color: '#ADACAC' }} />
                    <TouchableOpacity>
                        <FontAwesome5 name="calendar" size={14} color={'#111'} />
                    </TouchableOpacity>

                </View>
                <View>
                    <View>
                        <Text style={styles.textHead}>
                            Price Range
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextInput placeholder='Min Budget' style={{ fontSize: 12, fontWeight: '400', color: '#ADACAC', borderColor: '#E1E1E1', borderWidth: 1, borderRadius: 50, width: '45%', paddingHorizontal: 10 }} />
                        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#000', marginVertical: 5 }}>TO</Text>
                        <TextInput placeholder='Max Budget' style={{ fontSize: 12, fontWeight: '400', color: '#ADACAC', borderColor: '#E1E1E1', borderWidth: 1, borderRadius: 50, width: '45%', paddingHorizontal: 10 }} />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.textHead}>
                            Area
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextInput placeholder='Min Area' style={{ fontSize: 12, fontWeight: '400', color: '#ADACAC', borderColor: '#E1E1E1', borderWidth: 1, borderRadius: 50, width: '45%', paddingHorizontal: 10 }} />
                        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '700', color: '#000', marginVertical: 5 }}>TO</Text>
                        <TextInput placeholder='Max Area' style={{ fontSize: 12, fontWeight: '400', color: '#ADACAC', borderColor: '#E1E1E1', borderWidth: 1, borderRadius: 50, width: '45%', paddingHorizontal: 10 }} />
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
                    <TouchableOpacity style={{width:'48%',marginHorizontal:'1%'}}>
                        <Text style={[styles.btn,{backgroundColor: '#C3C3C3',color:'#000'}]}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'48%',marginHorizontal:'1%'}}>
                        <Text style={[styles.btn,{backgroundColor: '#000000',color:'#FFFFFF'}]}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

export default OldBrokerFilter;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        padding: '5%',
        //backgroundColor:'red',
        justifyContent: 'space-between',
    },
    filtertxt: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 24,
        color: '#000000',
        fontFamily:'Lato-Regular'
    },
    citytxt: {
        fontFamily: 'Lato',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
        fontFamily:'Lato-Regular'
    },
    dropdown: {
        height: 50,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 8,
    },


    placeholderStyle: {
        fontSize: 12,
        color: '#ADACAC',
        fontFamily:'Lato-Regular'
    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily:'Lato-Regular'
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        fontFamily:'Lato-Regular'
    },
    textHead: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000',
        marginVertical: 5,
        fontFamily:'Lato-Regular'
    },
    boxedText: {
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        color:'#000',
        fontFamily:'Lato-Regular'
    },
    boxedText1: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        color:'#000',
        fontFamily:'Lato-Regular'
    },
    box: {
        borderRadius: 50, backgroundColor: '#D9D9D9', borderWidth: 1, borderColor: '#E1E1E1', verticalAlign: 'center'

    },
    veiwArrange: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#000',
        padding:15,
        color: '#FFFFFF',
        textAlign: 'center',
        width: '100%',
        fontSize: 14,
        fontWeight: '500',
        borderRadius: 100,
        fontFamily:'Lato-Regular'
    },
});
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../Forgetpassword/New'

const PropertyCard1 = () => {
  return (
    <View style={styles.propertyCard}>
                <View>
                    <TouchableOpacity>
                        <Image source={require('../../Assets/Images/propertyImage.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.propertyInfo} >
                    <View style={styles.propertyName}>
                        <FontAwosome5 style={styles.cityIcon} name='city' size={15} color={'black'} />
                        <Text style={styles.propertyTitle}> : Experion The Westerlies</Text>
                    </View>
                    <View style={styles.propertyName}>
                        <Ioniconns style={styles.cityIcon} name='location' size={15} color={'black'} />
                        <Text style={styles.propertyTitle}> : St. 163, Sector-108 Gurgaon</Text>
                    </View>
                    <View style={styles.propertyClaim}>
                        <View style={{justifyContent: 'space-around' }}>
                            <Text style={styles.listedDate}>Listed Date</Text>
                            <View style={{ flexDirection: 'row'}}>
                                <Materiallcons name='date-range' size={15} color={'black'} />
                                <Text style={styles.propertyDate}>12-04-2022</Text>
                            </View>

                        </View>
                        <View >
                            <Text style={styles.listedClaims}> Number of Claims</Text>
                            <View style={{ flexDirection: 'row'}}>
                                <FontAwosome5 name='house-user' size={13} color={'black'} />
                                <Text style={styles.propertyClaimNumber}> 20</Text>
                            </View>

                        </View>
                    </View>

                </View>
            </View>
  )
}

export default PropertyCard1

const styles=StyleSheet.create({
    propertyCard:{
        flexDirection: 'row', borderWidth: 0.9, marginBottom: '2%', padding: '2%', borderColor: 'grey', borderRadius: 15 
    },
    propertyInfo:{
        justifyContent: 'space-between',marginHorizontal:'3%',marginVertical:'2%' 
    },
    propertyName:{
        flexDirection: 'row', alignItems: 'center' 
    },
    propertyTitle:{
        color: 'black', fontSize: 12 
    },
    propertyClaim:{
        flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:'2%'
    },
    propertyDate:{
        fontSize: 12, fontWeight: '700', color: 'black'
    },
    propertyClaimNumber:{
        fontSize: 12, fontWeight: '700', color: 'black'
    },
    cityIcon: {
        margin: '2%',
        alignSelf: 'center'
    },
    listedDate: {
        fontSize: 10,
    },
    listedClaims: {
        fontSize: 10
    }
})
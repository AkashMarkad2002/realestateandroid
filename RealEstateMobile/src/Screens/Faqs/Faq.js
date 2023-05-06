import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView,Platform } from 'react-native';
import React from 'react';
import Faqcomp from './Faqcomp';
import Helpm from '../Help/Helpm';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Faq = ({ navigation }) => {
  const data = [
    {
      key: 1,
      title: 'Is an online Rental Agreement valid or legal?',
      body: 'Where buyers and owners can find answers to their questions related to login or registration, property search, property advertisement posting, account management and other related topics.',
    },
    {
      key: 2,
      title: 'Is an online Rental Agreement valid or legal?',
      body: 'Where buyers and owners can find answers to their questions related to login or registration, property search, property advertisement posting, account management and other related topics.',
    },
    {
      key: 3,
      title: 'Is an online Rental Agreement valid or legal?',
      body: 'Where buyers and owners can find answers to their questions related to login or registration, property search, property advertisement posting, account management and other related topics.',
    },
    {
      key: 4,
      title: 'Is an online Rental Agreement valid or legal?',
      body: 'Where buyers and owners can find answers to their questions related to login or registration, property search, property advertisement posting, account management and other related topics.',
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor: Platform.OS==='ios'?' #F5F5F5':null}}>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack('Helpm');
            }}>
            <AntDesign name="arrowleft" size={25} color={'#000000'} />
          </TouchableOpacity>
          <View style={styles.Faq}>
            <Text style={styles.text}>FAQs</Text>
          </View>
        </View>
        <View style={styles.Flatlist}>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#E2E2E2',
                    }}></View>
                  <View style={{ marginVertical: '5%' }}>
                    <Faqcomp Tit={item.title} Bod={item.body} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? '100%' : '100%',
    backgroundColor: '#ffffff',
    padding: '3%',
    
  }, cont1: {
    flexDirection: 'row',
    marginVertical: '5%',


  },
  Faq: {
    marginLeft: '4%',
  },
  text: {
    color: '#000000',
    fontFamily: 'Lato-Regular',
    fontSize: 24,


  },
  Flatlist: {
    marginTop: '15%'
  }
});

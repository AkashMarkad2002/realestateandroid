import { StyleSheet, Text, View, FlatList, Animated, TouchableOpacity,Dimensions, Platform } from 'react-native';
import React, { useState, useRef } from 'react';
import Slides from './Slides';
import Onboardingitem from './Onboardingitem';
import NextButton from './NextButton';
import Paginator from './Paginator';

const { height, width } = Dimensions.get('window');

const Onboarding = ({navigation}) => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setcurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;



  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });

    }
    else {
      navigation.navigate('SelectRole')
    }
  }

  return (
    <View style={{ flex: 1,backgroundColor:'#fff' }}>
      <View>
        <FlatList
          data={Slides}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          renderItem={({ item }) => <Onboardingitem item={item} />}
        />
      </View>
      <Paginator data={Slides} scrollx={scrollx} />
      <View style={{  alignSelf: 'center',marginTop:'-5%' }}>
        <TouchableOpacity style={{ alignSelf: 'center', }} onPress={() => {
          navigation.navigate('SelectRole')
        }}>
          <Text style={{ color: '#313030' }}>skip</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: Platform.OS === 'ios' ? '18%':  '10%' }}>
        <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / Slides.length)} />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    height:height,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

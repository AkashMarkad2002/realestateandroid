// import React, { useState, useRef } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Text,
//   Dimensions
// } from "react-native";
// import PhoneInput from "react-native-phone-number-input";

// const { height, width } = Dimensions.get('window');

// const PhoneInputs = () => {
//   const [value, setValue] = useState("");
//   const [valid, setValid] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);
//   const phoneInput = useRef();
//   return (<View>
//  <PhoneInput
//             ref={phoneInput}
//             defaultValue={value}
//             defaultCode="IN"
//             onChangeFormattedText={(text) => {
//               setValue(text);
//             }}
//             withDarkTheme={false}
//             containerStyle={{borderRadius:100,backgroundColor:'#ffffff',width:width*0.9,height:height*0.09,marginTop:-15}}
//             textContainerStyle={{borderRadius:100,backgroundColor:'#ffffff',}}
//             withShadow
//             autoFocus
//           />
//           {/* <TouchableOpacity
  
//   onPress={() => {
//            const checkValid = phoneInput.current?.isValidNumber();
//            setValid(checkValid ? checkValid : false);
//           //proceed
//           }}>
//   <Text>Check</Text>
// </TouchableOpacity> */}
//   </View>
       
//   );
// };

// export default PhoneInputs;
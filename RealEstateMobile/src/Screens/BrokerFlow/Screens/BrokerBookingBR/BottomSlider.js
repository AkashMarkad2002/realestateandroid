import React, { useRef,useState } from "react";
import { View, Button,Text ,Image, TouchableOpacity} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
 
export default function BottomSlider() {
  const refRBSheet = useRef();
  const [bg,setbg]=useState('white')
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <>
        <View style={{margin:10,width:100}}>
            <Image source={require('../../../../Assets/Images/newbuildimg.png')} style={{width:100,height:100,resizeMode:'cover',overflow:'hidden',borderRadius:10}}/>
            <TouchableOpacity style={{borderRadius:20,borderWidth:1,borderColor:'#000',position:'absolute',alignSelf:'flex-end',right:5,top:5,backgroundColor:'white',padding:2}} onPress={()=>{if(bg=='white'){
                setbg('black')
            }else{
                setbg('white')
            }}}>
                <View style={{backgroundColor:bg,padding:8,borderRadius:20,}}></View>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{}}>
        <Text style={{color:'#fff',backgroundColor:'#000',padding:10,fontSize:20,fontWeight:'700',margin:10,borderRadius:40,textAlign:'center',paddingVertical:15}}>DOWNLOAD</Text>
        </TouchableOpacity>
        
        </>
        
      </RBSheet>
    </View>
  );
}
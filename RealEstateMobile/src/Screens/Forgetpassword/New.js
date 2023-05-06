import { StyleSheet } from 'react-native'


export  const styles=StyleSheet.create({
   mainContainer:{
       padding:'5%',
       backgroundColor:'#FFFFFF',
       flex: Platform.OS === 'ios' ? null : 1,
       
       
   },
   pageHeading:{
      textAlign:'center',
      fontSize:25,
      fontWeight:'700',
      color:'#111111',
      marginTop:20,
      fontFamily:'Lato-Regular',
   },
   img:{
       width:250,
       height:250,
       resizeMode:'contain',
       alignSelf:'center'
   },
   otpinputbox:{
       borderColor:'#111',
       borderWidth:1,
       borderRadius:10,
       width:55,
       height:'100%',
       justifyContent:'center',
       alignItems:'center',
       color:'#111',
       fontSize:26,
       fontWeight:'600',
       fontFamily:'Lato-Regular',
       
   },
   otpBoxHighlight:{
    borderColor:'#111',
    borderWidth:1,
    borderRadius:10,
    width:55,
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    color:'black',
    fontSize:26,
    fontWeight:'600',
    fontFamily:'Lato-Regular',
   },
   normaltext:{
        fontSize:15,
        textAlign:'center',
     
   },
   inlinetext:{
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       marginTop:'5%'
    //    marginBottom:'10%'

   },
   timer:{
        color:'blue',
        fontFamily:'Lato-Regular',
   },
   btn:{
     backgroundColor:'#000',
     overflow:'hidden',
     color:'#FFFFFF',
     textAlign:'center',
     width:'100%',
     padding:'5%',
     fontSize:20,
     fontWeight:'700',

     borderRadius:  Platform.OS === 'ios' ? 30 : 100,

     fontFamily:'Lato-Regular',
     overflow:'hidden',
   },
   ButtonView:{
       marginTop:'10%',
       marginBottom:'10%'
   },
   label:{
     color: 'black', 
     fontSize: 20,
     fontWeight:'500',
     marginVertical:'2%',
     fontFamily:'Lato-Regular',
   },
   inputBox:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       width:'100%',
       borderWidth: 0.2, 
       borderColor: ' #E1E1E1',
       padding: '1%',
       paddingHorizontal:'4%', 
       borderRadius: 30,
       marginVertical:'2%',
       
   },
   forgotpassInput:{
       marginVertical:'5%'
   },

   submitBtn:{
        marginTop:'3.5%',
        marginBottom:'10%'
   },
   centeredView: {
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    marginTop:190,
    margin: 20,
    backgroundColor: "white",
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize:25,
    textAlign: "center",
    color:'#000',
    fontFamily:'Lato-Bold',
  },
  modalText1: {
    marginBottom: 15,
    fontSize:15,
    textAlign: "center",
    color:'#000'
  }

})
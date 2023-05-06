import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  Heading: {
    marginLeft: '6%',
    color: '#111111',
    fontFamily: 'Lato-Bold',
    fontSize: 24,
  },
  mainContainer: {
    padding: '5%',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  pageHeading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
    color: '#111111',
    marginTop: 20,
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  otpinputbox: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    width: 55,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#111',
    fontSize: 26,
    fontWeight: '600',
  },
  otpBoxHighlight: {
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 10,
    width: 55,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 26,
    fontWeight: '600',
  },
  normaltext: {
    fontSize: 15,
    textAlign: 'center',
  },
  inlinetext: {
    flexDirection: 'row',
    justifyContent: 'center',
    //    marginBottom:'10%'
  },
  timer: {
    color: 'blue',
  },
  btn: {
    backgroundColor: '#000',
    color: '#FFFFFF',
    textAlign: 'center',
    overflow:'hidden',
    width: '100%',
    padding: '5%',
    fontSize: 20,
    fontWeight: '700',

    borderRadius: Platform.OS === 'ios' ? 30 : 100,
    fontFamily:'Lato-Regular',
    overflow: 'hidden',
    

  },
  ButtonView: {
    marginTop: '50%',
    marginBottom: '10%',
  },
  label: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
    marginVertical: '2%',
  },
  inputBox: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: ' #E1E1E1',
    padding: '5%',
    borderRadius: 30,
    marginVertical: '2%',
  },
  forgotpassInput: {
    marginVertical: '5%',
  },

  submitBtn: {
    marginTop: '20%',
    marginBottom: '10%',
  },
});
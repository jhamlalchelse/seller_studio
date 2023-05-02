import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buyerBG: {
    width: '100%',
    height: 700,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyerHeading: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    fontWeight: '900',
    fontFamily: 'serif',
    marginVertical: 10,
  },
  buyerDesc: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'serif',
    lineHeight: 23,
  },
  heading:{
    textAlign: 'center',
    fontSize: 28,
    color: '#222',
    fontWeight: '700',
  },
  subheading: {
    textAlign: 'center',
    fontSize: 17,
    color: '#223',
    marginVertical: 15,
    paddingHorizontal: 25,
  },
  flexbuyer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 30  
  },
  imgBg:{
    backgroundColor: '#d7ffd1',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 10,
  },
  imgDesc:{
    paddingHorizontal: 50,
    marginVertical: 16,
    textAlign: 'center',
    color: '#222',
    fontFamily: 'serif',
  },

  buttonText:{
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'serif',
    color:"#333",
  },
});

export default styles;

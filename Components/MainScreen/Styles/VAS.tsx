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
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'serif',
    lineHeight: 23,
    paddingHorizontal: 35
  },
  bgHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'serif',
    paddingVertical: 15,
    textAlign: 'center',
  },
  bgDesc: {
    fontSize: 17,
    lineHeight: 25,
    color: 'white',
    fontFamily: 'serif',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  outerBg:{
    backgroundColor: '#fff0f0',
    borderWidth: 0.6,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    marginHorizontal: 5,
    paddingTop: '2%',
    paddingHorizontal: '.4%',
  },
  bgImage:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '99%',
  },
  bgTextDiv:{
    backgroundColor: 'black',
    opacity: 0.8,
    height: 330,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  otherServiceDesc:{
    color: '#333',
    fontSize: 16,
    fontFamily: 'serif',
    paddingVertical: 15,
    lineHeight: 22,
  },
});

export default styles;

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
  heading: {
    textAlign: 'center',
    fontSize: 28,
    color: '#222',
    fontWeight: '700',
  },
  subheading: {
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 16,
    color: '#223',
    marginVertical: 15,
    paddingHorizontal: 30,
    lineHeight: 22,
  },
  imgDesc: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333',
    fontFamily: 'serif',
    paddingHorizontal: 40,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'serif',
    color:"#333",
  },
});

export default styles;

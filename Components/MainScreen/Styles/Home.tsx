import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Our Solution
  heading: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 15,
    fontWeight: '700',
    color: '#333',
    fontFamily: 'serif',
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: '500',
    fontFamily: 'serif',
  },
  registerBtn: {
    backgroundColor: '#5da7ca',
    paddingVertical: 9,
    alignSelf: 'center',
    margin: 30,
    borderRadius: 20,
    paddingHorizontal: 60,
  },
  paraText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
  },

  // Latest Product
  latestProductBorder: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  textBlack: {
    fontSize: 18,
    fontFamily: 'serif',
    color: '#220',
  },

  businessDesc: {
    fontSize: 17,
    fontFamily: 'san-serif',
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 12,
  },

  buyerBG: {
    backgroundColor: '#88bc8f',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
  },
  buyerHeading: {
    textAlign: 'center',
    fontSize: 23,
    color: '#333',
    fontWeight: '700',
    fontFamily: 'georgia',
    marginVertical: 10,
  },
  buyerDesc: {
    marginHorizontal: 15,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'serif',
  },
  // Why choose us
  whyChooseDesc: {
    marginHorizontal: '6%',
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'serif',
    color: '#000',
    lineHeight: 21,
  },
  // our technology
  techBg: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 25,
    alignSelf: 'center',
  },
  techText: {
    fontSize: 17,
    color: '#333',
    paddingLeft: 20,
    width: 160,
    textAlign: 'center',
  },
  //  Get In Touch
  inputLabel: {
    paddingLeft: 25,
    marginBottom: 10,
    fontSize: 17,
    fontFamily: 'serif',
    color: '#333',
  },
  inputText: {
    borderWidth: 0.8,
    padding: 7,
    paddingHorizontal: 20,
    fontSize: 17,
    fontFamily: 'serif',
    marginHorizontal: 20,
    borderRadius: 10,
    color: '#333',
  },
  inputTextArea: {
    height: 100,
    borderWidth: 0.8,
    padding: 7,
    paddingHorizontal: 20,
    fontSize: 17,
    fontFamily: 'serif',
    color: '#333',
    marginHorizontal: 20,
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  sendMsgBtn: {
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 18,
    fontFamily: 'serif',
    color: '#fff',
    backgroundColor: '#4682b4',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },

  // Footer
  footerHeading: {color: 'white', fontSize: 20, fontFamily: 'serif'},
  footerLink: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 5,
    textDecorationLine: 'underline',
    fontFamily: 'serif',
  },
  footerFlex: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 17,
  },
});

export default styles;

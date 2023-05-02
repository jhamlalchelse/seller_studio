import {
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from '../Styles/Home';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Footer = () => {
  return (
    <View style={{backgroundColor: '#2e8b57', marginTop: 50}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        {[
          'sc-facebook',
          'sc-twitter',
          'google',
          'instagram',
          'sc-linkedin',
        ]?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                borderWidth: 0.6,
                borderColor: 'white',
                borderRadius: 7,
                margin: 8,
              }}>
              {item === 'google' || item === 'instagram' ? (
                <AntDesign
                  name={item}
                  size={25}
                  color={'white'}
                  style={{padding: 5}}
                />
              ) : (
                <EvilIcons
                  name={item}
                  size={35}
                  color={'white'}
                  style={{paddingVertical: 3}}
                />
              )}
            </View>
          );
        })}
      </View>

      <View style={styles.footerFlex}>
        <Text style={styles.footerHeading}>SUPPORT</Text>
        <Text style={styles.footerLink}>Return and Exchange</Text>
      </View>

      <View style={styles.footerFlex}>
        <Text style={styles.footerHeading}>COMPANY</Text>
        <Text style={styles.footerLink}>About Us</Text>
        <Text style={styles.footerLink}>Contact Us</Text>
      </View>

      <View style={styles.footerFlex}>
        <Text style={styles.footerHeading}>LEGAL</Text>
        <Text style={styles.footerLink}>Privacy Policy</Text>
        <Text style={styles.footerLink}>Terms and Conditions</Text>
      </View>

      <View style={styles.footerFlex}>
        <Text style={styles.footerHeading}>SELL WITH US</Text>
        <Text style={styles.footerLink}>Sell on Cropway</Text>
        <Text style={styles.footerLink}>Avail Services</Text>
      </View>

      <Text style={{textAlign: 'center', color: '#fff', marginTop: 30}}>
        {'\u00A9'} 2023, cropway.com
      </Text>
    </View>
  );
};

export default Footer;

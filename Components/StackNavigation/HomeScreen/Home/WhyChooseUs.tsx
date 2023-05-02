import {
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from '../Styles/Home';

const WhyChooseUs = () => {
  return (
    <View style={{backgroundColor: 'rgba(217, 217, 217, 0.2)'}}>
      <Text style={styles.heading}>Why Choose Us?</Text>
      <View>
        <Image
          source={require('./images/why-choose-us_img1.jpg')}
          resizeMode="stretch"
          style={{height: 230, width: '90%', alignSelf: 'center'}}
        />
        <Text style={styles.whyChooseDesc}>
          Farm-to-fork fresh produce delivery is made possible through Cropway's
          Seller Studio, a platform for collaboration between stakeholders in
          the Agri value chain that incorporates technology and the agribusiness
          network.
        </Text>
      </View>

      <View style={{marginVertical: 30}}>
        <Image
          source={require('./images/why-choose-us_img2.jpg')}
          resizeMode="stretch"
          style={{height: 230, width: '90%', alignSelf: 'center'}}
        />
        <Text style={styles.whyChooseDesc}>
          It is a high-quality, cost-effective, and adaptable agricultural
          supply chain solution. On top of routine estimates, we've layered
          AI/ML-based precision demand planning, as well as integrated and
          secure platform payment processes. Cropway will assist you in
          seamlessly meeting the needs of your end-users.
        </Text>
      </View>

      <Image
        source={require('./images/cropway-services1.png')}
        resizeMode="contain"
        style={{height: 120, width: '90%', alignSelf: 'center'}}
      />
    </View>
  );
};

export default WhyChooseUs;


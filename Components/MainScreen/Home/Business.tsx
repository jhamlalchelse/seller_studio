import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from '../Styles/Home';

const Business = ({navigation}: any) => {
  return (
    <View style={{marginVertical: 20}}>
      <Text style={styles.heading}>Businesses /Ecosystem /Stakeholders</Text>
      <Text style={styles.businessDesc}>
        We are dedicated to meeting all of your requirements in a single
        platform.
      </Text>
      <Text style={[styles.businessDesc, {marginBottom: 20}]}>
        This is your opportunity to present your efforts to the global market at
        any time and from any location!
      </Text>

      <View style={{marginVertical: 20}}>
        {/* Buyer */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Buyer')}>
            <View style={styles.buyerBG}>
              <Image
                source={require('./images/buyer_businesses_img.png')}
                resizeMode="contain"
                style={{width: 200, height: 170}}
              />
            </View>
            <Text style={styles.buyerHeading}>Buyer</Text>
            <Text style={styles.buyerDesc}>
              Buy without the hassle and from a credible system for all of your
              needs - it will be delivered straight to your door.
            </Text>
          </TouchableOpacity>
        </View>
        {/* Seller */}
        <View style={{marginVertical: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('Seller')}>
            <View style={styles.buyerBG}>
              <Image
                source={require('./images/seller_businesses_img.png')}
                resizeMode="contain"
                style={{width: 200, height: 170}}
              />
            </View>
            <Text style={styles.buyerHeading}>Seller</Text>
            <Text style={styles.buyerDesc}>
              Get the best prices from a diverse range of buyers and present
              your efforts to the global and local markets.
            </Text>
          </TouchableOpacity>
        </View>
        {/* Value-added Services */}
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ValueAddedService')}>
            <View style={styles.buyerBG}>
              <Image
                source={require('./images/value-added-services_businesses_img.png')}
                resizeMode="contain"
                style={{width: 200, height: 170}}
              />
            </View>
            <Text style={styles.buyerHeading}>Value-added Services</Text>
            <Text style={styles.buyerDesc}>
              All of the following services are offered by Cropway through
              internal operations and our network of specialised partners.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Business;

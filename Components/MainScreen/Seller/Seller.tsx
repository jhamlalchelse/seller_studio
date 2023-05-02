import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from '../Styles/Seller';

const Seller = ({navigation}: any) => {
  return (
    <ScrollView>
      <View>
        <View style={{backgroundColor: '#000', opacity: 0.9}}>
          <ImageBackground
            source={require('./images/Seller_BG.webp')}
            resizeMode="cover"
            imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
            style={styles.buyerBG}>
            <View style={{paddingHorizontal: 30}}>
              <Text style={styles.buyerHeading}>Seller</Text>
              <Text style={styles.buyerDesc}>
                Get the best prices from a diverse range of buyers and present
                your efforts to the global and local markets.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{paddingVertical: 20}}>
          <Text style={styles.heading}>Do you sell agricultural produce?</Text>
          <Text style={styles.subheading}>
            As a Cropway seller, you can post offers for the agricultural crop
            you want to sell and immediately connect with cropway-verified
            buyers from all over the world. Alternatively, simply accept a bid
            from an existing buyer to begin your secure transaction.
          </Text>

          <Text style={[styles.subheading, {marginTop: 0}]}>
            Cropway's seller studio offers market linkage to assists
            farmers/FPOs/SHGs or sellers in selling their harvest by providing
            all of the expertise required to maintain quality while remaining
            cost-effective.
          </Text>

          <Image
            source={require('./images/farmer-businessman.png')}
            resizeMode="contain"
            style={{width: '80%', height: 200, alignSelf: 'center'}}
          />

          <Text style={styles.imgDesc}>
            As a Cropway seller, you can post offers for the agricultural crop
            you want to sell and immediately connect with cropway-verified
            buyers from all over the world. Alternatively, simply accept a bid
            from an existing buyer to begin your secure transaction.
          </Text>

          <Image
            source={require('./images/tomato.png')}
            resizeMode="contain"
            style={{
              width: '80%',
              height: 300,
              alignSelf: 'center',
              marginTop: 30,
              borderRadius: 30,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={{backgroundColor: '#5da7ca', borderRadius: 30}}>
            <Text
              style={[
                styles.buttonText,
                {
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                },
              ]}>
              Register as seller/buyer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Get In Touch {'-->'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Seller;

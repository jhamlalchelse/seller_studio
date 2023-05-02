import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from '../Styles/Buyer';

const Buyer = ({navigation}: any) => {
  return (
    <>
      <ScrollView>
        <View>
          <View style={{backgroundColor: '#000', opacity: 0.9}}>
            <ImageBackground
              source={require('./images/Buyer_BG.webp')}
              resizeMode="cover"
              imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
              style={styles.buyerBG}>
              <View style={{paddingHorizontal: 30}}>
                <Text style={styles.buyerHeading}>Buyer</Text>
                <Text style={styles.buyerDesc}>
                  Buy without the hassle and from a credible system for all of
                  your needs - it will be delivered straight to your door
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 30,
              backgroundColor: 'hsla(0,0%,85%,.2)',
            }}>
            <Text style={styles.heading}>Do you buy agricultural produce?</Text>
            <Text style={styles.subheading}>
              As a Cropway buyer, you can post bids for the agricultural crop
              you want to buy. Inform the market of your requirements and
              receive prompt responses from interested farmers/FPOs/SHGs or
              sellers.
            </Text>
            <Text style={[styles.subheading, {marginTop: 10}]}>
              We are dedicated to providing quality-assured, cost-effective, and
              customizable agri produce procurement to businesses and retailers.
            </Text>

            <View style={styles.flexbuyer}>
              <View style={styles.imgBg}>
                <Image
                  source={require('./images/delivered.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text style={styles.imgDesc}>
                Get the finest produce delivered at the best prices to your
                doorstep
              </Text>
            </View>

            <View style={styles.flexbuyer}>
              <View style={styles.imgBg}>
                <Image
                  source={require('./images/payment.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text style={styles.imgDesc}>
                Platform payment procedures that are integrated and safe
              </Text>
            </View>

            <View style={styles.flexbuyer}>
              <View style={styles.imgBg}>
                <Image
                  source={require('./images/medal.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text style={styles.imgDesc}>
                Customised logistical and quality assurance support
              </Text>
            </View>

            <View style={styles.flexbuyer}>
              <View style={styles.imgBg}>
                <Image
                  source={require('./images/VAS.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text style={styles.imgDesc}>
                Get value-added services for all your needs in one place
              </Text>
            </View>

            <View style={styles.flexbuyer}>
              <View style={styles.imgBg}>
                <Image
                  source={require('./images/shopping.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text style={styles.imgDesc}>
                Save time to go to market & buy online!
              </Text>
            </View>
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
                  {paddingHorizontal: 20, paddingVertical: 12},
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
    </>
  );
};

export default Buyer;

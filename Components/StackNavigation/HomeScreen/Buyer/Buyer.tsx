import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
const Buyer = () => {
  return (
    <>
      <ScrollView>
        <View>
          <View style={{backgroundColor: '#000', opacity: 0.9}}>
            <ImageBackground
              source={require('./images/Buyer_BG.webp')}
              resizeMode="cover"
              imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
              style={{
                width: '100%',
                height: 400,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{paddingHorizontal: 30}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 30,
                    color: '#fff',
                    fontWeight: '900',
                    fontFamily: 'serif',
                    marginVertical: 10,
                  }}>
                  Buyer
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 16,
                    color: '#fff',
                    fontWeight: '600',
                    fontFamily: 'serif',
                  }}>
                  Buy without the hassle and from a credible system for all of
                  your needs - it will be delivered straight to your door
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={{paddingHorizontal: 20, marginTop: 30}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                color: '#222',
                fontWeight: '700',
              }}>
              Do you buy agricultural produce?
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 17,
                color: '#223',
                marginVertical: 10,
                paddingHorizontal: 25,
              }}>
              As a Cropway buyer, you can post bids for the agricultural crop
              you want to buy. Inform the market of your requirements and
              receive prompt responses from interested farmers/FPOs/SHGs or
              sellers.
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 17,
                color: '#223',
                marginVertical: 10,
                paddingHorizontal: 25,
              }}>
              We are dedicated to providing quality-assured, cost-effective, and
              customizable agri produce procurement to businesses and retailers.
            </Text>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./images/delivered.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text>
                Get the finest produce delivered at the best prices to your
                doorstep
              </Text>
            </View>

            <View>
              <Image source={require('./images/payment.png')} />
              <Text>
                Platform payment procedures that are integrated and safe
              </Text>
            </View>

            <View>
              <Image source={require('./images/medal.png')} />
              <Text>Customised logistical and quality assurance support</Text>
            </View>

            <View>
              <Image source={require('./images/VAS.png')} />
              <Text>
                Get value-added services for all your needs in one place
              </Text>
            </View>

            <View>
              <Image source={require('./images/shopping.png')} />
              <Text>Save time to go to market & buy online!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Buyer;

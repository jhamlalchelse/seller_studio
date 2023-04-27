import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

const Seller = ({navigation}: any) => {
  return (
    <ScrollView>
      <View>
        <View style={{backgroundColor: '#000', opacity: 0.9}}>
          <ImageBackground
            source={require('./images/Seller_BG.webp')}
            resizeMode="cover"
            imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
            style={{
              width: '100%',
              height: 650,
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
                Seller
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: '600',
                  fontFamily: 'serif',
                  lineHeight: 23,
                }}>
                Get the best prices from a diverse range of buyers and present
                your efforts to the global and local markets.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{paddingVertical: 20}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: '700',
              color: '#333',
              fontFamily: 'serif',
            }}>
            Do you sell agricultural produce?
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              color: '#333',
              fontFamily: 'serif',
              paddingHorizontal: 40,
              marginTop: 15,
            }}>
            As a Cropway seller, you can post offers for the agricultural crop
            you want to sell and immediately connect with cropway-verified
            buyers from all over the world. Alternatively, simply accept a bid
            from an existing buyer to begin your secure transaction.
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              color: '#333',
              fontFamily: 'serif',
              paddingHorizontal: 40,
              marginTop: 15,
            }}>
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

          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              color: '#333',
              fontFamily: 'serif',
              paddingHorizontal: 40,
            }}>
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
              borderRadius: 30
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
          onPress={()=> navigation.navigate("Register")}
            style={{backgroundColor: '#5da7ca', borderRadius: 30}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                fontFamily: 'serif',
                paddingHorizontal: 20,
                paddingVertical: 12,
              }}>
              Register as seller/buyer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                fontFamily: 'serif',
                color: '#333',
              }}>
              Get In Touch {'-->'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Seller;

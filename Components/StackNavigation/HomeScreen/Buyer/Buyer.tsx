import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
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
                  Buyer
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
                  Buy without the hassle and from a credible system for all of
                  your needs - it will be delivered straight to your door
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={{paddingHorizontal: 20, paddingTop: 30, backgroundColor:"hsla(0,0%,85%,.2)"}}>
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
                marginVertical: 15,
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
                marginVertical: 15,
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
                marginVertical: 10,
                marginTop: 30
              }}>
              <View
                style={{
                  backgroundColor: '#d7ffd1',
                  paddingHorizontal: 25,
                  paddingVertical: 20,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./images/delivered.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text
                style={{
                  paddingHorizontal: 50,
                  marginVertical: 15,
                  textAlign: 'center',
                  color: '#223',
                }}>
                Get the finest produce delivered at the best prices to your
                doorstep
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <View
                style={{
                  backgroundColor: '#d7ffd1',
                  paddingHorizontal: 25,
                  paddingVertical: 20,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./images/payment.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text
                style={{
                  paddingHorizontal: 50,
                  marginVertical: 15,
                  textAlign: 'center',
                  color: '#223',
                }}>
                Platform payment procedures that are integrated and safe
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <View
                style={{
                  backgroundColor: '#d7ffd1',
                  paddingHorizontal: 25,
                  paddingVertical: 20,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./images/medal.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text
                style={{
                  paddingHorizontal: 50,
                  marginVertical: 15,
                  textAlign: 'center',
                  color: '#223',
                }}>
                Customised logistical and quality assurance support
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <View
                style={{
                  backgroundColor: '#d7ffd1',
                  paddingHorizontal: 25,
                  paddingVertical: 20,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./images/VAS.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text
                style={{
                  paddingHorizontal: 50,
                  marginVertical: 15,
                  textAlign: 'center',
                  color: '#223',
                }}>
                Get value-added services for all your needs in one place
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#d7ffd1',
                  paddingHorizontal: 25,
                  paddingVertical: 20,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./images/shopping.png')}
                  resizeMode="contain"
                  style={{width: 150, height: 150}}
                />
              </View>
              <Text
                style={{
                  paddingHorizontal: 60,
                  marginVertical: 15,
                  textAlign: 'center',
                  color: '#223',
                }}>
                Save time to go to market & buy online!
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 20 ,alignItems: 'center', justifyContent: 'space-around'}}>
              <TouchableOpacity
              onPress={()=> navigation.navigate("Register")}
              style={{backgroundColor: '#5da7ca', borderRadius: 30,}}>
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
                    color:"#333",
                  }}>
                  Get In Touch {"-->"}
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Buyer;

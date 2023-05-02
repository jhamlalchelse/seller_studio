import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from '../Styles/Home';

const toBuy = [
  {
    uri: require('./images/ToBuy/sugar.jpg'),
    name: 'Sugar',
    weight: '99900 mton',
    price: 3296700000,
  },
  {
    uri: require('./images/ToBuy/vegetables.jpg'),
    name: 'Vegetable',
    weight: '500 kg',
    price: 10000,
  },
  {
    uri: require('./images/ToBuy/maize.jpg'),
    name: 'Maize',
    weight: '100 kg',
    price: 10000,
  },
  {
    uri: require('./images/ToBuy/tilli.jpg'),
    name: 'Tilli',
    weight: '200 kg',
    price: 30000,
  },
];

const buyerReq = [
  {
    uri: require('./images/BuyerReq/paddy.jpg'),
    name: 'Paddy',
    category: 'Khanda Rice',
    weight: '1000 kg',
    price: '20000',
  },
  {
    uri: require('./images/BuyerReq/tilli.jpg'),
    name: 'Tilli',
    category: 'Black tilli',
    weight: '500 kg',
    price: '14000',
  },
  {
    uri: require('./images/BuyerReq/vegetables.jpg'),
    name: 'Vegetable',
    category: 'Garlic',
    weight: '500 kg',
    price: '17000',
  },
  {
    uri: require('./images/BuyerReq/millet.jpg'),
    name: 'Millet',
    category: 'Brown Top Miller',
    weight: '30 mton',
    price: '10000',
  },
];
const LatestProduct = () => {
  return (
    <View>
      {/* Latest Product- (To Buy) */}
      <View>
        <Text style={styles.heading}>Latest Product-(To Buy)</Text>
        {toBuy?.map((item, index) => {
          return (
            <View key={index} style={styles.latestProductBorder}>
              <Image source={item.uri} style={{width: 110, height: 110}} />
              <View style={{marginLeft: 30}}>
                <Text style={styles.textBlack}>{item.name}</Text>
                <Text style={[styles.textBlack, {paddingVertical: 5}]}>
                  {item.weight}
                </Text>
                <Text style={styles.textBlack}>Rs. {item.price}</Text>
              </View>
            </View>
          );
        })}
      </View>
      {/* Latest Product-(Buyer's Requirements) */}
      <View style={{marginVertical: 20}}>
        <Text style={styles.heading}>
          Latest Product-(Buyer's Requirements)
        </Text>
        {buyerReq?.map((item, index) => {
          return (
            <View key={index} style={styles.latestProductBorder}>
              <Image source={item.uri} style={{width: 110, height: 110}} />
              <View style={{marginLeft: 30}}>
                <Text style={styles.textBlack}>{item.name}</Text>
                <Text style={styles.textBlack}>{item.category}</Text>
                <Text style={styles.textBlack}>{item.weight}</Text>
                <Text style={styles.textBlack}>Rs. {item.price}</Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* Requirement */}
      <View>
        <ImageBackground
          source={require('./images/requirement-bg1.webp')}
          resizeMode="cover"
          imageStyle={{opacity: 0.8, backgroundColor: 'black'}}
          style={{width: '100%', height: 750}}>
          <ImageBackground
            source={require('./images/requirement_bg_sea.png')}
            resizeMode="contain"
            imageStyle={{
              opacity: 0.8,
              backgroundColor: 'black',
              borderRadius: 15,
            }}
            style={{
              width: '100%',
              height: 230,
              padding: 20,
              margin: 20,
              position: 'relative',
            }}>
            <View
              style={{
                backgroundColor: 'hsla(0,0%,100%,.45)',
                position: 'absolute',
                bottom: 10,
                left: 10,
                borderRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  justifyContent: 'space-around',
                }}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#002',
                      fontSize: 16,
                      fontFamily: 'serif',
                    }}>
                    6+
                  </Text>
                  <Text
                    style={{
                      color: '#002',
                      fontSize: 14,
                      fontFamily: 'serif',
                    }}>
                    Product Categories
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      color: '#002',
                      fontSize: 16,
                      fontFamily: 'serif',
                    }}>
                    1000+
                  </Text>
                  <Text
                    style={{
                      color: '#002',
                      fontSize: 14,
                      fontFamily: 'serif',
                    }}>
                    Active suppliers
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  justifyContent: 'space-around',
                }}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#002',
                      fontSize: 16,
                      fontFamily: 'serif',
                    }}>
                    100+
                  </Text>
                  <Text
                    style={{
                      color: '#002',
                      fontSize: 14,
                      fontFamily: 'serif',
                    }}>
                    Brand
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      color: '#002',
                      fontSize: 16,
                      fontFamily: 'serif',
                    }}>
                    2000+
                  </Text>
                  <Text
                    style={{
                      color: '#002',
                      fontSize: 14,
                      fontFamily: 'serif',
                    }}>
                    Deliveries
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* Request Form  */}
          <View
            style={{
              backgroundColor: '#fff',
              opacity: 0.7,
              marginHorizontal: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#000',
                fontSize: 28,
                fontFamily: 'serif',
                marginTop: 20,
                marginBottom: 10,
                opacity: 1,
              }}>
              Request a quote
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 18,
                fontFamily: 'serif',
                marginTop: 15,
              }}>
              Enter product/service name
            </Text>
            <TextInput
              placeholder="For Example: Vegetables,Seeds etc."
              style={{
                borderWidth: 0.9,
                paddingHorizontal: 15,
                paddingVertical: 7,
                marginVertical: 10,
                marginHorizontal: 30,
                borderRadius: 5,
                fontSize: 16,
                fontFamily: 'serif',
                color: '#333',
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 18,
                fontFamily: 'serif',
                marginTop: 15,
              }}>
              Enter your mobile number
            </Text>
            <View>
              {/* <Image source={require('')} /> */}
              <TextInput
                placeholder="+91"
                style={{
                  borderWidth: 0.9,
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  marginVertical: 10,
                  marginHorizontal: 30,
                  borderRadius: 5,
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: '#333',
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 18,
                fontFamily: 'serif',
                marginTop: 15,
              }}>
              Enter full name
            </Text>
            <TextInput
              placeholder="Enter your name"
              style={{
                borderWidth: 0.9,
                paddingHorizontal: 15,
                paddingVertical: 7,
                marginVertical: 10,
                marginHorizontal: 30,
                borderRadius: 5,
                fontSize: 16,
                fontFamily: 'serif',
                color: '#333',
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#5da7ca',
                padding: 12,
                alignSelf: 'center',
                borderRadius: 10,
                marginVertical: 20,
              }}>
              <Text style={{color: '#002', fontSize: 18, fontFamily: 'serif'}}>
                Submit Requirement
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default LatestProduct;

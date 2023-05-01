import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import styles from '../Styles/Home';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

const ourTech = [
  {
    uri: require('./images/OurTech/real-time.png'),
    name: 'Real-time monitoring',
  },
  {
    uri: require('./images/OurTech/marketplace.png'),
    name: '360 plarketplace & platform',
  },
  {
    uri: require('./images/OurTech/ml.png'),
    name: 'AI,ML, IOT & Blockchain',
  },
  {
    uri: require('./images/OurTech/gis.png'),
    name: 'Geospatial analytics',
  },
  {
    uri: require('./images/OurTech/weather.png'),
    name: 'Smart weather gri advisory',
  },
  {
    uri: require('./images/OurTech/decision.png'),
    name: 'Automated decision making',
  },
];
const Home = ({navigation}: any) => {
  return (
    <>
      <ScrollView>
        {/* Carousel */}
        {/* Our Solution */}
        <View style={{backgroundColor: 'white'}}>
          <Text style={[styles.heading, {fontSize: 30}]}>Our Solution</Text>
          <View style={{backgroundColor: '#000', opacity: 0.9}}>
            <ImageBackground
              source={require('../../../../src/assets/images/OurSolution-img1.jpg')}
              resizeMode="cover"
              imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
              style={{width: '100%', height: 350}}>
              <View style={{paddingVertical: 30}}>
                <Text style={styles.subHeading}>Farm-To-Fork</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                  style={styles.registerBtn}>
                  <Text
                    style={{textAlign: 'center', color: '#fff', fontSize: 16}}>
                    Register Now
                  </Text>
                </TouchableOpacity>
                <View style={{padding: 14}}>
                  <Text
                    style={[
                      styles.paraText,
                      {lineHeight: 23, paddingHorizontal: 15},
                    ]}>
                    We do not buy or sell crops, and we do not act as brokers.
                  </Text>
                  <Text
                    style={[
                      styles.paraText,
                      {lineHeight: 23, paddingHorizontal: 15},
                    ]}>
                    Rather, we provide you with the option of easily marketing
                    deliver the fastest harvest-to-retail in the industry via
                    our online platform.
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              backgroundColor: '#d3d3df',
              paddingVertical: 20,
            }}>
            <ImageBackground
              source={require('../../../../src/assets/images/OurSolution-img2.png')}
              resizeMode="contain"
              style={{
                width: '100%',
                height: 260,
              }}
            />
          </View>
        </View>

        {/* Latest Product */}
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
            source={require('../../../../src/assets/images/requirement-bg1.webp')}
            resizeMode="cover"
            imageStyle={{opacity: 0.8, backgroundColor: 'black'}}
            style={{width: '100%', height: 750}}>
            <ImageBackground
              source={require('../../../../src/assets/images/requirement_bg_sea.png')}
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
                <Text
                  style={{color: '#002', fontSize: 18, fontFamily: 'serif'}}>
                  Submit Requirement
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* Businesses /Ecosystem /Stakeholders */}
        <View style={{marginVertical: 20}}>
          <Text style={styles.heading}>
            Businesses /Ecosystem /Stakeholders
          </Text>
          <Text style={styles.businessDesc}>
            We are dedicated to meeting all of your requirements in a single
            platform.
          </Text>
          <Text style={[styles.businessDesc, {marginBottom: 20}]}>
            This is your opportunity to present your efforts to the global
            market at any time and from any location!
          </Text>

          <View style={{marginVertical: 20}}>
            {/* Buyer */}
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Buyer')}>
                <View style={styles.buyerBG}>
                  <Image
                    source={require('../../../../src/assets/images/buyer_businesses_img.png')}
                    resizeMode="contain"
                    style={{width: 200, height: 170}}
                  />
                </View>
                <Text style={styles.buyerHeading}>Buyer</Text>
                <Text style={styles.buyerDesc}>
                  Buy without the hassle and from a credible system for all of
                  your needs - it will be delivered straight to your door.
                </Text>
              </TouchableOpacity>
            </View>
            {/* Seller */}
            <View style={{marginVertical: 30}}>
              <TouchableOpacity onPress={() => navigation.navigate('Seller')}>
                <View style={styles.buyerBG}>
                  <Image
                    source={require('../../../../src/assets/images/seller_businesses_img.png')}
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
                    source={require('../../../../src/assets/images/value-added-services_businesses_img.png')}
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

        {/* How To Order */}
        <View style={{paddingVertical: 30, backgroundColor: 'white'}}>
          <Text style={[styles.heading, {marginVertical: 5}]}>
            How to Orders
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{flexDirection: 'row'}}>
            <Image
              source={require('../../../../src/assets/images/how-to-order.png')}
              resizeMode="contain"
            />
          </ScrollView>
        </View>

        {/* Why choose us? */}
        <View style={{backgroundColor: 'rgba(217, 217, 217, 0.2)'}}>
          <Text style={styles.heading}>Why Choose Us?</Text>
          <View>
            <Image
              source={require('../../../../src/assets/images/why-choose-us_img1.jpg')}
              resizeMode="stretch"
              style={{height: 230, width: '90%', alignSelf: 'center'}}
            />
            <Text style={styles.whyChooseDesc}>
              Farm-to-fork fresh produce delivery is made possible through
              Cropway's Seller Studio, a platform for collaboration between
              stakeholders in the Agri value chain that incorporates technology
              and the agribusiness network.
            </Text>
          </View>

          <View style={{marginVertical: 30}}>
            <Image
              source={require('../../../../src/assets/images/why-choose-us_img2.jpg')}
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
            source={require('../../../../src/assets/images/cropway-services1.png')}
            resizeMode="contain"
            style={{height: 120, width: '90%', alignSelf: 'center'}}
          />
        </View>

        {/* Our Technology */}
        <View style={{backgroundColor: '#e0ffff', marginTop: 30}}>
          <Text style={[styles.heading]}>Our Technology</Text>

          <View style={{position: 'relative', marginVertical: 20}}>
            <View>
              {ourTech?.map((item, index) => {
                return (
                  <View style={styles.techBg} key={index}>
                    <View>
                      <Image
                        source={item.uri}
                        resizeMode="contain"
                        style={{height: 100}}
                      />
                    </View>
                    <View>
                      <Text style={styles.techText}>{item.name}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <Image
              source={require('../../../../src/assets/images/our-tech-drone-img.png')}
              resizeMode="contain"
              style={{
                position: 'absolute',
                bottom: -50,
                left: -50,
                zIndex: -1,
              }}
            />
          </View>
        </View>

        {/* Get In Touch */}
        <View style={{backgroundColor: '#e0ffff', position: 'relative'}}>
          <Text style={[styles.heading, {marginTop: 35, marginBottom: 5}]}>
            Get In Touch
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'serif',
              color: '#333',
              marginBottom: 45,
            }}>
            Leave us a message
          </Text>
          {/* form */}
          <View
            style={{
              backgroundColor: '#f0f8ff',
              paddingHorizontal: 10,
              marginHorizontal: 15,
            }}>
            <View style={{marginVertical: 10}}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput placeholder="Name" style={styles.inputText} />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={styles.inputLabel}>Email Address *</Text>
              <TextInput placeholder="Enter Email" style={styles.inputText} />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={styles.inputLabel}>Contact Number *</Text>
              <TextInput placeholder="Enter Number" style={styles.inputText} />
            </View>

            <View style={{marginVertical: 10}}>
              <Text style={styles.inputLabel}>Your Message *</Text>
              <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.inputTextArea}
              />
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginLeft: 20,
              }}>
              <Text style={styles.sendMsgBtn}>Send Message</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require('../../../../src/assets/images/get-in-touch-img.png')}
            resizeMode="contain"
            style={{
              position: 'absolute',
              bottom: -80,
              left: 0,
              zIndex: -1,
            }}
          />
        </View>

        {/* Footer */}
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
      </ScrollView>
    </>
  );
};

export default Home;

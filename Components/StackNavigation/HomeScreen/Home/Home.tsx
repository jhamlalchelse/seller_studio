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
        <View>
          <Text style={[styles.textHeading, {fontSize: 30}]}>Our Solution</Text>
          <View style={{backgroundColor: '#000', opacity: 0.9}}>
            <ImageBackground
              source={require('../../../../src/assets/images/OurSolution-img1.jpg')}
              resizeMode="cover"
              imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
              style={{width: '100%', height: 350}}>
              <View style={{paddingVertical: 30}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 25,
                    color: '#fff',
                    fontWeight: '500',
                    fontFamily: 'time',
                  }}>
                  Farm-To-Fork
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                  style={{
                    backgroundColor: '#5da7ca',
                    paddingVertical: 9,
                    alignSelf: 'center',
                    margin: 30,
                    borderRadius: 20,
                    paddingHorizontal: 60,
                  }}>
                  <Text
                    style={{textAlign: 'center', color: '#fff', fontSize: 16}}>
                    Register Now
                  </Text>
                </TouchableOpacity>
                <View style={{padding: 14}}>
                  <Text style={[styles.ourSolTextPara,{lineHeight: 23}]}>
                    We do not buy or sell crops, and we do not act as brokers.
                  </Text>
                  <Text style={[styles.ourSolTextPara,{lineHeight: 23}]}>
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
          <Text style={styles.textHeading}>Latest Product-(To Buy)</Text>
          {toBuy?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderWidth: 1,
                  marginVertical: 10,
                  marginHorizontal: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <Image source={item.uri} style={{width: 110, height: 110}} />
                <View style={{marginLeft: 30}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    {item.weight}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    Rs. {item.price}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Latest Product-(Buyer's Requirements) */}
        <View style={{marginVertical: 20}}>
          <Text style={styles.textHeading}>
            Latest Product-(Buyer's Requirements)
          </Text>
          {buyerReq?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderWidth: 1,
                  marginVertical: 10,
                  marginHorizontal: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <Image source={item.uri} style={{width: 110, height: 110}} />
                <View style={{marginLeft: 30}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                      width: 175
                    }}>
                   {item.category}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    {item.weight}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    Rs. {item.price}
                  </Text>
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
          <Text style={styles.textHeading}>
            Businesses /Ecosystem /Stakeholders
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'san-serif',
              fontWeight: '600',
              color: '#333',
              textAlign: 'center',
              paddingHorizontal: 12,
            }}>
            We are dedicated to meeting all of your requirements in a single
            platform.
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'san-serif',
              fontWeight: '600',
              color: '#333',
              textAlign: 'center',
              paddingHorizontal: 12,
              marginBottom: 30,
            }}>
            This is your opportunity to present your efforts to the global
            market at any time and from any location!
          </Text>

          <View style={{marginVertical: 20}}>
            {/* Buyer */}
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Buyer')}>
                <View
                  style={{
                    backgroundColor: '#88bc8f',
                    alignSelf: 'center',
                    borderRadius: 5,
                    padding: 10,
                  }}>
                  <Image
                    source={require('../../../../src/assets/images/buyer_businesses_img.png')}
                    resizeMode="contain"
                    style={{width: 200, height: 170}}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 23,
                    color: '#333',
                    fontWeight: '700',
                    fontFamily: 'georgia',
                    marginVertical: 10,
                  }}>
                  Buyer
                </Text>
                <Text
                  style={{
                    marginHorizontal: 15,
                    textAlign: 'center',
                    color: '#333',
                  }}>
                  Buy without the hassle and from a credible system for all of
                  your needs - it will be delivered straight to your door.
                </Text>
              </TouchableOpacity>
            </View>
            {/* Seller */}
            <View style={{marginVertical: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate('Seller')}>
              <View
                style={{
                  backgroundColor: '#88bc8f',
                  alignSelf: 'center',
                  borderRadius: 5,
                  padding: 10,
                }}>
                <Image
                  source={require('../../../../src/assets/images/seller_businesses_img.png')}
                  resizeMode="contain"
                  style={{width: 200, height: 170}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 23,
                  color: '#333',
                  fontWeight: '700',
                  fontFamily: 'georgia',
                  marginVertical: 10,
                }}>
                Seller
              </Text>
              <Text
                style={{
                  marginHorizontal: 15,
                  textAlign: 'center',
                  color: '#333',
                }}>
                Get the best prices from a diverse range of buyers and present
                your efforts to the global and local markets.
              </Text>
              </TouchableOpacity>
            </View>
            {/* Value-added Services */}
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('ValueAddedService')}>

              <View
                style={{
                  backgroundColor: '#88bc8f',
                  alignSelf: 'center',
                  borderRadius: 5,
                  padding: 10,
                }}>
                <Image
                  source={require('../../../../src/assets/images/value-added-services_businesses_img.png')}
                  resizeMode="contain"
                  style={{width: 200, height: 170}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 23,
                  color: '#333',
                  fontWeight: '700',
                  fontFamily: 'georgia',
                  marginVertical: 10,
                }}>
                Value-added Services
              </Text>
              <Text
                style={{
                  marginHorizontal: 15,
                  textAlign: 'center',
                  color: '#333',
                }}>
                All of the following services are offered by Cropway through
                internal operations and our network of specialised partners.
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* How To Order */}
        <View style={{paddingVertical: 30, backgroundColor: 'white'}}>
          <Text style={[styles.textHeading, {marginVertical: 5}]}>
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
          <Text style={styles.textHeading}>Why Choose Us?</Text>
          <View>
            <Image
              source={require('../../../../src/assets/images/why-choose-us_img1.jpg')}
              resizeMode="stretch"
              style={{height: 230, width: '90%', alignSelf: 'center'}}
            />
            <Text
              style={{
                marginHorizontal: '6%',
                marginTop: 10,
                fontSize: 14,
                fontFamily: 'serif',
                color: '#000',
                lineHeight: 21,
              }}>
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
            <Text
              style={{
                marginHorizontal: '6%',
                marginTop: 10,
                fontSize: 14,
                fontFamily: 'serif',
                color: 'black',
                lineHeight: 21,
              }}>
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
          <Text style={[styles.textHeading]}>Our Technology</Text>

          <View style={{position: 'relative', marginVertical: 20}}>
            <View>
              {ourTech?.map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: 'lightblue',
                      marginBottom: 15,
                      borderRadius: 5,
                      paddingHorizontal: 25,
                      alignSelf: 'center',
                    }}
                    key={index}>
                    <View>
                      <Image
                        source={item.uri}
                        resizeMode="contain"
                        style={{height: 100}}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 17,
                          color: '#333',
                          paddingLeft: 20,
                          width: 160,
                          textAlign: 'center',
                        }}>
                        {item.name}
                      </Text>
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
          <Text style={[styles.textHeading, {marginTop: 35, marginBottom: 5}]}>
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
              <Text
                style={{
                  paddingLeft: 25,
                  marginBottom: 10,
                  fontSize: 17,
                  fontFamily: 'serif',
                  color: '#333',
                }}>
                Name
              </Text>
              <TextInput
                placeholder="Name"
                style={{
                  borderWidth: 0.8,
                  padding: 7,
                  paddingHorizontal: 20,
                  fontSize: 17,
                  fontFamily: 'serif',
                  marginHorizontal: 20,
                  borderRadius: 10,
                  color: '#333',
                }}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  paddingLeft: 25,
                  marginBottom: 10,
                  fontSize: 17,
                  fontFamily: 'serif',
                  color: '#333',
                }}>
                Email Address *
              </Text>
              <TextInput
                placeholder="Enter Email"
                style={{
                  borderWidth: 0.8,
                  padding: 7,
                  paddingHorizontal: 20,
                  fontSize: 17,
                  fontFamily: 'serif',
                  color: '#333',
                  marginHorizontal: 20,
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  paddingLeft: 25,
                  marginBottom: 10,
                  fontSize: 17,
                  fontFamily: 'serif',
                  color: '#333',
                }}>
                Contact Number *
              </Text>
              <TextInput
                placeholder="Enter Number"
                style={{
                  borderWidth: 0.8,
                  padding: 7,
                  paddingHorizontal: 20,
                  fontSize: 17,
                  fontFamily: 'serif',
                  color: '#333',
                  marginHorizontal: 20,
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  paddingLeft: 25,
                  marginBottom: 10,
                  fontSize: 17,
                  fontFamily: 'serif',
                  color: '#333',
                }}>
                Your Message *
              </Text>
              <TextInput
                multiline={true}
                numberOfLines={10}
                style={{
                  height: 100,
                  borderWidth: 0.8,
                  padding: 7,
                  paddingHorizontal: 20,
                  fontSize: 17,
                  fontFamily: 'serif',
                  color: '#333',
                  marginHorizontal: 20,
                  borderRadius: 10,
                  textAlignVertical: 'top',
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginLeft: 20,
              }}>
              <Text
                style={{
                  padding: 10,
                  paddingHorizontal: 30,
                  fontSize: 18,
                  fontFamily: 'serif',
                  color: '#fff',
                  backgroundColor: '#4682b4',
                  alignSelf: 'center',
                  borderRadius: 5,
                  marginVertical: 20,
                }}>
                Send Message
              </Text>
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

          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'serif'}}>
              SUPPORT
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'serif',
              }}>
              Return and Exchange
            </Text>
          </View>

          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 20, fontFamily: 'serif'}}>
              COMPANY
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'serif',
              }}>
              About Us
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'serif',
              }}>
              Contact Us
            </Text>
          </View>

          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 20, fontFamily: 'serif'}}>
              LEGAL
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'serif',
              }}>
              Privacy Policy
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'serif',
              }}>
              Terms and Conditions
            </Text>
          </View>

          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 20, fontFamily: 'serif'}}>
              SELL WITH US
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'serif',
              }}>
              Sell on Cropway
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'serif',
              }}>
              Avail Services
            </Text>
          </View>

          <Text style={{textAlign: 'center', color: '#fff', marginTop: 30}}>
            {'\u00A9'} 2023, cropway.com
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 15,
    fontWeight: '700',
    color: '#333',
    fontFamily: 'serif',
  },
  ourSolTextPara: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    paddingHorizontal: 15,
  },
});

export default Home;

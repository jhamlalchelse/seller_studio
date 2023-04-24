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
} from 'react-native';

const Home = () => {
  return (
    <>
      <ScrollView>
        {/* Our Solution */}
        <View>
          <Text style={styles.textHeading}>Our Solution</Text>
          <View style={{backgroundColor: '#000', opacity: 0.9}}>
            <ImageBackground
              source={require('../src/assets/images/OurSolution-img1.jpg')}
              resizeMode="cover"
              imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
              style={{width: '100%', height: 350}}>
              <View style={{marginVertical: 30}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 23,
                    color: '#fff',
                    fontWeight: '900',
                    fontFamily: 'poppins',
                  }}>
                  Farm-To-Fork
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#5da7ca',
                    padding: 8,
                    alignSelf: 'center',
                    width: 150,
                    margin: 30,
                    borderRadius: 20,
                  }}>
                  <Text style={{textAlign: 'center', color: '#fff'}}>
                    Register Now
                  </Text>
                </TouchableOpacity>
                <View style={{padding: 14}}>
                  <Text style={styles.ourSolTextPara}>
                    We do not buy or sell crops, and we do not act as brokers.
                  </Text>
                  <Text style={styles.ourSolTextPara}>
                    Rather, we provide you with the option of easily marketing
                    deliver the fastest harvest-to-retail in the industry via
                    our online platform.
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <ImageBackground
            source={require('../src/assets/images/OurSolution-img2.png')}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 260,
              marginVertical: 20,
              backgroundColor: '#f0f8ff',
            }}
          />
        </View>

        {/* Latest Product */}
        <View>
          <Text style={styles.textHeading}>Latest Product-(To Buy)</Text>
          {[1, 2, 3, 4]?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderWidth: 1,
                  marginVertical: 10,
                  marginHorizontal: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../src/assets/images/OurSolution-img1.jpg')}
                  style={{width: 110, height: 110}}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    Sugar
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    657 kg
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    Rs. 12999
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
          {[1, 2, 3, 4]?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderWidth: 1,
                  marginVertical: 10,
                  marginHorizontal: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../src/assets/images/OurSolution-img1.jpg')}
                  style={{width: 110, height: 110}}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    Sugar
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    657 kg
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      paddingRight: 30,
                      color: '#220',
                    }}>
                    Rs. 12999
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Requirement */}
        <View>
          <ImageBackground
            source={require('../src/assets/images/requirement-bg1.webp')}
            resizeMode="cover"
            imageStyle={{opacity: 0.8, backgroundColor: 'black'}}
            style={{width: '100%', height: 750}}>
            <ImageBackground
              source={require('../src/assets/images/requirement_bg_sea.png')}
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
            <View style={{backgroundColor: '#fff', opacity: 0.7, marginHorizontal: 10, borderRadius: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 25,
                  fontFamily: 'serif',
                  marginTop: 25,
                  marginBottom: 10
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
                  borderWidth: .9,
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  marginVertical: 10,
                  marginHorizontal: 30,
                  borderRadius: 5,
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

        
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 15,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'serif',
  },
  ourSolTextPara: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    padding: 10,
  },
});

export default Home;

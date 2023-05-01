import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from '../Styles/VAS';

const ValueAddedService = ({navigation}: any) => {
  return (
    <ScrollView>
      <View>
        <View style={{backgroundColor: '#000', opacity: 0.9}}>
          <ImageBackground
            source={require('./images/VAS_BG.webp')}
            resizeMode="cover"
            imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
            style={styles.buyerBG}>
            <View>
              <Text
                style={[ styles.buyerHeading, {
                  paddingHorizontal: 75,
                }]}>
                VALUE-ADDED-SERVICES
              </Text>
              <Text
                style={[ styles.buyerDesc, {
                  paddingHorizontal: 20,
                }]}>
                All of the following services are offered by Cropway through
                internal operations and our network of specialised partners
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{paddingVertical: 30}}>
          {/* img1 */}
          <View
            style={styles.outerBg}>
            <View style={{alignSelf: 'center'}}>
              <ImageBackground
                source={require('./images/value-img1.jpg')}
                resizeMode="stretch"
                imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
                style={styles.bgImage}>
                <View
                  style={styles.bgTextDiv}>
                  <Text
                    style={styles.bgHeading}>
                    Logistics & storage facilities
                  </Text>
                  <Text
                    style={styles.bgDesc}>
                    With Cropway's extensive range of services, all value chain
                    participants can effectively store and transport
                    agricultural goods, resulting in a seamless experience
                    thanks to the dig ital platform.
                  </Text>
                  <Text
                    style={styles.bgDesc}>
                    These offerings include expert consultation, procurement
                    assistance, audit, and monitoring, as well as storage and
                    delivery in India and abroad.
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          {/* img2 */}
          <View
            style={[styles.outerBg,{marginVertical: 20}]}>
            <View style={{alignSelf: 'center'}}>
              <ImageBackground
                source={require('./images/value-img2.jpg')}
                resizeMode="stretch"
                imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
                style={styles.bgImage}>
                <View
                  style={styles.bgTextDiv}>
                  <Text
                    style={styles.bgHeading}>
                    Packaging, grading & sorting
                  </Text>
                  <Text
                    style={styles.bgDesc}>
                    Cropway connects you to a variety of potential packaging,
                    grading, and sorting opportunities in the agri ecosystem
                    enabled by technology possibilities.
                  </Text>
                  <Text
                   style={[styles.bgDesc, {marginTop: 15}]}>
                    We help our clients value-add processes by acting as
                    gatekeepers for the quality and quanitty of the purchased
                    produce
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          {/* img3 */}
          <View
            style={styles.outerBg}>
            <View style={{alignSelf: 'center'}}>
              <ImageBackground
                source={require('./images/value-img3.jpg')}
                resizeMode="stretch"
                imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
                style={styles.bgImage}>
                <View
                  style={styles.bgTextDiv}>
                  <Text
                    style={styles.bgHeading}>
                    Processing
                  </Text>
                  <Text
                    style={styles.bgDesc}>
                    Agriprocessing businesses make significant contributions to
                    the value chain of several commodities. These businesses
                    must purchase, store, and process large quantities of
                    commodities. Cropway and other Processors collaborate to
                    make procurement and storage easier for any prospective
                    client through the seller studio.
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>

        {/* Other Service */}
        <View
          style={{
            backgroundColor: 'rgb(230, 244, 248)',
            padding: 10,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontWeight: '900',
              color: '#110',
              fontSize: 20,
              fontFamily: 'serif',
            }}>
            Other Services
          </Text>
          <Text
            style={styles.otherServiceDesc}>
            Cropway is establishing a rural retail network of village-level
            entrepreneurs for last-mile delivery and aggregation, while
            collaborating with partners who already provide services to farmers
            on a large scale.
          </Text>

          <Text
             style={[styles.otherServiceDesc,{ paddingVertical: 15}]}>
            Governments, agri expert universities, non-governmental
            organisations (NGOs), charitable organisations, CSR initiatives,
            logistics companies, and for-profit agribusinesses are all covered.
            They strive to improve equity and agricultural productivity. They
            assist in technology transfer and institution building in addition
            to guiding policies. Cropway works with these organisations to
            develop and put into practise replicable ideas that will quickly
            spread an effective and equitable value chain among the agri
            community.
          </Text>

          <Text
            style={styles.otherServiceDesc}>
            If you provide any of these solutions, you can market your services
            to potential buyers and sellers, as well as vice versa, so that
            clients can benefit from a convenient one-stop shopping experience
          </Text>
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

export default ValueAddedService;

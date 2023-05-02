import React from 'react';
import {Image, ScrollView, Text, View, SafeAreaView} from 'react-native';
import styles from '../Styles/Home';

import OurSolution from './OurSolution';
import LatestProduct from './LatestProduct';
import Business from './Business';
import WhyChooseUs from './WhyChooseUs';
import OurTech from './OurTech';
import GetInTouch from './GetInTouch';
import Footer from './Footer';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Carousel */}

        {/* Our Solution */}
        <OurSolution navigation={navigation} />

        {/* Latest Product */}
        <LatestProduct />

        {/* Businesses /Ecosystem /Stakeholders */}
        <Business navigation={navigation} />

        {/* How To Order */}
        <View style={{paddingVertical: 30, backgroundColor: 'white'}}>
          <Text style={[styles.heading, {marginVertical: 5}]}>
            How to Orders
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{flexDirection: 'row'}}>
            <Image
              source={require('./images/how-to-order.png')}
              resizeMode="contain"
            />
          </ScrollView>
        </View>

        {/* Why choose us? */}
        <WhyChooseUs />

        {/* Our Technology */}
        <OurTech />

        {/* Get In Touch */}
        <GetInTouch />

        {/* Footer */}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

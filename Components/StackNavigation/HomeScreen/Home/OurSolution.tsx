import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from '../Styles/Home';

const OurSolution = ({navigation}: any) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={[styles.heading, {fontSize: 30}]}>Our Solution</Text>
      <View style={{backgroundColor: '#000', opacity: 0.9}}>
        <ImageBackground
          source={require('./images/OurSolution-img1.jpg')}
          resizeMode="cover"
          imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
          style={{width: '100%', height: 350}}>
          <View style={{paddingVertical: 30}}>
            <Text style={styles.subHeading}>Farm-To-Fork</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={styles.registerBtn}>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 16}}>
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
                deliver the fastest harvest-to-retail in the industry via our
                online platform.
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
          source={require('./images/OurSolution-img2.png')}
          resizeMode="contain"
          style={{
            width: '100%',
            height: 260,
          }}
        />
      </View>
    </View>
  );
};

export default OurSolution;

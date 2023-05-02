import {
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from '../Styles/Home';

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
const OurTech = () => {
  return (
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
          source={require('./images/our-tech-drone-img.png')}
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
  );
};

export default OurTech;

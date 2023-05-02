import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderHeading from '../Dummy/HeaderHeading';
import BorderBottom from '../Dummy/BorderBottom';
import {TouchableOpacity} from 'react-native-gesture-handler';

import AntIcon from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const [showMarketPrice, setShowMarketPrice] = useState(false);
  const [showEnquiries, setShowEnquiries] = useState(false);
  const [showActiveProduct, setShowActiveProduct] = useState(false);
  return (
    <View>
      <HeaderHeading heading={'Home'} />
      <BorderBottom />
      <Text
        style={{
          fontSize: 20,
          color: '#223',
          fontFamily: 'georgia',
          marginTop: 20,
          marginLeft: 5,
          marginBottom: 8,
          fontWeight: '700',
        }}>
        Welcome FARMER! to cropway
      </Text>

      <View>
        <View>
          <TouchableOpacity
            onPress={() => setShowMarketPrice(!showMarketPrice)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <HeaderHeading heading={'Market Price'} />
              {showMarketPrice ? (
                <AntIcon
                  name={'up'}
                  size={23}
                  color={'#555'}
                  style={{marginRight: 15}}
                />
              ) : (
                <AntIcon
                  name={'down'}
                  size={23}
                  color={'#555'}
                  style={{marginRight: 15}}
                />
              )}
            </View>
            <BorderBottom />
          </TouchableOpacity>
        </View>
        <Text style={showMarketPrice ? styles.displayFlex : styles.displayNone}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse
          non iste tempore aliquid laudantium praesentium consectetur reiciendis
          similique, deleniti, ullam quidem ad ex cumque? Adipisci fugiat eaque
          nobis. Tempore!
        </Text>
      </View>

      <View style={{marginVertical: 15}}>
        <View>
          <TouchableOpacity onPress={() => setShowEnquiries(!showEnquiries)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <HeaderHeading heading={'recieved Enquiries'} />
              {showEnquiries ? (
                <AntIcon
                  name={'up'}
                  size={23}
                  color={'#555'}
                  style={{marginRight: 15}}
                />
              ) : (
                <AntIcon
                  name={'down'}
                  size={23}
                  color={'#555'}
                  style={{marginRight: 15}}
                />
              )}
            </View>
            <BorderBottom />
          </TouchableOpacity>
        </View>
        <Text style={showEnquiries ? styles.displayFlex : styles.displayNone}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse
          non iste tempore aliquid laudantium praesentium consectetur reiciendis
          similique, deleniti, ullam quidem ad ex cumque? Adipisci fugiat eaque
          nobis. Tempore!
        </Text>
      </View>

      <View>
        <View>
          <TouchableOpacity
            onPress={() => setShowActiveProduct(!showActiveProduct)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <HeaderHeading heading={'Active Products'} />
              {showActiveProduct ? (
                <AntIcon
                  name={'up'}
                  size={23}
                  color={'#555'}
                  style={{marginRight: 15}}
                />
              ) : (
                <AntIcon
                  name={'down'}
                  size={23}
                  color={'#555'}
                  style={{marginRight: 15}}
                />
              )}
            </View>
            <BorderBottom />
          </TouchableOpacity>
        </View>
        <Text
          style={showActiveProduct ? styles.displayFlex : styles.displayNone}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse
          non iste tempore aliquid laudantium praesentium consectetur reiciendis
          similique, deleniti, ullam quidem ad ex cumque? Adipisci fugiat eaque
          nobis. Tempore!
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  displayNone: {
    display: 'none',
  },
  displayFlex: {
    display: 'flex',
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 16,
    fontFamily: 'serif',
  },
});

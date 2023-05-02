import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import HeaderHeading from '../Dummy/HeaderHeading';
import BorderBottom from '../Dummy/BorderBottom';

const CropwayGuide = () => {
  return (
    <View style={{paddingVertical: 5}}>
      <HeaderHeading heading={'Cropway Guide'} />
      <BorderBottom />
      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'serif',
            color: '#333',
            fontWeight: '700',
          }}>
          Status
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              width: '35%',
              fontSize: 18,
              fontFamily: 'serif',
              color: 'green',
            }}>
            Active
          </Text>
          <Text
            style={{
              width: '5%',
              color: 'black',
              fontWeight: '900',
              fontSize: 17,
            }}>
            :
          </Text>
          <Text
            style={{
              width: '60%',
              fontSize: 18,
              fontFamily: 'serif',
              color: '#000',
            }}>
            Buyer sends quatation to seller.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              width: '35%',
              fontSize: 18,
              fontFamily: 'serif',
              color: 'coral',
            }}>
            Pending
          </Text>
          <Text
            style={{
              width: '5%',
              color: 'black',
              fontWeight: '900',
              fontSize: 17,
            }}>
            :
          </Text>
          <Text
            style={{
              width: '60%',
              fontSize: 18,
              fontFamily: 'serif',
              color: '#000',
            }}>
            Seller accepted the buyer's order.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              width: '35%',
              fontSize: 18,
              fontFamily: 'serif',
              color: 'crimson',
            }}>
            Cancelled
          </Text>
          <Text
            style={{
              width: '5%',
              color: 'black',
              fontWeight: '900',
              fontSize: 17,
            }}>
            :
          </Text>
          <Text
            style={{
              width: '60%',
              fontSize: 18,
              fontFamily: 'serif',
              color: '#000',
            }}>
            Seller Declined buyer's order.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              width: '35%',
              fontSize: 18,
              fontFamily: 'serif',
              color: '#333',
            }}>
            Fulfilled
          </Text>
          <Text
            style={{
              width: '5%',
              color: 'black',
              fontWeight: '900',
              fontSize: 17,
            }}>
            :
          </Text>
          <Text
            style={{
              width: '60%',
              fontSize: 18,
              fontFamily: 'serif',
              color: '#000',
            }}>
            Seller complited buyer's order.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CropwayGuide;

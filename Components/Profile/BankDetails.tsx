import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import HeaderHeading from '../HeaderHeading';
import BorderBottom from '../BorderBottom';

const BankDetails = () => {
  return (
    <View style={{marginTop: 10}}>
      <HeaderHeading heading={'Bank details'} />
      <BorderBottom />
      <View style={{padding: 10}}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={{alignSelf: 'flex-end'}}
          onPress={() => console.warn('Edit!')}>
          <Text
            style={{
              width: '35%',
              fontSize: 18,
              fontFamily: 'serif',
              color: '#333',
            }}>
            Edit
          </Text>
        </TouchableHighlight>
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
            Bank Name
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
              color: '#333',
            }}>
            FARMER
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
            Branch Name
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
              color: '#333',
            }}>
            Raipur
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
            Account Number
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
              color: '#333',
            }}>
            4556987876
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
            IFSC
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
              color: '#333',
            }}>
            876987
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
            Account Holder Name
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
              color: '#333',
            }}>
            ABCD XYZ
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BankDetails;

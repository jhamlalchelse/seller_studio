import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import HeaderHeading from '../HeaderHeading';
import BorderBottom from '../BorderBottom';
import AddressDetails from './AddressDetails';
import BankDetails from './BankDetails';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <ScrollView>
      <View>
        {/* Profile */}
        <View>
          <HeaderHeading heading={'Profile'} />
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
                Name
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
                Gender
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
                Male
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
                Contact
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
                9878766765
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
                Email
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
                abcd@gmail.com
              </Text>
            </View>
          </View>
        </View>
        {/* Address details */}
        <AddressDetails />
        {/* Bank Details */}
        <BankDetails />

      
      </View>
    </ScrollView>
  );
};

export default Profile;

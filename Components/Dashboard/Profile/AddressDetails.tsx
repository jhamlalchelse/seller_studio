import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native';
import HeaderHeading from '../Dummy/HeaderHeading';
import BorderBottom from '../Dummy/BorderBottom';

const AddressDetails = () => {
  return (
        <View style={{marginTop: 10}}>
          <HeaderHeading heading={'Address details'} />
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
                  Address
                </Text>
                <Text style={{width: '5%', color:"black", fontWeight:'900', fontSize: 17}}>:</Text>
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
                  State
                </Text>
                <Text style={{width: '5%', color:"black", fontWeight:'900', fontSize: 17}}>:</Text>
                <Text
                  style={{
                    width: '60%',
                    fontSize: 18,
                    fontFamily: 'serif',
                    color: '#333',
                  }}>
                  Chhattisgarh
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
                  District
                </Text>
                <Text style={{width: '5%', color:"black", fontWeight:'900', fontSize: 17}}>:</Text>
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
                  Block
                </Text>
                <Text style={{width: '5%', color:"black", fontWeight:'900', fontSize: 17}}>:</Text>
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
                  Village/City
                </Text>
                <Text style={{width: '5%', color:"black", fontWeight:'900', fontSize: 17}}>:</Text>
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
            </View>
        </View>
  )
}

export default AddressDetails
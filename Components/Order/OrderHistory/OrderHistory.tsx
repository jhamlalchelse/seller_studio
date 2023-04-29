import React, {useState} from 'react';
import {View, Text, Image, TouchableHighlight, Alert} from 'react-native';
import HeaderHeading from '../../HeaderHeading';
import BorderBottom from '../../BorderBottom';
import DatePicker from './DatePicker';

const OrderHistory = () => {
  const [startDate, setStartDate] = useState('yyyy/mm/dd');
  const [endDate, setEndDate] = useState('yyyy/mm/dd');
  return (
    <View>
      <HeaderHeading heading={'Orders'} />
      <BorderBottom />
      {/* Total */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        {/* Total Orders */}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'lightblue',
              borderRadius: 50,
              padding: 20,
              paddingVertical: 23,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                paddingVertical: 5,
              }}>
              <Image
                source={require('./Images/total_orders.png')}
                resizeMode="contain"
                style={{height: 35}}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              fontFamily: 'serif',
              color: '#333',
              paddingTop: 8,
              textAlign: 'center',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              fontFamily: 'serif',
              color: '#333',
              textAlign: 'center',
            }}>
            Orders
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              fontFamily: 'serif',
              color: '#333',
              paddingTop: 8,
            }}>
            {' '}
            0
          </Text>
        </View>

        {/* Total Pending */}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              backgroundColor: 'lightblue',
              borderRadius: 50,
              padding: 20,
              paddingVertical: 23,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                paddingVertical: 5,
              }}>
              <Image
                source={require('./Images/total_pending.png')}
                resizeMode="contain"
                style={{height: 35}}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              fontFamily: 'serif',
              color: '#333',
              paddingTop: 8,
              textAlign: 'center',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              fontFamily: 'serif',
              color: '#333',
              textAlign: 'center',
            }}>
            Pending
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              fontFamily: 'serif',
              color: '#333',
              paddingTop: 8,
            }}>
            {' '}
            0
          </Text>
        </View>

        {/* Total Cancelled */}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'lightblue',
              borderRadius: 50,
              padding: 20,
              paddingVertical: 23,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                paddingVertical: 5,
              }}>
              <Image
                source={require('./Images/total_cancelled.png')}
                resizeMode="contain"
                style={{height: 35}}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              fontFamily: 'serif',
              color: '#333',
              paddingTop: 8,
              textAlign: 'center',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              fontFamily: 'serif',
              color: '#333',
              textAlign: 'center',
            }}>
            Cancelled
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              fontFamily: 'serif',
              color: '#333',
              paddingTop: 8,
            }}>
            {' '}
            0
          </Text>
        </View>
      </View>
      <HeaderHeading heading={'Orders List'} />
      {/* Select Start and End Date */}
      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'serif',
              color: '#333',
              paddingTop: 8,
            }}>
            Start Date
          </Text>
          <DatePicker initDate={startDate} setDate={setStartDate} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'serif',
              color: '#333',
              paddingTop: 8,
            }}>
            End Date
          </Text>
          <DatePicker initDate={endDate} setDate={setEndDate} />
        </View>
      </View>
      {/* Download Order */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{ alignSelf:"center"}}
        onPress={() => console.warn('Order Downloaded!')}>
        <Text
          style={{
            color: 'blue',
            fontSize: 18,
            padding: 10,
            textDecorationLine: 'underline',
          }}>
          Download Order
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default OrderHistory;

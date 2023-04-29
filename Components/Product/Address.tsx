import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Select from './Select';

const Address = () => {
  const [availableUnit, setAvailableUnit] = useState<string>('yyyy/mm//dd');
  return (
    <View>
      <Text
        style={{
          fontFamily: 'serif',
          fontSize: 23,
          color: '#223',
          textTransform: 'uppercase',
          paddingTop: 15,
          padding: 10,
        }}>
        ADDRESS
      </Text>
      <View style={{paddingHorizontal: 10}}>
        <View style={{paddingVertical: 5}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontSize: 19,
              color: '#003',
              fontWeight: '600',
            }}>
            Origin Address
          </Text>
          <TextInput
            inputMode="text"
            style={{
              fontSize: 17,
              fontFamily: 'serif',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              width: '95%',
              marginVertical: 10,
              backgroundColor: 'white',
            }}
          />
        </View>

        <View style={{paddingVertical: 5}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontSize: 19,
              color: '#003',
              fontWeight: '600',
            }}>
            Region of Origin
          </Text>
          <TextInput
            inputMode="text"
            style={{
              fontSize: 17,
              fontFamily: 'serif',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              width: '95%',
              marginVertical: 10,
              backgroundColor: 'white',
            }}
          />
        </View>

        <View style={{paddingVertical: 5}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontSize: 19,
              color: '#003',
              fontWeight: '600',
            }}>
            Country of Origin
          </Text>
          <Select
            data={['india', 'canada', 'france', 'japan', 'russia', 'germany']}
            defaultValue={availableUnit}
            setSelectValue={setAvailableUnit}
          />
        </View>
      </View>
    </View>
  );
};

export default Address;

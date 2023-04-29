import React from 'react';
import {View, Text, TextInput} from 'react-native';

const AdditionalComment = () => {
  return (
    <View style={{padding: 10, backgroundColor: 'lightblue'}}>
      <Text
        style={{
          fontFamily: 'serif',
          fontSize: 20,
          color: '#223',
          textTransform: 'uppercase',
          paddingBottom: 15,
        }}>
        Additional Comments
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={{
          height: 120,
          borderWidth: 1,
          fontSize: 17,
          fontFamily: 'serif',
          color: '#333',
          borderRadius: 5,
          textAlignVertical: 'top',
          width: '95%',
          backgroundColor: '#fff',
        }}
      />
    </View>
  );
};

export default AdditionalComment;

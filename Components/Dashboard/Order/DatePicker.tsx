import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import AntDesign from 'react-native-vector-icons/AntDesign';

const DatePicker = ({initDate, setDate}: any) => {
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.log(date);
    setDate(date);
    hideDatePicker();
  };
  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          height: 40,
          width: '95%',
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          borderRadius: 5,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'serif',
              color: 'black',
            }}>
            {JSON.stringify(initDate)?.slice(1, 11) || 'yyyy/mm/dd'}
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <AntDesign
              name={'close'}
              size={25}
              color={'#223'}
              style={{padding: 5, marginEnd: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name={'calendar'}
              size={25}
              color={'#333'}
              style={{paddingVertical: 3}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;

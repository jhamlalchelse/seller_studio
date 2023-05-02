import React, {useState} from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
    console.log(date)
    setDate(date);
    hideDatePicker();
  };
  return (
    <View>
      <TouchableOpacity
        onPress={showDatePicker}
        style={{
          borderWidth: 1,
          height: 40,
          width: '95%',
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          borderRadius: 5
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'serif',
            color: 'black',
          }}>
          {JSON.stringify(initDate)?.slice(1,11) || 'yyyy/mm/dd'}
        </Text>
      </TouchableOpacity>
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

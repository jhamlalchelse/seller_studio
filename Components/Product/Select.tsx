import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

const Select = ({data, defaultValue, setSelectValue}: any) => {
  return (
    <SelectDropdown
      data={data}
      defaultValue={defaultValue}
      onSelect={(selectedItem, index) => {
        setSelectValue(selectedItem);
      }}
      buttonStyle={{
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 5,
        marginVertical: 10,
        width: '95%',
      }}
      buttonTextStyle={{
        textAlign: 'left',
        fontFamily: 'serif',
        fontSize: 18,
      }}
      dropdownStyle={{
        backgroundColor: '#778899',
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
      rowTextStyle={{
        fontFamily: 'serif',
        fontSize: 16,
      }}
      selectedRowStyle={{
        backgroundColor: '#4682b4',
        borderRadius: 5,
      }}
      selectedRowTextStyle={{
        color: '#fff',
        fontSize: 20,
      }}
    //   search={true}
    //   searchInputStyle={{
    //     backgroundColor: '#fff',
    //     borderRadius: 5,
    //   }}
    //   searchInputTxtStyle={{
    //     fontSize: 18,
    //     fontFamily: 'serif',
    //   }}
    //   searchPlaceHolder="Search..."
    />
  );
};

export default Select;

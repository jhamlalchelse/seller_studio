import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const SelectCategory = ({navigation}: any) => {
  const [categoriesData, setCategoriesData] = useState<Array<string>>([]);
  const [activeButton, setActiveButton] = useState<string>('');

  const catsData = [
    {
      name: 'Cereals',
      category: ['Paddy', 'Barley', 'Maize', 'Millet', 'Wheat'],
    },
    {
      name: 'Others',
      category: ['Vagetables', 'Sugar'],
    },
    {
      name: 'Pulses',
      category: ['Lentil/Daal'],
    },
    {
      name: 'Oil Seeds',
      category: ['Tilli'],
    },
  ];
  type itemData = {
    name: string;
    category: Array<string>;
  };
  const addSubCatData = (item: itemData) => {
    setActiveButton(item.name);
    setCategoriesData(item.category);
  };

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            borderLeftWidth: 5,
            borderLeftColor: 'rgb(93, 167, 202)',
            height: 30,
            margin: 5,
          }}></View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'serif',
            fontWeight: '800',
            color: '#223',
          }}>
          Select Category
        </Text>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#777',
          marginVertical: 10,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 20,
        }}>
        {catsData?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => addSubCatData(item)}
              key={index}
              style={[
                item.name === activeButton
                  ? {backgroundColor: 'crimson'}
                  : {backgroundColor: '#5ca3c5'},
                {
                  padding: 10,
                  alignSelf: 'center',
                  borderRadius: 5,
                },
              ]}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '800',
                  fontFamily: 'serif',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View>
        {categoriesData?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Add Product', {item})}
              key={index}
              style={[
                {
                  backgroundColor: '#5f9ea0',
                  padding: 12,
                  borderRadius: 5,
                  margin: 10,
                },
              ]}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 17,
                  fontWeight: '800',
                  fontFamily: 'serif',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SelectCategory;

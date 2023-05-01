import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const RadioCheckbox = () => {
  const [fruit, setFruit] = useState('Apple');
  const [checkBoxData, setCheckBoxData] = useState<Array<string>>([]);

  const onCheck = (item: any) => {
    const isExist = checkBoxData?.filter(i => i === item);
    if (isExist.length) {
      setCheckBoxData(checkBoxData?.filter(i => i !== item));
    } else {
      setCheckBoxData([...checkBoxData, item]);
    }
  };
  return (
    <View style={{padding: 20}}>
      <View>
        {['Apple', 'Mango', 'Grapse', 'Banana']?.map((item, index) => {
          return (
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => setFruit(item)}
              key={index}>
              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={[
                    fruit === item
                      ? {backgroundColor: '#008008'}
                      : {backgroundColor: 'white'},
                    {
                      height: 14,
                      width: 14,
                      borderRadius: 7,
                    },
                  ]}></View>
              </View>
              <Text style={{marginLeft: 10, fontSize: 20, fontFamily: 'serif'}}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* checkbox */}

      <View style={{marginTop: 20}}>
        {['Apple', 'Mango', 'Grapse', 'Banana']?.map((item, index) => {
          return (
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => onCheck(item)}
              key={index}>
              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={[
                    checkBoxData.includes(item) ? styles.checkRight : null,
                  ]}></View>
              </View>
              <Text style={{marginLeft: 10, fontSize: 20, fontFamily: 'serif'}}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkRight: {
    borderColor: 'green',
    borderTopWidth: 0,
    borderBottomWidth: 3,
    borderStartWidth: 0,
    borderEndWidth: 3,
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    top: 0,
    width: 8,
    height: 17,
  },
});

export default RadioCheckbox;

import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Select from './Select';

const ProductDetails = () => {
  const [availableUnit, setAvailableUnit] = useState<string>('yyyy/mm//dd');
  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontFamily: 'serif',
          fontSize: 23,
          color: '#223',
          textTransform: 'uppercase',
          paddingTop: 5,
          paddingBottom: 10,
        }}>
        Product Details
      </Text>

      <View style={{paddingVertical: 5}}>
        <Text
          style={{
            fontFamily: 'serif',
            fontSize: 19,
            color: '#003',
            fontWeight: '600',
          }}>
          Product Type
        </Text>
        <Select
          data={['Brown Rice', 'White Rice', 'Black Rice']}
          defaultValue={availableUnit}
          setSelectValue={setAvailableUnit}
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
          Variety
        </Text>
        <Select
          data={['kg', 'quintal', 'metric ton']}
          defaultValue={availableUnit}
          setSelectValue={setAvailableUnit}
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
          Production Mode
        </Text>
        <Select
          data={['kg', 'quintal', 'metric ton']}
          defaultValue={availableUnit}
          setSelectValue={setAvailableUnit}
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
          Genetically Modified?
        </Text>
        <Select
          data={['kg', 'quintal', 'metric ton']}
          defaultValue={availableUnit}
          setSelectValue={setAvailableUnit}
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
          Variety Purity(min.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Moisture (max.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Protein (min.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Protein (max.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Caliber {'>'} 2,2mm (min.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Caliber {'>'} 2,2mm (max.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Broken grains (max.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Impurities consisting of grains (max.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Spouted grains(max.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Miscellanous impurities (max.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Germination capacity(min.%)
        </Text>
        <TextInput
          inputMode="numeric"
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
          Minimum specific weight(kg/hl)
        </Text>
        <TextInput
          inputMode="numeric"
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
    </View>
  );
};

export default ProductDetails;

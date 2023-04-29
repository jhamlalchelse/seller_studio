import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Select from './Select';
import {ScrollView} from 'react-native-gesture-handler';
import ProductDetails from './ProductDetails';
import Logistics from './Logistics';
import Address from './Address';
import Quality from './Quality';
import AdditionalComment from './Comment';
import ProofOfQCert from './ProofOfQCert';
import BorderBottom from './BorderBottom';
import HeaderHeading from './HeaderHeading';

const AddProduct = ({route}: any) => {
  const product = route.params.item;
  const [selectProduct, setSelectProduct] = useState<string>(product);
  const [selectBuySell, setSelectBuySell] = useState<string>('');
  const [availableUnit, setAvailableUnit] = useState<string>('yyyy/mm//dd');
  const [minimumUnit, setMinimumUnit] = useState<string>('yyyy/mm//dd');

  return (
    <ScrollView>
      <View>
        <HeaderHeading heading={"Add Product Screen"} />
        <BorderBottom />

        <View
          style={{
            backgroundColor: 'lightblue',
            padding: 10,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'serif',
                fontSize: 19,
                color: '#333',
                fontWeight: '800',
              }}>
              Product
            </Text>
            <Select
              data={['Millet', 'Maize', 'Paddy']}
              defaultValue={selectProduct}
              setSelectValue={setSelectProduct}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'serif',
                fontSize: 19,
                color: '#333',
                fontWeight: '800',
              }}>
              Buy or Sell
            </Text>
            <Select
              data={['Buy', 'Sell']}
              defaultValue={selectBuySell}
              setSelectValue={setSelectBuySell}
            />
          </View>

          {selectBuySell ? (
            <View>
              <View style={{paddingVertical: 5}}>
                <Text
                  style={{
                    fontFamily: 'serif',
                    fontSize: 19,
                    color: '#003',
                    fontWeight: '600',
                  }}>
                  Available Quantity
                </Text>
                <TextInput
                  placeholder="Quantity"
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

              <View>
                <Text
                  style={{
                    fontFamily: 'serif',
                    fontSize: 19,
                    color: '#003',
                    fontWeight: '600',
                  }}>
                  Unit
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
                  Price Per Weight Unit (Rs)
                </Text>
                <TextInput
                  placeholder="Price"
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
                  Minimum Order Quantity
                </Text>
                <TextInput
                  placeholder="Quantity"
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

              <View>
                <Text
                  style={{
                    fontFamily: 'serif',
                    fontSize: 19,
                    color: '#003',
                    fontWeight: '600',
                  }}>
                  Unit
                </Text>
                <Select
                  data={['kg', 'quintal', 'metric ton']}
                  defaultValue={minimumUnit}
                  setSelectValue={setMinimumUnit}
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
                  Gross Value (Rs)
                </Text>
                <TextInput
                  defaultValue="0"
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
          ) : null}
        </View>

        {selectBuySell ? (
          <>
            {/* Product Details */}
            <BorderBottom />
            <ProductDetails />

            {/* LOGISTICS */}
            <BorderBottom />
            <Logistics />
            {/* ADDRESS */}
            <BorderBottom />
            <Address />
            {/* PROOF OF QUALITY CERTIFICATION */}
            <BorderBottom />
            <ProofOfQCert />

            {/* QUALITY */}
            <BorderBottom />
            <Quality />
            {/* Additional Comments */}
            <BorderBottom />
            <AdditionalComment />
            {/* Add Product Button */}
            <TouchableOpacity
              style={{
                backgroundColor: '#5da7ca',
                padding: 10,
                alignSelf: 'center',
                marginVertical: 15,
                borderRadius: 7,
                width: '70%',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: 20,
                  fontFamily: 'serif',
                }}>
                Add Product
              </Text>
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default AddProduct;

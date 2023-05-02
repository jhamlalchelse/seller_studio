import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Select from './Select';
import DatePicker from './DatePicker';

const Logistics = () => {
  const [availableUnit, setAvailableUnit] = useState<string>('yyyy/mm//dd');

  const [initialDeliveryDate, setInitialDeliveryDate] = useState();
  const [finalDeliveryDate, setFinalDeliveryDate] = useState();
  const [expireDate, setExpireDate] = useState();

  const [logisticRadio, setLogisticRadio] = useState('Yes');

  const [reqValue, setReqValue] = useState<Array<number>>([]);

  const onCheckRequest = (id: number) => {
    const isExist = reqValue?.filter(item => item === id);
    if (isExist.length) {
      setReqValue(reqValue?.filter(i => i !== id));
    } else {
      setReqValue([...reqValue, id]);
    }
  };

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
        Logistics
      </Text>

      <View style={{backgroundColor: '#e0ffff', padding: 10}}>
        <View style={{paddingVertical: 5}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontSize: 19,
              color: '#003',
              fontWeight: '600',
            }}>
            Logistics Incoterms
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
            Would you like to have service quotation?(Optional)
          </Text>

          <View style={{paddingVertical: 10}}>
            {['Yes', 'No'].map((item, index) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}
                  onPress={() => setLogisticRadio(item)}
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
                        logisticRadio === item
                          ? {backgroundColor: '#008008'}
                          : {backgroundColor: 'white'},
                        {
                          height: 14,
                          width: 14,
                          borderRadius: 7,
                        },
                      ]}></View>
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'serif',
                      color: '#000',
                      marginLeft: 20,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'serif',
              color: 'black',
            }}>
            {' '}
            Optional - request values for :
          </Text>

          <View>
            {requestValue?.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => onCheckRequest(item.id)}
                  key={item.id}>
                  <View
                    style={{
                      borderWidth: 1,
                      height: 100,
                      width: '95%',
                      borderRadius: 5,
                      marginVertical: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        height: 20,
                        width: 20,
                        borderColor: '#333',
                        marginHorizontal: 20,
                      }}>
                      <View
                        style={[
                          reqValue.includes(item.id)
                            ? styles.rightInCheck
                            : null,
                        ]}></View>
                    </View>

                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'serif',
                        color: 'black',
                        width: '80%',
                      }}>
                      {item?.title || 'Loading Costs'}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View>
            <View style={{paddingVertical: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'serif',
                  color: 'black',
                }}>
                Initial Delivery Date :
              </Text>
              <DatePicker
                initDate={initialDeliveryDate}
                setDate={setInitialDeliveryDate}
              />
            </View>

            <View style={{paddingVertical: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'serif',
                  color: 'black',
                }}>
                Final Delivery Date :
              </Text>
              <DatePicker
                initDate={finalDeliveryDate}
                setDate={setFinalDeliveryDate}
              />
            </View>

            <View style={{paddingVertical: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'serif',
                  color: 'black',
                }}>
                Offer Expiration Date :
              </Text>
              <DatePicker initDate={expireDate} setDate={setExpireDate} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const requestValue = [
  {
    id: 1,
    title: 'Loading Costs',
  },
  {
    id: 2,
    title: ' Origin Terminal Handling Charge',
  },

  {
    id: 3,
    title: 'Origin Inland Haulage ',
  },
  {
    id: 4,
    title: 'Export Customs Formalities ',
  },
  {
    id: 5,
    title: 'Insurance ',
  },
  {
    id: 6,
    title: ' Destination Warehouseing',
  },
  {
    id: 7,
    title: 'Import Customs Formalities ',
  },
  {
    id: 8,
    title: ' Destination Terminal Handling Charge',
  },
  {
    id: 9,
    title: 'Discharge Costs',
  },
  {
    id: 10,
    title: 'Main Carriage Freight',
  },
];

const styles = StyleSheet.create({
  rightInCheck: {
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

export default Logistics;

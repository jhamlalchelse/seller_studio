import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Select from './Select';
import DatePicker from './DatePicker';

const Logistics = () => {
  const [availableUnit, setAvailableUnit] = useState<string>('yyyy/mm//dd');

  const [initialDeliveryDate, setInitialDeliveryDate] = useState();
  const [finalDeliveryDate, setFinalDeliveryDate] = useState();
  const [expireDate, setExpireDate] = useState();
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
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderRadius: 50,
                  backgroundColor: 'white',
                }}></View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'serif',
                  color: '#000',
                  marginLeft: 20,
                }}>
                Yes
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderRadius: 50,
                  backgroundColor: 'white',
                }}></View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'serif',
                  color: '#000',
                  marginLeft: 20,
                }}>
                No
              </Text>
            </View>
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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Loading Coasts
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Origin Terminal Handling Charge
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Origin Inland Haulage
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Export Customs Formalities
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Insurance
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Destination Warehouseing
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Import Customs Formalities
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Destination Terminal Handling Charge
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Discharge Costs
              </Text>
            </View>

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
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderColor: '#333',
                  marginHorizontal: 20,
                }}></View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  color: 'black',
                  width: '80%',
                }}>
                Main Carriage Freight
              </Text>
            </View>
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

export default Logistics;

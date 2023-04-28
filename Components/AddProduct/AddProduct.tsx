import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Button} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Select from './Select';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from './DatePicker';

const AddProduct = ({route}: any) => {
  const product = route.params.item;
  const [selectProduct, setSelectProduct] = useState<string>(product);
  const [selectBuySell, setSelectBuySell] = useState<string>('yyyy/mm//dd');
  const [availableUnit, setAvailableUnit] = useState<string>('yyyy/mm//dd');
  const [minimumUnit, setMinimumUnit] = useState<string>('yyyy/mm//dd');

  const [initialDeliveryDate, setInitialDeliveryDate] = useState();
  const [finalDeliveryDate, setFinalDeliveryDate] = useState();
  const [expireDate, setExpireDate] = useState();

  const countries = ['Millet', 'Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <ScrollView>
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
            Add Product Screen
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#777',
            padding: 5,
          }}></View>

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
              data={countries}
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

        {/* Product Details */}
        <View
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: 'grey',
            padding: 5,
          }}></View>

        <View style={{paddingHorizontal: 10}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontSize: 23,
              color: '#223',
              textTransform: 'uppercase',
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
              Moisture (max.%)
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
              Protein (min.%)
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
              Protein (max.%)
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
              Caliber {'>'} 2,2mm (min.%)
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
              Caliber {'>'} 2,2mm (max.%)
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
              Broken grains (max.%)
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
              Impurities consisting of grains (max.%)
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
              Spouted grains(max.%)
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
              Miscellanous impurities (max.%)
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
              Germination capacity(min.%)
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
              Minimum specific weight(kg/hl)
            </Text>
            <Select
              data={['kg', 'quintal', 'metric ton']}
              defaultValue={availableUnit}
              setSelectValue={setAvailableUnit}
            />
          </View>
        </View>

        {/* LOGISTICS */}
        <View
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: 'grey',
          }}></View>
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

        {/* ADDRESS */}
        <View
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: 'grey',
          }}></View>

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
            ADDRESS
          </Text>
          <View style={{paddingHorizontal: 10}}>
            <View style={{paddingVertical: 5}}>
              <Text
                style={{
                  fontFamily: 'serif',
                  fontSize: 19,
                  color: '#003',
                  fontWeight: '600',
                }}>
                Origin Address
              </Text>
              <TextInput
                inputMode="text"
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
                Region of Origin
              </Text>
              <TextInput
                inputMode="text"
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
                Country of Origin
              </Text>
              <Select
                data={[
                  'india',
                  'canada',
                  'france',
                  'japan',
                  'russia',
                  'germany',
                ]}
                defaultValue={availableUnit}
                setSelectValue={setAvailableUnit}
              />
            </View>
          </View>
        </View>

        {/* PROOF OF QUALITY CERTIFICATION */}
        <View
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: 'grey',
            marginTop: 15
          }}></View>
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
            PROOF OF QUALITY CERTIFICATION
          </Text>
          <View style={{padding: 10, backgroundColor:"lightblue"}}>
            <View style={{paddingVertical: 5}}>
              <Text
                style={{
                  fontFamily: 'serif',
                  fontSize: 19,
                  color: '#003',
                  fontWeight: '600',
                }}>
                Certification Type
              </Text>
              <Select
                data={['india', 'canada']}
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
               Certification Document
              </Text>
              

             
            </View>


          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProduct;

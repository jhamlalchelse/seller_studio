import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Quality = () => {
  const [serviceRadio, setServiceRadio] = useState('Yes');

  const [qualConCert, setQualConCert] = useState<Array<number>>([]);
  const [ferWareHouse, setFerWareHouse] = useState<Array<number>>([]);
  const [buyerDelivery, setBuyerDelivery] = useState<Array<number>>([]);

  const onCheckRequest = (id: number, unique: string) => {
    const isQCCExist = qualConCert.filter(item => item === id);
    const isFWHExist = ferWareHouse.filter(item => item === id);
    const isLBDExist = buyerDelivery.filter(item => item === id);

    switch (unique) {
      case 'QCC':
        if (isQCCExist.length) {
          setQualConCert(qualConCert?.filter(i => i !== id));
        } else {
          setQualConCert([...qualConCert, id]);
        }
        break;

      case 'FWH':
        if (isFWHExist.length) {
          setFerWareHouse(ferWareHouse?.filter(i => i !== id));
        } else {
          setFerWareHouse([...ferWareHouse, id]);
        }

        break;

      case 'LBD':
        if (isLBDExist.length) {
          setBuyerDelivery(buyerDelivery?.filter(i => i !== id));
        } else {
          setBuyerDelivery([...buyerDelivery, id]);
        }
        break;
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
        QUALITY
      </Text>

      <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
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
                onPress={() => setServiceRadio(item)}
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
                      serviceRadio === item
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

        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'serif',
              color: 'black',
              marginVertical: 10,
            }}>
            {' '}
            Quality control and Certification :
          </Text>

          {qualContCertData?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onCheckRequest(item.id, 'QCC')}
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
                  {/* <View
                  style={{
                    borderWidth: 1,
                    height: 20,
                    width: 20,
                    borderColor: '#333',
                    marginHorizontal: 20,
                  }}></View> */}

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
                        qualConCert.includes(item.id)
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
                    {item?.title || 'Fit for Animal consumption'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'serif',
              color: 'black',
              marginVertical: 10,
            }}>
            {' '}
            Farmer"s Warehouse :
          </Text>

          {farWareHouseData?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onCheckRequest(item.id, 'FWH')}
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
                        ferWareHouse.includes(item.id)
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
                    {item?.title || 'Fit for Animal consumption'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'serif',
              color: 'black',
              marginVertical: 10,
            }}>
            {' '}
            Logistics and Buyers delivery :
          </Text>

          {LogAndBuyDelData?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onCheckRequest(item.id, 'LBD')}
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
                        buyerDelivery.includes(item.id)
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
                    {item?.title || 'Fit for Animal consumption'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const qualContCertData = [
  {
    id: 1,
    title: 'Fit for Animal consumption',
  },
  {
    id: 2,
    title: 'Fit for Human consumption ',
  },
  {
    id: 3,
    title: 'Free from undesirable substances ',
  },

  {
    id: 4,
    title: 'Non-GMO certification ',
  },
];

const farWareHouseData = [
  {
    id: 1,
    title: 'Cleanliness inspections',
  },
  {
    id: 2,
    title: 'Sampling and Quality assessment',
  },
  {
    id: 3,
    title: 'Metering services',
  },

  {
    id: 4,
    title: 'Loading and discharge supervision',
  },
];

const LogAndBuyDelData = [
  {
    id: 1,
    title: 'Loading and discharge servision',
  },
  {
    id: 2,
    title: 'Quality control',
  },
  {
    id: 3,
    title: 'Damage Servey',
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

export default Quality;

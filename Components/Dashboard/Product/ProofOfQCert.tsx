import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Select from './Select';
import DocumentPicker from './DocumentPicker';

const ProofOfQCert = () => {
  const [availableUnit, setAvailableUnit] = useState<string>('yyyy/mm//dd');
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
        PROOF OF QUALITY CERTIFICATION
      </Text>
      <View style={{padding: 10, backgroundColor: 'lightblue'}}>
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
          <DocumentPicker />
        </View>
      </View>
    </View>
  );
};

export default ProofOfQCert;

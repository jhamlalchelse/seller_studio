import React,{useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import DockPick from 'react-native-document-picker';

const DocumentPicker = () => {
 const [docName, setDocName] = useState<string>('')

  const selcetDoc = async () => {
    try {
      const doc = await DockPick.pick();
      console.log(doc);
      setDocName(doc[0].name || '')
    } catch (error) {
      if (DockPick.isCancel(error)) {
        console.log('Dock Pick is Cancle By User', error);
      } else {
        console.log('Error: ', error);
      }
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={selcetDoc}
        style={{
          borderWidth: 1,
          paddingVertical: 12,
          width: '95%',
          borderRadius: 5,
          backgroundColor: '#fff',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: 'serif',
            fontSize: 18,
            color: '#223',
            paddingHorizontal: 15
          }}>
          {docName || "Select Certificate"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocumentPicker;

import React from 'react'
import {View, Text} from 'react-native'

const HeaderHeading = ({heading}: any) => {
  return (
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
            {heading}
          </Text>
        </View>
  )
}

export default HeaderHeading
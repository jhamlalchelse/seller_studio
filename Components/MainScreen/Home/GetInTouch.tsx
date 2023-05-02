import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import styles from '../Styles/Home';

const GetInTouch = () => {
  return (
    <View style={{backgroundColor: '#e0ffff', position: 'relative'}}>
    <Text style={[styles.heading, {marginTop: 35, marginBottom: 5}]}>
      Get In Touch
    </Text>
    <Text
      style={{
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'serif',
        color: '#333',
        marginBottom: 45,
      }}>
      Leave us a message
    </Text>
    {/* form */}
    <View
      style={{
        backgroundColor: '#f0f8ff',
        paddingHorizontal: 10,
        marginHorizontal: 15,
      }}>
      <View style={{marginVertical: 10}}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput placeholder="Name" style={styles.inputText} />
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.inputLabel}>Email Address *</Text>
        <TextInput placeholder="Enter Email" style={styles.inputText} />
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.inputLabel}>Contact Number *</Text>
        <TextInput placeholder="Enter Number" style={styles.inputText} />
      </View>

      <View style={{marginVertical: 10}}>
        <Text style={styles.inputLabel}>Your Message *</Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          style={styles.inputTextArea}
        />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginLeft: 20,
        }}>
        <Text style={styles.sendMsgBtn}>Send Message</Text>
      </TouchableOpacity>
    </View>

    <Image
      source={require('./images/get-in-touch-img.png')}
      resizeMode="contain"
      style={{
        position: 'absolute',
        bottom: -80,
        left: 0,
        zIndex: -1,
      }}
    />
  </View>
  )
}

export default GetInTouch
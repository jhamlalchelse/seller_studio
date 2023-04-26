import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Register = () => {
  return (
    <>
      <View style={{paddingTop: 30}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'serif',
            color: '#5dafaf',
            textAlign: 'center',
          }}>
          WELCOME TO
        </Text>
        <Image
          source={require('./images/cropway-logo.png')}
          resizeMode="contain"
          style={{width: 230, alignSelf: 'center', marginVertical: 8}}
        />
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'serif',
            color: '#5dafaf',
            textAlign: 'center',
          }}>
          SELLER STUDIO
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'serif',
            color: 'black',
            textAlign: 'center',
            marginVertical: 20,
            width: '70%',
            alignSelf: 'center',
          }}>
          Login to access the seller studio and manage your account.
        </Text>

        {/* Form */}
        <View style={{marginTop: 10}}>
          <View
            style={{
              borderWidth: 0.6,
              borderColor: '#333',
              borderRadius: 30,
              width: '75%',
              alignSelf: 'center',
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <AntDesign name="user" size={15} color={'black'} />
            <TextInput
              placeholder="Username"
              style={{
                paddingVertical: 5,
                fontSize: 14,
                fontFamily: 'serif',
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 0.6,
              borderColor: '#333',
              borderRadius: 30,
              width: '75%',
              alignSelf: 'center',
              marginVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <AntDesign name="lock" size={15} color={'black'} />
            <TextInput
              placeholder="Password"
              style={{
                paddingVertical: 5,
                fontSize: 14,
                fontFamily: 'serif',
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 30,
              width: '75%',
              alignSelf: 'center',
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
                backgroundColor: '#5f9ea0',
            //   backgroundColor:
            //     'linear-gradient(91.01deg, rgb(191, 226, 186) 2.95%, rgb(93, 167, 202) 99.64%)',
            }}>
            <Text style={{textAlign: 'center', color:"#fff", fontSize: 16}}>SIGN IN</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 13, fontFamily: 'serif'}}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'rgb(93, 167, 202)',
                  fontSize: 13,
                  fontFamily: 'serif',
                }}>
                Sign Up Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Register;

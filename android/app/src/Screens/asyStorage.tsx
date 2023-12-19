/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AsyncStorageExamp() {
  const [data, setdata] = useState('');
  const add = async () => {
    try {
      await AsyncStorage.setItem('res', 'Luan');
    } catch (e) {
      console.error(e);
    }
  };

  const get = async () => {
    try {
      const value = await AsyncStorage.getItem('res');
      if (value !== null) {
        setdata(value);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
      <View style={styles.button}>
        <Button title={'add'} onPress={add} />
      </View>
      <View style={styles.button}>
        <Button title={'get'} onPress={get} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    marginBottom: 30,
    color: 'black',
  },
  button: {
    margin: 20,
    width: 250,
  },
});
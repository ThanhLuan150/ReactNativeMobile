import React, {FC} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Detail: FC = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
      navigation.goBack();
    };
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <TouchableOpacity onPress={handleGoBack} style={{ backgroundColor:'blue' , padding:20}}>
        <Text>goBack</Text>
      </TouchableOpacity>
      <Text>Detail</Text>
      <Text>Họ Và tên: Lê Trương Thành Luân</Text>
      <Text>Age:20</Text>
      <Text>Luôn luôn , vui vẻ hòa đồng với mọi người</Text>
    </View>
  );
};
export default Detail;
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
export default function UseQuery() {
  const {data, isFetching} = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://63a5721a318b23efa793a770.mockapi.io/api/users')
        .then(res => res.data),
  });
  console.log('data------------->', data);
  console.log('isFetching------------->', isFetching);
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: item.image}} />
        <View>
            <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        padding: 16,
    },
  text: {
    color: 'black',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

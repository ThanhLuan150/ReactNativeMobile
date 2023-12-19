/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useState} from 'react';
// eslint-disable-next-line prettier/prettier
import { FlatList,Image,Modal,Pressable,SafeAreaView,StyleSheet,TouchableOpacity,Text,TextInput,View} from 'react-native';
import hookHomePage from '../Hook/HookHomePage';
const HomePage: FC = () => {
  const {openModal,students,selectedStudent,modalVisible,setSelectedStudent,setModalVisible,searchQuery,setSearchQuery,filteredStudents,} = hookHomePage();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search...."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <TouchableOpacity style={{ backgroundColor:'red', paddingHorizontal:20, paddingTop:10, paddingBottom:10 }}>
        <Text>Detail</Text>
      </TouchableOpacity>
      <Text style={styles.title}>List students</Text>
      <FlatList
        data={filteredStudents}
        renderItem={({item, index}) => (
          <View key={index} style={styles.itemContainer}>
            <Image style={styles.avatar} source={{uri: item.avatar}} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Pressable style={styles.button} onPress={() => openModal(item)}>
              <Text style={styles.textButton}>Detail</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      {selectedStudent && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Name: {selectedStudent.name}</Text>
              <Text style={styles.modalText}>Age:{selectedStudent.age}</Text>
              <Image
                source={{uri: selectedStudent.avatar}}
                style={styles.avatar}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 15,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
  },button: {
    backgroundColor: 'blue',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 'auto',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 8,
  },
  buttonClose: {
    backgroundColor: 'red',
    marginTop: 16,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default HomePage;
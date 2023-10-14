import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { listData } from './data/data'
import styles from './styles/styles'

const App = () => {

  const [search, setSearch] = useState('');
  const [fakeData, setFakeData] = useState(listData);

  const handleSearch = (text) => {
    setSearch(text);
    if(search.length<=1){
      setFakeData(listData);
      return;
    }else{
      const filtered = fakeData.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFakeData(filtered);
    }
  };

  const renderItem = ({item}) => {
    return(
      <TouchableOpacity style={styles.itemContainer} onPress={()=>console.log(fakeData)}>
        <Text style={styles.itemName}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lab 8</Text>
      <TextInput 
        style={styles.input}
        placeholder='tìm kiếm...'
        value={search}
        onChangeText={handleSearch}
        />
      <FlatList
        data={fakeData}
        renderItem={renderItem}
        keyExtractor={(item, index)=>index.toString()}
      />
    </SafeAreaView>
  )
}

export default App
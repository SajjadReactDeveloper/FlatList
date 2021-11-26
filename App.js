import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [fname, setFName] = React.useState('')
  const [lname, setLName] = React.useState('')
  const [age, setAge] = React.useState('')
  const [department, setDepartment] = React.useState('')
  const [item, setItem] = React.useState([])

  const addItem = () => {
    var obj = {}
    obj['fname'] = fname;
    obj['lname'] = lname;
    obj['age'] = age;
    obj['department'] = department;
    obj['key'] = Math.random();
    setItem([...item, obj])
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style = {styles.input} 
        placeholder = "Enter First Name *" 
        placeholderTextColor = "red"
        onChangeText = {setFName}
        value = {fname}
      />

      <TextInput 
        style = {styles.input} 
        placeholder = "Enter Last Name *" 
        placeholderTextColor = "red"
        onChangeText = {setLName}
        value = {lname}
      />

      <TextInput 
        style = {styles.input} 
        placeholder = "Enter Age *" 
        placeholderTextColor = "red"
        onChangeText = {setAge}
        value = {age}
      />

      <TextInput 
        style = {styles.input} 
        placeholder = "Enter Department *" 
        placeholderTextColor = "red"
        onChangeText = {setDepartment}
        value = {department}
      />

      <Pressable style = {styles.pressable} onPress = {addItem}><Text style = {styles.text}>Add Information</Text></Pressable>

      <FlatList 
        data = {item}
        renderItem = {({item}) => (
          <Text key = {item.key}>{'\n'} First Name: {item.fname} {'\n'} Last Name: {item.lname} {'\n'} Age: {item.age} {'\n'} Department: {item.department}</Text>
        )}
        ListEmptyComponent={<Text>There is not Data in the List</Text>}
        //ListHeaderComponent={<Text style={{ fontSize: 20 }}>TODO Items</Text>}
        //ListFooterComponent={<Text style={{ fontSize: 20 }}>This is the Footer of FlatList</Text>}
        refreshing = {false}
        onRefresh={() =>
          ToastAndroid.show('fetching data...', ToastAndroid.SHORT)
        }
      />
      <StatusBar backgroundColor = "#128" style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 70
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
    marginTop: 10,
    paddingTop: 10,
    borderBottomColor: 'blue',
  },
  pressable: {
    backgroundColor: 'lightblue',
    marginTop: 20,
    padding: 10,
    borderRadius: 5
  },
  text: {
    color: '#fff'
  }
});

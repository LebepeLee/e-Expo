import { StyleSheet, Text, TextInput, View , Image,StatusBar} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Varsity({route}) {
  const {image,name,address,tel,website} = route.params
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#2963E1' barStyle='dark-content' />
       <View style={styles.search}>
      <Ionicons name='md-search' size={20} color='black' style= {{marginRight:20}}/>
      <Text style={styles.name}>{name}</Text>
      </View>
      <Image style={{height:150,width:150,borderRadius:50,alignSelf:'center'}} source ={image}/>
      <Text style={styles.header}>Download Prospectus</Text>
      <View style={styles.addressDetails}>
        <Text style={styles.contact}>Contact Details</Text>
        <Text style={styles.address}>Address: {address}</Text>
 <Text>Tel: {tel}</Text>
 <Text>Website: {website}</Text>

      </View>
      <Text style={styles.faculty}>Go to Faculty/College</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:20,
  
  },
  search:{
    borderColor: '#2963E1',
    borderWidth:1,
    borderRadius:18,
    padding:10,
    textAlign:'center',
    flexDirection: 'row',
    marginBottom:20,
    margin:20
  },

  header:{
    backgroundColor:'#56CCF2',
    height:45,
   textAlign:'center',
   paddingTop:10,
    fontSize:20,
    color:'white',
    marginTop:10,
    marginBottom:10
  },
  addressDetails:{
    backgroundColor:'#56CCF2',
    height:250,
    padding:20,
    fontSize:19,
  },
  contact:{
    color:'white',
    textAlign:'center',
    fontSize:20
  },
  faculty:{
    marginTop:10,
    backgroundColor:'#56CCF2',
    height:45,
    textAlign:'center',
    paddingTop:10,
    fontSize:20,
  }
})
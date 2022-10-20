import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Pros from '../assets/pros.png'

export default function FacultyDetails() {
const image =
   [{image:Pros}]

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='#2963E1' barStyle='dark-content' />
       <View style={styles.search}>
      <Ionicons name='md-search' size={20} color='black' style= {{marginRight:20}}/>
      <Text style={styles.name}>faculty</Text>
      </View>
      {/* <Image style={{height:'auto',width:'auto'}} source ={image}/> */}
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
    search:{
        borderColor: '#2963E1',
        borderWidth:1,
        borderRadius:18,
        padding:10,
        textAlign:'center',
        flexDirection: 'row',
        marginBottom:20,
        margin:20
      }
})
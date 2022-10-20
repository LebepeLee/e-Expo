import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatGrid } from 'react-native-super-grid';
import NWU from '../assets/NWU.jpg'
import UFS from '../assets/UFS.jpg'
import UJ from '../assets/UJ.jpg'
import UL from '../assets/UL.jpg'
import Ukzn from '../assets/Ukzn.jpg'
import UMP from '../assets/UMP.jpg'
import UP from '../assets/UP.jpg'
import Univen from '../assets/Univen.jpg'
import Wits from '../assets/Wits.jpg'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SearchVarsity ({navigation}) {

  const Varsities =[
    {image: Ukzn,
      name: 'University of Kwa-Zulu-Natal'
    },
    {image: UJ,
      name: 'University of Johannesburg'
    },
    {image: UFS,
      name: 'University of Free State'
    },
    {image: Univen,
      name: 'University of Venda'
    },
    {image: Wits,
      name: 'University of Wits'
    },
    {image: UMP,
      name:'University of Mpumalanga'
     },
    {image: UL,
      name: 'University of Limpopo'
    },
    {image: UP,
      name: 'University of Pretoria'
    },
    {image: NWU,
      name: 'Univerrsity of North West'
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor='#2963E1' barStyle='dark-content' />
   <ScrollView>
    <View style={styles.search}>
      <Ionicons name='md-search' size={20} color='black' style= {{marginRight:20}}/>
    <TextInput   placeholder='Find your instititution'/> 
    </View>
 
   <View style={styles.aps}>
    <TextInput style={styles.apsScore} placeholder='APS SCORE' />
    <View style={styles.buttons} >
      <Pressable style={styles.btnShow}>
      <Ionicons name='md-play' size={20} color='black' />
      <Text >Show</Text>

      </Pressable>
   <Pressable style={styles.btnReset}>
   <Ionicons name='md-reload' size={20} color='black' />
    <Text>Reset</Text>
   </Pressable>
   
    </View>
   
   </View>
   <View style={styles.SgtdInstititutions}>
    <Text style={styles.header}>Suggested Instititution</Text>
   <FlatGrid
                    itemDimension={130}
                    spacing={20}
                    data={Varsities}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=>navigation.navigate('Varsity',{
                            image:item.image,
                             name:item.name,
                         
                         })}>
                        <View style={styles.Img}>
                            <Image style={{height:100,width:100,borderRadius:50}} source={item.image} />
                            
                        </View>
                        </TouchableOpacity>
                    )}
                    
                />
</View>
   </ScrollView>
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    margin: 20,
    marginBottom:30
},
search:{
  borderColor: '#2963E1',
  borderWidth:1,
  borderRadius:18,
  padding:10,
  textAlign:'center',
  flex:1,
  flexDirection: 'row',
margin:20
},
aps:{
  with:251,
  marginTop:10,
  backgroundColor:'#EAEAEA',
  alignItems:'center',
  padding:20
},
apsScore:{
  textAlign:'center',
  width:136,
  height:103,
  borderColor:'#000000',
  borderWidth:3,
  borderRadius:70,
  color:'black',
  alignItems:'center',
  justifyContent:'center'
},
buttons:{
  flex:1,
  flexDirection: 'row',
  marginTop:10
},
btnShow:{
  alignItems:'center',
  marginRight:20,
  backgroundColor:'orange',
  borderRadius:40,
  width:40,
  height:20,
},
btnReset:{
  alignItems:'center',
  marginRight:20,
  backgroundColor:'grey',
  borderRadius:40,
  width:40,
  height:20,
},
header:{
  color:'#2963E1',
  fontSize:24,
  textAlign:'center'
},
Img:{
  alignItems:'center',
  flex:3,
  flexWrap:'wrap',
  flexDirection: 'row',
}
})
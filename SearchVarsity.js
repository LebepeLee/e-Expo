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
      name: 'University of Kwa-Zulu-Natal',
      address: '238 Mazisi Kunene Rd, Glenwood, Durban, 4041',
      tel: '031 260 1111',
      website:'https://www.ukzn.ac.za/'
    },
    {image: UJ,
      name: 'University of Johannesburg',
      address: 'Physical Cnr Kingsway & University Roads, Auckland Park Johannesburg, 2092',
      tel: '011 559 4555',
      website:'https://www.uj.ac.za/'
    },
    {image: UFS,
      name: 'University of Free State',
      address:'205 Nelson Mandela Dr, Park West, Bloemfontein, 9301',
      tel:'051 401 9111',
      website:'https://www.ufs.ac.za/'
    },
    {image: Univen,
      name: 'University of Venda',
      address:'University Rd, Thohoyandou, 0950',
      tel:'015 962 8000',
      website:'https://www.univen.ac.za/'
    },
    {image: Wits,
      name: 'University of Witwatersrand',
      address:'1 Jan Smuts Ave, Braamfontein, Johannesburg, 2000',
      tel:'011 717 1000',
      website:'https://www.wits.ac.za/'
    },
    {image: UMP,
      name:'University of Mpumalanga',
      address:'Cnr R40 and D725 Roads, Mbombela, 1200',
      tel:'013 002 0001',
      website:'https://www.ump.ac.za/'
     },
    {image: UL,
      name: 'University of Limpopo',
      address:'Polokwane, 0727',
      tel:'012 521 4058',
      website:'https://www.ul.ac.za/'
    },
    {image: UP,
      name: 'University of Pretoria',
      address:'Lynnwood Rd, Hatfield, Pretoria, 0002',
      tel:'012 420 4111',
      website:'https://www.up.ac.za/'
    },
    {image: NWU,
      name: 'Univerrsity of North West',
      address:'North West University, Universiteit St, Potchefstroom, 2520',
      tel:'0860 169 698',
      website:'https://www.nwu.ac.za/'
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
                              address:item.address,
                              tel:item.tel,
                              website:item.website,
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
import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from 'react-date-range/dist/styles'

const UserDetails = () => {
  return (
    <View style={{styles:container}}>
      <View style={{styles:main}}>
        <Text style={{styles:header}}>PERSONAL INFORMATION</Text>
        <Text>Full name(s)</Text> <TextInput style={{width:213,height:15}}/>
        <Text>Last Name</Text> <TextInput style={{width:213,height:15}}/>
        <Text>Date of birth</Text> <TextInput style={{width:213,height:15}}/>
        <Text>ID Number</Text> <TextInput style={{width:213,height:15}}/>
        <Text>Gender</Text> <TextInput style={{width:213,height:15}}/>
        <Text>Email</Text> <TextInput style={{width:213,height:15}}/>
        <Text>Nationality</Text> <TextInput style={{width:213,height:15}}/>
        <Text>Ethic</Text> <TextInput style={{width:213,height:15}}/>
        <View style={{styles:main}}>
        <Text style={{styles:header}}>EDUCATIONAL INFORMATION</Text> 
        <Text>Highest Grade</Text> <TextInput style={{width:213,height:15}}/>
        <Test>Year Passed</Test> <TextInput style={{width:213,height:15}}/>
        <Text>Highest Qualification</Text> <TextInput style={{width:213,height:15}}/>
        <Text>Qualification Year Passed</Text> <TextInput style={{width:213,height:15}}/>
        </View> 
        <Button>Submit</Button>
      </View>

    </View>
  )
}

export default UserDetails
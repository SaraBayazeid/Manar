import React, { Component } from 'react'
import { Image,View,Text } from 'react-native'

export const Badge1 = () => (
   <View>
   <Image source={require('../assets/badge.jpg')}
      style={{
         height: 200,
         width: 100,
        
         
      }} /> 
     <Text style ={{fontSize:11,margin:0, textAlign: 'center',
      paddingHorizontal:5,paddingRight:22 ,color: "#5e2590",fontWeight:'bold',
    }} >"Beginner helper Badge" </Text>

     </View>
     
      
)
export const Badge2 = () => (
   <View>
   <Image source={require('../assets/badge2.jpg')}
      style={{
         height: 200,
         width: 100,
        
         
      }} /> 
     <Text style ={{fontSize:11,margin:0, textAlign: 'center',
      paddingHorizontal:5,paddingRight:22,color: "#5e2590",fontWeight:'bold',
    }} >"Intermediate helper Badge" </Text>

     </View>
)
export const Badge3 = () => (
   <View>
   <Image source={require('../assets/badge3.jpg')}
      style={{
         height: 200,
         width: 100,
        
         
      }} /> 
     <Text style ={{fontSize:11,margin:0, textAlign: 'center',
      paddingHorizontal:5,paddingRight:22,color: "#5e2590",fontWeight:'bold',
    }} >"Expert helper Badge" </Text>

     </View>
)


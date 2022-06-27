import * as React from 'react';
import {  Text, TouchableOpacity, View } from "react-native";



function AboutScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Home")}
        >
            <Text
            style={{color:"red"}}
            >Go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
  export default AboutScreen
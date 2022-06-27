import * as React from 'react';
import { Button, Text, View } from "react-native";



function SplashScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:"red"}}>Splash Screen</Text>
      </View>
    );
  }
  export default SplashScreen
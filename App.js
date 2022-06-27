// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from "react-native-bootsplash";

//* import components
import UserLogin from './src/screen/UserLogin';
import UserSignup from './src/screen/UserSignup';
import { StatusBar } from 'react-native';



const Stack = createNativeStackNavigator();

function App() {

  React.useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);
  
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor = "#FF9000"/>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{
          headerShown:false}} 
          component={UserLogin} />
        <Stack.Screen name="Register" component={UserSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
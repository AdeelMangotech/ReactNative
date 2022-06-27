// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Home';
import AboutScreen from './src/screen/About';
import SplashScreen from './src/screen/Splash';

import RNBootSplash from "react-native-bootsplash";



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
      <Stack.Navigator>
        {/* {hide && 
        <Stack.Screen options={{
    headerShown: false
}} name="Splash" component={SplashScreen} />
} */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
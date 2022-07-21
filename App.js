// In App.js in a new project

import  React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from "react-native-bootsplash";
import AsyncStorage from "@react-native-async-storage/async-storage";

//* import components
import UserLogin from './src/screen/UserLogin';
import UserSignup from './src/screen/UserSignup';
import { StatusBar } from 'react-native';
import Home from './src/screen/Home';

import { AuthContext } from './src/context/AuthContext';



const Stack = createNativeStackNavigator();

function App() {

  const [userData,setUserData] = useState("")

  const authContext = useMemo(()=>({
    signIn:(value)=>{
      setUserData(value)
    },
    signOut:()=>{
      setUserData(false)
    }
  }),[])

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem("user"))
      setUserData(userData["user"])
    } catch (error) {
     console.log(error); 
    }
  };




  useEffect(() => {
    getUser()

    const init = async () => {
      
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);


  
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor = "#FF9000"/>
      {userData  ? (
         <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />

       </Stack.Navigator>
      ):(
        <Stack.Navigator>
      <Stack.Screen name="Login" options={{
        headerShown:false}} 
        component={UserLogin} />
      <Stack.Screen name="Register" component={UserSignup} />
      </Stack.Navigator>
      )}
       
     
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
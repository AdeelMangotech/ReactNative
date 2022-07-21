import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Image, StatusBar, SafeAreaView, ImageBackground } from "react-native";
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {
 
    const [userInfo,setUserInfo] = useState("")

    const getUser = async () => {
        try {
          const userData = JSON.parse(await AsyncStorage.getItem("user"))
          setUserInfo(userData["user"])
        } catch (error) {
         console.log(error); 
        }
      };


      useEffect(() => {
        getUser()
      }, [])
      
    
    return (
        <SafeAreaView style={styles.viewContainer}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/LogoNew.png')} />
            <ScrollView  contentContainerStyle={{ flexGrow: 0.5, justifyContent: 'center', alignItems: "center" }}>

                <Text style={styles.heading}>Home</Text>
                <Text style={styles.heading}>{userInfo["displayName"]}</Text>

            </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor:"white",
    },
    tinyLogo: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 40,
        marginBottom:20,
    },
    heading: {
        color: "#A82D49",
        fontSize: 32,
        marginVertical: 10
    },
    underheading: {
        color: "#22222294",
        fontSize: 14,
        marginBottom: 10,
    },
    inputText: {
        height: 50,
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#8080801c",
        borderRadius: 10,
        width: "80%",
        color: "#000"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        marginVertical: 20,
        backgroundColor: "#FF9000",
        borderRadius: 10,
        width: "80%",
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight:"bold"
    },
    signupText: {
        color: "#FF9000",
        fontSize: 14,
        marginLeft: 10
    },
    authView:{
        flexDirection:"row"
    },
    authLogo:{
        width:40,
        height:40,
        margin:5
    }

})
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert,StatusBar,Image } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";


export default function UserSignup({ navigation }){
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    // const register = () => {
    //     createUserWithEmailAndPassword(auth, userEmail, userPassword)
    //         .then((res) => {
    //             Alert.alert(`${res.user.email} Resgistration Complete`)
    //             navigation.navigate('UserLogin')
    //             setUserName("")
    //             setUserEmail("")
    //             setUserPassword("")
    //         })
    //         .catch((err) => {
    //             Alert.alert(err.message)
    //         })
    // }

    return (
        <SafeAreaView style={styles.viewContainer}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/LogoNew.png')} />
            <ScrollView  contentContainerStyle={{  flexGrow: 0.5, justifyContent: 'center', alignItems: "center"}}>
                    <Text style={styles.heading}>Sign Up</Text>
                    <Text style={styles.underheading}>Add your details to Sign Up</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Name"
                        placeholderTextColor={"#afafaf"}
                        onChangeText={(val) => setUserName(val)} 
                        value={userName}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor={"#afafaf"}
                        keyboardType={"email-address"}
                        onChangeText={(val) => setUserEmail(val)}
                        value={userEmail} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor={"#afafaf"}
                        secureTextEntry={true}
                        onChangeText={(val) => setUserPassword(val)} 
                        value={userPassword}/>
                    <TouchableOpacity  activeOpacity={0.6} style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={{ marginVertical: 20,flexDirection:"row"}}>
                    <Text style={styles.underheading}>Already have account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.signupText}>Login</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.authView}>
                  <TouchableOpacity>
                    <Image 
                    style={styles.authLogo}
                    source={require('../assets/googleLogo.png')}
                    />
                    </TouchableOpacity>      
                  <TouchableOpacity>
                    <Image 
                    style={styles.authLogo}
                    source={require('../assets/facebookLogo.png')}
                    />
                    </TouchableOpacity>      
                </View>
            </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor:"white"
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
        backgroundColor: "#FF9200",
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
        marginLeft: 5
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
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Image, StatusBar, SafeAreaView, ImageBackground } from "react-native";
import React, { useState } from 'react';


export default function UserLogin({ navigation }) {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    // const login = () => {
    //     signInWithEmailAndPassword(auth, userEmail, userPassword)
    //         .then((res) => {
    //             console.log(res.user.uid)
    //             dispatch(setUid({
    //                 uID: res.user.uid
    //             }))
    //             setUserEmail("")
    //             setUserPassword("")
    //             navigation.navigate('Map')
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
            <ScrollView  contentContainerStyle={{ flexGrow: 0.5, justifyContent: 'center', alignItems: "center" }}>

                <Text style={styles.heading}>Login</Text>
                <Text style={styles.underheading}>Add your details to login</Text>
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
                    value={userPassword} />
                <TouchableOpacity  style={styles.button} activeOpacity={0.4}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: 20, flexDirection: "row" }}>
                    <Text style={styles.underheading}>Don't have an Account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.signupText}>Sign Up</Text>
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
import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function handleLogin() {
        console.log(email, password);
        const response = await axios.post('http://localhost:3001/login', { email: email, password: password });
        console.log(response.data);
    }

    return (
        <SafeAreaView>
            <View>
                <View style={styles.header}>
                    <Image source={require('../../logoAndPhotos/ibring.jpg')}
                        style={{ resizeMode: 'contain', width: 200, height: 200 }} />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // height: 200,
        minHeight: 200,
        backgroundColor: "#7065F2"
    },
    text: {
        width: "fit-content",
        padding: 10,
        color: "white",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: "grey",
    },
})


export default Login
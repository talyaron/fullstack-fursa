import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Link, useNavigate } from 'react-router-native';
import { logintAsync } from '../../../features/userLogin/userLoginReducer';


const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    async function handleLogin() {
        console.log(email, password);
        dispatch(logintAsync({ email: email, pass: password }))
    }

    React.useEffect(() => {
        if(userLogin.status === 'logged'){
            nav('/test');
        }
    })

    React.useEffect(() => {
        console.log({ userLogin: userLogin });
    }, [userLogin])

    return (
        <SafeAreaView>
            <View>
                <View style={styles.header}>
                    <Image source={require('../../logoAndPhotos/ibring.jpg')}
                        style={{ resizeMode: 'contain', width: 200, height: 200 }} />
                </View>
                <View style={styles.mainContent}>
                    <View>
                        <Text style={styles.headerTitle}>let's sign in</Text>
                    </View>
                    <View style={styles.mainContent_field}>
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
                        <View style={styles.haveNoAccount}>
                            <Text>Have no account! <Link to="/test"><Text>Sign up here</Text></Link></Text>
                        </View>
                        <TouchableOpacity style={styles.button}
                            onPress={handleLogin}>
                            <Text style={styles.whiteTextColor}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loadin}>
                    {userLogin.status === 'loading' && <ActivityIndicator size="large" />}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    haveNoAccount: {
        display: "flex",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        minWidth: "80%",
        maxWidth: 400,
    },
    mainContent: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mainContent_field: {
        marginTop: 20,
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7065F2",
        borderColor: "#D3D3D3",
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        minWidth: "80%",
        maxWidth: 400,
        marginTop: 15,
    },
    whiteTextColor: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    headerTitle: {
        color: "#7065F2",
        fontSize: 20,
        fontWeight: "bold"
    },
    loadin: {
        marginTop: 50,
    },
})


export default Login
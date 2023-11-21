/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Button,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
  props,
} from "react-native";

const Stack = createNativeStackNavigator();
function HomeScreen ({ navigation }){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Replace with your actual username and password
  var correctUsername = "Saurav";
  var correctPassword = "12345";

  const handleLogin = async() => {
    if (username === correctUsername && password === correctPassword) {
      setLoggedIn(true);
      
      const loggedIn = JSON.stringify(true);
      await AsyncStorage.setItem('isLoggedIn', loggedIn);
      navigation.navigate('Dashboard');
      
    } else {

      Alert.alert("Login Failed", "Invalid username or password.");
    }
  };

  return (
    
      <SafeAreaView style={{ backgroundColor: "#006D77" }}>
        <View style={{ backgroundColor: "#006D77" }}>
          <View>
            <Image
              source={require("../images/Logincompo.png")}
              style={{ width: 420, height: 350, backgroundColor: "#006D77" }}
            />
          </View>
          <View style={styles.boxContainer}>
            <View style={[styles.boxContainer, { flexDirection: "column" }]}>
              <Text style={styles.Login}>Login</Text>
              <View
                style={[
                  styles.input,
                  {
                    flexDirection: "row",
                    borderRadius: 10,
                    width: 300,
                    backgroundColor: "#006D77",
                  },
                ]}
              >
                <Image
                  source={require("../images/lady.png")}
                  style={{
                    width: 50,
                    borderRadius: 10,
                    height: 50,
                    backgroundColor: "#006D77",
                  }}
                />

                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: "#006D77",
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      fontSize: 25,
                      width: 250,
                      textAlign: "center",
                      fontWeight: "400",
                      letterSpacing: 3,
                    },
                  ]}
                  placeholder="Username"
                  placeholderTextColor={"white"}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />
              </View>
              <View
                style={[
                  styles.input,
                  {
                    margin: 15,
                    flexDirection: "row",
                    borderRadius: 10,
                    width: 300,
                    backgroundColor: "#006D77",
                  },
                ]}
              >
                <Image
                  source={require("../images/Rectangle.png")}
                  style={{
                    width: 50,
                    borderRadius: 10,
                    height: 50,
                    backgroundColor: "#006D77",
                  }}
                />

                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: "#006D77",
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      fontSize: 25,
                      width: 250,
                      textAlign: "center",
                      fontWeight: "400",
                      letterSpacing: 3,
                    },
                  ]}
                  placeholder="Password"
                  placeholderTextColor={"white"}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  secureTextEntry={true}
                />
              </View>

              <TouchableOpacity>
                <Text onPress={handleLogin} 
                style={styles.Login2}>
                  Log in
                </Text>
                {loggedIn && (
                  <Text style={styles.success}>Login Successful</Text>
                )}
              </TouchableOpacity>
              <Text style={styles.Forgot}>Forgot password?</Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    {
                      alignSelf: "flex-start",
                      width: 135,
                      borderBottomWidth: 1.5,
                      borderBottomColor: "black",
                    },
                  ]}
                ></Text>
                <Text style={styles.OR}>OR</Text>
                <Text
                  style={[
                    {
                      alignSelf: "flex-start",
                      width: 135,
                      borderBottomWidth: 1.5,
                      borderBottomColor: "black",
                    },
                  ]}
                ></Text>
              </View>
              

              <Text style={styles.Sign}>Sign Up</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  lady: {
    backgroundColor: "#7CDDC4",
    borderRadius: 10,
    width: 35,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: 3,
    margin: 10,
  },
  success: {
    marginTop: 20,
    color: "green",
    fontSize: 20,
  },
  Sign: {
    padding: 10,
    color: "#006D77",
    backgroundColor: "white",
    borderRadius: 10,
    width: 300,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 3,
    margin: 10,
    borderColor: "#006D77",
    borderWidth: 1,
    marginBottom: 75,
  },
  OR: {
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#006D77",
  },
  Forgot: {
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#006D77",
    textDecorationLine: "underline",
  },
  Login2: {
    padding: 7,
    color: "white",
    backgroundColor: "#006D77",
    borderRadius: 10,
    width: 300,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: 3,
    margin: 0,
    borderColor: "black",
  },
  input2: {
    backgroundColor: "#006D77",
    borderRadius: 10,
    width: 335,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: 3,
    margin: 15,
  },

  input: {
    height: 50,
  },
  Login: {
    marginBottom: 25,
    fontSize: 35,
    fontWeight: "bold",
    color: "#006D77",
  },
  boxContainer: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default HomeScreen;

import React, { useState, Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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


function Dashboard(){

  return(
    <SafeAreaView>
      <View style={{alignSelf:'center'}}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
export default Dashboard;
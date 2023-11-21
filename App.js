/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';



import HomeScreen from './app/component/HomeScreen';
import Verification from './app/component/Verification';
import Dashboard from './app/component/Dashboard';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate('HomeScreen')}
//       />
//     </View>
//   );
// }



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      
    </Stack.Navigator>
  );
}
// async function componentDidMount() {
//   try {
  
//     // this.backHandler = BackHandler.addEventListener( "hardwareBackPress", this.backAction );
    
    
//     let isLogin = await AsyncStorage.getItem('isLoggedIn');
//     const loggedIn =  isLoggedIn != null ? JSON.parse(isLogin) : null;
//     if (loggedIn == 'YES') {
//       this.props.navigation.navigate('Dashboard', { properties: this.props.navigation.navigate, freshNavigation: this.props.navigation.push })
//     }
//     if (data !== null) {
//       this.setState({ isLoading: false });
//     }

//     // this.checkToken();
//     // console.log("isLoggedIn----", isLogin);
  
// } catch (error) {
//   console.log("error_____",error.stack);
//   util(error.stack);
// }}
const  logIn = ( async() => {
  // You can implement your authentication logic here
  // For simplicity, I'm using a setTimeout to simulate an asynchronous check
  const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
  const loggedIn =  isLoggedIn != null ? JSON.parse(isLoggedIn) : null;
  // setTimeout(() => {
  //   // If the user has logged in before, set isFirstTimeLogin to false
  //   setFirstTimeLogin(false);
  // }, 2000); 
  if(loggedIn === true )
  {
    // console.log(loggedIn);
    // setFirstTimeLogin(false);
    navigation.navigate('Dashboard');
  }
});

function App({ navigation }){
  console.log("welcome");
  const [isFirstTimeLogin, setFirstTimeLogin] = useState(true);

  logIn;


  // useEffect(async()=>{
    
  //   let isLogin = await AsyncStorage.getItem('isLoggedIn');
  //   const loggedIn =  isLoggedIn != null ? JSON.parse(isLogin) : null;
  //   if (loggedIn == 'YES') {
  //     this.props.navigation.navigate('Dashboard', { properties: this.props.navigation.navigate, freshNavigation: this.props.navigation.push })
  //   }
  //   if (data !== null) {
  //     this.setState({ isLoading: false });
  //   }

  // })


  return (
    // <ScrollView>
    //   <Text>Hello</Text>
    // </ScrollView>
    

    <NavigationContainer>
      {isFirstTimeLogin ? (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name='Home'
        component={HomeScreen}/>
        <Stack.Screen
        name='Verification'
        component={Verification}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      ):(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        {/* Add other tab screens if needed */}
      </Tab.Navigator>
    )}
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

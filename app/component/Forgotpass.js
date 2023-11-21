
import React from 'react';
//import OtpInputs from 'react-native-otp-inputs';
import {
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView >
      <View style={{flexDirection:'row',marginLeft:10,marginTop:20,alignItems:'center'}}>
      <Image 
      style={{width:30,height:30}}
      source={require('./app/images/arrow.png')}
      />
      <Text style={{marginLeft:20,fontWeight:'bold', fontSize:25,color:'#006D77'}}>Forgot Password ?</Text>
      </View>

      <View style={{alignItems:'center',marginTop:40}}>
      <Image 
      style={{width:200,height:200}}
      source={require('./app/images/Emoji.png')}
      />

      </View>
      <View style={{alignItems:'center',alignContent:'center'}}>
      <Text style={{marginLeft:10,marginTop:60,fontWeight:'bold',fontSize:25,color:'#006D77',textAlign:'center'}}>
        Enter the mobile number associated with your personal Account
      </Text>
      </View>
      {/* <View style={{alignItems:'center',alignContent:'center'}}> */}
      <Text style={{marginLeft:10,marginTop:30,fontSize:20,color:'#3208',textAlign:'center'}}>
        We will sent you an OTP to reset your passward </Text>



        <TouchableOpacity >
      <View style={{alignItems:'flex-start',alignContent:'flex-start'}}>

      <Text style={{marginLeft:30,width:350,height:55,verticalAlign:'middle',marginStart:'10',borderRadius:20,backgroundColor:'#006D77',marginTop:40,fontWeight:'bold', textAlign:'center',fontSize:25,color:'#FFFFFF'}}>Mobile number</Text>
      </View>
      </TouchableOpacity>

      

    <TouchableOpacity >
      <View style={{alignItems:'center'}}>

      <Text style={{marginLeft:25,width:200,height:55,verticalAlign:'middle',borderRadius:20,backgroundColor:'#006D77',marginTop:40,fontWeight:'bold', textAlign:'center',fontSize:25,color:'#FFFFFF'}}>Send</Text>
      </View>
      </TouchableOpacity>

    </SafeAreaView>
    
  );
}


export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
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
      <Text style={{marginLeft:25,fontWeight:'bold', fontSize:30,color:'#006D77'}}>Verification</Text>
      </View>

      <View style={{alignItems:'center'}}>
      <Image 
      style={{width:250,height:250}}
      source={require('./app/images/logo.png')}
      />

      </View>
      <View style={{alignItems:'center',alignContent:'center'}}>
      <Text style={{marginLeft:10,marginTop:30,fontWeight:'bold',fontSize:25,color:'#006D77',textAlign:'center'}}>
        Enter the verification code sent to your mobile number
      </Text>
      </View>


      <View style={{alignItems:'center',flexDirection:'row',alignContent:'center',alignSelf:'center'}}>

      <Text style={styles.InputBox}></Text>
      <Text style={styles.InputBox}></Text>
      <Text style={styles.InputBox}></Text>
      <Text style={styles.InputBox}></Text>
      </View>
      
      <View style={{alignItems:'center',alignContent:'center'}}>
      <Text style={{marginLeft:25,marginTop:40,fontWeight:'bold', fontSize:30,color:'#006D77'}}>Resend
      </Text> 
      </View>
      
      <View style={{alignItems:'center',alignContent:'center'}}>
      <Text style={{marginLeft:25,width:200,height:65,verticalAlign:'middle',borderRadius:20,backgroundColor:'#7CDDC4',marginTop:40,fontWeight:'bold', textAlign:'center',fontSize:30,color:'#FFFFFF'}}>Verify</Text>
      </View>
      

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  logoImage: {
    height: 160,
    width: 235,
  },
  InputBox:{
    marginLeft:15,
    verticalAlign:'middle',
    height:40,
    textAlign:'center',
    borderRadius:20,
    padding:25,
    marginTop:40,
    marginHorizontal:10,
    backgroundColor:'#7CDDC4',
    flexDirection:'row'
  },
  View: {
    alignItems: 'center',
  },
  container: {
    marginTop: 80
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#EF6A32",
  },



  underlineStyleHighLighted: {
    borderColor: "#EF6A32",

  },
  submitButton: {
    width: '80%',
    height: 60,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EF6A32',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  noticeHeader: {
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 12,
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'white',

    position: 'absolute',
    top: 0,
    width: '100%'
  },
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

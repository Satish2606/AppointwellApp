import React from 'react';
import OtpInputs from 'react-native-otp-inputs';
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
      <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20, alignItems: 'center' }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('./app/images/arrow.png')}
        />
        <Text style={{ marginLeft: 25, fontWeight: 'bold', fontSize: 30, color: '#006D77' }}>Verification</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ width: 250, height: 250,marginTop:50,marginBottom:20 }}
          source={require('./app/images/Emoji.png')}
        />

      </View>
      <View style={{ alignItems: 'center', alignContent: 'center' }}>
        <Text style={{ marginLeft: 10, marginTop: 30, fontWeight: 'bold', fontSize: 25, color: '#006D77', textAlign: 'center' }}>
          Enter the verification code sent to your mobile number
        </Text>
      </View>


      <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}>
        {/* <OtpInputs
        handleChange={(code) => console.log(code)}
        style={styles.InputBox}
        numberOfInputs={4} autofillFromClipboard={false}        /> */}
        <TextInput style={styles.InputBox} maxLength={1} keyboardType='numeric' />
        <TextInput style={styles.InputBox} maxLength={1} keyboardType='numeric' />
        <TextInput style={styles.InputBox} maxLength={1} keyboardType='numeric' />
        <TextInput style={styles.InputBox} maxLength={1} keyboardType='numeric' />
      </View>
      <View style={{ alignItems: 'center', alignContent: 'center' }}>
        <Text style={{ marginLeft: 10, marginTop:10, fontSize: 20, color:'#3208', textAlign: 'center' }}>
          If you don't received the code!
        </Text>
      </View>

      <View style={{ alignItems: 'center', alignContent: 'center' }}>
        <Text style={{ marginLeft: 25, marginTop: 10, fontWeight: 'bold', fontSize: 30, color: '#006D77' }}>Resend
        </Text>
      </View>




      <TouchableOpacity >
        <View style={{ alignItems: 'center', alignContent: 'center' }}>

          <Text style={{ marginLeft: 25, width: 200, height: 65, verticalAlign: 'middle', borderRadius: 20, backgroundColor: '#006D77', marginTop: 40, fontWeight: 'bold', textAlign: 'center', fontSize: 30, color: '#FFFFFF' }}>Verify</Text>
        </View>
      </TouchableOpacity>

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
  InputBox: {
    marginLeft: 15,
    verticalAlign: 'middle',
    height: 60,
    width: 50,
    textAlign: 'center',
    borderRadius: 20,
    fontSize: 20,
    marginTop: 40,

    marginHorizontal: 10,
    backgroundColor: '#006D77',
    flexDirection: 'row'
  },
  View: {
    alignItems: 'center',
  },
  container: {
    marginTop: 80
  },
  borderStyleBase: {
    width: 35,
    height: 40
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
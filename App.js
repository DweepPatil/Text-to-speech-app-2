import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, } from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textToSpeak: '',
    }
  }

  isValidText=(str)=>{
    var decider;
    str.length===0? decider=true : decider=false
    return decider;
  }

  render() {

    return (
      <View style={styles.container}>
        <SafeAreaProvider>

          <View>
            <Header
              containerStyle={{ backgroundColor: 'rgb(111,189,224)', }}
              leftComponent={{ icon: 'menu', style: { color: '#fff' } }}
              centerComponent={{ text: 'Text to speech app', style: { color: '#fff', fontSize: 20, } }}
              rightComponent={{ icon: 'home', style: { color: 'white' } }}
            />
          </View>

          <View>

            <Image style={styles.image} source={require('./assets/images/Text to speech logo.png')} />

            <Text style={styles.dirText}>Enter your text!</Text>

            <TextInput onChangeText={(text) => this.setState({ textToSpeak: text })} placeholder='e.g. Pie' style={styles.input} />



            <TouchableOpacity onPress={() => { 
             this.state.textToSpeak===''?
               alert('Empty text field')
               :
               Speech.speak(this.state.textToSpeak);
              } 
              } 
               style={styles.button}>

              <Text style={styles.buttonText}>
                Speak!
              </Text>
            </TouchableOpacity>



          </View>

        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  dirText: {
    marginTop: 0,
    alignSelf: 'center',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderWidth: 2,
    margin: 20,
  },
  button: {
    width: 90,
    height: 30,
    backgroundColor: 'rgb(123,119,234)',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderWidth: 2,
    borderBottomStartRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

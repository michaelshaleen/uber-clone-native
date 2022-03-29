import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { Provider } from 'react-redux';

//set up redux


export default function App() {
  return (
    <Provider store={}>

   
    <View style={styles.container}>
      <Text>Let's build Uber</Text>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      
      defaultValue="You can type here">
        
        </TextInput>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

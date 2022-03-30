import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";

//set up redux


export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <HomeScreen />
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

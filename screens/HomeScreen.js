import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';


const HomeScreen = () => {
  return (
    <SafeAreaView
      style={tw `bg-white h-full`}>
        <View style={tw `p-5`}>
          <Image 
          style={{
              width: 100, 
              height: 100, 
              resizeMode: 'contain',
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          />
        </View>
      {/* <Text
        style={tw `text-red-500 p-10`}>I am the home screen</Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})
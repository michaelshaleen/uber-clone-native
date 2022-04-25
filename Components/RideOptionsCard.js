import React, { Image } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
      id: "393",
      icon: "Uber X",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "030",
      icon: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "422",
      icon: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
];

// main function
const RideOptionsCard = () => {


  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw `absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon 
            name="chevron-left"
            type="font-awesome"
          />


        </TouchableOpacity>
        
      <Text
        style={tw `text-center py-5 text-xl`}>
          Select A Ride
      </Text>

      </View>

      <FlatList 
        data={data}
        keyExtractor={(item) => item.id} 
        renderItem={({item:{id, title, multiplier, image}}) => (

          <TouchableOpacity>
            <Image 
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{uri: image}}
            
            
            />
          </TouchableOpacity>
        )}
      
      />
      
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})

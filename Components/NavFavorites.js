import React from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import { Icon } from "react-native-elements";
import tw from 'tailwind-react-native-classnames';


const NavFavorites = () => {

  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Code street, London, UK"
    },
    {
      id: "456",
      icon: "briefcase-outline",
      location: "Work",
      destination: "Plymouth, Minnesota"
    },
    {
      id: "496",
      icon: "american-football-outline",
      location: "Gym",
      destination: "New Hope, Minnesota, USA"
    },
  ];



  return (
    <FlatList 
      data={data} 
      keyExtractor={(item) => item.id} 
      ItemSeparatorComponent={() => (
        <View
          style={[tw `bg-gray-200`, { height: 0.5 }]}
        />
      )}
    renderItem={({item: {location, destination, icon}}) => (
      <TouchableOpacity style={tw `flex-row items-center p-5`}>
        <Icon 
          style={tw `mr-4 rounded-full bg-gray-300 p-3`}
          name={icon}
          type="ionicon"
          color="white"
          size={18}
          /> 
          <View>
            <Text style={tw `font-bold text-lg`}>{location}</Text>
            <Text style={tw `text-gray-500 `}>{destination}</Text>
          </View>
      </TouchableOpacity>
    )}/>
  )
};

export default NavFavorites

const styles = StyleSheet.create({})

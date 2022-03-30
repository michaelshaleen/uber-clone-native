import React from 'react'
import { TouchableOpacity, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const data = [
  {id:"12",
  title: "Get a ride",
  image: "https://links.papareact.com/3pn",
  screen: "MapScreen",
  },
  {id:"7393",
  title: "Order Food",
  image: "https://links.papareact.com/28w",
  screen: "EatScreen",
  }
]

const NavOptions = () => {
  return (
    <FlatList 
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>(
        <TouchableOpacity
          style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
            style={{width: 100, height: 100, resizeMode: "contain"}}
            source={{uri: item.image}} 
            />
            <Text style={tw `mt-2 text-lg font-medium`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ) }
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})

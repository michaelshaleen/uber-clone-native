import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { REACT_APP_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "react-native-elements";

import NavFavorites from '../Components/NavFavorites';





const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();


  return (
    <SafeAreaView
      style={tw `bg-white flex-1`}>
      <Text
      style={tw `text-center py-5 text-xl`}>
          Good Morning
      </Text>

        <View
          style={tw `border-t border-gray-200 flex-shrink`}>
            <View>
              <GooglePlacesAutocomplete 
                placeholder="Where to?"
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                  navigation.navigate('RideOptionsCard');
                  dispatch(
                    setDestination({
                      location: details.geometry.location,
                      description: data.description,
                    })
                    );
                  }
              }
                enablePoweredByContainer={false}
                
                query={{
                  key: REACT_APP_APIKEY,
                  language: "en"
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
              />
            </View>
            <NavFavorites />
        </View>

        <View style={tw `flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('RideOptionsCard')}
            style={tw `flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon 
              name="car" 
              type="font-awesome" 
              color="white" 
              size={16} 
            />
            <Text style={tw `text-white text-center`}>Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={tw `flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon 
              name="fast-food-outline" 
              type="ionicon" color="black" 
              size={16} 
            />
            <Text style={tw `text-center text-black`}>
              Eats
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },

  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },

  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  },
});

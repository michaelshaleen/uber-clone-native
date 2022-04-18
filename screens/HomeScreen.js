import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../Components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { REACT_APP_APIKEY } from "@env";

import { setDestination, setOrigin } from '../slices/navSlice';
const HomeScreen = () => {
  const dispatch = useDispatch();



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

          <GooglePlacesAutocomplete 
            placeholder="Where From?"
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            // assign from as input
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
              dispatch(setDestination(null));
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            // enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: REACT_APP_APIKEY,
              language: "en"
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400} //time before auto complete shows
          />
          <NavOptions />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({})

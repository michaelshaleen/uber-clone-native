import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { REACT_APP_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';





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

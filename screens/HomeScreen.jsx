import React from 'react'
import { SafeAreaView, Image, View } from 'react-native'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import NavFavourites from '../components/NavFavourites'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import UberLogo from '../assets/uber_logo.png'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { toInputBoxStyles } from '../styles/commonStyles'

const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={UberLogo}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />

        <GooglePlacesAutocomplete
          placeholder='Where From?'
          styles={toInputBoxStyles}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              })
            )
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          textInputProps={{
            placeholderTextColor: 'gray',
            returnKeyType: 'search'
          }}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

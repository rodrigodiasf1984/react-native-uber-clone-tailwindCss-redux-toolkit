import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { setDestination, selectDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { toInputBoxStyles } from '../styles/commonStyles'

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const destination = useSelector(selectDestination)
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, Rodrigo</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='where to?'
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en'
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description
                })
              )
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View style={tw`flex-row justify-evenly py-6 border-t border-gray-100`}>
        <TouchableOpacity
          onPress={() =>
            destination !== null && navigation.navigate('RideOptionsCard')
          }
          style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
        >
          <Icon name='car' type='font-awesome' color='white' size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row border border-gray-300 w-24 px-4 py-3 rounded-full justify-between `}
        >
          <Icon
            name='fast-food-outline'
            type='ionicon'
            color='black'
            size={16}
          />
          <Text style={tw` text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

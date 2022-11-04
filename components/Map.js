import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import tw from 'twrnc'
import { selectOrigin } from '../slices/navSlice'

const Map = () => {
  const origin = useSelector(selectOrigin)
  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    >
      {/* {origin?.location && <Marker />} */}
      {
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          title='Origin'
          description='teste'
          identifier='origin'
        />
      }
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})

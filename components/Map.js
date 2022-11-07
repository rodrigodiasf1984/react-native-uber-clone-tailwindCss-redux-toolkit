import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import tw from 'twrnc'
import { selectOrigin, selectDestination } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!origin || !destination) return
    //Zoom & fit marker destination and origin
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    })
  }, [origin, destination])

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        latitude: 37.1932443,
        longitude: -3.4670702,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor='black'
        />
      )}

      {/* {origin?.location &&  {
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng
          }}
          title='Origin'
          description='teste'
          identifier='origin'
        />} */}

      {/* {destination?.location &&  {
        <Marker
          coordinate={{
            latitude: origin.destination.lat,
            longitude: origin.destination.lng
          }}
          title='Destination'
          description='teste'
          identifier='Destination'
        />} */}

      <Marker
        coordinate={{
          latitude: 37.1932443,
          longitude: -3.4670702
        }}
        title='Origin'
        description='teste'
        identifier='origin'
      />

      <Marker
        coordinate={{
          latitude: 37.180941,
          longitude: -3.6262911
        }}
        title='Destination'
        description='teste'
        identifier='Destination'
      />
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})

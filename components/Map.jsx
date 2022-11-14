import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation
} from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useEffect, useRef } from 'react'

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const dispatch = useDispatch()
  const mapRef = useRef(null)

  useEffect(() => {
    if (!origin || !destination) return

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, bottom: 50, left: 50, right: 50 }
    })
  }, [origin, destination])

  useEffect(() => {
    if (!origin || !destination) return
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metrics&origins=${origin.description}&destinations=${destination.description}&key=AIzaSyAbSGVQaQwLRNS9qx6DAj0fHDkyMW9Se24`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
        })
    }
    getTravelTime()
  }, [origin, destination])

  return (
    <MapView
      ref={mapRef}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
      style={{ flex: 1 }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={'AIzaSyAbSGVQaQwLRNS9qx6DAj0fHDkyMW9Se24'}
          strokeWidth={3}
          strokeColor='black'
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng
          }}
          identifier='origin'
          title='Origin'
          description={origin.description}
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng
          }}
          identifier='destination'
          title='Destination'
          description={destination.description}
        />
      )}
    </MapView>
  )
}

export default Map

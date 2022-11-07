import React from 'react'
import { StyleSheet, View } from 'react-native'
import tw from 'twrnc'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { createStackNavigator } from '@react-navigation/stack'

const MapScreen = () => {
  const Stack = createStackNavigator()
  const options = {
    headerShown: false
  }
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={options}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={options}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})

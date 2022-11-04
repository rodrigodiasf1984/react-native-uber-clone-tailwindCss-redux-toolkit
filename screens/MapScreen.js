import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import tw from 'twrnc'
import Map from '../components/Map'
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
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})

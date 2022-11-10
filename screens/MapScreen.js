import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const Stack = createStackNavigator()
  const navigation = useNavigation()
  const options = {
    headerShown: false
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full`}
      >
        <Icon name='menu' />
      </TouchableOpacity>
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

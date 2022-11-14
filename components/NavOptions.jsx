import { FlatList, TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const NavOptions = () => {
  const navigation = useNavigation()
  const origin = useSelector(selectOrigin)

  const data = [
    {
      id: '123',
      title: 'Get a ride',
      image: require('../assets/uber_x.webp'),
      screen: 'MapScreen'
    },
    {
      id: '456',
      title: 'Order food',
      image: require('../assets/uber_eats.png'),
      screen: 'EatsScreen'
    }
  ]

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`}
          disabled={!origin}
        >
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image
              source={item.image}
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color='white'
              type='antdesign'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions

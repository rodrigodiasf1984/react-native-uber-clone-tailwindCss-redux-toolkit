import { Text, TouchableOpacity, FlatList, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from 'twrnc'

const data = [
  {
    id: '1',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, Lodon, UK'
  },
  {
    id: '2',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Lodon Eye, Lodon, UK'
  }
]

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={tw`bg-gray-200 h-[0.2]`} />}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`bg-gray-300 mr-4 rounded-full p-3`}
            name={item.icon}
            type='ionicon'
            color='white'
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavourites

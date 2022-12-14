import React, { useState } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'

const data = [
  {
    id: '1',
    title: 'UberX',
    multiplier: 1,
    image: require('../assets/uber_x.webp')
  },
  {
    id: '2',
    title: 'UberXL',
    multiplier: 1.2,
    image: require('../assets/uber_xl.webp')
  },
  {
    id: '3',
    title: 'Uber Lux',
    multiplier: 1.75,
    image: require('../assets/uber_lux.webp')
  }
]

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  const SURGE_CHARGE_RATE = 1.5

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute top-3 z-1 left-5 p-3 rounded-full border border-gray-200`}
        >
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                style={tw`flex-row justify-between items-center px-5 ${
                  item.id === selected?.id && 'bg-gray-200'
                }`}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain'
                  }}
                  source={item.image}
                />
                <View style={tw`-ml-6`}>
                  <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                  <Text>
                    {travelTimeInformation?.duration?.text} Travel time
                  </Text>
                </View>
                <Text style={tw`text-xl`}>
                  {new Intl.NumberFormat('en-gb', {
                    style: 'currency',
                    currency: 'EUR'
                  }).format(
                    (travelTimeInformation?.duration.value *
                      SURGE_CHARGE_RATE *
                      item.multiplier) /
                      100
                  )}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

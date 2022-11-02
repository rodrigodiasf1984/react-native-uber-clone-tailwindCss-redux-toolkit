import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { store } from './store'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'

export default function App() {
  const Stack = createStackNavigator()
  const options = {
    headerShown: false
  }
  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' backgroundColor={'white'} />
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={options}
            />
            <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={options}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

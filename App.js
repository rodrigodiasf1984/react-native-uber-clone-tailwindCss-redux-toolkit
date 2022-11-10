import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, Platform, KeyboardAvoidingView, LogBox } from 'react-native'
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
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' backgroundColor={'white'} />
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={options}
              />
              <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={options}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

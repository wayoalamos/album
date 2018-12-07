import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

class App extends Component {
  render() {
    console.log('Aaaaaaaaaaaa')
    console.warn('logeando')
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Tomy chuṕa el pico</Text>
        </View>
      </Provider>
    )
  }
}

export default App

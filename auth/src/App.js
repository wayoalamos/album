import React, { Component } from 'react'
import { View } from 'react-native'
import * as firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'

class App extends Component {
  state = { loggedIn: null }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    )
  }
}

export default App

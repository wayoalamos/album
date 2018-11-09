import React from 'react'
import { View, Component } from 'react-native'
import { Header, AlbumList } from './components'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <AlbumList />
      </View>
    )
  }
}

export default App

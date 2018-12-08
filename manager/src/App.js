import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from '@firebase/app'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAbL5-AtIiWiMIgJsamPh09iWzrf9Zt_MQ',
      authDomain: 'manager-5e654.firebaseapp.com',
      databaseURL: 'https://manager-5e654.firebaseio.com',
      projectId: 'manager-5e654',
      storageBucket: 'manager-5e654.appspot.com',
      messagingSenderId: '69010056562',
    }
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

export default App

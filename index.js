import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './src/store/configureStore' // Importamos configureStore

// Importamos configureStore y se lo asignamos la constante store
const store = configureStore()

// Envolvemos nuestra App con Provider ya configurado con la store
const RNRedux = () => (
  <Provider store= { store } >
    <App />
  </Provider>
)

AppRegistry.registerComponent('rncourse', () => RNRedux)

import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from "react-native" // Componentes nativos de React Native

// Aqui importaremos los componentes creados por nosotros o por algun desarrollador 3ero que nos comparta su componente.
import ComponenteCreadoPorNosotros from './src/components/ComponenteCreadoPorNosotros'

class ComponenteA extends Component {
  render () {
    return (
      // Codigo JSX
      <View>
        <TextInput />

        <ComponenteCreadoPorNosotros />

        <Button
          title="Add"
          style={ styles }
          onPress= { this._OurHandler }
        />
      </View>
    )
  }
}

const styles =  StyleSheet.create ({
  inputContainer: {
    // css para los contenedores input
  },
  textos: {
    // css para los textos
  }
})

export default ComponenteA

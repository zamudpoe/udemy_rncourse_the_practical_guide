import React, { Component }       from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect }                from 'react-redux' // connect es un componente de alto rango.

import InputPlaces                from './src/components/InputPlaces'
import ListPlaces                 from './src/components/ListPlaces'
import PlaceDetail                from './src/components/PlaceDetail'
import placeImage                 from './src/assets/beautiful-place.jpg'
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index'

class App extends Component {

  _onInputPlaceHandler = placeName => {
    this.props.onAddPlace(placeName)
    console.log('%c%s', 'color: tomato; font-size: 2em;', placeName)
  }

  _onItemDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  _onModalClose = () => {
    this.props.onDeSelectPlace()
  }

  _placeSelectedHandler = key  => {
    this.props.onSelectPlace(key)
  }

  render () {
    return (
      <View style={ styles.container }>
        <Text style= { styles.textLabel } >🗽 Mis Lugares</Text>
        <PlaceDetail
          selectedPlace = { this.props.selectedPlace }
          onItemDeleted = { this. _onItemDeletedHandler.bind(this) }
          onModalClose  = { this._onModalClose.bind(this) }
        />
        <InputPlaces onPlaceAdded= { this._onInputPlaceHandler.bind(this) } />
        <ListPlaces
          places         = { this.props.places }
          onItemSelected = { this._placeSelectedHandler }
        />
      </View>
    )
  }
}

/**
 NOTA: echarle un ojo a esta hoja de atajos para
      Guia para CSS soportado en react-native: https://github.com/vhpoet/react-native-styling-cheat-sheet
      Guia para Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/
const styles = StyleSheet.create({
  container: {
    // Nuestro contenedor tomara TODO el espacio disponible
    flex           : 1, // Toma todo el espacio disponible de arriba para abajo
    padding        : 26,
    paddingTop     : 40,
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent : 'flex-start',
    borderColor    : 'purple',
    borderWidth    : 4,
  },
  textLabel: {
    color   : 'teal',
    fontSize: 24,
  }
})

const mapStateToProps = state => {
  return {
    places       : state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch  => {
  return {
    onAddPlace     : (name) => dispatch(addPlace(name)),
    onDeletePlace  : () => dispatch(deletePlace()),
    onSelectPlace  : (key) =>  dispatch(selectPlace(key)),
    onDeSelectPlace: () => dispatch(deselectPlace())
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (App)

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import InputPlaces from './src/components/InputPlaces'
import ListPlaces  from './src/components/ListPlaces'
import PlaceDetail from './src/components/PlaceDetail'
import placeImage from './src/assets/beautiful-place.jpg'

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  }

  _onInputPlaceHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key  : Math.random() ,
          name : placeName,
          image: {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcu0o6k5_xNerrMW0WqpOTQqeFRR6_Wm306p5YFQougoJsbq3"
          }
        })
      }
    }, console.log('%c_onInputPlaceHandler', 'color: green; font-weight: bold;'))
  }

  _onItemDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      };
    })
  }

  _onModalClose = () => {
    this.setState({
      selectedPlace: null
    }, console.log('\n\t\t%cBYE BYeE!!','color: orange; fontWeight: bold;'))
  }

  _placeSelectedHandler = key  => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  }

  render () {
    return (
      <View style={ styles.container }>
        <Text style= { styles.textLabel } >🗽 Mis Lugares!XX</Text>
        <PlaceDetail
          selectedPlace = { this.state.selectedPlace }
          onItemDeleted = { this. _onItemDeletedHandler.bind(this) }
          onModalClose  = { this._onModalClose.bind(this) }
        />
        <InputPlaces onPlaceAdded= { this._onInputPlaceHandler.bind(this) } />
        <ListPlaces
          places         = { this.state.places }
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

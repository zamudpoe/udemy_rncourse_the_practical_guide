import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from "react-native";

class InputPlaces extends Component {
  state = {
    placeName: ""
  }

  componentDidMount () {
    console.log('\n\n\t%cEl componente [%cInputPlaces%c] ha sido montado\n', 'color: teal;', 'color: tomato; font-weight: bold;', 'color: teal;')
  }

  componentWillMount () {
    console.log('\n\n\t%cEl componente [%cInputPlaces%c] SERA montado\n', 'color: purple;', 'color: tomato; font-weight: bold;', 'color: purple;')
  }

  _placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  }

  _placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "" ) {
      return
    }
    this.props.onPlaceAdded(this.state.placeName);
    this.setState({ placeName: '' })
  }

  render () {
    return (
      <View style= { styles.inputContainer } >
        <TextInput
          placeholder      =  "Un lugar asombroso!"
          value            = { this.state.placeName }
          onChangeText     = { this._placeNameChangeHandler.bind(this) }
          clearTextOnFocus = { true }
          style            = { styles.inputTextContainerStyle }
        />
        <Button
          style              = { styles.inputButtonContainerStyle }
          title              = "Add"
          color              = "teal"
          onPress            = { this._placeSubmitHandler.bind(this) }
        />
      </View>
    )
  }
}

const styles =  StyleSheet.create ({
  inputContainer: {
    width         : '100%',
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems    : 'center',
  },
  inputTextContainerStyle: {
    width     : "70%",
    textAlign : 'center',
    color     : 'silver',
    fontSize  : 18
  },
  inputButtonContainerStyle: {
    width    : "40%",
  }
})

export default InputPlaces

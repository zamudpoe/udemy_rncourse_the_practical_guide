// crearemos un componente funcional
import React from  'react'
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = props => {
  let modalContent = null

  if (props.selectedPlace) {
    modalContent = (
      <View >
        <Image source= { props.selectedPlace ? props.selectedPlace.image : null } style={ styles.placeImage } />
        <Text style= { styles.placeText } >{ props.selectedPlace.name  }</Text>
      </View>
    )
  }

  return (
    <Modal
      onRequestClose = { props.onModalClose }
      visible        = { props.selectedPlace !== null }
      animationType  = 'slide'
    >
      <View style = { styles.modalContainer } >
       { modalContent }
        <View style = {{ marginTop: 20, marginBottom: 20 }} >
          <TouchableOpacity onPress= { props.onItemDeleted }  >
            <View style={ styles.deleteButton } >
              <Icon name="logo-tux" size={30} color="tomato"/>
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress= { props.onModalClose } color = "tomato" />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'whitesmoke',
    margin         : 22,
  },
  placeImage: {
    width : "100%",
    height: 200,
  },
  placeText: {
    color     : 'orange',
    fontWeight: 'bold',
    textAlign : 'center',
    fontSize  : 28,
  },
  deleteButton: {
    alignItems: 'center'
  }
})



export default placeDetail

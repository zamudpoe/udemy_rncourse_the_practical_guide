import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState =  {
  places: [],
  selectedPlace : null
}

const reducers = (state = initialState , action) => {
  switch (action.type) {
    // Hay que configurar nuestras acciones para configurarlas en nuestro selector medio de sus action.type
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key  : Math.random() ,
          name : action.placeName,
          image: {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcu0o6k5_xNerrMW0WqpOTQqeFRR6_Wm306p5YFQougoJsbq3"
          }
        })
      }

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key
        }),
        selectedPlace: null
      }

    case SELECT_PLACE:
      return {
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey
        })
      }

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      }

    default:
      return state
  }
}

export default reducers

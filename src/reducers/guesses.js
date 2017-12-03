
import { ADD_LETTER } from '../actions/index'

export default (currentState = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_LETTER :

    var input = {...payload}
    var letter = input.key

    return [letter,...curentState]

    default :
      return state
  }
}

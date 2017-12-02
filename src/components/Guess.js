import React from 'react'
import { connect } from 'react-redux'
import ADD_LETTER from '../actions'

let guess = ({ dispatch}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()){
        return
      }
      dispatch(guess(input.value))
      input.value = ''   }}>
      <input ref={node => { input = node  }}/>
        <button className="guess" type="submit">
          Guess
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ letter }) => ({ letter})

export default connect(mapStateToProps)(Guess)

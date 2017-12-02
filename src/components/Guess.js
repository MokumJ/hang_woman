import React from 'react'
import { connect } from 'react-redux'
import addLetter from '../actions/index'
import PropTypes from 'prop-types'

let Guess = ({dispatch}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()){
        return
      }
      dispatch(addLetter(input.value))
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

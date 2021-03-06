import React from 'react'
import { connect } from 'react-redux'
import addLetter from '../actions/index'
import PropTypes from 'prop-types'
import './Guess.css'

function refreshPage(){
    window.location.reload();
  }
let Guess = ({dispatch}) => {
  let input

  return (
    <div className="guessing">
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
        <button className="newgame" type="button" onClick={ refreshPage }>
        <span>New game</span> </button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ letter }) => ({ letter})

export default connect(mapStateToProps)(Guess)

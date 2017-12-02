import React, { PureComponent} from 'react'
import Title from './Title'
import './Game.css'
import Guess from './Guess'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HangWoman1 from '../images/Hangwoman_01.jpg'
import HangWoman2 from '../images/Hangwoman_01.jpg'
import HangWoman3 from '../images/Hangwoman_03.jpg'
import HangWoman4 from '../images/Hangwoman_04.jpg'
import HangWoman5 from '../images/Hangwoman_05.jpg'
import HangWoman6 from '../images/Hangwoman_06.jpg'

class Game extends PureComponent {
  render()  {

  return(
    <div>
      <header>
        <Title />
      </header>

      <main>

      { this.props.letter[1] > 1 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman1"  src={HangWoman1} /> : null }
         { this.props.letter[1] > 2 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman2"  src={HangWoman2} /> : null }
         { this.props.letter[1] > 3 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman3"  src={HangWoman3} /> : null }
         { this.props.letter[1] > 4 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman4 " src={HangWoman4} /> : null }
         { this.props.letter[1] > 5 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman5"  src={HangWoman5} /> : null }
           { this.props.letter[1] > 6 ?
            <img className="man" alt="hangman" src={HangWoman6} /> : null }
           <h1 className="word">{ this.props.letter[0] }</h1>
      <Guess />

      </main>
      </div>
    )
   }
 }

const mapStateToProps = ({ letter }) => ({ letter })
export default connect (mapStateToProps)(Game)

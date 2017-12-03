import React, { PureComponent} from 'react'
import Title from './Title'
import './Game.css'
import Guess from './Guess'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HangWoman1 from '../images/Hangwoman_01.jpg'
import HangWoman2 from '../images/Hangwoman_02.jpg'
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
      <ul>
       <li>{ this.props.letter[1] > 0 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman1"  src={HangWoman1} /> : null } </li>
       <li> { this.props.letter[1] > 1 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman2"  src={HangWoman2} /> : null } </li>
       <li>   { this.props.letter[1] > 2 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman3"  src={HangWoman3} /> : null } </li>
      </ul>
      <ul>
      <li>   { this.props.letter[1] > 3 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman4 " src={HangWoman4} /> : null } </li>
      <li>   { this.props.letter[1] > 4 && this.props.letter[0] !== "WINNER!!" ?
           <img className="HangWoman5"  src={HangWoman5} /> : null } </li>
      <li>     { this.props.letter[1] > 5 ?
           <img className="HangWoman6"  src={HangWoman6} /> : null } </li>
      </ul>
           <h1 className="word">{ this.props.letter[0] }</h1>

      <Guess />

      </main>
      </div>
    )
   }
 }

const mapStateToProps = ({ letter }) => ({ letter })
export default connect (mapStateToProps)(Game)

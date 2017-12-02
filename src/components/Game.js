import React, { PureComponent} from 'react'
import Title from './Title'
import './Game.css'
import Guess from './Guess'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class Game extends PureComponent {
  render()  {

  return(
    <div>
      <header>
        <Title />
      </header>

      <main>
      <h1 className="word">{ this.props.letter[0] }</h1>
      <Guess />

      </main>
      </div>
    )
   }
 }

const mapStateToProps = ({ letter }) => ({ letter })
export default connect (mapStateToProps)(Game)

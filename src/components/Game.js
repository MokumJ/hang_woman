import React, { PureComponent} from 'react'
import Title from './Title'
import './game.css'
import Guess from './Guess'
import { connect } from 'react-redux'

class Game extends PureComponent {
  render()  {

  return(
    <div>
      <header>
        <Title />
      </header>

      <main>
      { this.props.Letter }
      </main>
      </div>
  )

}

const mapStateToProps = ({ Letter }) => ({ Letter })
export default connect (mapStateProps)(Game)

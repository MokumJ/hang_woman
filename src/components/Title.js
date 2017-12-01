import React, { PureComponent } from 'react'
import Header from '../images/Header.jpg'
import './Title.css'

class Title extends PureComponent {
  render(){
    return (
    <div>
    <img classname="header" alt="header" src={ Header } />
    </div>
  )
  }
}

export default Title

import React, { Component } from 'react'
import Card from './Card.component.jsx'
import './card-list.styles.css'
export class CardList extends Component {
    constructor(){
        super()
    }
  render() {
    return (
      <div className='card-list'><Card users={this.props.users}/></div>
    )
  }
}

export default CardList
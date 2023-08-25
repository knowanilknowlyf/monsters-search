import React, { Component } from 'react'
import './card.styles.css'
export class Card extends Component {
  render() {
    return (
        this.props.users.map((mon => <div className='card-container' key={mon.id}>
            <img src={`https://robohash.org/${mon.id}?set=set2&size=180x180`} alt={mon.name} />
            <h3 >{mon.name}</h3>
            <p>{mon.email}</p>
            </div>))
    )
  }
}

export default Card
import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
 
  
  render () {
    return (<section className="filter">
    <h4>Filter</h4>
    <select name="neighborhood" className="neighborhood">
      <option>Ridgewood</option>
    </select>
    <select name="housetype" className="housetype">
      <option>Ranch</option>
    </select> 
    <select name="bedrooms" className="bedrooms">
      <option>2 BR</option>
    </select>   
    </section>)
  }
}



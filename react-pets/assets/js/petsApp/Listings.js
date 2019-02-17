import React, { Component } from 'react'


export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'david'
    }
    this.loopListings = this.loopListings.bind(this)
  }


loopListings () { 

  var {petslistData} = this.props

  return petslistData.map((listing, index) => {
      return ( <div className="col-md-3" key={index}>
      <div className="listing"></div>
      <ul>
        <li>{listing.petType}</li>
        <li>{listing.petBreed}</li>
        <li>{listing.petName}</li>
        <li>{listing.petSize}</li>
        <li>{listing.petColor}</li>
        <li>{listing.petSex}</li>
        <li>{listing.petPrice}</li>
      </ul>
      </div>  )
  
}) 
}

  render() {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>

      <section className="sortby-area">
        <div className="results"> 390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>
          <div className="view">
            <i className="fa fa-th-list" aria-hidden="true"></i>
            <i className="fa fa-th" aria-hidden="true"></i>
          </div>
        </div>
      </section>

      <section className="listings-results">
     {this.loopListings()}
      </section>

      <section id="pagination">
        <ul className="pages">
          <li>Prev</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>

    </section>)
  }
}



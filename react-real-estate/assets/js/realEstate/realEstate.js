import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData //putting in the listsings data as our state
    }

    this.change = this.change.bind(this)
  }
  change(event){
    var name = event.target.name
    var value = event.target.value 
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    } )
    console.log(event.target.value)
  }
  render () {
    console.log(this.state)
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} />
        <Listings  listingsData={this.state.listingsData}/>
      </section>
       </div>)
  }
}





const app = document.getElementById('app')

ReactDOM.render(<App />, app)

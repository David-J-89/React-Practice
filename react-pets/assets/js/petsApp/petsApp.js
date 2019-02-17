import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './petsList.js'
import petslistData from './data/petslistData.js'

class App extends Component {
    constructor () {
        super()
        this.state = {
            petslistData
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
        })
    }
    render () {
        console.log(this.state)
        return (<div>
            <Header />
            <section id="content-area">
            <Filter change={this.change} />
            <petsList petslistData={this.state.listingsData}/>
            </section>
        </div>)
    }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
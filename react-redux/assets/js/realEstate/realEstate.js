import React, { Component} from 'react'  //imports the react library
import ReactDOM from 'react-dom' //imports renderer

class Layout extends Component { //allows sharing of all the component methods
  constructor () {      //the constructor is the first method that runs automatically when this component shows up
    super()
    this.state = {
      name: 'Joe',
      health: 55,
      level: 1,
      lowLevelClass: 'danger-red'
    }
    this.clickedGirl = this.clickedGirl.bind(this)
  } 

  clickedGirl(){
    this.setState({
      health: this.state.health - 25
    }, function() {
      console.log('Hey I CLICKED THE GIRL HER HEALTH IS NOW ' +
      this.state.health)    
    })
  }
  
  render () {       //render is a method that renders the jsx to the page
    return (<div id={'parent'}>
    <div className={`blue-bg ${(this.state.health < 55) ?
    this.state.lowLevelClass : ''}`}>      
        <h3>Name: {this.state.name}</h3>
        <h3>Health: {this.state.health}</h3>
        <h3>level: {this.state.level}</h3>
        <img src="/img/bape.png" alt={'girl with bape'}
        onClick={this.clickedGirl}/>
      </div>
    </div>)
  }
}

class GirlImage extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (<div></div>)
  }
}

var Header = function() {
  return (<header>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>)
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)

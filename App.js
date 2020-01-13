import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'

class App extends Component{

  //Bhargav Code
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }
  //Bhargav Code

  state = {
    sideDrawerOpen : false
  }
  drawerToggleHandler = () =>{
    this.setState((prevState)=>{
      return{
        sideDrawerOpen : !prevState.sideDrawerOpen
      }
    })

  }
  backDropClickHandker=()=>{
    this.setState({sideDrawerOpen :false})
  }
  render(){
   let Back;
   if(this.state.sideDrawerOpen){
     Back = <Backdrop backdrophandler ={this.backDropClickHandker}/>
   }

  return (

    //Bhargav Code
    
    <div className="App">
     <div style={{height : '100%'}}>
   <Navbar drawerClickHandler ={this.drawerToggleHandler}/>
   <SideDrawer show={this.state.sideDrawerOpen}/>
   {Back}   
   </div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter your name: </label>
        <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{this.state.greeting}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>

    //Bhargav Code
   
  )
}
}

export default App;

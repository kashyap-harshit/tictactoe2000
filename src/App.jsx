import React, { Component } from 'react'
import Game from './comps/Game'
import './App.css'
import Gameover from './comps/Gameover'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      winner: null
    }
  }
  winnerChanger = (winner)=>{
    this.setState({
      winner: winner
    })
  }
  render() {
    return (
      <div className='app'>
        <Game winner={this.state.winner} winnerChanger={this.winnerChanger}/>
        {this.state.winner!==null?<Gameover winner={this.state.winner===1?"X":"O"}/>:""}
        {
          //we are altering the gameover component with the winner state not with the gameover state so when reinitialising the game we have to make the winner state to null for the gameover component to not show
        } 
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'

export class Gameover extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            
            <div className='gameover'>
                <h1>Game Over!</h1>
                <h4>The Winner is : {this.props.winner}</h4>
            </div>
        )
    }
}

export default Gameover

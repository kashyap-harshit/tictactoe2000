import React, { Component } from 'react'
import Cross from './Cross'
import Circle from './Circle'

export class block extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
  render() {
    return (
      <div className='block'>
        {this.props.val===1?<Cross/>:this.props.val===0?<Circle/>:""}
        
        {/* <Cross/>
        <Circle/> */}
      </div>
    )
  }
}

export default block

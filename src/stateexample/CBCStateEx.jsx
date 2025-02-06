import React, { Component } from 'react'

export class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            users:["Vamshi","579","vaishali","chetan","Ranjith"],
            num : 100,
        }
    }
    changeNumber=()=>{
        this.setState({num:500})
    }

  render() {
    console.log(this);
    return (
      <div>
        {
            this.state.users.map((users,i)=>{
                return <li kay={i}>{users}</li>
            })
        }
        <h1>{this.state.num}</h1>
        <button onClick={this.changeNumber}>Change number</button>
      </div>
    )
  }
}

export default CBCStateEx;
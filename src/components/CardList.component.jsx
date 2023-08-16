import React, { Component } from 'react'
import Card from './Card.component'
export default class CardList extends Component {
    // constructor(){
    //     super();
    //     const monsters=this.props.monsters;
        
    // }
  render() {
    return (
      <div className='cardList grid grid-rows-4 grid-flow-col gap-4'>
        {this.props.monsters.map(mons=>{
          if(mons.name.toLowerCase().includes(this.props.filter.toLowerCase())){
          return(
            <div className='flex justify-around '>
            <Card key={mons.id} monster={mons}/>
            </div>
          )
          }
          return(<></>)
        })}
      </div>
    )
  }
}

import React, {Component} from 'react'
import div2 from '../assets/game.jpg'
import Search from './Search.js'


class Store extends Component{

  state = {
    games:[
      {name:'Injustice 2',
      desc: 'Injustice 2 dolor sit amet, eos id eros facer facete.',
      image: '../assets/dark.jpg',
      id: 1},
      {name:'God Of War',
      desc: 'God Of War dolor sit amet, eos id eros facer facete.',
      image: '../assets/image.jpg',
      id: 2},
      {name:'Call Of Duty 3',
      desc: 'Call Of Duty dolor sit amet, eos id eros facer facete.',
      image: '../assets/div2.jpg',
      id: 3},
      {name:'Mortal Kombat X',
      desc: 'Mortal Kombat X dolor sit amet, eos id eros facer facete.',
      image: '../assets/div2.jpg',
      id: 4}
    ]

    }

  render(){

      let games = this.state.games
       const lists = games.map(list => {
         return(
           <div className = "center">
        <div className = "card blue-grey darken-1" key={list.id}>
        <img src = {div2} />
        <span className = "name">{list.name}</span>
        <span className = "view">View More</span>
        </div>
        </div>)
      })


    return(
      <div className = "store">
      <h2>Store</h2>
      <Search />
      {lists}
      </div>
    )
  }
  }


export default Store

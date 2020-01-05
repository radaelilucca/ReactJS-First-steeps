import React, { Component } from 'react'


class TechList extends Component {
  state = {
    techs: [
      'NodeJS',
      'ReactJS',
      'ReactNative'
    ]
  };

  render(){
    console.log(this.state)
    return (
      <ul>
        <li>Node.JS</li>
        <li>ReactJs</li>
        <li>React Native</li>
      </ul>
    )
  }
}

export default TechList
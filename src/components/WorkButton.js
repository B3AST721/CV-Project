import React, { Component } from 'react'
import WorkExperience from './WorkExperience';

export class WorkButton extends Component {
    constructor(props) {
        super(props)
      
        this.onClick = this.onClick.bind(this);
        this.state = {
          numComponents: 0
      }
      }
      
      clickedComponents = () => {
          let componentArray = [];
          for (let i=0; i<this.state.numComponents; i++) {
              componentArray.push(<WorkExperience />);
          }
          return componentArray;
      }
  
      onClick = (e) => {
          this.setState({numComponents: this.state.numComponents + 1});
      }
  
    render() {
      return (
        <div>
          <button onClick={this.onClick} className='bg-blue-400 px-3 py-1 rounded fixed right-10 bottom-20'>+</button>
          {this.clickedComponents()}
        </div>
      )
    }
}

export default WorkButton
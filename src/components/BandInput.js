import React, { Component } from 'react';

class BandInput extends Component {
  state ={
    name: ''
  }




  handleOnChange= e => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = e=>{
    e.preventDefault()
    this.props.addBand(this.state)
  }




  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange ={this.handleOnChange} name="name" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
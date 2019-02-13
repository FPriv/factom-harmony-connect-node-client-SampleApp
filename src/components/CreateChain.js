import React from 'react';
import { createChain } from '../helpers/createChain';


class CreateChain extends React.Component {

  state = {
    tags: '',
    initialText: '',
    createdChains: []
  };
  
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    createChain(
      this.state.tags.split(/[ ,]+/).filter(Boolean), 
      this.state.initialText, 
      this.props.createChainCallback
    );
  }

  render() {
    return (
        <div>
          <h4>Create Chain</h4>
          <form className="ui form" onSubmit={this.handleFormSubmit}>
            <label>
              Tags:
              <input 
                placeholder="Seperate by comma or space"
                type="text" 
                value={this.state.tags}
                onChange={(e) => this.setState({tags: e.target.value})} 
              />
            </label>
            <br/>
            <label>
              Initial Content:
              <input 
                type="text" 
                value={this.state.initialText}
                onChange={(e) => this.setState({initialText: e.target.value})} 
              />
            </label>
            <br/>
            <input type="submit" value="Create Chain" />
          </form>
        </div>
    )
  }

}

export default CreateChain;
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
        <div className="col s6"><div className="card"><div className="card-content">
          <span className="card-title">Create Chain</span>
          <form className="ui form" onSubmit={this.handleFormSubmit}>
            <div className="input-field">
	      <label htmlFor="create-chain-tags">
                Tags (separate by comma or space)
              </label>
	      <input 
                id="create-chain-tags"
	        className="validate"
	        type="text" 
                value={this.state.tags}
                onChange={(e) => this.setState({tags: e.target.value})} 
                required
	      />
	      <span className="helper-text" data-error="This field is required"></span>
            </div>
            <div className="input-field">
              <label htmlFor="create-chain-content">
                Content
	      </label>
              <input 
                id="create-chain-content"
	        className="validate"
	        type="text" 
                value={this.state.initialText}
                onChange={(e) => this.setState({initialText: e.target.value})} 
	        required
              />
	      <span className="helper-text" data-error="This field is required"></span>
            </div>
	    <button 
	      className="btn-floating btn-large halfway-fab waves-effect waves-light"
	      type="submit"
	    >
	      <i className="material-icons">add</i>
	    </button>
          </form>
        </div></div></div>
    )
  }

}

export default CreateChain;

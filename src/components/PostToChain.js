import React from 'react';
import { postToChain } from '../helpers/postToChain';

class PostToChain extends React.Component {

  state = {
    tags: '',
    content: '',
    chain_id: ''
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    postToChain(
      this.state.chain_id,
      this.state.tags.split(/[ ,]+/).filter(Boolean), 
      this.state.content, 
      this.props.postEntryCallback
    );
  }

  render(){
    return (
      <div className="col s6"><div className="card"><div className="card-content">
        <span className="card-title">Post Entry to Chain by Chain ID</span>
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="input-field">
	    <label htmlFor="create-entry-chain-id">
              Chain ID
	    </label>
            <input
	      id="create-entry-chain-id"
	      className="validate"
              type="text" 
              value={this.state.chain_id}
              onChange={(e) => this.setState({chain_id: e.target.value})} 
              required
	    />
	    <span class="helper-text" data-error="This field is required"></span>
	  </div>
          <div className="input-field">
            <label htmlFor="create-entry-tags">
              Tags (separate by comma or space)
	    </label>
            <input 
              id="create-entry-tags"
	      className="validate"
              type="text" 
              value={this.state.tags}
              onChange={(e) => this.setState({tags: e.target.value})} 
              required
	    />
	    <span class="helper-text" data-error="This field is required"></span>
	  </div>
	  <div className="input-field">
            <label htmlFor="create-entry-content">
              Content
	    </label>
            <input 
              id="create-entry-content"
	      className="validate"
	      type="text" 
              value={this.state.content}
              onChange={(e) => this.setState({content: e.target.value})} 
	      required
            />
	    <span class="helper-text" data-error="This field is required"></span>
          </div>
          <button
            className="btn-floating btn-large halfway-fab waves-effect waves-light"
            type="submit"
          >
            <i className="material-icons">add</i>
          </button>
        </form>
      </div></div></div>
    );
  }

}

export default PostToChain;

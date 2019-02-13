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
      <div>
        <h4>Post to Chain by ID</h4>
        <form className="ui form" onSubmit={this.handleFormSubmit}>
            <label>
              Chain ID:
              <input 
                type="text" 
                value={this.state.chain_id}
                onChange={(e) => this.setState({chain_id: e.target.value})} 
              />
            </label>
            <br/>
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
              Content:
              <input 
                type="text" 
                value={this.state.content}
                onChange={(e) => this.setState({content: e.target.value})} 
              />
            </label>
            <br/>
            <input type="submit" value="Create Entry" />
          </form>
      </div>
    );
  }

}

export default PostToChain;
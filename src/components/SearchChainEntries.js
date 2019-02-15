import React from 'react';
import { searchChainEntries } from '../helpers/searchChainEntries';


class SearchChain extends React.Component {

  state = {
    chainId: '',
    chainEntries: []
  };


  callback = (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      this.setState({
        chainInfo: data
      });
      this.props.searchChainCallback(data);
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    searchChainEntries(this.state.chainId, this.callback);
  }

  render() {
    return (
        <div className="col s6"><div className="card"><div className="card-content">
          <span className="card-title">Retrieve Entries by Chain ID</span>
          <form className="ui form" onSubmit={this.handleFormSubmit}>
            <div className="input-field">
	      <label htmlFor="get-entries-chain-id">
                Chain ID
              </label>
	      <input 
                id="get-entries-chain-id"
	        type="text" 
                value={this.state.chainId}
                onChange={(e) => this.setState({chainId: e.target.value})} 
              />
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

export default SearchChain;

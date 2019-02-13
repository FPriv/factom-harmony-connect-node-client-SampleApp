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
        <div>
          <h4>Search Chain Entries by Chain ID</h4>
          <form className="ui form" onSubmit={this.handleFormSubmit}>
            <label>
              Chain ID:
              <input 
                type="text" 
                value={this.state.chainId}
                onChange={(e) => this.setState({chainId: e.target.value})} 
              />
            </label>
            <br/>
            <input type="submit" value="Search Chain" />
          </form>
        </div>
    )
  }

}

export default SearchChain;
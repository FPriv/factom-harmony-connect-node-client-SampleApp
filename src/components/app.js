import React, { Component } from 'react';
import CreateChain from './CreateChain';
import SearchChainEntries from './SearchChainEntries';
import PostToChain from './PostToChain';
import { base64encode, base64decode } from 'nodejs-base64';
import { withAlert } from 'react-alert'


class App extends React.Component {

  state = {
    createdChains: [],
    searchedChainEntries: [],
  };


 createChainCallback = (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      let joined = this.state.createdChains.concat(data.chain_id);
      this.setState({ createdChains: joined })
      this.props.alert.show('Chain Created')
    }
  };

  searchChainCallback = (data) => {
    this.setState({
      searchedChainEntries: data.data,
    });
    this.props.alert.show(`${data.data.length} Chain Entries Found`)
    window.scrollTo(0,document.body.scrollHeight);
  }

  postEntryCallback = (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      this.props.alert.show('Entry Posted')
    }
  };


  render() {

    const renderGeneratedIds = this.state.createdChains.map(id => {
        return <li key={id} value={id}>{id}<br/></li>
    }, this)

    const renderChainInfoExternalIds = this.state.searchedChainEntries.map((entry) => {
      return <li key={entry.entry_hash}>{entry.entry_hash}</li>
    }, this)

    return (
      <div>
        <h2>Harmony Connect GUI</h2>
        <div className="row">
          <CreateChain createChainCallback={this.createChainCallback}/>
          <div className="col s6">
	    <h5>Generated Chain IDs: </h5> 
            <ul>{renderGeneratedIds}</ul>
	  </div>
	</div>
        <div className="row">
          <PostToChain postEntryCallback={this.postEntryCallback}/>
        </div>
	<div className="row">
          <SearchChainEntries searchChainCallback={this.searchChainCallback}/>
          <div className="col s6">
	    <h5>Found Entry Hashes: </h5>
            <ul>{renderChainInfoExternalIds}</ul>
	  </div>
	</div>
      </div>
    );
  }
}

export default withAlert(App);

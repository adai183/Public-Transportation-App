import React, { Component } from 'react';
import SearchForm from './search_form';
import Results from './results'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <Results />
      </div>
    );
  }
}

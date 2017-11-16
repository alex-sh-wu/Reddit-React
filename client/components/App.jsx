/*
    ./client/components/App.jsx
*/
import React from 'react';

import { render } from 'react-dom';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux'
import Table from './RedditTable.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (<Table/>);
    }
}

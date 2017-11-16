import React from 'react';

import { render } from 'react-dom';
import { fetchPosts, typeInSubreddit } from '../actions';
import { connect } from 'react-redux'
import TableRow from './RedditTableRow.jsx';

const getDate = () => {
    let currentTime = new Date();
    return currentTime.toString();
}

class RedditTable extends React.Component {
    render() {
        let results = [];
        if (this.props.fetching) {
            results.push(<div key={"status"}>Fetching posts...</div>);
        } else if (this.props.fetchError) {
            results.push(<div key={"status"}>{this.props.fetchError}</div>);
        }

        if (this.props.posts.length === 0) {
            results.push(<div key={"notice"}>Sorry nothing is loaded yet</div>);
        } else {
            results.push(...this.props.posts.map((post) => (
                <TableRow 
                    key={post.data.id} 
                    title={post.data.title}
                    redirect={post.data.permalink}
                    author={post.data.author}
                    subreddit={post.data.subreddit}
                />
            )));
            results.push(<div key="date">{"Last updated: " + this.props.lastUpdated}</div>);
        }
        return (
            <div className="table">
                reddit.com/r/<input 
                    type="text" 
                    value={this.props.subreddit} 
                    onChange={(event) => this.props.typeInSubreddit(event)}
                    onBlur={(event) => this.props.fetchPosts(this.props.subreddit)}
                />
                <button className="square" onClick={() => !this.props.fetching ? this.props.fetchPosts() : null}>Fetch From 'All'</button>
                {results}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user : state.user,
        posts: state.posts,
        subreddit: state.subreddit,
        fetching: state.fetching,
        lastUpdated: state.lastUpdated,
        fetchError: state.fetchError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (subreddit='all') => {fetchPosts(subreddit)(dispatch)},
        typeInSubreddit: (event) => {typeInSubreddit(event)(dispatch)}
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditTable)

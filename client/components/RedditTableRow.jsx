import React from 'react';

import { render } from 'react-dom';

export default class RedditTableRow extends React.Component {
    constructor(){
        super();
        this.protocol = "https://";
        this.urlRoot = "www.reddit.com/";
        this.subreddit = this.urlRoot + "r/";
        this.userPage = this.urlRoot + "user/";
    }

    render() {
        return (
            <div className="row">
                <div>{this.props.title}</div>
                <div>
                    <a 
                        href={this.protocol+this.urlRoot+this.props.redirect} 
                        target="_blank"
                    >
                        {this.urlRoot+this.props.redirect}
                    </a>
                </div>
                <div>
                    <a
                        href={this.protocol+this.subreddit+this.props.subreddit}
                        target="_blank"
                    >
                        {"/r/"+this.props.subreddit}
                    </a>
                </div>
                <div>
                    By <a href={this.protocol+this.userPage+this.props.author} target="_blank">{"u/"+this.props.author}</a>
                </div>
            </div>
        );
    }
}

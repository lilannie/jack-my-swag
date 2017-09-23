import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/common/Header';
import NotFound from '../components/common/NotFound';
import CreatePost from '../components/Post/CreatePost';

import '../scss/app.scss';

export default class Main extends Component {
  render() {
    return (
    	<div className="main container">
		    <Header/>
		    <Switch>
			    <Route exact path="/" component={Home} />
					<Route exact path="/create-post" component={CreatePost} />

			    <Route path="/404" component={NotFound} />
		    </Switch>
	    </div>
    );
  }
}
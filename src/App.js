//App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class ContactCard extends Component {
    constructor(props) {
	super(props);
    }
    render() {
	return <div><h4>{this.props.username}</h4>{this.props.mobile}<br/>{this.props.cell}<br/>{this.props.email}</div>;	    
    }
}

ContactCard.propTypes = {
    username: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    email: PropTypes.string
}

ContactCard.defaultProps = {
    username: "1",
    mobile: "2",
    cell: "3",
    email: "4"
}


class App extends Component {
    render() {	
	return (<div class="App-header"> 
		<ContactCard username="Dwayne Johnson" mobile="(123)-456-7890" cell="(123)-456-7290" email="rocky@gmail.com"/><br/>
		<ContactCard username="Friend Jack" mobile="(173)-466-1290" cell="(123)-123-7893" email="friend@gmail.com"/><br/>
		<ContactCard username="Ethan Chen" mobile="(163)-453-7123" cell="(123)-333-7450" email="ec23@gmail.com"/><br/>
		</div>
		);
	
    }
}

export default App;
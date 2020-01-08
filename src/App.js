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
	return <div class="box"><h4>{this.props.username}</h4>{this.props.mobile}<br/>{this.props.cell}<br/>{this.props.email}</div>;	    
    }
}

ContactCard.propTypes = {
    username: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    email: PropTypes.string
};

ContactCard.defaultProps = {
    username: "1",
    mobile: "2",
    cell: "3",
    email: "4"
};

/*
Define&a&'Decrement'&component&that&will&display&a&number&and&an&"Increment"&
bu:on&next&to&it.

• The&start&number&should&come&from&the&props.

• The&number&should&have&a&number&prop&type&and&be&required&on&the&component.

• Clicking&on&the&"Decrement"&bu:on&should&subtract&1&to&the&number.
• When&the&number&reaches&zero,&clicking&on&"Decrement"&should&show&an&alert&to&
the&user&"Cannot&be&less&than&zero"&and&not&decrement&the&number&any&more.
 */
class Decrement extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    currNumber: this.props.currNumber
	}

	this.onMouseDown1 = this.onMouseDown1.bind(this);
	this.onMouseDown2 = this.onMouseDown2.bind(this);

	setTimeout(this.onMouseDown1.bind(this), 2000);
	setTimeout(this.onMouseDown2.bind(this), 2000);
    }


    onMouseDown1() {
	this.setState({currNumber: this.state.currNumber+1});
    }
    onMouseDown2() {
	if (this.state.currNumber == 0) {
	    alert("Can't decrement anymore");
	}
	else {
	    this.setState({currNumber: this.state.currNumber-1});
	}
    }
    render() {
	return <div><button onMouseDown={this.onMouseDown1}>Increment</button><div style={{textAlign:"center"}}>{this.state.currNumber}</div><button onMouseDown={this.onMouseDown2}>Decrement</button></div>;
    }
    
}

Decrement.propTypes = {
    currNumber: PropTypes.number.isRequired
};

Decrement.defaultProps = {
    currNumber: 5
};


class App extends Component {
    render() {	
	return (<div>
		<div class="App-header"> 
		<ContactCard username="Dwayne Johnson" mobile="(123)-456-7890" cell="(123)-456-7290" email="rocky@gmail.com"/><br/>
		<ContactCard username="Friend Jack" mobile="(173)-466-1290" cell="(123)-123-7893" email="friend@gmail.com"/><br/>
		<ContactCard username="Ethan Chen" mobile="(163)-453-7123" cell="(123)-333-7450" email="ec23@gmail.com"/><br/>
		</div>
		<div class="App-header"> 
		<Decrement/>
		</div>	       
		</div>
		);
	
    }
}

export default App;
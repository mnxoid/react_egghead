import React from 'react';
import ReactDOM from 'react-dom';

class Lesson10_Wrapped extends React.Component {
  constructor(){
  	super();
  	this.state = {
  		val: 0
  	};
  	this.update = this.update.bind(this);
  }
  update(){
  	this.setState({
  		val: this.state.val + 1
  	});
  }
  componentWillMount(){
  	this.setState({m: 2})
  }
  componentDidMount(){
  	// console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }
  componentWillUnmount(){
  	console.log("Bye, unmounting..");
    clearInterval(this.inc);
  }
  render(){
  	console.log("Rendering...");
    return (
			<button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }
}

class Lesson10 extends React.Component {
  constructor()
  {
  	super();
  }
  mount(){
  	ReactDOM.render(<Lesson10_Wrapped />, document.getElementById('a10'));
  }
  unmount(){
  	ReactDOM.unmountComponentAtNode(document.getElementById('a10'));
  }
  render(){
    return (
    	<div>
    		<h1>This is Lesson 10</h1>
			<p>It's about component lifecycle</p>
    		<button onClick={this.mount.bind(this)}>Mount</button>
    		<button onClick={this.unmount.bind(this)}>Unmount</button>
    		<div id="a10"></div>
    	</div>
    );
  }
}

export default Lesson10;
import React from 'react';
import ReactDOM from 'react-dom';

class Lesson9_Wrapped extends React.Component {
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
  	console.log("Mounting...");
  }
  componentDidMount(){
  	console.log("Mounted!");
  }
  componentWillUnmount(){
  	console.log("Bye, unmounting..");
  }
  render(){
  	console.log("Rendering...");
    return (
			<button onClick={this.update}>{this.state.val}</button>
    );
  }
}

class Lesson9 extends React.Component {
  constructor()
  {
  	super();
  }
  mount(){
  	ReactDOM.render(<Lesson9_Wrapped />, document.getElementById('a'));
  }
  unmount(){
  	ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render(){
    return (
    	<div>
    		<h1>This is Lesson 9</h1>
			<p>It's about component lifecycle</p>
    		<button onClick={this.mount.bind(this)}>Mount</button>
    		<button onClick={this.unmount.bind(this)}>Unmount</button>
    		<div id="a"></div>
    	</div>
    );
  }
}

export default Lesson9;
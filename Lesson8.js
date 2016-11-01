import React from 'react';

class Lesson8 extends React.Component {
  render(){
    return (
    	<div>
    		<h1>This is Lesson 8</h1>
			<p>It's about nested data</p>
			<Button>I <Heart/> React</Button>
    	</div>
    );
  }
}

class Button extends React.Component {
  render(){
    return (
    	<button>{this.props.children}</button>
    );
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>;

export default Lesson8;
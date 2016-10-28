import React from 'react';
class Lesson5 extends React.Component {
  constructor(){
  	super();
  	this.state = {
  		txt: 'This is the state',
  		cat: 0
  	};
  	this.update = this.update.bind(this);
  }
  update(e){
  	this.setState({txt: e.target.value})
  }
  render(){
    return(
    	<div>
    		<h1>This is Lesson 5</h1>
    		<p>It's about components with state</p>
    		<input type="text" onChange={this.update}/>
    		<p>{this.state.txt}</p>
    	</div>
    );
  }
}
export default Lesson5;
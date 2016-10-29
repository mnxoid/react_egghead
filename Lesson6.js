import React from 'react';
class Lesson6 extends React.Component {
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
    		<h1>This is Lesson 6</h1>
			<p>It uses a separate component for the following(all of these change parent's state):</p>
    		<Widget txt={this.state.txt} update={this.update} />
    		<Widget txt={this.state.txt} update={this.update} />
    		<Widget txt={this.state.txt} update={this.update} />
    		<Widget txt={this.state.txt} update={this.update} />
    	</div>
    );
  }
}
const Widget = (props) => (
	<div>
		<input type="text" onChange={props.update}/>
		<p>{props.txt}</p>
	</div>
);

export default Lesson6;
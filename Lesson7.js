import React from 'react';
import ReactDOM from 'react-dom';

class Lesson7 extends React.Component {
  constructor(){
  	super();
  	this.state = {
  		red: 0,
      green: 0,
      blue: 0
  	};
  	this.update = this.update.bind(this);
  }
  update(e){
  	this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  }
  render(){
    return(
    	<div>
    		<h1>This is Lesson 7</h1>
			<p style={{color: "rgb("+this.state.red+","+this.state.green+","+this.state.blue+")"}}>It uses a separate component for the following(all of these change parent's state):</p>
    		<Slider ref="red"   update={this.update} /><br />{this.state.red}<br />
    		<Slider ref="green" update={this.update} /><br />{this.state.green}<br />
    		<Slider ref="blue"  update={this.update} /><br />{this.state.blue}
    	</div>
    );
  }
}

class Slider extends React.Component {
  render(){
    return (
      <div className="col-sm-2">
        <input ref="inp" type="range" min="0" max="255" onChange={this.props.update}/>
      </div>
    );  
  }
}

export default Lesson7;
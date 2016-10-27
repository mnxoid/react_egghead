import React from 'react';
class Lesson4 extends React.Component {
  render(){
    return(
    	<div>
	    	<h1>This is Lesson 4</h1>
	    	<p>It's about parameters</p>
	    	<p>Here's one:&nbsp;
	    		<i>{this.props.txt}</i>
	    	</p>
	    	<p>A numeric one:&nbsp;
	    		<i>{this.props.cat}</i>
	    	</p>
	    	<p>With default value:&nbsp;
	    		<i>{this.props.def}</i>
	    	</p>
    	</div>
    );
  }
}

Lesson4.propTypes = {
	txt : React.PropTypes.string,
	cat : React.PropTypes.number.isRequired,
	def : React.PropTypes.string
};

Lesson4.defaultProps = {
	def: 'This was left default'
}

export default Lesson4;
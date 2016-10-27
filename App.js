import React from 'react';
import Lesson2 from "./Lesson2";
import Lesson4 from "./Lesson4";
import Lesson5 from "./Lesson5";
class App extends React.Component {
  render(){
  	const components = [
  		[Lesson2, null], 
  		[Lesson4, {txt: "Text parameter", cat: 4}],
  		[Lesson5, null]
  	];

  	function decorate(obj, k, v) {
  		var newobj = obj;
  		newobj[k]=v;
  		return newobj;
  	}

    return (
    	<div>
    		<h1>Hi, these are the lessons(excluding first):</h1>
    		{
    			components.map((x,i)=>{return (
	    			<div key={i}>
	    				<br/>
	    				{React.createElement(x[0], x[1])}
	    			</div>
	    		);})
    		}
    	</div>
    );
  }
}
export default App;
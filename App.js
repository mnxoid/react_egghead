import React from 'react';
import Lesson2 from "./Lesson2";
import Lesson4 from "./Lesson4";
import Lesson5 from "./Lesson5";
import Lesson6 from "./Lesson6";
class App extends React.Component {
  render(){
  	const components = [
  		[Lesson2, null], 
  		[Lesson4, {txt: "Text parameter", cat: 4}],
  		[Lesson5, null],
  		[Lesson6, null]
  	];

    return (
    	<div>
    		<h1 className="text-xs-center">Hi, these are the lessons(excluding first):</h1>
    		<div className="px-2">
    		{
    			components.map((x,i)=>{return (
	    			<div key={i}>
	    				<hr/>
	    				{React.createElement(x[0], x[1])}
	    			</div>
	    		);})
    		}
    		</div>
    	</div>
    );
  }
}
export default App;
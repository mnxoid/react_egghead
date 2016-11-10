import React from 'react';
import Lesson2 from "./Lesson2";
import Lesson4 from "./Lesson4";
import Lesson5 from "./Lesson5";
import Lesson6 from "./Lesson6";
import Lesson7 from "./Lesson7";
import Lesson8 from "./Lesson8";
import Lesson9 from "./Lesson9";
import Lesson10 from "./Lesson10";
import Lesson11 from "./Lesson11";
import Lesson12 from "./Lesson12";
import Lesson13 from "./Lesson13";
class App extends React.Component {
  render(){
  	const components = [
  		[Lesson2, null], 
  		[Lesson4, {txt: "Text parameter", cat: 4}],
  		[Lesson5, null],
  		[Lesson6, null],
  		[Lesson7, null],
  		[Lesson8, null],
  		[Lesson9, null],
  		[Lesson10, null],
      [Lesson11, null],
      [Lesson12, null],
  		[Lesson13, null]
  	];

    return (
    	<div className="container">
    		<h1 className="text-center jumbotron">Hi, these are the lessons(excluding first):</h1>
    		<div className="px-2 container">
    		{
    			components.map((x,i)=>{return (
	    			<div key={i}>
	    				{React.createElement(...x)}
	    				<hr/>
	    			</div>
	    		);})
    		}
    		</div>
    	</div>
    );
  }
}
export default App;
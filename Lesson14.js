import React from 'react';

class Lesson14 extends React.Component {
	constructor(){
		super();
		this.state = {
			data:[
				{id: 1, name: "Jeff Peterson"},	
				{id: 2, name: "Simon Wick"},	
				{id: 3, name: "Stanley Smith"},	
				{id: 4, name: "Jack Jones"},	
				{id: 5, name: "Andrew Trump"},	
				{id: 6, name: "Nick Russinovich"},	
				{id: 7, name: "Sam Cooper"},	
				{id: 8, name: "George Hofstadter"}
			]
		};
	}
	render(){
		let rows = this.state.data.map(x=><PersonRow key={x.id} data={x} />);
		return(
			<div className="col-xs-12">
				<h1>This is Lesson 14</h1>
				<p>It's about map and arrays</p>
				<div className="col-xs-4">
					<table className="table table-bordered">
						<tbody>{rows}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

const PersonRow = (props) => {
	return(
		<tr>
			<td>{props.data.id}</td>
			<td>{props.data.name}</td>
		</tr>
	);
};

export default Lesson14;
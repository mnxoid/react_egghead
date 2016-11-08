import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
	constructor(){
		super();
		this.update = this.update.bind(this);
		this.state = {val: 0};	
	}
	update(){
		this.setState({val: this.state.val + 1});
	}
	componentWillMount(){
		console.log("Wil mount");
	}
	componentDidMount(){
		console.log("Mounted");
	}
	render(){
		return  <InnerComponent
					update={this.update}
					{...this.state}
					{...this.props}
				/>
	}
}

const Button = (props) =>   <button
								onClick={props.update}>
								{props.txt} — {props.val}
							</button>;
const Label = (props) =>    <label
								onMouseMove={props.update}>
								{props.txt} — {props.val}
							</label>;

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class Lesson12 extends React.Component {
	render(){
		return(
			<div>
				<h1>This is Lesson 12</h1>
				<p>It's about react component composition</p>
				<ButtonMixed txt="Button"/><br/>
				<LabelMixed txt="Label"/>
			</div>
		);
	}
}

export default Lesson12;
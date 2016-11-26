import React from 'react';

class Lesson15 extends React.Component {
	constructor(){
		super();
		this.state = {
			input: '/* add your jsx here*/',
			output: '',
			err: ''
		};
		this.update = this.update.bind(this);
	}
	update(e){
		let code = e.target.value;
		try{
			this.setState({
				output: babel.transform(code,{
					stage: 0,
					loose: 'all'
				}).code,
				err: ''
			});
		} catch(err){
			this.setState({err: err.message})
		}
	}
	render(){
		return(
			<div className="container col-xs-12">
				<style>
					{`
						header{
							display: block;
							height: 5vh;
							overflow: auto;
							background-color: pink;
							color: red;
							font-size: 28px;
						}

						pre{
							background-color: #f8f8f8;
						}

						pre, textarea{
							color: #222
						}

						textarea:focus{
							outline: none;
						}
					`}
				</style>
				<h1>This is Lesson 15</h1>
				<p>It's a live JSX editor</p>
				<div>
					<header>{this.state.err}</header>
					<div className="container col-xs-12">
						<textarea
							className="col-xs-6"
							onChange={this.update}
							defaultValue={this.state.input}
							height="500"></textarea>
						<pre className="col-xs-6" style={{height: 500}}>{this.state.output}</pre>
					</div>
				</div>
			</div>
		);
	}
}

export default Lesson15;
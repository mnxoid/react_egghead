import React from 'react';
import ReactDOM from 'react-dom';

class Lesson11 extends React.Component {
  render(){
    return(
      <div>
        <h1>This is Lesson 11</h1>
        <p>It's about component update control</p>
        <p>It has a warning I can't avoid(see console)</p>
        <div id="c11">
          <Lesson11_Wrapped />
        </div>
      </div>
    );
  }
}

class Lesson11_Wrapped extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {increasing: false};
  }

  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
  }

  update(){
    ReactDOM.render(<Lesson11_Wrapped val={this.props.val+1}/>, ReactDOM.findDOMNode(this).parentNode);
  }

  render(){
    console.log(this.state.increasing);
    return (
      <button onClick={this.update}>
        {this.props.val}
      </button>
    );
  }
}

Lesson11_Wrapped.defaultProps = {val: 0};

export default Lesson11;
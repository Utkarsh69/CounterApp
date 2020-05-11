import React from 'react';
import Button from './component/button.component';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      counter : 0
    }
  }

  handleDecrement = () => {
    if(!(this.state.counter === 0)) {
      this.setState({counter: this.state.counter - 1}, console.log(this.state.counter))
    }
  }

  handleIncrement = () => {
    this.setState({counter:this.state.counter + 1}, console.log(this.state.counter))
  }

  handleReset = () => {
    this.setState({counter:0}, console.log(this.state.counter))
  }


  render () {
    return(
      <div className="main">

        <div>
          <h1 className='heading'>
            COUNTER APP
          </h1>
        </div>

        <h1 className="heading">
          {this.state.counter}
        </h1>

        <Button className="heading" symbol='+ Increment' handleEvent={this.handleIncrement}/>

        <Button className="heading" symbol='- Decrement' handleEvent={this.handleDecrement}/>

        <Button className="heading" symbol='reset' handleEvent={this.handleReset}/>

      </div>
    )
  };
}

export default App;

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
      <div>

        <div>
          <h1 className='heading'>
            COUNTER APP
          </h1>
        </div>

        <h1>
          {this.state.counter}
        </h1>

        <Button symbol='+' handleEvent={this.handleIncrement}/>

        <Button symbol='-' handleEvent={this.handleDecrement}/>

        <Button symbol='reset' handleEvent={this.handleReset}/>

      </div>
    )
  };
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "0"
        }
    }
    onClick = button => { 
        if(button === "1")
        {
            this.numbers()
        }
        
      if(button === "="){

          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };
  numbers = () =>{
    this.setState({
        result: " "
    })
  };

    calculate = () => {
        
      try {
       
          this.setState({
              // eslint-disable-next-line
              result: (eval(this.state.result) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: "0 "
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };
    render() {
        return (
            <div>
                <div className="calculator-body">
                    
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;

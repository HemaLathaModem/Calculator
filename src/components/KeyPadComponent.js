import React, {Component} from 'react';
import {Button} from 'reactstrap';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                
                <Button name="C"  outline color="dark" className="button3" size="lg" onClick={e => this.props.onClick(e.target.name)}>clear</Button>
                <Button name="/" className="button2" color="danger" onClick={e => this.props.onClick(e.target.name)}>÷</Button><br/>

                <Button name="7"   outline color="dark" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button name="8"  outline color="dark" className="button1" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button name="9"  outline color="dark" className="button1" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <Button name="-"  color="danger" onClick={e => this.props.onClick(e.target.name)}>-</Button><br/>
                


                <Button name="4" outline color="dark" className="button1" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button name="5" outline color="dark" className="button1" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button name="6" outline color="dark" className="button1" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <Button name="+"  color="danger"onClick={e => this.props.onClick(e.target.name)}>+</Button><br/>
                

                
                <Button name="1" outline color="dark" className="button1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button name="2" outline color="dark" className="button1" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button name="3"  outline color="secondary" className="button1" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <Button name="="  color="danger" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                


                
                
                
            </div>
        );
    }
}


export default KeyPadComponent;
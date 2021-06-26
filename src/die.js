import React, { Component } from 'react';
import './die.css'
class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <i className={`${this.props.cls} ${this.props.rolling? 'rolling':''}`}></i>
            </div>
         );
    }
}
 
export default Dice;
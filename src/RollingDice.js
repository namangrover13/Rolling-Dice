import React, { Component } from 'react';
import Dice from './die';
import './rollingdice.css'
class RollingDice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clsOne : "fas fa-dice-one",
            clsTwo : "fas fa-dice-one",
            isRolling : false,
         }
    }
    updateDice(){
        let numberOne= Math.floor(Math.random()*6) + 1
        let numberTwo= Math.floor(Math.random()*6) + 1

        if(numberOne===1){
            if(numberTwo===1){
                this.setState({
                    clsOne:"fas fa-dice-one",
                    clsTwo:"fas fa-dice-one",
                    isRolling : true
                })
            }
            else if(numberTwo===2){
                this.setState({
                    clsOne:"fas fa-dice-one",
                    clsTwo:"fas fa-dice-two",
                    isRolling : true
                })
            }
            else if(numberTwo===3){
                this.setState({
                    clsOne:"fas fa-dice-one",
                    clsTwo:"fas fa-dice-three",
                    isRolling : true
                })
            }
            else if(numberTwo===4){
                this.setState({
                    clsOne:"fas fa-dice-one",
                    clsTwo:"fas fa-dice-four",
                    isRolling : true
                })
            }
            else if(numberTwo===5){
                this.setState({
                    clsOne:"fas fa-dice-one",
                    clsTwo:"fas fa-dice-five",
                    isRolling : true
                })
            }
            else if(numberTwo===6){
                this.setState({
                    clsOne:"fas fa-dice-one",
                    clsTwo:"fas fa-dice-six",
                    isRolling : true
                })
            }
            
        }
        else if(numberOne===2){
            if(numberTwo===1){
                this.setState({
                    clsOne:"fas fa-dice-two",
                    clsTwo:"fas fa-dice-one",
                    isRolling : true
                })
            }
            else if(numberTwo===2){
                this.setState({
                    clsOne:"fas fa-dice-two",
                    clsTwo:"fas fa-dice-two",
                    isRolling : true
                })
            }
            else if(numberTwo===3){
                this.setState({
                    clsOne:"fas fa-dice-two",
                    clsTwo:"fas fa-dice-three",
                    isRolling : true
                })
            }
            else if(numberTwo===4){
                this.setState({
                    clsOne:"fas fa-dice-two",
                    clsTwo:"fas fa-dice-four",
                    isRolling : true
                })
            }
            else if(numberTwo===5){
                this.setState({
                    clsOne:"fas fa-dice-two",
                    clsTwo:"fas fa-dice-five",
                    isRolling : true
                })
            }
            else if(numberTwo===6){
                this.setState({
                    clsOne:"fas fa-dice-two",
                    clsTwo:"fas fa-dice-six",
                    isRolling : true
                })
            }
            
        }
        if(numberOne===3){
            if(numberTwo===1){
                this.setState({
                    clsOne:"fas fa-dice-three",
                    clsTwo:"fas fa-dice-one",
                    isRolling : true
                })
            }
            else if(numberTwo===2){
                this.setState({
                    clsOne:"fas fa-dice-three",
                    clsTwo:"fas fa-dice-two",
                    isRolling : true
                })
            }
            else if(numberTwo===3){
                this.setState({
                    clsOne:"fas fa-dice-three",
                    clsTwo:"fas fa-dice-three",
                    isRolling : true
                })
            }
            else if(numberTwo===4){
                this.setState({
                    clsOne:"fas fa-dice-three",
                    clsTwo:"fas fa-dice-four",
                    isRolling : true
                })
            }
            else if(numberTwo===5){
                this.setState({
                    clsOne:"fas fa-dice-three",
                    clsTwo:"fas fa-dice-five",
                    isRolling : true
                })
            }
            else if(numberTwo===6){
                this.setState({
                    clsOne:"fas fa-dice-three",
                    clsTwo:"fas fa-dice-six",
                    isRolling : true
                })
            }
            
        }
        if(numberOne===4){
            if(numberTwo===1){
                this.setState({
                    clsOne:"fas fa-dice-four",
                    clsTwo:"fas fa-dice-one",
                    isRolling : true
                })
            }
            else if(numberTwo===2){
                this.setState({
                    clsOne:"fas fa-dice-four",
                    clsTwo:"fas fa-dice-two",
                    isRolling : true
                })
            }
            else if(numberTwo===3){
                this.setState({
                    clsOne:"fas fa-dice-four",
                    clsTwo:"fas fa-dice-three",
                    isRolling : true
                })
            }
            else if(numberTwo===4){
                this.setState({
                    clsOne:"fas fa-dice-four",
                    clsTwo:"fas fa-dice-four",
                    isRolling : true
                })
            }
            else if(numberTwo===5){
                this.setState({
                    clsOne:"fas fa-dice-four",
                    clsTwo:"fas fa-dice-five",
                    isRolling : true
                })
            }
            else if(numberTwo===6){
                this.setState({
                    clsOne:"fas fa-dice-four",
                    clsTwo:"fas fa-dice-six",
                    isRolling : true
                })
            }
            
        }
        if(numberOne===5){
            if(numberTwo===1){
                this.setState({
                    clsOne:"fas fa-dice-five",
                    clsTwo:"fas fa-dice-one",
                    isRolling : true
                })
            }
            else if(numberTwo===2){
                this.setState({
                    clsOne:"fas fa-dice-five",
                    clsTwo:"fas fa-dice-two",
                    isRolling : true
                })
            }
            else if(numberTwo===3){
                this.setState({
                    clsOne:"fas fa-dice-five",
                    clsTwo:"fas fa-dice-three",
                    isRolling : true
                })
            }
            else if(numberTwo===4){
                this.setState({
                    clsOne:"fas fa-dice-five",
                    clsTwo:"fas fa-dice-four",
                    isRolling : true
                })
            }
            else if(numberTwo===5){
                this.setState({
                    clsOne:"fas fa-dice-five",
                    clsTwo:"fas fa-dice-five",
                    isRolling : true
                })
            }
            else if(numberTwo===6){
                this.setState({
                    clsOne:"fas fa-dice-five",
                    clsTwo:"fas fa-dice-six",
                    isRolling : true
                })
            }
            
        }
        if(numberOne===6){
            if(numberTwo===1){
                this.setState({
                    clsOne:"fas fa-dice-six",
                    clsTwo:"fas fa-dice-one",
                    isRolling : true
                })
            }
            else if(numberTwo===2){
                this.setState({
                    clsOne:"fas fa-dice-six",
                    clsTwo:"fas fa-dice-two",
                    isRolling : true
                })
            }
            else if(numberTwo===3){
                this.setState({
                    clsOne:"fas fa-dice-six",
                    clsTwo:"fas fa-dice-three",
                    isRolling : true
                })
            }
            else if(numberTwo===4){
                this.setState({
                    clsOne:"fas fa-dice-six",
                    clsTwo:"fas fa-dice-four",
                    isRolling : true
                })
            }
            else if(numberTwo===5){
                this.setState({
                    clsOne:"fas fa-dice-six",
                    clsTwo:"fas fa-dice-five",
                    isRolling : true
                })
            }
            else if(numberTwo===6){
                this.setState({
                    clsOne:"fas fa-dice-six",
                    clsTwo:"fas fa-dice-six",
                    isRolling : true
                })
            }
            
        }

        setTimeout(()=>{
            this.setState({isRolling : false})
        },1000)
        
    }
    render() { 
        return ( 
            <div>
                <div className="rolling-dice-dice">
                    <Dice cls={this.state.clsOne} rolling={this.state.isRolling}/>
                    <Dice cls={this.state.clsTwo} rolling={this.state.isRolling}/>
                </div>
                <button onClick={()=>this.updateDice()} className="rolling-dice-button" disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll'}
                </button>
            </div>
         );
    }
}
 
export default RollingDice;
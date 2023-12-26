import React, { Component } from 'react';
import quizQuestion from "../resources/quizQuestion.json"



class GamePage extends Component {
    constructor() {
        super();
        this.state={
            data:quizQuestion,
            num:0
        }
        console.log(this.state.data)
    }

    previous=()=>{
        this.setState((prevState) => {
            const prevNum = prevState.num - 1;
            if (prevNum >= 0) {
                return {
                    num: prevNum
                };
            }
            return null;
        });

    }




    next = () => {
        this.setState((prevState) => {
            const nextNum = prevState.num + 1;
            if (nextNum <= 14) {
                return {
                    num: nextNum
                };
            }
    
            return null;
        });
    };

    quit=()=>{
        this.setState(()=>{
            alert('Are you sure you want to quit ?')
        })
    }

    render() {
        return (
            <div className="second">
                <h1>Question</h1>
                <p>{this.state.num +1} of 15</p>
                <h3>{this.state.data[this.state.num].question}</h3>
                <div className='questions'>
                    <div><h4>{this.state.data[this.state.num].optionA}</h4></div>
                    <div><h4>{this.state.data[this.state.num].optionB}</h4></div>
                    <div><h4>{this.state.data[this.state.num].optionC}</h4></div>
                    <div><h4>{this.state.data[this.state.num].optionD}</h4></div>
                </div>
                <div className="buttons">
                    <button className='previous' onClick={this.previous}>Previous </button>
                    <button className='next' onClick={this.next}>Next</button>
                    <button className='quit' onClick={this.quit}>Quit</button>
                </div>
            </div>
        );
    }
}


export default GamePage
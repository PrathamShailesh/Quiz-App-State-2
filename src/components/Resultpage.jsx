import React, { Component } from 'react';

export class Resultpage extends Component{
    render(){
        return(
            <div className='resultp'>
            <h1>Result</h1>
            <div className="result">
                <h3>You need more practice!</h3>
                <h2 className='yourscore'>Your score is 20%</h2>

                <div className="details">
                    <div className="total score">
                        <h4>Total number of questions</h4>
                        <h4>15</h4>
                    </div>
                    <div className="attempt score">
                        <h4>Total number of attempts</h4>
                        <h4>9</h4>
                    </div>
                    <div className="total score">
                        <h4>Number of correct answers</h4>
                        <h4>3</h4>
                    </div>
                    <div className="total score">
                        <h4>Number of wrong answers</h4>
                        <h4>6</h4>
                    </div>
                </div>
            </div>
            <button className='play again'>Play Again</button>
            <button className='back again'>Back to home</button>
            </div>
        )
    }
}

// export default Resultpage
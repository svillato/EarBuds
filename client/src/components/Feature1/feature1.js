import React, { Component } from 'react';
import "./feature1.css"

class Feature1 extends Component {
    render() {
        return (
            <div className="feat1_wrapper">
                {/* <div className="wave_animate">
                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>
                </div>  */}

                <div className="animation1">
                    <img className="speaker" src="https://imgur.com/A5c4C9Y.gif"></img>

                    {/* <div className="wave1_animate">
                        <div className='wave1 -one'></div>
                        <div className='wave1 -two'></div>
                        <div className='wave1 -three'></div>
                    </div> */}
                </div>





                <div className="typewriter">
                    <h1>Hello World!!</h1>

                </div>








                <div className="text1">
                    <h1>Live stream subtitles</h1>
                    <h2>Earbuds provide real-time translation of the audio, providing the convenience of reading on top of just listening!</h2>

                </div>

                <div class='wave -one'></div>
                <div class='wave -two'></div>
                <div class='wave -three'></div>




                {/* <div className="speech">
                    <p>
                        <span className="letter">Hello</span> <span className="letter">World!</span>
                    </p>
                </div> */}







            </div>
        )
    }
}
export default Feature1;
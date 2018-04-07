import React, { Component } from 'react';
import "./feature3.css"

class Feature3 extends Component {
    render() {
        return (
            <div className="feat3_wrapper">

                <div class="container">

                    <div class="slant_container">
                        <section className="slant">

                            <div className="feat3_item1">
                                <section className="tab2">
                                    <img className="animation3" src="https://imgur.com/EgoMauK.gif"></img>
                                </section>
                            </div>
                           
                            {/* <img className="animation3" src="https://imgur.com/EgoMauK.gif"></img> */}
                            <div className="feat3">

                                <h1>Easy correction system</h1>
                                <h2>Notice an error in the subtitles? Help us by accessing the transcription and make corrections. You'd be helping rest of the listeners;)</h2>
                            </div>
                            {/* <div className="section-div"></div> */}

                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
export default Feature3;
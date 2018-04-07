import React, { Component } from 'react';
import "./feature2.css"

class Feature2 extends Component {
    render() {
        return (

            <div className="feat2_wrapper">
                {/* the searching animation */}
                <div className="feat2_item1">
                    <img className="animation2" src="https://imgur.com/kiH39UA.gif"></img>
                </div>
                {/* container for the pulse animation and img of description */}
                <div className="feat2_item2">
                    <h1>Easy search engine</h1>
                        <h2>Not sure which to listen to? Try typing keywords to discover podcasts that are relevent to your taste!</h2>

                
                    <div className="element">
                    </div>
                </div>

                {/* the last img showing the search result */}

                <div className="feat2_item3">

                    <section class="tab1">
                        <p>Hello World! We are excited to present our work;)
                        Our wish is to get users to have new experience with podcasts.</p>
                            <p><strong>Earbuds</strong> create an atmosphere of connecting and sharing with others
                            It's a plateform for fun and interactive experience.</p>
                            <p>What are you waiting for? Try <strong>EarBuds</strong> Now!</p>

                    </section>
                </div>

            </div>

        )
    }
}
export default Feature2;
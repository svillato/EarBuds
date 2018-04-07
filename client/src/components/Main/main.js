import React, { Component } from 'react';
import './main.css';
import { connect } from 'react-redux';
import Feature1 from '../Feature1';
import Feature2 from '../Feature2';
import Feature3 from '../Feature3'

let mapStateToProps = (store) => {
  return {
    userInfo: store.user.userInfo
  }
}

class Main extends Component {

  render() {
    return (
      <div className="main_wrapper">

        {/* {this.props.userInfo.length ===0 ? <div></div> : 
          <div
          style={{
            textAlign: 'center'
          }}
        >
          <h1>Welcome {this.props.userInfo.title}- earBud missed you!</h1>
          You are now logged in
      </div>
    } */}
        <div className="main_page">
          <img className="buds" src="https://imgur.com/UEVECp3.gif" />
          <p className="description">
            Tune in with EarBuds and go beyond from just listening.Now interact
            with your favorite Podcasts!
          </p>
        </div>
        <div>
          <Feature1/>
        </div>

        <div>
          <Feature2 />
        </div>

        <div>
          <Feature3 />
        </div>



        {/* <section className="color">
</section>  */}
      </div>
      //   </div>

      // <div className="main_wrapper">
      // {/* <section>
      //     <svg version="1.1" id="wave_img" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      //         viewBox="0 0 1400 300" style="enable-background:new 0 0 1400 300;"s>

      //                 <path class="st0" d="M0,283c0,0,250.3-310,748.7-143.3s801.5-49.2,801.5-49.2V300H0V283z" />
      //     </svg>

      // </section> */}

      // {/* <section className="col-2 ss-style-triangles"> */}
      // //     <div className="main_page">
      // //         <img className="buds" src="https://i.imgur.com/iF6adcM.gif"></img>
      // //         <p className="description">Go beyond listening. Now interact with your favorite Podcasts!</p>
      // // </div>
      // {/* </section> */}

      //  </div >

      /* <div className="bttn_wrapper">
                    <button className="button1">Search</button>
                    <button className="button2">Log In</button>
                </div> */
    );
  }
}
export default connect(mapStateToProps)(Main)


import React, { Component } from 'react';
import './podcast.css';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

// import Nav from './components/Nav';

let mapStateToProps = (store) => {
    return {
      userInfo:store.user.userInfo
    }
  }


  class Podcast extends Component {
  
    render() {
      return (
            
    // {/* <link rel="stylesheet" href="audioPage.css"> */}

    <div class="podcast-wrapper">
        <div class="podcast-container">
            <div class="image-container">
                <img src="http://fillmurray.com/500/500" alt="" />
            </div>

            <div class="content-container">
                <div class="title">
                  
                    <div class="add">+</div>
                </div>
                <div class="synopsis">Synopsis</div>
            </div>
       
        </div>
        <audio src="" controls></audio>
        <div class="episode-container">Episode List</div>
    </div>
    );
  }
}

export default connect(mapStateToProps)(Podcast);

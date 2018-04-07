import React, { Component } from 'react';
import './nav.css';
import { Icon } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import testingButton from '../testingButton/testingButton'

let mapStateToProps = (store) => {
  return {
    userInfo: store.user.userInfo
  }
}

class Nav extends Component {

  render() {
    return (
      <div className="nav_wrapper">
        <Link to={this.props.auth ? '/landing' : '/'}>
          <img
            className="nav_logo"
            src="https://imgur.com/EKfm1L9.png"
            href="#"
            alt="nav_logo"
          />
        </Link>

        <div className="nav_link">
          <div className="wrap">
            <form action="" autocomplete="on">
              <input
                className="search"
                name="search"
                type="text"
                placeholder="What're we looking for ?"
              />

              <input className="search_submit" value="" type="submit" />

              <Icon
                name="search"
                size="large"
                color="orange"
                style={{
                  width: '40px',
                  height: '40px',
                  position: 'absolute',
                  right: '30%',
                  top: '10%'
                }}
              />
            </form>



          </div>


          {this.props.userInfo.length === 0 ?

            <div className="login_bttn">

              <Button
                circular
                inverted
                color="orange"
                content="orange"
                style={{
                  width: '100%',
                  height: '40px'
                }}
                href="/auth/google"
              >
                Log in
               </Button>
            </div> :
            <div className="logout_bttn">
              <Button
                circular
                inverted
                color="orange"
                content="orange"
                style={{
                  width: '100%',
                  height: '40px'
                }}
                href="/api/logout"
              >
                Logout
                       </Button>
            </div>
          }
          
       
            <div className="podcast_bttn">
             <Button circular
                inverted
                color="orange"
                content="orange"
                style={{
                  width: '100%',
                  height: '40px',
                  top: "-122%"
                }}>
                <Icon
                name="podcast"
                size="large"
                color="orange"
                style={{
                  width: '40px',
                  height: '40px',
                  position: 'absolute',
                  right: '20%',
                  top: '12%'
                }}
              />
              </Button>
            </div>
          
          

        


        </div>
       




      </div>
    );
  }
}



export default connect(mapStateToProps)(Nav);

import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
      return (
        <div id="navigation" className="Navigation">
          <nav>
            <ul>
              <a href="/"><li>Home</li></a>
              <a href="/netflix"><li>Netflix</li></a>
              <li>Top picks</li>
              <li>Recent</li>
            </ul>
          </nav>
        </div>
      );
    }
  } 
  
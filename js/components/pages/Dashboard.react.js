/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavProfile from "../NavProfile.react";

class Dashboard extends Component {
  render() {
    return (
      <div>
      <NavProfile/>
      <article>
        <section className="text-section">
          <h1>Dashboard</h1>    
        </section>
      </article>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Dashboard);

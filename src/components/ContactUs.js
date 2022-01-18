import React, { Component } from 'react';
import './qwerty.css'
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p color='white' className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">

              </div>
            </aside>
          </div>
        </section>
        );
  }
}
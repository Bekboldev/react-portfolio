import React, { Component } from 'react';
import './portfolio.css'
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return (
                  <div className='row'>
                      <div className='port-block'>
                          <div className="card">
                            <div className="image">
                              <img src={item.imgurl} alt=""/>

                            </div>
                              <h3>{item.name}</h3>
                              <p>{item.description}</p>
                              <a  href={item.button}><button>Watch</button></a>
                          </div>

                      </div>
                  </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
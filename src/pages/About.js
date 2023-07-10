import React, { Component } from 'react';
import pfp from "../assets/pfp.jpg";
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <p>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={pfp}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">All About Me!</div>
              <div className="brief_description">
                <p>Hello! My name is Tatiana Gonzalez! I am a Rutgers University
                  - New Brunswick student with an intended graduation date of May 
                  2025. I am a part of the Honors College, Douglass Residential 
                  College, and the School of Arts and Sciences. I am majoring in 
                  Computer Science with a minor in Cognitive Science.</p>
                  <p>I am a part of many organizations and activities, one being the 
                  Advancing Women in Computer Science Program, where I learn about 
                  Computer Science career opportunities through peer leadership and 
                  portfolio building, practice computational thinking and technical 
                  skills to prepare for interviews, and work together with like-
                  minded peers to build confidence and achieve academic success. 
                  Overall, this program has helped build confidence in my 
                  professional capabilities and has provided me with the resources 
                  I need to succeed in interviews and other professional settings.
                </p>
              </div>
            </div>
          </div>
        </div>

        </p> 
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Timeline extends Component {
  componentDidMount() {
    // animation for css fly in
    (() => {
      const items = document.querySelectorAll('.timeline');
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      function callbackFunc() {
        for (let i = 0; i < items.length; i += 1) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add('in-view');
          }
        }
      }
      // listen for events
      window.addEventListener('load', callbackFunc);
      window.addEventListener('resize', callbackFunc);
      window.addEventListener('scroll', callbackFunc);
    })();
  }

  render() {
    return (
      <Container>
      <h1 className="text-center m-5">Get To Know Me</h1>
        <div className="main-timeline">
          <div className="timeline">
            <div className="timeline-icon">
              <i className="fas fa-university" />
            </div>
            <div className="inner-content">
              <h3 className="title">University of Waterloo, BMath. 2015</h3>
              <p className="description">Honours Mathematical Studies</p>
              <p className="description">Business Specialization</p>
              <p className="description">Computer Science minor</p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-icon">
              <i className="fas fa-pencil-ruler" />
            </div>
            <div className="inner-content">
              <h3 className="title">UX Designer & Student Researcher, 2015</h3>
              <p className="description">
                I worked at <a href="https://www.reapwaterloo.ca/" target="_blank">REAP Felt Lab </a>
                on small to large-scale projects that focus on creating innovative solutions for new
                technologies and interactive digital displays. My main goal was researching, designing,
                and prototyping new uses for the technologies to increase usability.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-icon">
              <i className="fas fa-briefcase" />
            </div>
            <div className="inner-content">
              <h3 className="title">Data Analyst, 2015 - 2017</h3>
              <p className="description">
                <i>My first out of school full-time career starts here! </i>
                I worked at <a href="https://www.christiedigital.com/en-us" target="_blank">Christie Digital</a>
                . analyzed large volumes of data and created reports to support management decisions on warranty
                sales and services. Part of my role was to ensure the accuracy of the data within the database.
                I’ve gained strong data mining skills throughout this job.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-icon">
              <i className="fas fa-rocket" />
            </div>
            <div className="inner-content">
              <h3 className="title">Programmer Analyst, 2017 - present</h3>
              <p className="description">
                <i>Transition my skills to become a Developer! </i>
                At <a href="https://www.christiedigital.com/en-us" target="_blank">Christie Digital</a>
                , I build and support small and large software applications that being used from global
                users across departments and manufacture production. My job involves designing, developing
                web applications and SQL database.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-icon">
              <div id="infinity" className="infinity" />
            </div>
            <div className="inner-content">
              <h3 className="title">A Continuous Learner</h3>
              <p className="description">
                I enjoy challenges and new opportunities. I learn fast and pick up things fast.
                I like spending time learning new technologies and exploring new coding skills.
                I'm excited about what the future will bring, my goal is to build products that
                can make positive impacts on people.
              </p>
            </div>
          </div>
        </div>

        <hr />
      </Container>
    );
  }
}

export default Timeline;

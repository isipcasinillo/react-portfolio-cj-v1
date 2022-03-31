import React from 'react';
import '../Homepage/Homepage.css';
import { Link } from 'react-router-dom';
function Homepage() {
  return (
    <>
      <div className="homepage-container">
        <div className="hp-title">Building Web and Mobile Applications </div>
        <div className="hp-paragraph">
          My name is Cyril Isip. I am Web Developer based in Dallas, Texas.
          <br /> I recently graduated from Southern Methodist University
          focusing on Full Stack Developer.
        </div>
        <div className="btn-container">
          <Link to={'/projects'}>
            <button className="prev-btn btn">
              Preview my current projects{' '}
            </button>
          </Link>
          <Link to={'/contact'}>
            <button className="msg-btn btn">Send me a personal message!</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;

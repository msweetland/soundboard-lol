import React, { Component } from 'react';
import './RapHorn.css';

class RapHorn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: 'https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3',
    };
  }

  playSound = () => {
    new window.Audio(this.state.sound).play();
  }

  render() {
    return (
      <div className="airhorn-holder">
        <img
          className="airhorn"
          src="./airHorn.png"
          alt=""
          onClick={() => this.playSound()}
          onKeyPress={() => {}}
        />
      </div>
    );
  }
}

export default RapHorn;

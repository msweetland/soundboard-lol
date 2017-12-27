import React, { Component } from 'react';
import './Musburger.css';

class Musburger extends Component {
  constructor(props) {
    super(props);
    const sound = new window.Audio('https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3');
    this.state = {
      isPlaying: false,
      sound
    };
  }

  playSound = () => {
    this.setState({isPlaying: true});
    this.state.sound.play();
    const wait = this.state.sound.duration * 1000;
    window.setTimeout(() => {
      this.setState({isPlaying: false});
    }, wait);
  }

  render() {
    return (
      <div
        className="musburger wiggler"
        onClick={() => this.playSound()}
        onKeyPress={() => {}}
      >
        <img
          className="musburger-head"
          src="./musburgerhead.png"
          alt=""
        />
        <img
          className={this.state.isPlaying ? 'musburger-mouth talk' : 'musburger-mouth'}
          src="./musburgermouth.png"
          alt=""
        />
      </div>
    );
  }
}

export default Musburger;

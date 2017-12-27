import React, { Component } from 'react';
import './Musburger.css';

class Musburger extends Component {
  constructor(props) {
    super(props);
    const s0 = new window.Audio('./babyOver.mp3');
    const s1 = new window.Audio('./tostidos.mp3');
    const s2 = new window.Audio('./bamaGirl.mp3');
    const s3 = new window.Audio('./kiddingMe.mp3');
    this.state = {
      isPlaying: false,
      sounds: [
        s0,
        s2,
        s1,
        s3
      ],
      index: 0
    };
  }

  playSound = () => {
    if (!this.state.isPlaying) {
      this.setState({isPlaying: true});
      this.state.sounds[this.state.index].play();
      const wait = this.state.sounds[this.state.index].duration * 1000;
      window.setTimeout(() => {
        let index = this.state.index + 1;
        if (index === this.state.sounds.length) { index = 0; }
        this.setState({isPlaying: false, index});
      }, wait);
    }
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

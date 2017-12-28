import React, { Component } from 'react';
import './Musburger.css';

class Musburger extends Component {
  constructor(props) {
    super(props);
    let s1 = [new window.Audio('./babyOver.mp3'), 2011.429];
    let s2 = [new window.Audio('./tostidos.mp3'), 2334.419];
    let s3 = [new window.Audio('./bamaGirl.mp3'), 5948.263];
    let s4 = [new window.Audio('./kiddingMe.mp3'), 6766.017];

    s1[0].volume = 0.6;

    this.state = {
      isPlaying: false,
      sounds: [
        s1,
        s2,
        s3,
        s4
      ],
      index: 0
    };
  }

  playSound = () => {
    if (!this.state.isPlaying) {
      this.state.sounds[this.state.index][0].play();
      this.setState({isPlaying: true});
      window.setTimeout(() => {
        let index = this.state.index + 1;
        if (index === this.state.sounds.length) { index = 0; }
        this.setState({isPlaying: false, index});
      }, this.state.sounds[this.state.index][1]);
    }
  }

  render() {
    return (
      <div
        className="musburger wiggler"
      >
        <img
          className="musburger-head"
          src="./musburgerhead.png"
          alt=""
          onClick={() => this.playSound()}
          onKeyPress={() => {}}
        />
        <img
          className={this.state.isPlaying ? 'musburger-mouth talk' : 'musburger-mouth'}
          src="./musburgermouth.png"
          alt=""
          onClick={() => this.playSound()}
          onKeyPress={() => {}}
        />
      </div>
    );
  }
}

export default Musburger;

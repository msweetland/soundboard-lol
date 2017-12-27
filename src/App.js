import React, { Component } from 'react';

import Musburger from './Musburger';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 'http://soundbible.com/mp3/Cash%20Register%20Cha%20Ching-SoundBible.com-184076484.mp3',
      rapHorn: 'https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3',
    };
  }

  playSound = (sound) => {
    new window.Audio(sound).play();
  }

  render() {
    return (
      <div className="stage">
        <button className="btn btn-info" onClick={() => this.playSound(this.state.money)}>cash money</button>
        <button className="btn btn-info" onClick={() => this.playSound(this.state.rapHorn)}>rapHorn</button>
        <Musburger />
        <button className="btn btn-info" onClick={() => this.playSound(this.state.rapHorn)}>rapHorn</button>
      </div>
    );
  }
}

export default App;

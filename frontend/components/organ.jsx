var React = require('react');
var Key = require('./key.jsx');
var NoteConstants = require('../constants/tones.js');
var Recorder = require('./recorder.jsx');
var Songs = require('./songs.jsx');


var Organ = React.createClass({
  getInitialState: function () {
    return({ wave: "sine" })
  },

  handleWaveChange: function (e) {
    this.setState({ wave: e.target.value })
  },

  render: function () {
    var i = 0;
    var wave = this.state.wave;

    var keys = Object.keys(NoteConstants).map(function (note) {
      i++;
      return <Key key={i} noteName={note} wave={wave} />;
    });

    return(
      <div className="organ group">
        <h1>Beginner's Piano</h1>
        <div className="sharp-keys group">
          <div className="w">W</div>
          <div className="e">E</div>
          <div className="t">T</div>
          <div className="y">Y</div>
          <div className="u">U</div>
        </div>
        <ul className="keys group">
          {keys}
        </ul>
        <div className="not-sharp group">
          <div>A</div>
          <div>S</div>
          <div>D</div>
          <div>F</div>
          <div>G</div>
          <div>H</div>
          <div>J</div>
          <div>K</div>
        </div>
        <div className="wave">
          Select a wave type:
          <select onChange={this.handleWaveChange}>
            <option>sine</option>
            <option>triangle</option>
            <option>sawtooth</option>
            <option>square</option>
          </select>
        </div>
        <Recorder />
        <Songs />
        <div className="author">
          Created by Jessica Yao (<a href="https://github.com/jyao9/Beginner-Piano">GitHub</a> ● <a href="https://www.linkedin.com/in/jessyao9">LinkedIn</a> ● <a href="http://www.jessicayao.com">Website</a>)
        </div>
      </div>
    );
  }
});

module.exports = Organ;

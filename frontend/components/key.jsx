var React = require('react');
var KeyStore = require('../stores/key_store.js');
var Note = require('../util/note.js');
var NoteConstants = require('../constants/tones.js');

var Key = React.createClass({
  getInitialState: function () {
    return { playing: false };
  },

  componentDidMount: function () {
    var freq = NoteConstants[this.props.noteName];
    this.note = new Note(freq, "sine");
    this.keyStoreToken = KeyStore.addListener(this.setStateFromStore);
  },

  componentWillUnmount: function () {
    this.keyStoreToken.remove();
    this.setState({ playing: false });
  },

  componentWillReceiveProps: function (newProps) {
    var newWave = newProps.wave;
    this.note.changeWave(newWave);
  },

  setStateFromStore: function () {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
      this.setState({ playing: true });
    } else {
      this.setState({ playing: false });
    }
  },

  render: function () {

    var style;
    if (this.state.playing === true) {
      this.note.start();
      if (this.props.noteName.indexOf("#") !== -1) {
        style = "play sharp key " + this.props.noteName.slice(0, 1);
      } else {
        style = "play key";
      }
    } else if (this.note) {
      this.note.stop();
      if (this.props.noteName.indexOf("#") !== -1) {
        style = "sharp key " + this.props.noteName.slice(0, 1);
      } else {
        style = "key";
      }
    } else if (this.props.noteName.indexOf("#") !== -1) {
      style = "sharp key " + this.props.noteName.slice(0, 1);
    } else {
      style = "key";
    }

    return <li className={style}>{this.props.noteName.slice(0, -1)}</li>;
  }
});

module.exports = Key;

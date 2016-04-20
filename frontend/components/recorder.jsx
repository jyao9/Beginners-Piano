var React = require('react');
var Track = require('../util/track.js');
var KeyStore = require('../stores/key_store.js');

var Recorder = React.createClass({
  getInitialState: function () {
    return {isRecording: false, track: new Track()};
  },

  componentDidMount: function () {
      this.keyStoreToken = KeyStore.addListener(this.setStateFromStore);
  },

  componentWillUnmount: function () {
    this.keyStoreToken.remove();
  },

  setStateFromStore: function () {
    if (KeyStore.all().length > 0 && this.state.isRecording){
      this.state.track.addNotes(KeyStore.all());
    }
  },

  beginRecording: function () {
    this.setState({isRecording: true});
    this.state.track.beginRecording();
  },

  stopRecording: function () {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
  },

  render: function () {
    var recordingLight;
    var button;
    if (this.state.isRecording) {
      recordingLight = <div className="light on">●</div>;
      button = <button onClick={this.stopRecording}>Stop Recording</button>;
    } else {
      recordingLight = <div className="light off">●</div>;
      button = <button onClick={this.beginRecording}>Start Recording</button>;
    }

    return (
      <div className="recorder group">
        {recordingLight}
        {button}
        <button onClick={this.state.track.play.bind(this.state.track)}>Play</button>
      </div>
    );
  }
});

module.exports = Recorder;

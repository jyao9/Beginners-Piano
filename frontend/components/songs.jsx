var React = require('react');
var Notes = require('./notes.jsx');

var Songs = React.createClass({
  getInitialState: function () {
    return({ currentSong: null, noteType: "key" })
  },

  handleClick: function (e) {
    var songChoosen = $(e.target).text();
    this.setState({ currentSong: songChoosen })
  },

  changeToKeys: function () {
    this.setState({ noteType: "key" })
  },

  changeToNotes: function () {
    this.setState({ noteType: "note" })
  },

  render: function () {
    var songList = [
      "Mary Had a Little Lamb",
      "Twinkle, Twinkle Little Star",
      "Do Re Mi",
      "Ode to Joy",
      "Minuet"
    ];
    var count = 0;
    var songLinks = songList.map(function (song) {
      count++;
      return(<div key={count} className="song" onClick={this.handleClick}>{song}</div>);
    }.bind(this));

    var notes;

    if (this.state.currentSong) {
      notes = <Notes noteType={this.state.noteType} song={this.state.currentSong} />
    }

    return(
      <div className="song-list group">
        <div className="side-note">
          Note:
          C(l) stands for low C and C(h) stands for high C
        </div>
        {songLinks}
        <div className="note-button" onClick={this.changeToNotes}>Notes</div>
        <div className="note-button" onClick={this.changeToKeys}>Keys</div>
        {notes}
      </div>
    );
  }
});

module.exports = Songs;

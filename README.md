# Beginner's Piano


Play the game at: [link here][heroku]
[heroku]: http://beginners-piano.herokuapp.com/

## Game View:
![Game](https://github.com/jyao9/Beginners-Piano/blob/master/app/assets/images/game.jpg)


## Summary
Beginner's Piano is a browser game that allows users to learn simple piano songs using the computer keyboard. It was built using Javascript and React.js.

## Languages and Technologies
* Javascript
* jQuery
* React
* HTML
* CSS

## Features
### The Recorder
The recorder in this games stores the notes on the front end so that there is no database, thus no querying. It executes this feature by holding the notes in a track object. When the play method is invoked, the notes in the track object are sent to the key store, whose change is detected by a key component.

```javascript
//track.js

function Track(attrs) {
  var defaults = {
    name: "",
    roll: []
  };
...

play: function () {
  if (this.interval) { return; }

  var currentNote = 0;
  var playBackStartTime = Date.now();
  var roll = this.attributes.roll;
  var delta;

  this.interval = setInterval(function () {
    if (currentNote < roll.length) {
      delta = Date.now() - playBackStartTime;

      if (delta >= roll[currentNote].time) {
        var notes = roll[currentNote].notes || [];
        KeyActions.playRecording(notes);
        currentNote++;
      }
    } else {
      clearInterval(this.interval);
      delete this.interval;
    }
  }.bind(this), 1);
};

//key.jsx

setStateFromStore: function () {
  if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
    this.setState({ playing: true });
  } else {
    this.setState({ playing: false });
  }
}

```

var KeyActions = require('../actions/key_actions.js');

function Track(attrs) {
  var defaults = {
    roll: []
  };

  this.attributes = $.extend(defaults, attrs || {});
}

Track.prototype = {
  addNotes: function (notes) {
    var timeSlice = { time: this._timeDelta() };
    if (notes.length > 0) {
      timeSlice.notes = notes;
    }
    this.attributes.roll.push(timeSlice);
  },

  stopRecording: function () {
    this.addNotes([]);
  },

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
  },

  beginRecording: function () {
    this.attributes.roll = [];
    this.start = Date.now();
  },

  _timeDelta: function () {
    return Date.now() - this.start;
  }
};

module.exports = Track;

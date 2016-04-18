var Dispatcher = require('../dispatcher/dispatcher.js');
var NoteConstants = require('../constants/tones.js');

var KeyActions = {
  keyPressed: function (key) {
    var action = {
      actionType: "KEY_PRESSED",
      noteName: key
    };
    Dispatcher.dispatch(action);
  },

  keyReleased: function (key) {
    var action = {
      actionType: "KEY_RELEASED",
      noteName: key
    };
    Dispatcher.dispatch(action);
  },

  playRecording: function (keyArray) {
    var action = {
      actionType: "PLAY_RECORDING",
      keyArray: keyArray
    };
    Dispatcher.dispatch(action);
  }
};

module.exports = KeyActions;

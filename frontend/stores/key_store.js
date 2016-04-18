var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var NoteConstants = require('../constants/tones.js');

var KeyStore = new Store (Dispatcher);

var _keys = [];
var _callbacks = [];

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "KEY_PRESSED":
      if (_keys.indexOf(payload.noteName) === -1) {
        _keys.push(payload.noteName);
        KeyStore.__emitChange();
      }
      break;
    case "KEY_RELEASED":
      for (var i = 0; i < _keys.length; i++) {
        if (_keys[i] === payload.noteName) {
          _keys.splice(i, 1);
          KeyStore.__emitChange();
        }
      }
      break;
    case "PLAY_RECORDING":
      _keys = payload.keyArray;
      KeyStore.__emitChange();
      break;
  }
};

KeyStore.all = function () {
  return _keys.slice();
};

module.exports = KeyStore;

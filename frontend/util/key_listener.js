var KeyActions = require('../actions/key_actions.js');

var Mapping = {
  65: 'C4',
  83: 'D4',
  68: 'E4',
  70: 'F4',
  71: 'G4',
  72: 'A4',
  74: 'B4',
  75: 'C5',
  87: "C#4",
  69: "D#4",
  84: "F#4",
  89: "G#4",
  85: "A#4"
};

var Controls = function () {
  $(document).on("keydown", function (event) {
    if (Mapping[event.which]) {
      KeyActions.keyPressed(Mapping[event.which]);
    }
  });
  $(document).on("keyup", function (event) {
    if (Mapping[event.which]) {
      KeyActions.keyReleased(Mapping[event.which]);
    }
  });
};

module.exports = Controls;

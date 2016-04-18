var ctx = new (window.AudioContext || window.webkitAudioContext)();

var createOscillator = function (freq, wave) {
  var osc = ctx.createOscillator();
  osc.type = wave;
  osc.frequency.value = freq;
  osc.detune.value = 0;
  osc.start(ctx.currentTime);
  return osc;
};

var createGainNode = function () {
  var gainNode = ctx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(ctx.destination);
  return gainNode;
};

var Note = function (freq, wave) {
  this.oscillatorNode = createOscillator(freq, wave);
  this.gainNode = createGainNode();
  this.oscillatorNode.connect(this.gainNode);
};

Note.prototype = {
  start: function () {
    this.gainNode.gain.value = 0.3;
  },

  stop: function () {
    this.gainNode.gain.value = 0;
  },

  changeWave: function (wave) {
    this.oscillatorNode.type = wave;
  }
};

module.exports = Note;

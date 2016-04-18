var React = require("react");
var ReactDOM = require("react-dom");

var Controls = require('./util/key_listener.js');
var Organ = require('./components/organ.jsx');
Controls();

$(document).ready(function (e) {
  ReactDOM.render(
    <Organ />,
    $(".content")[0]
  );
});

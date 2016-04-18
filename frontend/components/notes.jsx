var React = require('react');

var Notes = React.createClass({
  getCurrentSong: function () {
    if (this.props.song === "Mary Had a Little Lamb") {
      if (this.props.noteType === "note") {
        return("E D C(l) D E E E D D D E G G E D C(l) D E E E E D D E D C(l)");
      } else {
        return("D S A S D D D S S S D G G D S A S D D D D S S D S A");
      }
    } else if (this.props.song === "Twinkle, Twinkle Little Star") {
      if (this.props.noteType === "note") {
        return("C(l) C(l) G G A A G F F E E D D C(l)");
      } else {
        return("A A G G H H G F F D D S S A");
      }
    } else if (this.props.song === "Do Re Mi") {
      if (this.props.noteType === "note") {
        return("C(l) D E C E C E D E F F E D F E F G E G E G");
      } else {
        return("A S D A D A D S D F F D S F D F G D G D G");
      }
    } else if (this.props.song === "Ode to Joy") {
      if (this.props.noteType === "note") {
        return("E E F G G F E D C(l) C(l) D E E D D E E F G G F E D C(l) C(l) D E E D C(l) C(l)");
      } else {
        return("D D F G G F D S A A S D D S S D D F G G F D S A A S D S A A");
      }
    } else if (this.props.song === "Minuet") {
      if (this.props.noteType === "note") {
        return("G C(l) D E F G C(l) C(l) A F G A B C(h) C(l) C(l)");
      } else {
        return("G A S D F G A A H F G H J K A A");
      }
    }
  },

  render: function () {
    return(
      <div>
        <div className="notes">{this.getCurrentSong()}</div>
      </div>
    );
  }
});

module.exports = Notes;

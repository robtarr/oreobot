 define(function() {
  function Oreo() {
    this.board = null;
    this.led = null;
  }

  Oreo.handle = function() {
    var that = this;

    require(['scripts/libs/Noduino.js', 'scripts/libs/Noduino.Socket.js', 'scripts/libs/Logger.js'], function(NoduinoObj, Connector, Logger) {
      var Noduino = new NoduinoObj({debug: false, host: 'http://localhost:8090'}, Connector, Logger);
      Noduino.connect(function(err, board) {
        $('#oreoConnection .alert').addClass('hide');
        if (err) {
          $('#oreoConnection .alert-error').removeClass('hide'); }
        else {
          $('#oreoConnection .alert-success').removeClass('hide');
          $('#oreoDeliver').addClass('ready')
          that.board = board;
        }
      });
    });

  };

  Oreo.stop = function(pin) {
    this.board.digitalWrite(pin, 0);
  };

  Oreo.start = function(pin, delay) {
    this.board.digitalWrite(pin, 255);
    setTimeout(function() {
      Oreo.stop(pin)
    }, delay);
  };

  Oreo.reset = function(pin, delay) {
    this.board.digitalWrite(pin, 100);
    setTimeout(function() {
      Oreo.stop(pin)
    }, delay);
  };

  return Oreo;
});
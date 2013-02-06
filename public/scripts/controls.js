define(function() {

  var oreo = null;
  function Events() {

  }

  oreoConnect = function(cb) {
    $('#oreoConnection .alert').addClass('hide');
    $('#oreoConnection .alert-info').removeClass('hide');
    $('#oreoConnection .alert-info').html('Trying to connect to your Arduino…');

     require(['oreo'], function(o) {
      oreo = o;
      o.handle();

      if( typeof cb == "function" )  {
        cb();
      }
    });
  }

  deliverOreo = function() {
    oreo.start(13, 200);
  }

  Events.bind = function() {
    $('#oreoDeliver').click(function(e) {
      e.preventDefault();
      deliverOreo();
    });
  };
  
  oreoConnect();

  return Events;
});
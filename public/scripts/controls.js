define(function() {

  var oreo = null;
  function Events() {
  }

  oreoConnect = function(cb) {
    $('#oreoConnection .alert').addClass('hide');
    $('#oreoConnection .alert-info').removeClass('hide').html('Trying to connect to your Arduino…');

     require(['oreo'], function(o) {
      oreo = o;
      o.handle();

      if( typeof cb == "function" )  {
        cb();
      }
    });
  }

  deliverOreo = function() {
    oreo.start($('#oreoPinValue').val(), 600);
  }

  Events.bind = function() {

    $('#oreoConnect').click(function(e) {
      e.preventDefault();
      oreoConnect();
    });

    $('#oreoDeliver').click(function(e) {
      e.preventDefault();
      $('#oreoSecondStep .alert').addClass('hide');
      deliverOreo();
    });

    oreoConnect();
  };

  return Events;
});
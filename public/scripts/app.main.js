var p = 'scripts/vendor/';
require(["jquery", p + "dropdown.js", p + "prettify.js", "./scripts/controls.js"], function($, dd, pf, controls) {
  $(document).ready(function(e) {
    prettyPrint();
    controls.bind();
  });
});
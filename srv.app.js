/**
 * srv.app.js – Handling HTTP:80 Requests
 * This file is part of noduino (c) 2012 Sebastian Müller <c@semu.mp>
 *
 * @package     noduino
 * @author      Sebastian Müller <c@semu.mp>
 * @license     MIT License – http://www.opensource.org/licenses/mit-license.php
 * @url         https://github.com/semu/noduino
 */

define(['kickstart', 'module', 'path', 'fs'], function (kickstart, module, path, fs) {
  var kickstart = kickstart.withConfig({'name': 'localhost', 'port': 8081, 'path': './'});
  var srv = kickstart.srv();

  /**
   * Catch request for serving home page
   */
  srv.all('/', function(req, res) {
    res.render('home', {jsApp: 'main', active: 'home', title: 'noduino'});
  });

  return {'kickstart': kickstart, 'srv': srv};
});
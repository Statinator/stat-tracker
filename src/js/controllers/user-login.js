'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('','stat-tracker', function () {

  $('.main-content').html(views['user-login']);
  
  $.ajax({
    url: 'http://localhost:8000/api/activities',
    method: 'GET'
  })
  .then(function (data) {
    console.log(data);
  });
  
});
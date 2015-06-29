'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('register', function () {

  $('.main-content').html(views['user-reg']);
  
});
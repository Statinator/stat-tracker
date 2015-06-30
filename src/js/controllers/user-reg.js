'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var formToObj = require('form-to-obj');

router.route('register', function () {

  $('.main-content').html(views['user-reg']);
  var csrftoken = getCookie('csrftoken');
  console.log(csrftoken);
  
  $('.user-reg-form').on('submit', function () {
    
    var data = {
      'name': $('.username').val(),
      'email': $('.email').val(),
      'password': $('.password').val()
    }
    
    console.log(data);
    
    $.ajax({
      url: 'http://localhost:8000/api/users/',
      method: 'POST',
      data: data
    })
    .done(function () {
      alert('success');
    });
  });
  
  function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = $.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
  }
  
});
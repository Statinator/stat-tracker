'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('register', function () {

  $('.main-content').html(views['user-reg']);
  var csrftoken = getCookie('csrftoken');
  console.log(csrftoken);
<<<<<<< HEAD

  $('.user-reg-form').on('submit', function () {

=======
  
  $('.user-reg-form').submit(function (e) {
    e.preventDefault();
    
>>>>>>> 38e7206ce50b6b7b17586403a4b05f2c5818e189
    var data = {
      'username': $('.username').val(),
      'password': $('.password').val(),
      'email': $('.email').val()
    }

    console.log(data);

    $.ajax({
      headers: { "X-CSRFToken": csrftoken },
      url: '/api/users/',
      method: 'POST',
      data: data
    })
    .done(function () {
      alert('success');
      document.location.href="/#" + "activities";
    })
    .fail(function (arguements) {
      console.log(arguements);
    })
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

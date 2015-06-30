'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('new-activity', function () {

  $('.main-content').html(views['new-activity']);


  var csrftoken = getCookie('csrftoken');
  console.log(csrftoken);

  $('.new-activity').on('submit', function () {

    var data = {
      'title': $('.name-input').val(),
      "posted_at": "2015-12-31"
    }

    console.log(data);

    $.ajax({
      headers: { "X-CSRFToken": csrftoken },
      url: '/api/activities/',
      method: 'POST',
      data: data
    })
    .done(function () {
      alert('success');
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

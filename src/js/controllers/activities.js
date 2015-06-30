'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('activities', function () {
  
  render();

function render () {
   $('.main-content').html(views['activities']);
   $.ajax({
      headers: { "X-CSRFToken": csrftoken },
      url: 'http://localhost:8000/api/activities/',
      method: 'GET'
    })
    .done(function (data) {
      alert('success');
      console.log(data);
      })
    .fail(function (arguements) {
      console.log(arguements);
    });
  }; 
  
  var csrftoken = getCookie('csrftoken');
  console.log(csrftoken);
  
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
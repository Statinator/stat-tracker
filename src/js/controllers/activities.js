'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('activities', function () {

  render();

function render () {
   $.ajax({
      headers: { "X-CSRFToken": csrftoken },
      url: '/api/activities/',
      method: 'GET'
    })
    .done(function (data) {
      console.log(data);
      createTemplate({ activities : data});
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

  function createTemplate (model) {
    var templateFn = _.template(views['activities'], { variable: 'm' });

    var template = templateFn(model);

    $('.main-content').html(template);
  }

});

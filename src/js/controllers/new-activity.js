'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
var datepicker = require('../../../node_modules/jquery-ui/datepicker.js')

router.route('new-activity', function () {

  $('.main-content').html(views['new-activity']);



  var csrftoken = getCookie('csrftoken');
  console.log(csrftoken);

  $('.new-activity').on('submit', function () {

    var data = {
      'title': $('.name-input').val(),
      "posted_at": "2015-12-31"
    }


  $('.datepicker').datepicker({
    minDate: '-1y',
    maxDate: '-1d',
  });
<<<<<<< HEAD


=======
  
  $.datepicker.setDefaults({ dateFormat: 'yy-mm-dd' });
  
  
>>>>>>> 38e7206ce50b6b7b17586403a4b05f2c5818e189
  var csrftoken = getCookie('csrftoken');
  console.log(csrftoken);

  $('.new-activity').submit(function (e) {
    e.preventDefault();
    var data = {
      'title': $('.name-input').val(),
      "posted_at": $('.datepicker').val()
    };
    console.log(data);

    $.ajax({
      headers: { "X-CSRFToken": csrftoken },
      url: '/api/activities/',
      method: 'POST',
      data: data
    })
    .done(function () {
      alert('success');
      document.location.href="/#" + "activities";
    })
    .fail(function (args) {
      console.log(args);
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

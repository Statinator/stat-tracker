require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
var views={"activities":"\n    <div class=\"share stack-list-item card\">\n      <p class=\"card-header\">title: <a class=\"share-title\" href=\"\"></a></p>\n      <div class=\"card-copy\">\n          <div class=\"chart\">\n            Values over time\n\t    </div>\n      </div>\n    </div>\n","new-activity":"<form class=\"new-activity pure-form\">\n  <div class=\"activity-name pure-control-group\">\n    <label for=\"new-activity-name\">Name</label>\n      <input class=\"name-input\" name=\"new-activity-name\" placeholder=\"Name\"></input>\n  </div>\n  <div class=\"comments pure-control-group\">\n    <label for=\"new-comment\">Description</label>\n      <input class=\"comment-input\" name=\"new-comment\" placeholder=\"Describe it!\"></input>\n  </div>\n  <button class=\"new-activity-btn\">Add +</button>\n</form>\n","not-found":"<h1>404 Not found!</h1>","user-login":"<header class=\"login-header\">\n  <h1>THE STATINATOR</h1>\n</header>\n<div class=\"user-login\">\n\n  <form class=\"user-login-form pure-form\">\n    <div class=\"pure-control-group\">\n      <label for=\"username\">Username</label>\n      <input class=\"username\" name=\"username\" placeholder=\"Username\"></input>\n    </div>\n    <div class=\"pure-control-group\">\n      <label for=\"password\">Password</label>\n      <input class=\"password\" name=\"password\" placeholder=\"Password\"></input>\n    </div>\n    <button class=\"submit-reg\">Login</button>\n  </form>\n\n</div>\n","user-page":"<h1>My Activities</h1>\n\n  <div class=\"activities-container\">\n    <ul class=\"activities\">\n      <li class=\"activity\">\n        <span class=\"activity-name\">Name</span>\n        <span class=\"activity-start-date\">Start Date</span>\n        <span class=\"activity-recent-date\">Recent Logged</span>\n        <span class=\"activity-progress\">Progress</span>\n\n        <ul class=\"dropdown-menu\">\n          <li class=\"edit\">Edit</li>\n          <li class=\"details\">Details</li>\n          <li class=\"log-new\">Log New</li>\n        </ul>\n      </li>\n    </ul>\n\n  </div>\n\n  <button type=\"button\" class=\"new-button\">Add New +</button>\n","user-reg":"<header class=\"reg-header\">\n  <h1>THE STATINATOR</h1>\n</header>\n\n<div class=\"reg-main\">\n\n  <form class=\"user-reg-form pure-form\">\n    <div class=\"pure-control-group\">\n      <label for=\"username\">Username</label>\n      <input class=\"username\" name=\"username\" placeholder=\"Username\"></input>\n    </div>\n\n    <div class=\"pure-control-group\">\n        <label for=\"email\">Email</label>\n        <input class=\"email\" name=\"email\" placeholder=\"Email\"></input>\n    </div>\n\n    <div class=\"pure-control-group\">\n      <label for=\"password\">Password</label>\n      <input class=\"password\" name=\"password\" placeholder=\"Password\"></input>\n    </div>\n\n    <button class=\"submit-reg\">Sign Up</button>\n  </form>\n\n</div>\n"};
if (typeof module !== "undefined" && module.exports) { module.exports = views; }
},{}]},{},[]);

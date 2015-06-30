(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function formToObj(e){function r(e){for(var r=e.querySelectorAll("input, textarea, select"),n=[],t=0;t<r.length;++t){var u=r[t];("checkbox"!==u.type&&"radio"!==u.type||u.checked)&&n.push({name:u.name,value:u.value})}return n}function n(e,r,n){var u=r.split("."),o=u.length-1;u.reduce(function(e,r,u){return u===o?t(e,r,n):t(e,r,{})},e)}function t(e,r,n){if("[]"===r.slice(-2))u(e,r).push(n);else{if(e[r])return e[r];if("]"===r[r.length-1]){var t=u(e,r);if(t.prevName===r)return t[t.length-1];t.push(n),t.prevName=r}else e[r]=n}return n}function u(e,r){var n=r.replace(/\[\d*\]/,"");return e[n]||(e[n]=[])}var o=r(e);return o.sort(function(e,r){return e.name.localeCompare(r.name)}),o.reduce(function(e,r){return n(e,r.name,r.value),e},{})}"undefined"!=typeof module&&module.exports&&(module.exports=formToObj);

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("new-activity",function(){$(".main-content").html(views["new-activity"])});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],4:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("","stat-tracker",function(){$(".main-content").html(views["user-login"]),$.ajax({url:"http://localhost:8000/api/activities",method:"GET"}).then(function(e){console.log(e)})});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],5:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("stat-tracker/:id",function(){$(".main-content").html(views["user-page"])});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],6:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),formToObj=require("form-to-obj");router.route("register",function(){function e(e){var r=null;if(document.cookie&&""!=document.cookie)for(var o=document.cookie.split(";"),t=0;t<o.length;t++){var n=$.trim(o[t]);if(n.substring(0,e.length+1)==e+"="){r=decodeURIComponent(n.substring(e.length+1));break}}return r}$(".main-content").html(views["user-reg"]);var r=e("csrftoken");console.log(r),$(".user-reg-form").on("submit",function(){var e={name:$(".username").val(),email:$(".email").val(),password:$(".password").val()};console.log(e),$.ajax({url:"http://localhost:8000/api/users/",method:"POST",data:e}).done(function(){alert("success")})})});

},{"../router":8,"form-to-obj":1,"jquery":"jquery","underscore":"underscore","views":"views"}],7:[function(require,module,exports){
"use strict";var router=require("./router");({controllers:{activities:require("./controllers/activities.js"),"new-activity":require("./controllers/new-activity.js"),"user-login":require("./controllers/user-login.js"),"user-page":require("./controllers/user-page.js"),"user-reg":require("./controllers/user-reg.js")}}),router.init();

},{"./controllers/activities.js":2,"./controllers/new-activity.js":3,"./controllers/user-login.js":4,"./controllers/user-page.js":5,"./controllers/user-reg.js":6,"./router":8}],8:[function(require,module,exports){
"use strict";var SortedRouter=require("./sorted-router");module.exports=new SortedRouter;

},{"./sorted-router":9}],9:[function(require,module,exports){
"use strict";var Backbone=require("backbone"),_=require("underscore"),SortedRouter=Backbone.Router.extend({sortedRoutes:{},route:function(){for(var e=arguments.length-1,t=arguments[arguments.length-1],r=0;e>r;++r)this.sortedRoutes[arguments[r]]=t},init:function(){var e=-1e6,t=this;_.chain(_.pairs(this.sortedRoutes)).sortBy(function(t){var r=t[0];return r.indexOf("*")>=0?e:-r.split(":").length}).each(function(e){Backbone.Router.prototype.route.apply(t,e)}),Backbone.history.start()}});module.exports=SortedRouter;

},{"backbone":"backbone","underscore":"underscore"}]},{},[7])


//# sourceMappingURL=app.js.map
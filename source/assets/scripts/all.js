"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,i,a){return i&&t(n.prototype,i),a&&t(n,a),n}}(),componentDebug=!1,Navbar=function(){function t(){_classCallCheck(this,t),componentDebug&&console.log("constructor..."),this.navbar=document.querySelector(".js-navbar"),this.button=this.navbar.querySelector(".js-navbar__button"),this.navigation=this.navbar.querySelector(".js-navbar__navigation"),this.options={buttonActiveClass:"is-active",navigationActiveClass:"is-active"},this.navigationIsActive=!1,this.initialize()}return _createClass(t,[{key:"initialize",value:function(){componentDebug&&console.log("initialize..."),this.navigationStateSet=this.navigationStateSet.bind(this),this.navigationOpen=this.navigationOpen.bind(this),this.navigationClose=this.navigationClose.bind(this),this.navigationToggle=this.navigationToggle.bind(this),this.button.addEventListener("click",this.navigationToggle),window.addEventListener("click",this.navigationClose),this.navbar.addEventListener("click",function(t){t.stopPropagation()})}},{key:"navigationOpen",value:function(){componentDebug&&console.log("navigationOpen..."),this.navigationStateSet(!0),this.navigation.classList.add(this.options.navigationActiveClass),this.button.classList.add(this.options.buttonActiveClass)}},{key:"navigationClose",value:function(){componentDebug&&console.log("navigationClose..."),this.navigationStateSet(!1),this.navigation.classList.contains(this.options.navigationActiveClass)&&this.navigation.classList.remove(this.options.navigationActiveClass),this.button.classList.contains(this.options.buttonActiveClass)&&this.button.classList.remove(this.options.buttonActiveClass)}},{key:"navigationToggle",value:function(){componentDebug&&console.log("navigationToggle..."),this.navigationStateGet()?this.navigationClose():this.navigationOpen()}},{key:"navigationStateGet",value:function(){return componentDebug&&console.log("navigationStateGet..."),this.navigationIsActive}},{key:"navigationStateSet",value:function(t){componentDebug&&console.log("navigationStateSet..."),this.navigationIsActive=t}}]),t}(),App=function t(){_classCallCheck(this,t),"querySelector"in document&&"addEventListener"in window&&document.documentElement.classList&&(this.navbar=[].slice.call(document.querySelectorAll(".js-navbar")).map(function(t){return new Navbar(t)}))};document.addEventListener("DOMContentLoaded",function(){WebFont.load({google:{families:["Roboto:300,400,400i,700:latin-ext"]}}),new App});
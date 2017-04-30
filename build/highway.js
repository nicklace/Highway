!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();!function(){function t(e){i(this,t),this.views=e.views,this.mode=e.mode||"out-in",this.stack={},this.init()}r(t,[{key:"init",value:function(){var t=document.querySelector("title").innerHTML,e=document.querySelector("[namespace]"),n=e.getAttribute("namespace");this.path=window.location.pathname,this.stack[this.path]={title:t,root:e,name:n},this.current=new this.views[n](this.stack[this.path]),this.current.init(),this.bind()}},{key:"bind",value:function(){var t=this;if(this.onPopstate||(this.onPopstate=this.popstate.bind(this),window.addEventListener("popstate",this.onPopstate)),!this.onUpdate){var e=this.current.root.querySelectorAll("a[href]:not([disabled])");this.onUpdate=this.update.bind(this),[].forEach.call(e,function(e,n){e.addEventListener("click",t.onUpdate)})}}},{key:"unbind",value:function(){var t=this;if(this.onUpdate){var e=this.previous.root.querySelectorAll("a[href]:not([disabled])");[].forEach.call(e,function(e,n){e.removeEventListener("click",t.onUpdate)}),this.onUpdate=null}}},{key:"popstate",value:function(){this.path=window.location.pathname,this.fetchCall()}},{key:"update",value:function(t){t.preventDefault();var e=t.currentTarget,n=e.getAttribute("href");n!==this.path&&(this.path=n,window.history.pushState({path:this.path},"",this.path),this.fetchCall())}},{key:"fetchCall",value:function(){var t=this;if(!this.stack[this.path])return void fetch(this.path).then(function(t){return t.text()}).then(function(e){return t.fetchSuccess(e)}).catch(function(e){return t.fetchError(e)});this.redirect()}},{key:"fetchSuccess",value:function(t){var e=document.createRange().createContextualFragment(t),n=e.querySelector("title").innerHTML,i=e.querySelector("[namespace]"),r=i.getAttribute("namespace");this.stack[this.path]={title:n,root:i,name:r},this.redirect()}},{key:"fetchError",value:function(t){throw new Error(t)}},{key:"redirect",value:function(){var t=this,e=this.stack[this.path].name;switch(this.previous=this.current,this.current=new this.views[e](this.stack[this.path]),this.mode){case"both":this.previous.unload(),this.unbind(),this.current.load(),this.bind();break;case"in-out":this.current.load(function(){t.previous.unload(),t.unbind()}),this.bind();break;default:this.previous.unload(function(){t.current.load(),t.bind()}),this.unbind()}}}])}();e.default=Highway},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();!function(){function t(e){if(i(this,t),void 0===this.transition)throw new Error("Undefined Transitions");this.title=e.title,this.root=e.root,this.name=e.name,this.wrapper=document.querySelector(".router-wrapper")}r(t,[{key:"init",value:function(){this.onEnterCompleted()}},{key:"append",value:function(){document.title=this.title,this.wrapper.appendChild(this.root)}},{key:"remove",value:function(){this.wrapper.removeChild(this.root),this.onLeaveCompleted()}},{key:"load",value:function(t){var e=this;this.onEnter(),this.append(),this.tIn=new Promise(function(t,n){if(!e.transition.in)return void n();e.transition.in(e.root,t)}),this.tIn.then(this.init.bind(this)).then(this.analytics.bind(this)).then(t).catch(function(){throw new Error("Undefined Transition In")})}},{key:"unload",value:function(t){var e=this;this.onLeave(),this.tOut=new Promise(function(t,n){if(!e.transition.out)return void n();e.transition.out(e.root,t)}),this.tOut.then(this.remove.bind(this)).then(t).catch(function(){throw new Error("Undefined Transition Out")})}},{key:"analytics",value:function(){"undefined"!=typeof ga&&(ga("set",{page:window.location.pathname,title:document.title}),ga("send","pageview"))}}])}();e.default=HighwayView},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=i(r),a=n(1),s=i(a),u={Core:o.default,View:s.default};e.default=u}]);
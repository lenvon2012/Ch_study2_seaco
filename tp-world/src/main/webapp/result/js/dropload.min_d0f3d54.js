!function(o){"use strict";function t(o){o.touches||(o.touches=o.originalEvent.touches)}function n(o,t){t._startY=o.touches[0].pageY,t.touchScrollTop=t.$scrollArea.scrollTop()}function s(t,n){n._curY=t.touches[0].pageY,n._moveY=n._curY-n._startY,n._moveY>0?n.direction="down":n._moveY<0&&(n.direction="up");var s=Math.abs(n._moveY);""!=n.opts.loadUpFn&&n.touchScrollTop<=0&&"down"==n.direction&&!n.isLockUp&&(t.preventDefault(),n.$domUp=o("."+n.opts.domUp.domClass),n.upInsertDOM||(n.$element.prepend('<div class="'+n.opts.domUp.domClass+'"></div>'),n.upInsertDOM=!0),i(n.$domUp,0),s<=n.opts.distance?(n._offsetY=s,n.$domUp.html(n.opts.domUp.domRefresh)):s>n.opts.distance&&s<=2*n.opts.distance?(n._offsetY=n.opts.distance+.5*(s-n.opts.distance),n.$domUp.html(n.opts.domUp.domUpdate)):n._offsetY=n.opts.distance+.5*n.opts.distance+.2*(s-2*n.opts.distance),n.$domUp.css({height:n._offsetY}))}function e(t){var n=Math.abs(t._moveY);""!=t.opts.loadUpFn&&t.touchScrollTop<=0&&"down"==t.direction&&!t.isLockUp&&(i(t.$domUp,300),n>t.opts.distance?(t.$domUp.css({height:t.$domUp.children().height()}),t.$domUp.html(t.opts.domUp.domLoad),t.loading=!0,t.opts.loadUpFn(t)):t.$domUp.css({height:"0"}).on("webkitTransitionEnd transitionend",function(){t.upInsertDOM=!1,o(this).remove()}),t._moveY=0)}function d(o){o._scrollContentHeight=o.opts.scrollArea==a?p.height():o.$element[0].scrollHeight}function i(o,t){o.css({"-webkit-transition":"all "+t+"ms",transition:"all "+t+"ms"})}var l,a=window,c=document,r=o(a),p=o(c);o.fn.dropload=function(o){return new l(this,o)},l=function(t,n){var s=this;s.$element=o(t),s.upInsertDOM=!1,s.loading=!1,s.isLockUp=!1,s.isLockDown=!1,s.isData=!0,s._scrollTop=0,s.init(n)},l.prototype.init=function(d){function i(){l.direction="up",l.$domDown.html(l.opts.domDown.domLoad),l.loading=!0,l.opts.loadDownFn(l)}var l=this;l.opts=o.extend({},{scrollArea:l.$element,domUp:{domClass:"dropload-up",domRefresh:'<div class="dropload-refresh">↓下拉刷新</div>',domUpdate:'<div class="dropload-update">↑释放更新</div>',domLoad:'<div class="dropload-load"><span class="loading"></span>加载中...</div>'},domDown:{domClass:"dropload-down",domRefresh:'<div class="dropload-refresh">↑上拉加载更多</div>',domLoad:'<div class="dropload-load"><span class="loading"></span>加载中...</div>',domNoData:'<div class="dropload-noData">暂无数据</div>'},distance:50,threshold:"",loadUpFn:"",loadDownFn:""},d),""!=l.opts.loadDownFn&&(l.$element.append('<div class="'+l.opts.domDown.domClass+'">'+l.opts.domDown.domRefresh+"</div>"),l.$domDown=o("."+l.opts.domDown.domClass)),l.opts.scrollArea==a?(l.$scrollArea=r,l._scrollContentHeight=p.height(),l._scrollWindowHeight=c.documentElement.clientHeight):(l.$scrollArea=l.opts.scrollArea,l._scrollContentHeight=l.$element[0].scrollHeight,l._scrollWindowHeight=l.$element.height()),l._scrollContentHeight<=l._scrollWindowHeight&&i(),r.on("resize",function(){l._scrollWindowHeight=l.opts.scrollArea==a?a.innerHeight:l.$element.height()}),l.$element.on("touchstart",function(o){l.loading||(t(o),n(o,l))}),l.$element.on("touchmove",function(o){l.loading||(t(o,l),s(o,l))}),l.$element.on("touchend",function(){l.loading||e(l)}),l.$scrollArea.on("scroll",function(){l._scrollTop=l.$scrollArea.scrollTop(),l._threshold=""===l.opts.threshold?Math.floor(1*l.$domDown.height()/3):l.opts.threshold,""!=l.opts.loadDownFn&&!l.loading&&!l.isLockDown&&l._scrollContentHeight-l._threshold<=l._scrollWindowHeight+l._scrollTop&&i()})},l.prototype.lock=function(o){var t=this;void 0===o?"up"==t.direction?t.isLockDown=!0:"down"==t.direction?t.isLockUp=!0:(t.isLockUp=!0,t.isLockDown=!0):"up"==o?t.isLockUp=!0:"down"==o&&(t.isLockDown=!0)},l.prototype.unlock=function(){var o=this;o.isLockUp=!1,o.isLockDown=!1},l.prototype.noData=function(){var o=this;o.isData=!1},l.prototype.resetload=function(){var t=this;"down"==t.direction&&t.upInsertDOM?t.$domUp.css({height:"0"}).on("webkitTransitionEnd mozTransitionEnd transitionend",function(){t.loading=!1,t.upInsertDOM=!1,o(this).remove(),d(t)}):"up"==t.direction&&(t.loading=!1,t.isData?(t.$domDown.html(t.opts.domDown.domRefresh),d(t)):t.$domDown.html(t.opts.domDown.domNoData))}}(window.Zepto||window.jQuery);
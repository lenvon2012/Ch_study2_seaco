!function(a){a.fn.mdater=function(e){var t={maxDate:null,minDate:new Date(1970,0,1)},n=a.extend(t,e),i=this,s={getDaysInMonth:function(a,e){return new Date(a,e+1,0).getDate()},getWeekInMonth:function(a,e){return new Date(a,e,1).getDay()},getMonth:function(a){return["一","二","三","四","五","六","七","八","九","十","十一","十二"][a]},getLastDayInMonth:function(a,e){return new Date(a,e,this.getDaysInMonth(a,e))}};a.fn.delegates=function(e){el=a(this[0]);for(var t in e){var n=e[t];if("function"==typeof n){var i={};i.tap=n,n=i}for(var s in n)el.delegate(t,s,n[s])}return this};var l={value:{year:"",month:"",date:""},lastCheckedDate:"",init:function(){this.initListeners()},renderHTML:function(){var e=a('<div class="md_mask"></div><div class="md_panel"><div class="md_head"><div class="md_selectarea"><a class="md_prev change_year" href="javascript:void(0);">&lt;</a> <a class="md_headtext yeartag" href="javascript:void(0);"></a> <a class="md_next change_year" href="javascript:void(0);">&gt;</a></div><div class="md_selectarea"><a class="md_prev change_month" href="javascript:void(0);">&lt;</a> <a class="md_headtext monthtag" href="javascript:void(0);">月</a> <a class="md_next change_month" href="javascript:void(0);">&gt;</a></div></div><div class="md_body"><ul class="md_weekarea"><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ul class="md_datearea in"></ul></div><div class="md_foot"><a href="javascript:void(0);" class="md_ok">确定</a> <a href="javascript:void(0);" class="md_cancel">取消</a></div></div>');return 0==a(".md_mask").length&&a(document.body).append(e),e},_showPanel:function(){this.refreshView(),a(".md_panel, .md_mask").addClass("show")},_hidePanel:function(){a(".md_panel, .md_mask").remove()},_changeMonth:function(e,t){this.saveCheckedDate();var n=a(".md_selectarea").find(".monthtag"),i=~~n.data("month")+e;i>11?(i=0,this.value.year++,a(".yeartag").text(this.value.year).data("year",this.value.year)):0>i&&(i=11,this.value.year--,a(".yeartag").text(this.value.year).data("year",this.value.year));var l=s.getMonth(i)+"月";n.text(l).data("month",i),this.value.month=i,t?this.value.date=t:this.setCheckedDate(),this.updateDate(e)},_changeYear:function(e){this.saveCheckedDate();var t=a(".md_selectarea").find(".yeartag"),n=~~t.data("year")+e;t.text(n+"年").data("year",n),this.value.year=n,this.setCheckedDate(),this.updateDate(e)},saveCheckedDate:function(){this.value.date&&(this.lastCheckedDate={year:this.value.year,month:this.value.month,date:this.value.date})},setCheckedDate:function(){this.value.date=this.lastCheckedDate&&this.lastCheckedDate.year==this.value.year&&this.lastCheckedDate.month==this.value.month?this.lastCheckedDate.date:""},getDateStr:function(a,e,t){for(var i="",l=s.getWeekInMonth(a,e),d=s.getDaysInMonth(a,e-1),r=l-1;r>=0;r--)i+='<li class="prevdate" data-day="'+(d-r)+'">'+(d-r)+"</li>";var h=s.getDaysInMonth(a,e),v=1,o=h,u=(new Date(a,e,t),new Date(a,e,1));if(lastDate=new Date(a,e,h),minDateDay=n.minDate.getDate(),n.minDate>lastDate?v=h+1:n.minDate>=u&&n.minDate<=lastDate&&(v=minDateDay),n.maxDate){var c=n.maxDate.getDate();n.maxDate<u?o=v-1:n.maxDate>=u&&n.maxDate<=lastDate&&(o=c)}for(var m=1;v>m;m++)i+='<li class="disabled" data-day="'+m+'">'+m+"</li>";for(var r=v;o>=r;r++){var f="";a==this.value.year&&e==this.value.month&&t==r&&(f="current"),i+='<li class="'+f+'" data-day="'+r+'">'+r+"</li>"}for(var _=o+1;h>=_;_++)i+='<li class="disabled" data-day="'+_+'">'+_+"</li>";var D=(h+l)%7;if(0!==D)for(var m=1;7-D>=m;m++)i+='<li class="nextdate" data-day="'+m+'">'+m+"</li>";return i},updateDate:function(e){var t=a(".md_datearea.in");if(1==e)var n="out_left",i="out_right";else var n="out_right",i="out_left";var s=a('<ul class="md_datearea '+i+'"></ul>');s.html(this.getDateStr(this.value.year,this.value.month,this.value.date)),a(".md_body").append(s),setTimeout(function(){s.removeClass(i).addClass("in"),t.removeClass("in").addClass(n)},0)},refreshView:function(){var e=this.input.val(),t=null;if(e){var n=e.split("-");t=new Date(n[0],n[1]-1,n[2])}else t=new Date;var i=this.value.year=t.getFullYear(),l=this.value.month=t.getMonth(),d=this.value.date=t.getDate();a(".yeartag").text(i).data("year",i),a(".monthtag").text(s.getMonth(l)+"月").data("month",l);var r=this.getDateStr(i,l,d);a(".md_datearea").html(r)},input:null,initListeners:function(){var e=this;i.on("tap",function(){if(e.input=a(this),a(".md_mask").length)e._hidePanel();else{e.renderHTML();var t=a(".md_panel"),n=a(".md_mask");e.afterShowPanel(n,t),setTimeout(function(){e._showPanel()},50)}})},afterShowPanel:function(e,t){var n=this;e.on("tap",function(){n._hidePanel()}),t.delegates({".change_month":function(){var e=a(this).hasClass("md_next")?1:-1;n._changeMonth(e)},".change_year":function(){var e=a(this).hasClass("md_next")?1:-1;n._changeYear(e)},".out_left, .out_right":{webkitTransitionEnd:function(){a(this).remove()}},".md_datearea li":function(){var e=a(this);if(!e.hasClass("disabled")){n.value.date=e.data("day");var t=0;e.hasClass("nextdate")?t=1:e.hasClass("prevdate")&&(t=-1),0!==t?n._changeMonth(t,n.value.date):e.addClass("current").siblings(".current").removeClass("current")}},".md_ok":function(){var a=~~n.value.month+1;10>a&&(a="0"+a);var e=n.value.date;""===e&&(e=n.value.date=1),10>e&&(e="0"+e),n.input.val(n.value.year+"-"+a+"-"+e),n._hidePanel()},".md_cancel":function(){n._hidePanel()}})}};l.init()}}(Zepto);
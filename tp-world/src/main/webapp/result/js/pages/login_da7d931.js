function login(){var e=$("body").height(),i=$(window).height();$(".logo").css("top",.92*Math.max(e,i)-42+"px"),xigou.getLocalStorage("login_name")&&$("input.name").val(xigou.getLocalStorage("login_name")),$("#loginBtnID")[xigou.events.click](function(){if($("#loginBtnID").focus(),xigou.valiformdata.check(null,valiDataCallBack)){var e={token:"",loginname:$("input.name").val(),pwd:$("input.pwd").val()};isWeiXin();var i={requestBody:e,callback:function(i,o){if(o==xigou.dictionary.success)if(null==i)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else{var t=i.code;switch(t){case"0":if(i.data.promoterinfo&&"{}"!=i.data.promoterinfo){var a=JSON.parse(i.data.promoterinfo);a.token=i.data.token,xigou.setLocalStorage("dssUser",a,!0)}var n=xigou.getSessionStorage("loginjump_url"),r={token:i.data.token,telephone:i.data.tel,name:i.data.name};if(xigou.removeSessionStorage("realname"),xigou.removeSessionStorage("realnum"),xigou.setSessionStorage("userinfo",r,!0),xigou.setLocalStorage("login_name",$("input.name").val()),xigou.setLocalStorage("show_name",i.data.tel||i.data.name),xigou.setLocalStorage("token",i.data.token),xigou.getSessionStorage("refer_data"))e=xigou.getSessionStorage("refer_data",!0),e.token=i.data.token,xigou.activeUser.addshopping({requestBody:e,callback:function(e,i){xigou.removeSessionStorage("refer_data"),i==xigou.dictionary.success||$.tips({content:"添加购物车失败！",stayTime:2e3,type:"warn"}),window.location.href="cart.html"}});else if(xigou.getSessionStorage("buy_now_refer_data"))e=xigou.getSessionStorage("buy_now_refer_data",!0),e.token=i.data.token,xigou.activeUser.buynow({requestBody:e,callback:function(e,i){xigou.getSessionStorage("buy_now_tun_type");if(xigou.removeSessionStorage("buy_now_refer_data"),xigou.removeSessionStorage("buy_now_tun_type"),i==xigou.dictionary.success){var o=e||null;if(null==o||0==o.length)return!1;xigou.setSessionStorage("buy_now_uuid",o.data.uuid),window.location.href="settle.html"}else window.location.href=xigou.getSessionStorage("buy_now_details_url")}});else if(n)xigou.setSessionStorage("loginjump_url",""),window.location.href=decodeURIComponent(n);else if(xigou.getSessionStorage("refer",!1).indexOf("login.html")>-1||xigou.getSessionStorage("refer",!1).indexOf("logon.html")>-1)window.location.href="home.html";else{if(xigou.getSessionStorage("refer",!1).indexOf("/wxhb")>-1||xigou.getSessionStorage("refer",!1).indexOf("/wxhb.html")>-1)return void(window.location.href="home.html");window.location.href="index.html"}break;case"-99":var r={token:i.data.token,telephone:i.data.tel,name:i.data.name};xigou.setSessionStorage("userinfo",r,!0),xigou.setLocalStorage("login_name",$("input#name").val()),xigou.setLocalStorage("token",i.token),window.location.href="binding.html";break;default:$("input#name").unbind("change"),$.tips({content:i.msg||"登录失败",stayTime:2e3,type:"warn"})}}else $.tips({content:"请求失败，详见"+i,stayTime:2e3,type:"warn"})}};xigou.activeUser.logon(i)}}),$("#registerBtnClass")[xigou.events.click](function(){window.location.href="register.html"})}function valiDataCallBack(e,i){$.tips({content:e,stayTime:2e3,type:"warn"}),$("#"+i).focus()}function initValiData(){var e={methods:{name:{required:"required",emailormobile:"emailormobile"}},errors:{name:{required:"请输入用户账号",emailormobile:"请填写正确的手机号或者邮箱地址"}}};return $("#name").focus(function(){var e=$(this).val();e&&e.length>0?$(".div_clear_input1").show():$(".div_clear_input1").hide()}),$("#name").blur(function(){$(".div_clear_input1").hide()}),$(".div_clear_input1")[xigou.events.click](function(){$(".div_clear_input1").hide(),$("#name")[0].value=""}),$("#pwd").focus(function(){var e=$(this).val();e&&e.length>0?$(".div_clear_input2").show():$(".div_clear_input2").hide()}),$("#pwd").blur(function(){$(".div_clear_input2").hide()}),$(".div_clear_input1")[xigou.events.click](function(){$(".div_clear_input2").hide(),$("#pwd")[0].value=""}),xigou.valiformdata.initValiData(e)}$(function(){login(),initValiData(),isWeiXin()&&($(".ui-header").hide(),$(".input_info_list").css({"margin-top":"0"}),$("title").html("登录"))});var backurl=xigou.getQueryString("backurl"),buy_now_details_url=xigou.getSessionStorage("buy_now_details_url"),details_url=xigou.getSessionStorage("details_url"),fanli=xigou.getQueryString("fanli"),_try=xigou.getQueryString("try"),game=xigou.getQueryString("game"),topicid=xigou.getQueryString("topicid"),mtoapp=xigou.getQueryString("mtoapp");"1"==fanli&&$(".registr").attr("href","registr.html?fanli=1"),null!=backurl&&(buy_now_details_url&&($(".back").attr("href","javascript:void(0)"),$(".back")[xigou.events.click](function(){xigou.removeSessionStorage("buy_now_details_url"),window.location.href=decodeURIComponent(buy_now_details_url)})),details_url?($(".back").attr("href","javascript:void(0)"),$(".back")[xigou.events.click](function(){xigou.removeSessionStorage("details_url"),window.location.href=decodeURIComponent(details_url)})):$(".back").attr("href",decodeURIComponent(backurl)));var ua=window.navigator.userAgent.toLowerCase();
function getImgCode(){$("input#name").change(function(){xigou.valiformdata.checkSingleNode($("#name"),valiDataCallBack)&&$("#codeImg").attr("src","../../mobile/init/captchaimage.htm?telephone="+$("input#name").val()+"&typeimage=1&time="+(new Date).getTime())}),$("#codeImg").click(function(){xigou.valiformdata.checkSingleNode($("#name"),valiDataCallBack)&&($("#codeImg").attr("src","../../mobile/init/captchaimage.htm?telephone="+$("input#name").val()+"&typeimage=1&time="+(new Date).getTime()),$("#imgcode").val(""))})}function getTheCode(){}function setCodeTime(e){var t=$(".register-btn");t.text(e);var i=setInterval(function(){return 0>=e?(clearInterval(i),t.text("获取验证码"),void(allowGetTheCode=!0)):void t.text(--e)},1e3)}function registr(){var e=$("body").height(),t=$(window).height();$(".logo").css("top",.92*Math.max(e,t)-42+"px"),$(".register-register")[xigou.events.click](function(){var e={loginname:$("#input-telnum").val(),captcha:$("#input-code").val(),pwd:$("#input-pwd").val()},t=xigou.getSessionStorage("shareShop");if(t&&"{}"!=t){var t=t.split("&")[0];e.shopMobile=t}var i={requestBody:e,callback:function(e,t){if(t==xigou.dictionary.success)if(null==e)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else{var i=e.code;switch(xigou.debugPrint("注册成功返回的code值："+i),i){case"0":{xigou.getSessionStorage("loginjump_url")}xigou.setLocalStorage("login_name",$("#input-telnum").val());var a={token:e.data.token,telephone:e.data.tel,name:e.data.name},n=$.dialog({title:"",content:e.msg||"注册成功",button:["确认"]});n.on("dialog:action",function(t){console.log(t.index),window.location.href="logon.html",xigou.removeSessionStorage("realname"),xigou.removeSessionStorage("realnum"),xigou.setSessionStorage("userinfo",a,!0),xigou.setLocalStorage("login_name",$("#input-telnum").val()),xigou.setLocalStorage("token",e.data.token)});break;case"-2":$.tips({content:e.msg||"验证码错误",stayTime:2e3,type:"warn"});break;default:$.tips({content:e.msg||"注册失败",stayTime:2e3,type:"warn"})}}else xigou.alert("请求失败，详见"+e)}};xigou.activeUser.registr(i)})}function valiDataCallBack(e,t){$.tips({content:e,stayTime:2e3,type:"warn"}),$("#"+t).focus()}function initValiData(){var e={methods:{name:{required:"required",mobile:!0},code:{required:"required"},pwd:{required:"required",password:!0},imgcode:{required:"required"}},errors:{name:{required:"请输入手机号码",mobile:"手机号码不正确，请重新输入"},code:{required:"请输入验证码"},pwd:{required:"请输入密码",password:"请输入6-30位密码，可以为数字、字母和下划线"},imgcode:{required:"请输入验证码"}}};return xigou.valiformdata.initValiData(e)}$(function(){getTheCode(),registr(),initgeetest(),isWeiXin()&&($(".ui-header").hide(),$(".input_info_list").css({"margin-top":"0"}),$("title").html("注册")),$(".input-telnum").focus(function(){var e=$(this).val();e&&e.length>0?$(".div_clear_input1").show():$(".div_clear_input1").hide()}),$(".input-telnum").blur(function(){$(".div_clear_input1").hide()}),$(".div_clear_input1")[xigou.events.click](function(){$(".div_clear_input1").hide(),$(".input-telnum")[0].value=""})});var allowGetTheCode=!0,uuid="",fanli=xigou.getQueryString("fanli"),handlerEmbed=function(e){$(".register-btn,#achieve")[xigou.events.click](function(){var t=e.getValidate();if(t){var i={geetest_challenge:$("[name=geetest_challenge]").val(),geetest_validate:$("[name=geetest_validate]").val(),geetest_seccode:$("[name=geetest_seccode]").val(),tel:$("#input-telnum").val(),randid:$("#randid").val(),type:"1"},a={requestBody:i,callback:function(e,t){t==xigou.dictionary.success?null==e?$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"}):"0"==e.code?($("#hide-div").show(),$(".input_btn").hide(),$.tips({content:e.msg,stayTime:2e3,type:"warn"})):$.tips({content:e.msg||"获取验证码失败",stayTime:2e3,type:"warn"}):xigou.alert("请求失败，详见"+e)}};xigou.activeUser.sendGeeCode(a)}else $.tips({content:"请先完成验证",stayTime:2e3,type:"warn"})}),e.appendTo("#embed-captcha"),e.onReady(function(){})};
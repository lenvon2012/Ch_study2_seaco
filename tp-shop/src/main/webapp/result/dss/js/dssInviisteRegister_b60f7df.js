function setCodeTime(e){var t=$(".register-btn");t.text(e);var n=setInterval(function(){return 0>=e?(clearInterval(n),t.text("获取验证码"),void(allowGetTheCode=!0)):void t.text(--e)},1e3)}function registr(){$("body").height(),$(window).height();$(".div_agree input").change(function(){var e=this.checked;e?$(".div-register").removeClass("disable"):$(".div-register").addClass("disable")}),$(".div-register")[xigou.events.click](function(){if(!$(this).hasClass("disable")&&promoterNameCheck()&&userMobileCheck()){var e={inviteCode:invisteCode,password:$("#input-pwd").val(),promoterName:$("#input-name").val(),userMobile:$("#input-telnum").val(),credentialCode:$("#credentialCode").val(),bankName:$("#input-bankName").val(),bankAccount:$("#input-bankAccount").val(),alipay:$("#input-alipay").val(),realSmsCode:$("#input-code").val()},t={requestBody:e,callback:function(e,t){if(t==xigou.dictionary.success)if(null==e)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else{var n=e.code;"0"==n?($.tips({content:e.msg||"注册失败",stayTime:2e3,type:"warn"}),window.location.href="./dssInvisterRegisterSuccess.html"):$.tips({content:e.msg,stayTime:2e3,type:"warn"})}else xigou.alert("请求失败，详见"+e)}};xigou.registerInvister(t)}})}function valiDataCallBack(e,t){$.tips({content:e,stayTime:2e3,type:"warn"}),$("#"+t).focus()}function setCodeTime(e){var t=$("#div_get_code");t.text(e);var n=setInterval(function(){return 0>=e?(clearInterval(n),t.text("获取验证码"),t.removeClass("disble"),void(allowGetTheCode=!0)):void t.text(--e)},1e3)}function userMobileCheck(){var e=/^1\d{10}$/,t=$("#input-telnum").val();return e.test(t)?!0:($.tips({content:"请输入正确格式的手机号",stayTime:2e3,type:"warn"}),!1)}function promoterNameCheck(){var e=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/,t=$("#input-name").val();return e.test(t)?!0:($.tips({content:"请输入正确格式的姓名",stayTime:2e3,type:"warn"}),!1)}function credentialCodeCheck(){var e=/^\d{17}(\d|x)$/i,t=$("#input-credential-code").val();return e.test(t)?!0:($.tips({content:"你输入的身份证长度或格式错误",stayTime:2e3,type:"warn"}),!1)}function bankNameCheck(){var e=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/,t=$("#input-bankName").val();return e.test(t)?!0:($.tips({content:"请输入正确格式的银行名称",stayTime:2e3,type:"warn"}),!1)}function bankAccountCheck(){var e=/^\d{16}|\d{19}$/,t=$("#input-bankAccount").val();return e.test(t)?!0:($.tips({content:"请输入正确格式的银行卡号",stayTime:2e3,type:"warn"}),!1)}function alipayCheck(){var e=$("#input-alipay").val();return""!=e?!0:($.tips({content:"请输入支付宝账号",stayTime:2e3,type:"warn"}),!1)}function alipayCheck(){var e=$("#input-code").val();return""!=e?!0:($.tips({content:"请输入手机验证码",stayTime:2e3,type:"warn"}),!1)}$(function(){registr(),$("#div_get_code")[xigou.events.click](function(){var e=$("#input-telnum").val();return""==e?($.tips({content:"请先输入手机号码！",stayTime:2e3,type:"warn"}),!1):void showpopgeetest()})});var allowGetTheCode=!0,invisteCode=xigou.getQueryString("inviteCode"),handlerEmbed=function(e){$(".div_img_code .div_code_btn2,#achieve")[xigou.events.click](function(){var t=e.getValidate();if(t){var n={geetest_challenge:$("[name=geetest_challenge]").val(),geetest_validate:$("[name=geetest_validate]").val(),geetest_seccode:$("[name=geetest_seccode]").val(),tel:$("#input-telnum").val(),randid:$("#randid").val(),type:"5"},i={requestBody:n,callback:function(e){null==e?$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"}):"0"==e.code?($("#hide-div").show(),$(".img_code_bg").hide(),$(".div_img_code").hide(),$.tips({content:e.msg,stayTime:2e3,type:"warn"})):$.tips({content:e.msg||"获取验证码失败",stayTime:2e3,type:"warn"})}};xigou.activeUser.sendGeeCode(i)}else $.tips({content:"请先完成验证",stayTime:2e3,type:"warn"})}),e.appendTo("#embed-captcha"),e.onReady(function(){})};
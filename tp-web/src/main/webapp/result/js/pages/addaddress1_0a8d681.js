function initArea(){selectArea.init({trigger:".address-select-input",value:$("#areaidlist").val(),level:3,data:xigou.activeHost+xigou.activeUrl.position.getareatree,position:"bottom"}),streetArea.init({trigger:".street-select-input",value:$("#streetId").val(),level:1,data:null,position:"bottom"})}var streetArea=new MobileSelectArea,selectArea=new MobileSelectArea;isWeiXin()&&($(".ui-header").hide(),$(".add_new").show(),$("title").text("添加收货地址"),$(".ui-form").css({"margin-top":"0"}));
function InitSearchEdid(e){if(Key&&Key.length>0)$("#input_search")[0].value=Key,$(".div_clear_input").show(),$(".div_clear_input")[xigou.events.click](function(){$(".div_search_history").show(),$("#input_search_history")[0].value=" ",$("#input_search_history").focus()}),InitSearchHistory(e);else{$("#id_input_search_box").hide();var s=xigou.getQueryString("name");$("#id_name").text(s),$("#id_name").show()}}function Search(e,s){var r="curpage="+CurPage;Key?r=r+"&key="+Key:categoryid?r=r+"&categoryid="+categoryid:brandid&&(r=r+"&brandid="+brandid),s&&(r=r+"&sort="+s),sp&&(r=r+"&salespattern="+sp),xigou.classify.search({p:r,callback:function(s,r){return!r==xigou.dictionary.success?void $.tips({content:"收索失败,请检测网络连接",stayTime:2e3,type:"warn"}):void InitPage(e,s)}})}function InitPage(e,s){if("index"==fromPage&&$(".goBack").parent("a").attr("href","index.html"),!s)return void $.tips({content:"收索失败,请检测网络连接",stayTime:2e3,type:"warn"});if(0!=s.code)return void $.tips({content:s.msg||"收索失败,请检测网络连接",stayTime:2e3,type:"warn"});if(s.data.sp&&0!=s.data.sp.length?($(".search_shop").show(),$("#search_bg_img").attr("src",s.data.sp[0].shopbanner),$("#shop_logo").attr("src",s.data.sp[0].shoplogo),$(".search_shop_name").html(s.data.sp[0].shopname),$("#search_shop").attr("href","shop_detail.html?tid="+s.data.sp[0].tid)):($(".search_shop").hide(),$(".div_search_list").css(isWeiXin()?{"margin-top":"41px","border-top":"none"}:{"margin-top":"91px","border-top":"none"}),$(".div_search_sort").css({"border-top":"none"})),s.data.curpage&&s.data.totalpagecount&&s.data.curpage!=s.data.totalpagecount||(bMaxPage=!0,e.lock(),$(".dropload-down").hide()),1==s.data.curpage){if($(".ul_search_list").empty(),!s.data.list||0==s.data.list.length)return $(".div_search_list").addClass("div_search_list_none"),bMaxPage=!0,e.lock(),void $(".dropload-down").hide();$(".div_search_list").removeClass("div_search_list_none")}var r=[];if(9!=sp)for(var t in s.data.list){var i=s.data.list[t],a="item.htm";9==i.salespattern&&(a="group_detail.html"),a=a+"?tid="+i.tid+"&amp;sku="+i.sku,r.push('<li class="li_search_item">'),r.push('    <div class="div_img">'),r.push('        <a href="'+a+'">'),r.push('            <img src="'+i.imgurl+'">'),r.push("        </a>"),r.push("    </div>"),r.push('    <div class="div_item_name">'+i.name+"</div>");var o=i.price.split(".")[0]||"00",n=i.price.split(".")[1]||"00";r.push('    <div class="div_item_price"><span class="price">¥<span>'+o+"</span>."+n+'</span><span class="old_price">¥'+i.oldprice+"</span></div>"),r.push("</li>")}else for(var t in s.data.list){var i=s.data.list[t],o=i.price.split(".")[0]||"00",n=i.price.split(".")[1]||"00";r.push('<div class="search_result_item">'),r.push('        <a href="group_detail.html?tid='+i.tid+"&amp;sku="+i.sku+'">'),r.push('   <span class="shop_logo"><img src="'+i.imgurl+'"></span>'),r.push('        <div class="search_result_goods">'),r.push(' <div class="search_result_title" style="width: 200px; overflow: hidden">'+i.name+"</div>"),r.push('      <div class="search_result_price">¥'+o+"."+n+'<del class="old_price">¥'+i.oldprice+"</del></div>"),r.push('   <div class="search_result_shop_name">'+i.shopname+'<span class="sale">'+i.salescount+"</span></div>"),r.push("   </div>"),r.push("        </a>"),r.push("</div>")}$(".ul_search_list").append(r.join(" "))}function InitSearchHistory(e){var s=xigou.getLocalStorage("searchHistory"),r=[];if(""!=s&&(r=JSON.parse(s)),0==r.length)$(".div_history_list").hide(),$(".div_noHistory").show();else{$(".div_history_list").show(),$(".div_noHistory").hide();for(var t=0;t<r.length;t++)$("#id_ul_history").append('<li class="li_history_item"></li>'),$("#id_ul_history li").eq(t).text(r[t]);$(".li_history_item")[xigou.events.click](function(){resetKeyAndSearch(this.innerHTML,r,e)})}$(".div_search_input_box").click(function(){$(".div_search_list").hide(),$(".div_search_history").show(),$("#input_search_history")[0].value=$("#input_search")[0].value,$("#input_search_history").focus(),$(".div_clear_input_history").show()}),$(".cancal_search")[xigou.events.click](function(){setTimeout(function(){$("#input_search_history").blur(),$(".div_search_history").hide(),$(".div_search_list").show()},150)}),$("#input_search_history").keyup(function(s){var t=$(this).val();t&&t.length>0?($(".div_clear_input_history").show(),13==s.keyCode&&(t=t.replace(/(^\s*)|(\s*$)/g,""),t.length>0&&resetKeyAndSearch(t,r,e))):$(".div_clear_input_history").hide()}),$("#input_search_history").keydown(function(){$(".div_clear_input_history").show()}),$(".div_clear_input_history")[xigou.events.click](function(){$("#input_search_history")[0].value="",$(".div_clear_input_history").hide()}),$(".div_clear_history")[xigou.events.click](function(){var e=$.dialog({title:"",content:"确认清空输入的搜索历史吗？ ",button:["取消","确认"]});e.on("dialog:action",function(e){1==e.index&&(r=[],xigou.removelocalStorage("searchHistory"),$("#id_ul_history").empty(),$(".div_history_list").hide(),$(".div_noHistory").show())})})}function resetKeyAndSearch(e,s){if(e&&e.length>0){var r=s.indexOf(e);-1!=r&&s.splice(r,1),s.unshift(e),s.length>10&&s.pop();var t=$(".div_group").attr("data");xigou.setLocalStorage("searchHistory",JSON.stringify(s)),window.location.href="search.html?key="+e+"&sp="+t}}function selectSortType(e){$(".div_search_sort_item")[xigou.events.click](function(){var s=this.getAttribute("id");if("sortByPrice"==s)$(this).hasClass("current_sort")?$(this).children("u").hasClass("up")?($(this).children("u").removeClass("up"),$(this).children("u").addClass("down"),searchSortType=1):($(this).children("u").removeClass("down"),$(this).children("u").addClass("up"),searchSortType=2):($(".div_search_sort_item").removeClass("current_sort"),$(this).addClass("current_sort"),$(this).children("u").removeClass("down"),$(this).children("u").addClass("up"),searchSortType=2);else{if($(this).hasClass("current_sort"))return;$(".div_search_sort_item").removeClass("current_sort"),$(this).addClass("current_sort");var s=this.getAttribute("id");"sortByDefoule"==s?searchSortType="":"sortBySales"==s?searchSortType=3:"sortByNew"==s&&(searchSortType=5)}research(e)})}function research(e){CurPage=1,bMaxPage=!1,$(".ul_search_list").empty(),e.unlock(),e.resetload(),Search(e,searchSortType),CurPage++}var CurPage=1,bMaxPage=!1,searchSortType=xigou.getQueryString("sort")||"",Key=xigou.getQueryString("key"),categoryid=xigou.getQueryString("categoryid"),brandid=xigou.getQueryString("brandid"),fromPage=xigou.getQueryString("fromPage"),Key=xigou.getQueryString("key"),name=xigou.getQueryString("name"),sp=xigou.getQueryString("sp");$(function(){isWeiXin()&&$(".div_search_head").hide(),$(".dropload-refresh").hide();var e=$(".div_search_list").dropload({scrollArea:window,loadDownFn:function(e){bMaxPage||(e.resetload(),Search(e,searchSortType),CurPage++)}});switch(searchSortType){case 1:$(".div_search_sort_item").removeClass("current_sort"),$("#sortBySales").addClass("current_sort"),$("#sortBySales").children("u").addClass("down"),$("#sortBySales").children("u").removeClass("up");break;case 2:$(".div_search_sort_item").removeClass("current_sort"),$("#sortBySales").addClass("current_sort"),$("#sortBySales").children("u").removeClass("down"),$("#sortBySales").children("u").addClass("up");break;case 3:$(".div_search_sort_item").removeClass("current_sort"),$("#sortByPrice").addClass("current_sort");break;case 5:$(".div_search_sort_item").removeClass("current_sort"),$("#sortByNew").addClass("current_sort")}window.onbeforeunload=function(){var e=[];searchSortType&&e.push("sort="+searchSortType),Key&&e.push("key="+Key),searchSortType&&e.push("sort="+searchSortType),categoryid&&e.push("categoryid="+categoryid),brandid&&e.push("brandid="+brandid),name&&e.push("name="+name),console.log(sp),sp&&e.push("sp="+sp),xigou.setSessionStorage("productdetails_backurl","search.html?"+e.join("&"))},onbeforeunload(),$("form").submit(function(){return!1}),$(".dropload-down").hide(),InitSearchEdid(e),selectSortType(e)}),$(".li1").click(function(){$(".choose").hide(),$(".div_group").html($(this).children("span").html()),$(".div_group").attr("data",""),$(".input_search").attr("placeholder","请输入相关产品或店铺名称")}),$(".li2").click(function(){$(".choose").hide(),$(".div_group").html($(this).children("span").html()),$(".div_group").attr("data",9),$(".input_search").attr("placeholder","请输入您想要团购的商品")});
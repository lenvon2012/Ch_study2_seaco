<form class="jqtransform" method="post" id="queryAttForm" action="${domain}/user/point/register/list.htm">
	<div class="box_border">
		<div class="box_top"><b class="pl15">注册送积分</b></div>
		<div class="box_center pt10 pb10">
			<#include "/user/point/subpages/registerCondition.ftl" />       
        </div>      
        <div class="pb5 pt5" style="border-top:1px solid #dadada;">
		    <#include "/user/point/subpages/submitButton.ftl" />     
		</div>
	</div>
</form>
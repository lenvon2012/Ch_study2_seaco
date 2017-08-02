<#include "/common/common.ftl"/>
<@backend title="现货库存出入库流水" js=[
'/statics/backend/js/layer/layer.min.js',
'/statics/backend/js/jqueryui/js/jquery-ui-1.9.2.custom.min.js',
'/statics/backend/js/jqueryui/i18n/jquery.ui.datepicker-zh-CN.js',
'/statics/storage/js/outIn.js'
] css=[
'/statics/backend/js/jqueryui/css/cupertino/jquery-ui-1.9.2.custom.min.css'
] >

	<div id="search_bar" class="mt10">
       <div class="box">
          <div class="box_border">
            <div class="box_top"><b class="pl15">冻结库存流水</b></div>
            <div class="box_center pt10 pb10">
              <table class="form_table" border="0" cellpadding="0" cellspacing="0">
                <tr>
                 <td>sku:</td>
                  <td>${sku}</td>                
                 </tr>
              </table>
            </div>
          </div>
        </div>
    </div>
<form class="jqtransform" method="get" id="queryAttForm" action="${domain}/storage/inventory/queryOccupyInventoryList.htm">
	<input type="hidden" name="sku" value="${sku}"/>
    <div id="table" class="mt10">
        <div class="box span10 oh">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" class="list_table">
                <tr>
                      <th width="150">单据类型</th>
	                  <th width="150">活动编号</th>
	                  <th width="150">订单编号</th>
	                  <th width="150">日期</th>
	                  <th width="100">增加库存</th>
	                  <th width="100">减少库存</th>
                </tr>
            <#list listLogs.rows as zz>                
                <tr class="tr" >
					  <td class="td_center"> 
					  	${type}
					  </td>
					  <td class="td_center">${zz.bizId}</td>
					  <td class="td_center">${zz.orderNo}</td>
					  <td class="td_center"><#if zz.createTime ??>${zz.createTime?string("yyyy-MM-dd HH:mm:ss")}</#if></td>	  
					  <td class="td_center">
					  	-
					  </td>
					  <td class="td_center">
					  	${zz.inventory}
					  </td>
	             </tr>
	            </#list>
              </table> 
	     </div>
	</div>
   <@pager  pagination=listLogs  formId="queryAttForm"  />  
</form>
</@backend>
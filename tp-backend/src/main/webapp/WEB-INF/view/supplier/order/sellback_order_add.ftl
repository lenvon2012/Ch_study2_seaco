<#include "/common/common.ftl"/>
<@backend title="新增代销退货单" js=[
        '/statics/supplier/js/common.js',
        '/statics/supplier/js/pop_common.js', 
        '/statics/supplier/js/validator.js',
        '/statics/backend/js/jqueryui/js/jquery-ui-1.9.2.custom.min.js',
        '/statics/backend/js/jqueryui/i18n/jquery.ui.datepicker-zh-CN.js',
        '/statics/supplier/js/idTabs.js',
        '/statics/supplier/js/web/sellback_order_add.js'] 
    css=['/statics/backend/js/jqueryui/css/cupertino/jquery-ui-1.9.2.custom.min.css'] >
<style type="text/css">
.pb15 {
    padding-bottom: 0px;
}
</style>
    <div class="box">
        <div class="box_border">
            <div class="box_top">
                <b class="pl15">新增代销退货单</b>
            </div>
            <div class="box_center" style="margin-bottom: 30px;">
                <form class="jqtransform" action="/supplier/sellorderbackSave.htm" id="order_form">
                    <#include "/supplier/order/subpage/sp_com_sellorderback_base.ftl" />
                    <#include "/supplier/order/subpage/sp_com_sellorderback_item.ftl" />
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" class="form_table pt15 pb15">
                        <tbody>
                            <tr>
                                <td>
                                    <input type="button" value="保存" id="orderAddSave" class="btn btn82 btn_save2" name="button">
                                    <input type="button" value="提交" id="orderAddSub" class="btn btn82 btn_add" name="button">
                                    <#--<input type="button" value="取消" id="quotationAddCancel" class="btn btn82 btn_nochecked" name="button">-->
                                </td>
                                <td colspan="13">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="hidden" value="0" id="indexNumHiddenId" />
                </form>
            </div>
        </div>
    </div>
</div>
</@backend>
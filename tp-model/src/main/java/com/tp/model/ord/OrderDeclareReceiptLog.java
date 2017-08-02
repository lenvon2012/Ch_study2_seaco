package com.tp.model.ord;

import java.io.Serializable;

import java.util.Date;

import com.tp.common.annotation.Id;
import com.tp.model.BaseDO;
/**
  * @author szy
  * 订单申报回执流水日志
  */
public class OrderDeclareReceiptLog extends BaseDO implements Serializable {

	private static final long serialVersionUID = 1465203515899L;

	/**主键ID 数据类型bigint(20)*/
	@Id
	private Long id;
	
	/**订单编号(子单) 数据类型bigint(20)*/
	private Long orderCode;
	
	/**申报单号 数据类型varchar(30)*/
	private String declareNo;
	
	/**海关编号 数据类型varchar(30)*/
	private String customsCode;
	
	/**结果（1成功2处理失败） 数据类型tinyint(1)*/
	private Integer result;
	
	/**结果详情 数据类型varchar(512)*/
	private String resultDetail;
	
	/**回执原始数据 数据类型varchar(2048)*/
	private String resMsg;
	
	/**备注 数据类型varchar(255)*/
	private String remark;
	
	/**创建时间 数据类型datetime*/
	private Date createTime;
	
	
	public Long getId(){
		return id;
	}
	public Long getOrderCode(){
		return orderCode;
	}
	public String getDeclareNo(){
		return declareNo;
	}
	public String getCustomsCode(){
		return customsCode;
	}
	public Integer getResult(){
		return result;
	}
	public String getResultDetail(){
		return resultDetail;
	}
	public String getResMsg(){
		return resMsg;
	}
	public String getRemark(){
		return remark;
	}
	public Date getCreateTime(){
		return createTime;
	}
	public void setId(Long id){
		this.id=id;
	}
	public void setOrderCode(Long orderCode){
		this.orderCode=orderCode;
	}
	public void setDeclareNo(String declareNo){
		this.declareNo=declareNo;
	}
	public void setCustomsCode(String customsCode){
		this.customsCode=customsCode;
	}
	public void setResult(Integer result){
		this.result=result;
	}
	public void setResultDetail(String resultDetail){
		this.resultDetail=resultDetail;
	}
	public void setResMsg(String resMsg){
		this.resMsg=resMsg;
	}
	public void setRemark(String remark){
		this.remark=remark;
	}
	public void setCreateTime(Date createTime){
		this.createTime=createTime;
	}
}

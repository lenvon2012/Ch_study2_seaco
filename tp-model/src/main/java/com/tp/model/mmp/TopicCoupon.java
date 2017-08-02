package com.tp.model.mmp;

import java.io.Serializable;

import com.tp.common.annotation.Id;
import com.tp.model.BaseDO;
/**
  * @author szy
  * 活动指定优惠券
  */
public class TopicCoupon extends BaseDO implements Serializable {

	private static final long serialVersionUID = 1451440579111L;

	/** 数据类型bigint(18)*/
	@Id
	private Long id;
	
	/**活动专题id 数据类型bigint(18)*/
	private Long topicId;
	
	/**显示排序 数据类型int(4)*/
	private Integer sortIndex;
	
	/**优惠券id 数据类型bigint(18)*/
	private Long couponId;
	
	/**优惠券图片 数据类型varchar(255)*/
	private String couponImage;
	
	/**图片大小 1 - 1*1    2 - 1*2     3 - 1*4 数据类型tinyint(4)*/
	private Integer couponSize;
	
	
	public Long getId(){
		return id;
	}
	public Long getTopicId(){
		return topicId;
	}
	public Integer getSortIndex(){
		return sortIndex;
	}
	public Long getCouponId(){
		return couponId;
	}
	public String getCouponImage(){
		return couponImage;
	}
	public Integer getCouponSize(){
		return couponSize;
	}
	public void setId(Long id){
		this.id=id;
	}
	public void setTopicId(Long topicId){
		this.topicId=topicId;
	}
	public void setSortIndex(Integer sortIndex){
		this.sortIndex=sortIndex;
	}
	public void setCouponId(Long couponId){
		this.couponId=couponId;
	}
	public void setCouponImage(String couponImage){
		this.couponImage=couponImage;
	}
	public void setCouponSize(Integer couponSize){
		this.couponSize=couponSize;
	}
}

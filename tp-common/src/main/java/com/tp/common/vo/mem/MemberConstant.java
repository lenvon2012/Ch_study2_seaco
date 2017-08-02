package com.tp.common.vo.mem;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

 
public interface MemberConstant {

	public static final String USER_SPACE = "/user";
	public static final String EMAIL_SPL = "@";
	public static final String COLON_SPL = ":";
	public static final String REGISTERED = "注册成功";
	public static final String UTF8 = "UTF-8";
	public static final String MD5 = "MD5";
	public static final String CHECK_CODE_ERROR = "checkcode_error";
    public static final Integer LOGIN_FAIL_COUNT = 3;
    public static final int EXPIRE_TIME = 5 * 365 * 24 * 60 * 60;
    public static final int SMS_TYPE_EXPIRE_TIME = 24 * 60 * 60;
    public static final int LOGIN_EXPIRE_TIME = 60 * 60;
    public static final int SMS_CODE_EXPIRE_TIME = 60 * 10;
    public static final int ONE_SENCOND = 60;
    public static final int REFERRER_COUNT = 20;
    public static final String USERNAME = "username";
    public static final String DOMAIN = "domain";
    public static final String DOMAINPATH = "config/domain";
    
    public static final List<String> RETURNURLLIST = new ArrayList<String>(){
		private static final long serialVersionUID = 1L;
		{
    		add("/user/toLogin");
    		add("/user/toRegister");
    		add("/user/findPassword");
    	}
    	
    };
    
    
    public static final int USER_COOKIE_EXPIRE_TIME = 30*60;
    
    public interface RequestSource {
    	int WEB = 0;
    	int MOBILE = 1;
    }
    
    public interface CollectType {
    	int SINGLE = 0;
    	int BRAND = 1;
    }
    
    public interface CollectValue {
    	String SINGLE = "#single";
    	String BRAND = "#brand";
    }
    
    public interface LoginType {
    	Integer PASS = 0;
    	Integer UNPASS = 1;
    }
    
    public interface RegisterType {
    	Integer EMAIL = 0;
    	Integer MOBILE = 1;
    }
    
    public interface IsTop {
    	Integer DOWN = 0;//置底
    	Integer UNLIMITED = 1;//不限
    	Integer TOP = 2;//置顶
    }
    
    public interface IsHide {
    	Integer MY = 0;//自己可以见
    	Integer HIDE = 1;//隐藏
    	Integer SHOW = 2;//显示
    }
    
	public interface SessionKey {
		String USER = "user";
		String LOGIN = "loginSecurityCode";
		String REGISTER = "registerSecurityCode";
		String OTHER = "other.unSelect";
		String MYORDERLIST = "myOrderList";
		String USERCOOKIE = "userCookie";
	}
	
	public interface RedisKey {
		String SEND_SMS_STATE = "send_sms_state";
		String SEND_SMS_FAIL_COUNT = "send_sms_fail_count";
		String SEND_SMS_COUNT = "send_sms_count";
	}
	
	public interface Properties {
		String MAIL_CONFIG = "config/mail";
		String BIND_MAIL_CONFIG = "config/bind";
	}
	
	public interface BindMailProperties {
		String PREFIX = "prefix";
	}
	
	public interface MailProperties {
		String MAIL_HOST = "mail.smtp.host";
		String MAIL_AUTH = "mail.smtp.auth";
		String MAIL_TIMEOUT = "mail.smtp.timeout";
		String MAIL_USERNAME = "mail.username";
		String MAIL_PASSWORD = "mail.password";
		String MAIL_FROM = "frommail";
	}
	
	public interface State {
		Integer True = 0;
		Integer False = 1;
	}

	public interface Upload {
		Long MAX_FILE_SIZE = 20194300L;
		String SUCCESS_KEY = "success";
		String MESSAGE_KEY = "message";
	}
	
	public interface Number{
		Integer ZERO = 0;
		Integer ONE = 1;
		Integer TWO = 2;
		Integer THREE = 3;
	}
	
	public interface CertificateType{
		Integer IDCARD = 0;/** 身份证 */
	}
	
	public interface Bool {
		Boolean FALSE = false;
		Boolean TRUE = true;
	}
	
	public interface OPERATOR {
		String SURERECEIVING = "SURERECEIVING"; /** 确认收货*/
		String CANCELORDER = "CANCELORDER"; /** 取消订单*/
		String TOPAY = "CANCELORDER"; /** 去付款*/
	}
	
	public interface Sex {
		Boolean MALE = false;
		Boolean FEMALE = true;
	}
	
	public interface IsSuccess {
		Integer Fail = 0;
		Integer Success = 1;
	}
	
	public interface SecurityCodeType {
		Integer Login = 0;
		Integer Register = 1;
	}
	
	public interface Application {
		/** 西客 */
		Integer Xigou = 0;
		/** 商城 */
		Integer Shangcheng = 1;
		/** 海淘 */
		Integer Haitao = 2;
	}
	
	public interface PointState {
		/** 冻结 */
		Integer Freeze = 0;
		/** 正常 */
		Integer Normal = 1;
		/** 无效 */
		Integer Invalid = 2;
	}
	
	public interface PointFlag {
		/** 增加积分 */
		Integer Add = 0;
		/** 减少积分 */
		Integer Less = 1;
	}
	
	public interface DeadLineFlag {
		/** 无固定期限 */
		Integer NotDateLine = 0;
		/** 有固定期限 */
		Integer HaveDateLine = 1;
	}
	
	public interface ConsigneeAddress {
		Integer NoneCoount = 0;
		Integer MaxCount = 5;
	}
	
	public Map<Integer,String> securityCodeMap = new HashMap<Integer, String>(){
		/**
		 * <pre>
		 * 
		 * </pre>
		 */
		private static final long serialVersionUID = 1L;

		{
			put(0, SessionKey.LOGIN);
			put(1, SessionKey.REGISTER);
			put(999, SessionKey.OTHER);
		}
	};
	
	
	public static Map<String,String> rejectReason = new TreeMap<String, String>(){
		
		private static final long serialVersionUID = 290847976541469647L;
		{
			put("0", "无理由退货");
			put("1", "商品质量问题");
			put("2", "商品错发/漏发");
			put("3", "收到商品破损");
			put("4", "拍错了");
			put("5", "不想要了");
			put("6", "已重新下单");
		}
	};
	
}

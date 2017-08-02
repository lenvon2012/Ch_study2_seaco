package com.tp.common.util.ptm;


import java.io.Serializable;

/**
 * 
 * <pre>
 * 	      返回处理信息给客户端
 * </pre>
 *
 * @author sqx
 * @version $Id: ResultMessage.java, v 0.1 2014年12月16日 下午4:24:56 sqx Exp $
 */
public class ResultMessage implements Serializable {
	
	private static final long serialVersionUID = 4513351403626927257L;

	//成功
	public static final int SUCCESS = 1;

	//失败
	public static final int FAIL = 0;

	private int result = 1;
	private String message = "";
	private String errorCode = "" ;

	public ResultMessage() {
	}

	public ResultMessage(int result, String message, String errorCode) {
		this.result = result;
		this.message = message;
		this.errorCode = errorCode;
	}
	
	public ResultMessage(int result, String message) {
		this.result = result;
		this.message = message;
	}



	public int getResult() {
		return result;
	}

	public void setResult(int result) {
		this.result = result;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	
	public String toString(){
		return "result="+this.getResult()+
				" errorCode="+this.getErrorCode()+
				" message="+this.getMessage();
	}

}

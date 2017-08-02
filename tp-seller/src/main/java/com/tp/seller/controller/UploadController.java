package com.tp.seller.controller;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.qiniu.QiniuUpload;
import com.qiniu.common.QiniuException;
import com.qiniu.http.Response;
import com.tp.common.vo.Constant;
import com.tp.dto.common.FailInfo;
import com.tp.dto.common.ResultInfo;
/**
 * Created by szy on 15-9-21.
 */
@Controller
@RequestMapping("/")
public class UploadController extends BaseController {

	@Autowired
	private QiniuUpload uploader;

    @RequestMapping("getToken")
    @ResponseBody
    public  JSONObject getToken(String bucket){
         uploader.init(bucket);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("uptoken",uploader.token);
       return jsonObject;
    }

    /**
     * 上传文件
     * @param request
     * @param
     * @return
     */
    @RequestMapping("uploadFile")
    @ResponseBody
    public ResultInfo<Map<String,String>> upload(Model model,HttpServletRequest request,String bucketname) throws QiniuException {
        String path = request.getSession().getServletContext().getRealPath("upload");
        Map<String, MultipartFile> fileMap = new HashMap<String, MultipartFile>();
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest)request;
		fileMap = multipartRequest.getFileMap();
        if(MapUtils.isNotEmpty(fileMap)){
        	Map.Entry<String, MultipartFile> mf = fileMap.entrySet().iterator().next();
        	 String fileName = mf.getValue().getOriginalFilename();
             File targetFile = new File(path, fileName);
             if(!targetFile.exists()){
                 targetFile.mkdirs();
             }

             //保存
             try {
            	 mf.getValue().transferTo(targetFile);
             } catch (Exception e) {
                 e.printStackTrace();
             }
             String targetName = getUUID();
             Response response= uploader.uploadFile(path+File.separator+fileName, targetName+".jpg",bucketname);
             if(response.isOK()){
             	Map<String,String> params = new HashMap<String,String>();
             	params.put("fileUrl", targetName+".jpg");
             	params.put("absUrl", Constant.IMAGE_URL_TYPE.getUrl(bucketname)+targetName+".jpg");
             	return new ResultInfo<>(params);
             }
        }
       
        return  new ResultInfo<>(new FailInfo(""));
    }
    
	/**
	 * 生成32位UUID 并去掉"-"
	 */
	public static String getUUID() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}	
}

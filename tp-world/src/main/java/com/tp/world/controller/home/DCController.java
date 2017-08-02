package com.tp.world.controller.home;

import com.alibaba.fastjson.JSONObject;
import com.tp.m.base.MResultVO;
import com.tp.m.enums.MResultInfo;
import com.tp.m.util.JsonUtil;
import com.tp.world.ao.home.DCAO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by ldr on 2016/12/9.
 */
@Controller
public class DCController {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private DCAO dcao;

    @ResponseBody
    @RequestMapping("/dc")
    public String dc(HttpServletRequest request) {
        try {
            MResultVO<JSONObject> result = dcao.getConfig();
            return JsonUtil.convertObjToStr(result);
        } catch (Exception e) {
            logger.error("GET_DC_ERROR",e);
            return JsonUtil.convertObjToStr(new MResultVO<>(MResultInfo.SYSTEM_ERROR));
        }
    }
}

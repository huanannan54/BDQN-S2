package com.hnn.boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/hello")
public class HelloController {

	@RequestMapping("/1")
	@ResponseBody //将返回的格式 转成json字符 给前端。
	public String hello() {
		return "你好，这是我的第一个boot 项目";
	}
	
	@RequestMapping("/2")
//	@ResponseBody //将返回的格式 转成json字符 给前端。
	public String hello2() {
		System.out.println("进入hello2方法");
		System.out.println("进入hello2方法");
		return "hello";
	}
	
}

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
//	@ResponseBody //如果没有这个 注解，就代表 "hello" 是jsp 页面的名字。
	public String hello2() {
		System.out.println("进入hello2方法");
		System.out.println("进入hello2方法");
		System.out.println("进入hello2方法");
		return "hello";//返回页面名字为 hello的文件。
	}
	
	public static void aa(int a){
		System.out.println("我要吃饭");
	}
	/**
	 * 方法重载 跟返回类型 没关系
	 * 参数不能一样
	 */
	public static String aa(String i){
		System.out.println("我要喝水");
		return "";
	}
	
	public static void main(String[] args) {
		HelloController.aa(1);
		HelloController.aa("");
		
		
	}
	
}

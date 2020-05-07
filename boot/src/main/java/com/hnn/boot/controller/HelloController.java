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
	
	public static void getUers(String userName){
		System.out.println("我要吃饭");
	}
	/**
	 * 重载的前提： 方法名一样， 方法类型和个数不能完全一样，否则编译报错。
	 * 要么方法【参数】的【个数】不一样，要么就是【类型】不一样， 要么就是【顺序】不一样
	 * 
	 * 方法重载 跟返回类型 没关系
	 * 参数不能一样
	 * 参数个数不一样
	 * 参数类型的顺序不一样
	 */
	public static String getUers(int id){
		System.out.println("我要喝水");
		return "";
	}
	
	
	
	public static void main(String[] args) {
		
	}
	
}

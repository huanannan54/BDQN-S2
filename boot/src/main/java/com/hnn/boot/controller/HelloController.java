package com.hnn.boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/hello")
public class HelloController {

	@RequestMapping("/1")
	@ResponseBody //这个注解代表返回的为 json 字符穿
	public String hello() {
		return "欢迎来到德莱联盟，";
	}
	
	@RequestMapping("/2")
//	@ResponseBody //没有这个注解  return hello  表示 跳转到 hello.jsp页面
	public String hello2() {
		return "hello";//跳转到页面
	}

    @RequestMapping("/3")
    public String hello3() {
        return "Hello";//首字母没有区分大小写
    }
	
	public static void getUers(String userName){
		System.out.println("中文");
	}
	/**
	 * 方法重载的前提 是方法名一样 
	 * 
	 * 方法的参数类型不同
	 * 或者
	 * 方法的参数个数不同
	 * 或者
	 * 方法的参数类型顺序不同
	 * 
	 * @param id
	 * @return
	 */

	public static String getUers(int id){
		System.out.println("英文ˮ");
		return "";
	}
	
	
	
	public static void main(String[] args) {
		
	}
	
}

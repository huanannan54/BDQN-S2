package com.hnn.boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/hello")
public class HelloController {

	@RequestMapping("/1")
	@ResponseBody //�����صĸ�ʽ ת��json�ַ� ��ǰ�ˡ�
	public String hello() {
		return "��ã������ҵĵ�һ��boot ��Ŀ";
	}
	
	@RequestMapping("/2")
//	@ResponseBody //�����صĸ�ʽ ת��json�ַ� ��ǰ�ˡ�
	public String hello2() {
		System.out.println("����hello2����");
		System.out.println("����hello2����");
		return "hello";
	}
	
}

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
//	@ResponseBody //���û����� ע�⣬�ʹ��� "hello" ��jsp ҳ������֡�
	public String hello2() {
		System.out.println("����hello2����");
		System.out.println("����hello2����");
		System.out.println("����hello2����");
		return "hello";//����ҳ������Ϊ hello���ļ���
	}
	
	public static void getUers(String userName){
		System.out.println("��Ҫ�Է�");
	}
	/**
	 * ���ص�ǰ�᣺ ������һ���� �������ͺ͸���������ȫһ����������뱨��
	 * Ҫô�������������ġ���������һ����Ҫô���ǡ����͡���һ���� Ҫô���ǡ�˳�򡿲�һ��
	 * 
	 * �������� ���������� û��ϵ
	 * ��������һ��
	 * ����������һ��
	 * �������͵�˳��һ��
	 */
	public static String getUers(int id){
		System.out.println("��Ҫ��ˮ");
		return "";
	}
	
	
	
	public static void main(String[] args) {
		
	}
	
}

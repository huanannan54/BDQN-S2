package com.hnn.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 这是启动类
 */
@SpringBootApplication//启动类才有的注解
public class BootApplication {

    /**
     * 启动类的固定写法
     * @param args
     */
	public static void main(String[] args) {
		SpringApplication.run(BootApplication.class, args);
	}
}

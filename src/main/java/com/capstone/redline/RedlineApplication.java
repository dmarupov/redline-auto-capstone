package com.capstone.redline;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;

import conroller.DatabaseController;

@SpringBootApplication
@ComponentScan(basePackages={"conroller", "repository" , "conroller"})
public class RedlineApplication {

	public static void main(String[] args) {
		SpringApplication.run(RedlineApplication.class, args);
	}
}

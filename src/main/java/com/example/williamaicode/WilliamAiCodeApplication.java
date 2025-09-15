package com.example.williamaicode;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.williamaicode.mapper")

public class WilliamAiCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(WilliamAiCodeApplication.class, args);
	}

}

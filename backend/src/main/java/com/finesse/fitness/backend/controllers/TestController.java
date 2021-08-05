package com.finesse.fitness.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@GetMapping
	public String apiCheck() {
		return "Hello World!";
	}
}

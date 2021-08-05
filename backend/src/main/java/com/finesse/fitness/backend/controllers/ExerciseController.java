package com.finesse.fitness.backend.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/exercises")
public class ExerciseController {

	@GetMapping
	public List<String> apiCheck() {
		return  Arrays.asList("Hello","World");
	}

}

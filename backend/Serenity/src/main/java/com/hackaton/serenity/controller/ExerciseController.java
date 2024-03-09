package com.hackaton.serenity.controller;

import com.hackaton.serenity.model.ExerciseDataAddRequestModel;
import com.hackaton.serenity.service.ExerciseDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseDataService service;

    @PostMapping("/add")
    public ResponseEntity<?> addExerciseData(@RequestBody ExerciseDataAddRequestModel exerciseData){
        return ResponseEntity.ok(service.saveExerciseData(exerciseData));
    }

}

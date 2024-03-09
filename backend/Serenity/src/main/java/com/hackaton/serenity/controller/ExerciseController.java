package com.hackaton.serenity.controller;

import com.hackaton.serenity.model.ExerciseDataAddRequestModel;
import com.hackaton.serenity.service.ExerciseDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exercise")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseDataService service;

    @PostMapping(path = "/addExerciseDataPerUser")
    public ResponseEntity<?> addExerciseData(@RequestBody ExerciseDataAddRequestModel exerciseData){
        return ResponseEntity.ok(service.saveExerciseData(exerciseData));
    }

    @GetMapping(path = "/getExerciseDataPerUser")
    public ResponseEntity<?> getExerciseData(@RequestParam String email){
        return ResponseEntity.ok(service.getExerciseData(email));
    }
}

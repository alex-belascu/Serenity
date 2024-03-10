package com.hackaton.serenity.controller;

import com.hackaton.serenity.model.ExerciseDataAddRequestModel;
import com.hackaton.serenity.model.UserModel;
import com.hackaton.serenity.service.AuthService;
import com.hackaton.serenity.service.ExerciseDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/exercise")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseDataService service;
    private final AuthService authService;

    @PostMapping(path = "/addExerciseDataPerUser")
    public ResponseEntity<?> addExerciseData(@RequestBody ExerciseDataAddRequestModel exerciseData){
        Optional<UserModel> userOptional = authService.checkIfUserExists(exerciseData.getEmail());

        if (userOptional.isPresent())
            return ResponseEntity.ok(service.saveExerciseData(exerciseData));

        return ResponseEntity.badRequest().body("Invalid User!");
    }

    @GetMapping(path = "/getExerciseDataPerUser")
    public ResponseEntity<?> getExerciseData(@RequestParam String email){
        Optional<UserModel> userOptional = authService.checkIfUserExists(email);

        if (userOptional.isPresent())
            return ResponseEntity.ok(service.getExerciseData(email));

        return ResponseEntity.badRequest().body("Invalid User!");
    }
}

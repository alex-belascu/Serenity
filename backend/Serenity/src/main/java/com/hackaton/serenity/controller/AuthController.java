package com.hackaton.serenity.controller;

import com.hackaton.serenity.model.AuthRequestModel;
import com.hackaton.serenity.model.RegisterRequestModel;
import com.hackaton.serenity.service.AuthService;
import com.hackaton.serenity.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService service;
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestModel request){
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/auth")
    public ResponseEntity<?> authenticate(@RequestBody AuthRequestModel request){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
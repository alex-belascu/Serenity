package com.hackaton.serenity.service;

import com.hackaton.serenity.model.AuthRequestModel;
import com.hackaton.serenity.model.AuthResponseModel;
import com.hackaton.serenity.model.RegisterRequestModel;
import com.hackaton.serenity.model.UserModel;
import com.hackaton.serenity.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public ResponseEntity<?> register(RegisterRequestModel request){
        if(repository.existsByEmail(request.getEmail())){
            return ResponseEntity.badRequest().body("Error: the submitted email is already registered");
        }
        var user = UserModel.builder()
                .email(request.getEmail())
                .name(request.getName())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        repository.save(user);
        return ResponseEntity.ok("Success");
//        var jwtToken = jwtService.generateToken(user);
//        return AuthenticationResponse.builder()
//                .token(jwtToken)
//                .build();

    }

    public ResponseEntity<?> authenticate(AuthRequestModel request){
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            var user = repository.findByEmail(request.getEmail()).orElseThrow();
            var jwtToken = jwtService.generateToken(user);
            return ResponseEntity.ok(AuthResponseModel.builder()
                    .token(jwtToken)
                    .email(user.getEmail())
                    .name(user.getName())
                    .build());
        } catch(AuthenticationException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }

    public Optional<UserModel> checkIfUserExists(String email) {
        return repository.findByEmail(email);
    }

    public Optional<UserModel> getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        System.out.println(username);
        return repository.findByEmail(username);
    }
}
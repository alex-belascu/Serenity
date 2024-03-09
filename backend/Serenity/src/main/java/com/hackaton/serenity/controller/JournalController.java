package com.hackaton.serenity.controller;

import com.hackaton.serenity.DTO.JournalDTO;
import com.hackaton.serenity.model.JournalModel;
import com.hackaton.serenity.model.UserModel;
import com.hackaton.serenity.repository.JournalRepository;
import com.hackaton.serenity.repository.UserRepository;
import com.hackaton.serenity.service.AuthService;
import com.hackaton.serenity.service.JournalService;
import com.hackaton.serenity.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.webresources.JarWarResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
@RequestMapping("/journals")
@RequiredArgsConstructor
public class JournalController {
    private final JournalService journalService;
    private final AuthService authService;

    @PostMapping(path = "/save")
    public ResponseEntity<?> save(@RequestBody JournalDTO journalDTO) {
        Optional<UserModel> userOptional = authService.getUser();
        if (userOptional.isPresent()) {
            journalDTO.setUserId(userOptional.get().getId());
            return ResponseEntity.ok(journalService.save(journalDTO));
        }

        return ResponseEntity.badRequest().build();
    }
}

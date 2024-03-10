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
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/journals")
@RequiredArgsConstructor
public class JournalController {
    private final JournalService journalService;
    private final AuthService authService;

    @PostMapping(path = "/saveJournalPerUser")
    public ResponseEntity<?> save(@RequestBody JournalDTO journalDTO) {
        Optional<UserModel> userOptional = authService.checkIfUserExists(journalDTO.getEmail());
        if (userOptional.isPresent()) {
            journalDTO.setEmail(userOptional.get().getEmail());
            return ResponseEntity.ok(journalService.save(journalDTO));
        }

        return ResponseEntity.badRequest().body("Invalid User!");
    }

    @GetMapping(path = "/getAllJournalsPerUser")
    public ResponseEntity<?> getJournals(@RequestParam String email) {
        Optional<UserModel> userOptional = authService.checkIfUserExists(email);
        if (userOptional.isPresent()) {
            return ResponseEntity.ok(journalService.getJournalData(email));
        }

        return ResponseEntity.badRequest().body("Invalid User!");
    }

    @GetMapping(path = "/getSpecificJournalPerUser")
    public ResponseEntity<?> getSpecificJournal(@RequestParam Long id, @RequestParam String email) {
        Optional<UserModel> userOptional = authService.checkIfUserExists(email);
        if (userOptional.isPresent()) {
            return ResponseEntity.ok(journalService.getSpecificJournalData(id, email));
        }

        return ResponseEntity.badRequest().body("Invalid User!");
    }
}

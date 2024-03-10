package com.hackaton.serenity.service;

import com.hackaton.serenity.DTO.JournalDTO;
import com.hackaton.serenity.model.JournalModel;
import com.hackaton.serenity.repository.JournalRepository;
import com.hackaton.serenity.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class JournalService {
    private final JournalRepository journalRepository;
    private final UserRepository userRepository;

    @Transactional
    public ResponseEntity<?> save(JournalDTO journalDTO) {
        JournalModel dataToSave = JournalModel.builder()
                .email(journalDTO.getEmail())
                .text(journalDTO.getText())
                .build();

        journalRepository.save(dataToSave);
        return ResponseEntity.ok(dataToSave);
    }

    @Transactional
    public ResponseEntity<?> getJournalData(String email) {
        List<JournalModel> journalDataList = journalRepository.findByEmail(email);

        return ResponseEntity.ok(journalDataList);
    }

    @Transactional
    public ResponseEntity<?> getSpecificJournalData(Long id, String email) {
        List<JournalModel> journalDataList = journalRepository
                .findByEmail(email)
                .stream().filter(journal -> {
                    return journal.getId() == id;
                }).toList();

        if (journalDataList.isEmpty()) {
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.ok(journalDataList.get(0));
    }
}

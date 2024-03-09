package com.hackaton.serenity.service;

import com.hackaton.serenity.DTO.JournalDTO;
import com.hackaton.serenity.model.JournalModel;
import com.hackaton.serenity.repository.JournalRepository;
import com.hackaton.serenity.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service public class JournalService {
    private final JournalRepository journalRepository;
    private final UserRepository userRepository;

    public JournalModel save(JournalDTO journalDTO) {
        return journalRepository.save(
                JournalModel.builder()
                        .user(userRepository.getById(journalDTO.getUserId()))
                        .text(journalDTO.getText())
                                .build()
        );
    }

}

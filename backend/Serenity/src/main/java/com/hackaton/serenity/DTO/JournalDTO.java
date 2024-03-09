package com.hackaton.serenity.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
public class JournalDTO {
    private String text;
    private long userId;
}

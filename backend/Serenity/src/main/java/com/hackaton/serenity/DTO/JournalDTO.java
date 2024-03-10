package com.hackaton.serenity.DTO;

import jakarta.persistence.Lob;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JournalDTO {
    private String text;
    private String email;
}

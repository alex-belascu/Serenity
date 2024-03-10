package com.hackaton.serenity.model;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "journals")
@ToString
@Data
public class JournalModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Lob
    private String text;

    private String email;
    private Timestamp timestamp;

    @PrePersist
    private void onInsert() {
        timestamp = Timestamp.valueOf(LocalDateTime.now());
    }
}

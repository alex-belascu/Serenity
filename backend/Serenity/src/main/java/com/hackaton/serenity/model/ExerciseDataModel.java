package com.hackaton.serenity.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "exercise_data")
@ToString
@Data
public class ExerciseDataModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int seconds;
    private int stressTrackCount;
    private int averageStressLevel;
    private LocalDate date;
    private String email;

    public void setDate(LocalDate date) { this.date = date; }
}

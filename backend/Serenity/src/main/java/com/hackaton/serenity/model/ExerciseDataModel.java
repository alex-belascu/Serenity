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
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Foreign key column in this table
    private UserModel user; // This references a UserModel entity

    public void setDate(LocalDate date) { this.date = date; }
}

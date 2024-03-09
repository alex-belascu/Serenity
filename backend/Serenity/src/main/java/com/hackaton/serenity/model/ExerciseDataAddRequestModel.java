package com.hackaton.serenity.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExerciseDataAddRequestModel {
    private int seconds;
    private LocalDate date;
    private String email;
}

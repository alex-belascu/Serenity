package com.hackaton.serenity.service;

import com.hackaton.serenity.model.ExerciseDataAddRequestModel;
import com.hackaton.serenity.model.ExerciseDataGetResponseModel;
import com.hackaton.serenity.model.ExerciseDataModel;
import com.hackaton.serenity.model.UserModel;
import com.hackaton.serenity.repository.ExerciseDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ExerciseDataService {
    private final ExerciseDataRepository exerciseDataRepository;

    public ResponseEntity<?> saveExerciseData(ExerciseDataAddRequestModel exerciseData) {
        var seconds = exerciseData.getSeconds();
        var date = exerciseData.getDate();
        var email = exerciseData.getEmail();
        var stressLevel = exerciseData.getStressLevel();

        List<ExerciseDataModel> existingDataList = exerciseDataRepository
                .findByEmail(email)
                .stream().filter(data -> {
                   return data.getDate().equals(date);
                }).toList();

        if (existingDataList.isEmpty()) {
            ExerciseDataModel dataToSave = ExerciseDataModel.builder()
                    .seconds(exerciseData.getSeconds())
                    .date(exerciseData.getDate())
                    .email(email)
                    .stressTrackCount(1)
                    .averageStressLevel(stressLevel).build();

            exerciseDataRepository.save(dataToSave);
            return ResponseEntity.ok(dataToSave);
        }

        ExerciseDataModel existingDataToUpdate = existingDataList.get(0);
        int existingTime = existingDataToUpdate.getSeconds();
        int existingStressTrackCount = existingDataToUpdate.getStressTrackCount();
        int existingAverageStressLevel = existingDataToUpdate.getAverageStressLevel();

        existingDataToUpdate.setSeconds(existingTime + seconds);
        existingDataToUpdate.setStressTrackCount(existingStressTrackCount + 1);
        existingDataToUpdate.setAverageStressLevel(
                (existingAverageStressLevel * existingStressTrackCount + stressLevel) / (existingStressTrackCount + 1));

        exerciseDataRepository.save(existingDataToUpdate);
        return ResponseEntity.ok(existingDataToUpdate);
    }

    public ResponseEntity<?> getExerciseData(String email) {
        List<ExerciseDataModel> exerciseDataList = exerciseDataRepository.findByEmail(email);

        Collections.sort(exerciseDataList, new Comparator<ExerciseDataModel>() {
            @Override
            public int compare(ExerciseDataModel o1, ExerciseDataModel o2) {
                return o1.getDate().compareTo(o2.getDate());
            }
        });

        return ResponseEntity.ok(ExerciseDataGetResponseModel.builder()
                .email(email)
                .userExerciseData(exerciseDataList)
                .build());
    }
}

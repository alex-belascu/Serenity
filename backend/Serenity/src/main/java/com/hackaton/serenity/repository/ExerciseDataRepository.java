package com.hackaton.serenity.repository;

import com.hackaton.serenity.model.ExerciseDataModel;
import com.hackaton.serenity.model.UserModel;
import com.hackaton.serenity.service.ExerciseDataService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExerciseDataRepository extends JpaRepository<ExerciseDataModel, Long> {
    @Query("SELECT e FROM ExerciseDataModel e WHERE e.user.id = ?1")
    List<ExerciseDataModel> findByUser(Long id);
}

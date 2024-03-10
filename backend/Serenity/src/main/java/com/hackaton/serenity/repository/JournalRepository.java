package com.hackaton.serenity.repository;

import com.hackaton.serenity.model.ExerciseDataModel;
import com.hackaton.serenity.model.JournalModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JournalRepository extends JpaRepository<JournalModel, Long> {
    List<JournalModel> findByEmail(String email);
}

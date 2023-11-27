package com.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicare.entity.MedicinImages;

@Repository
public interface MedicinImagesInterface extends JpaRepository<MedicinImages, Long>{

}

package com.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.medicare.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity , Long>{
	
	UserEntity findByEmailid(String emailid);
	
public static ResponseEntity<?> getUser() {
		
		return null;
	}

}

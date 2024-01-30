package com.edubridge.app1.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Admin;
@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
	
	Admin findByEmailId(String emailId);
}

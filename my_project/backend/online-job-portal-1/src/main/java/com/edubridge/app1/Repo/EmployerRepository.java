package com.edubridge.app1.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Employer;

@Repository
public  interface EmployerRepository extends JpaRepository<Employer, Integer>{

	Employer findByEmailId(String emailId);
	
}

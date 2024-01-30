package com.edubridge.app1.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Employee;
import com.edubridge.app1.model.Job;
import com.edubridge.app1.model.JobApplication;
@Repository
@EnableJpaRepositories
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {

	List<JobApplication> findByemployee(Employee employee);
	List<JobApplication> findByJob(Job job);
}

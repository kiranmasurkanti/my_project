package com.edubridge.app1.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Employer;
import com.edubridge.app1.model.Job;
@Repository
@EnableJpaRepositories
public interface JobRepository extends JpaRepository<Job, Integer> {
	List<Job> findByemployerjobs(Employer employer);
//	List<Job> findByEmployerId(Long employerId);

}

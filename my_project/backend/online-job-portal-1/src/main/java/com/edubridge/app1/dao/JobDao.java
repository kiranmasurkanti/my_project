package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.Repo.JobRepository;
import com.edubridge.app1.model.Employer;
import com.edubridge.app1.model.Job;

@Repository
public class JobDao {
	@Autowired
	private JobRepository repo;
	
	public Job saveJob (Job j) {
		return repo.save(j);
		
	}
	public List<Job> getJobs(){
		return repo.findAll();
	}
	public Job getJob(Integer JobId) {
		return repo.findById(JobId).get();
	}
	public void updateJob(Job j) {
		repo.save(j);
	}
	public void deleteJob(Integer JobId) {
		repo.deleteById(JobId);
	}
//	public List<Job> getJobs(Integer employerId) {
//		return repo.findByemployerId(employerId);
//		
//	}
	public List<Job> getJobsByEmployer(Employer employer) {
	
		return repo.findByemployerjobs(employer);
	}
	

}

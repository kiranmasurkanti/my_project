package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.dao.JobDao;
import com.edubridge.app1.model.Employer;
import com.edubridge.app1.model.Job;

@Service
public class JobService {

	@Autowired
	private JobDao dao;
	
	public Job saveJob (Job j) {
		return dao.saveJob(j);
		
	}
	public List<Job> getJobs(){
		return dao.getJobs();
	}
	public Job getJob(Integer JobId) {
		return dao.getJob(JobId);
	}
	public void updateJob(Job j) {
		dao.updateJob(j);;
	}
	public void deleteJob(Integer JobId) {
		dao.deleteJob(JobId);
	}
	public List<Job> getJobsByEmployer(Employer employer) {
		// TODO Auto-generated method stub
		return dao.getJobsByEmployer(employer);
	}
	
}

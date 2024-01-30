package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.dao.JobApplicationDao;
import com.edubridge.app1.model.Employee;
import com.edubridge.app1.model.Job;
import com.edubridge.app1.model.JobApplication;
@Service
public class JobApplicationService {

	@Autowired
	private JobApplicationDao dao;

	public JobApplication saveJobApplication(JobApplication ja) {
		return dao.saveJobApplication(ja);
		
	}
	public List<JobApplication> getJobApplications(){
		return dao.getJobApplications();
		
	}
	public JobApplication getJobApplication(Long applicationId) {
		return dao.getJobApplication(applicationId);
	}
	public void updateJobApplication(JobApplication ja) {
		dao.updateJobApplication(ja);
	}
	public void deleteJobApplication(Long JobApplicationId) {
		dao.deleteJobApplication(JobApplicationId);
	}
	public List<JobApplication> getJobApplicationsByEmployee(Employee employee){
		return dao.getJobApplicationsByEmployee(employee);
		
	}
	public List<JobApplication> getJobApplicationsByJob(Job job){
		return dao.getJobApplicationsByJob(job);
	}
}

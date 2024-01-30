package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.Employee;
import com.edubridge.app1.model.Job;
import com.edubridge.app1.model.JobApplication;
import com.edubridge.app1.service.EmployeeService;
import com.edubridge.app1.service.JobApplicationService;
import com.edubridge.app1.service.JobService;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")
public class JobApplicationController {

	@Autowired
	private JobApplicationService service;
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private JobService jobService;

	@PostMapping("/jobApplication")
	public ResponseEntity<JobApplication> save(@RequestBody JobApplication ja) {
		JobApplication saveJobApplication = service.saveJobApplication(ja);
		return new ResponseEntity<>(saveJobApplication, HttpStatus.OK);

	}

	@GetMapping("/jobApplication")
	public ResponseEntity<List<JobApplication>> getAllJobApplications() {
		List<JobApplication> jobApplications = service.getJobApplications();
		return new ResponseEntity<>(jobApplications, HttpStatus.OK);

	}

	@GetMapping("/jobApplication/{Id}")
	public ResponseEntity<JobApplication> getOneJobApplicationBy(@PathVariable("Id") Long jobApplicationId) {
		JobApplication jobApplication = service.getJobApplication(jobApplicationId);
		return new ResponseEntity<JobApplication>(jobApplication, HttpStatus.OK);

	}

	@DeleteMapping("/jobApplication/{id}")
	public ResponseEntity<JobApplication> deleteJobApplication(@PathVariable("Id") Long jobApplicationId) {
		service.deleteJobApplication(jobApplicationId);
		return new ResponseEntity<JobApplication>(HttpStatus.OK);

	}

	@PutMapping("/jobApplication")
	public ResponseEntity<JobApplication> updateJobApplication(@RequestBody JobApplication jobApplication) {
		service.updateJobApplication(jobApplication);
		return new ResponseEntity<>(HttpStatus.OK);

	}

	@GetMapping("/jaes/{employeeId}")
	public ResponseEntity<List<JobApplication>> getJobApplicationsByEmployer(@PathVariable Integer employeeId) {
		Employee employee = employeeService.getEmployee(employeeId);
		List<JobApplication> jobApplications = service.getJobApplicationsByEmployee(employee);
		return new ResponseEntity<>(jobApplications, HttpStatus.OK);

	}

	@GetMapping("/jae/{emailId}")
	public ResponseEntity<List<JobApplication>> getJobApplicationsByEmployer(@PathVariable String emailId) {
		Employee employee = employeeService.getEmployee(emailId);
		List<JobApplication> jobApplications = service.getJobApplicationsByEmployee(employee);
		return new ResponseEntity<>(jobApplications, HttpStatus.OK);

	}
	@GetMapping("/jai/{jobId}")
	public ResponseEntity<List<JobApplication>> getJobApplicationsByJob(@PathVariable Integer jobId){
		Job job=jobService.getJob(jobId);
		List<JobApplication> jobApplications=service.getJobApplicationsByJob(job);	
		return new ResponseEntity<>(jobApplications,HttpStatus.OK);
		
	}

}

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

import com.edubridge.app1.model.Employer;
import com.edubridge.app1.model.Job;
import com.edubridge.app1.service.EmployerService;
import com.edubridge.app1.service.JobService;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")
public class JobController {
	@Autowired
	private JobService service;
	@Autowired
	private EmployerService employerservice;
	
	@PostMapping("/job")
	public ResponseEntity<Job>save(@RequestBody Job j){
		Job saveJob=service.saveJob(j);
		return new ResponseEntity<>(saveJob,HttpStatus.OK);
	}

	@GetMapping("/job")
	public ResponseEntity<List<Job>> getAllJobs(){
		List<Job> jobs= service.getJobs();
		return new ResponseEntity<>(jobs,HttpStatus.OK);
	}
	@GetMapping("/job/{Id}")
	public ResponseEntity<Job> getOneJobBy (@PathVariable("Id") Integer jobId){
		Job job=service.getJob(jobId);
		return new ResponseEntity<Job>(job, HttpStatus.OK);
	}
	@PutMapping("/job")
	public ResponseEntity<Job> updateJob(@RequestBody Job job) {
		service.updateJob(job);
		return new ResponseEntity<>(HttpStatus.OK);
	}@DeleteMapping("/job/{Id}")
	public ResponseEntity<Job> DeleteOneJobBy(@PathVariable("Id") Integer jobId){
		service.deleteJob(jobId);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	@GetMapping("/jobsByEmployer/{employerId}")
	public ResponseEntity<List<Job>> getJobsByEmployer(@PathVariable Integer employerId){
		Employer employer=employerservice.getEmployerById(employerId);
		List<Job> jobs= service.getJobsByEmployer(employer);
		return new ResponseEntity<>(jobs,HttpStatus.OK);
	}
	@GetMapping("/jobsByEmployers/{emailId}")
	public ResponseEntity<List<Job>> getJobsByEmployer(@PathVariable String emailId){
		Employer employer=employerservice.getEmployerByEmail(emailId);
		List<Job> jobs= service.getJobsByEmployer(employer);
		return new ResponseEntity<>(jobs,HttpStatus.OK);
	
	}
	

	
	
}

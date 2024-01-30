package com.edubridge.app1.controller;

import java.io.UnsupportedEncodingException;
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
import com.edubridge.app1.service.EmployerService;

import jakarta.mail.MessagingException;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")
public class EmployerController {

	@Autowired
	private EmployerService service;

	@PostMapping("/employer")
	public ResponseEntity<Employer> save(@RequestBody Employer employer) throws UnsupportedEncodingException, MessagingException {
		Employer savedEmployer = service.saveEmployer(employer);
		service.sendVerificationEmail(employer);
		return new ResponseEntity<>(savedEmployer, HttpStatus.OK);

	}

	@GetMapping("/employer")
	public ResponseEntity<List<Employer>> getAllEmployers() {
		List<Employer> employers = service.getEmployers();
		
		return new ResponseEntity<>(employers, HttpStatus.OK);

	}

	@GetMapping("/employer/{Id}")
	public ResponseEntity<Employer> getOneEmployerBy (@PathVariable("Id") Integer employerId) {
		Employer employer = service.getEmployerById(employerId);
		return new ResponseEntity<Employer>(employer, HttpStatus.OK);
	}

	/*
	 * @GetMapping("/employer/{emailId}") public ResponseEntity<Employer>
	 * getOneEmployer(@PathVariable("emailId") String emailId) { Employer employer =
	 * service.getEmployerByEmail(emailId); return new
	 * ResponseEntity<Employer>(employer, HttpStatus.OK);
	 * 
	 * }
	 */

	@DeleteMapping("/employer/{id}")
	public ResponseEntity<Employer> deleteEmployer(@PathVariable("id") Integer employerId) {
		service.deleteEmployer(employerId);
		return new ResponseEntity<Employer>(HttpStatus.OK);

	}

	@PutMapping("/employer")
	public ResponseEntity<Employer> updateEmployer(@RequestBody Employer employer) {
		service.updateEmployer(employer);
		return new ResponseEntity<>(HttpStatus.OK);

	}
	@PostMapping("employer/valid")
	public Employer login(@RequestBody Employer employer)throws Exception{
		return this.service.login(employer.getEmployerId(), employer.getEmailId(), employer.getPassword());
		
	}
	
	

}

package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.Repo.EmployerRepository;
import com.edubridge.app1.model.Employee;
import com.edubridge.app1.model.Employer;

@Repository
public class EmployerDao {
	@Autowired
	private EmployerRepository repo;
	
	public Employer saveEmployer (Employer emp) {
		return repo.save(emp);
	}
	public List<Employer> getEmployers(){
		return repo.findAll();
		
	}
	public  Employer getEmployer(String emailId) {
		return repo.findByEmailId(emailId);
	}
	public Employer getEmployer(Integer employerId) {
		return repo.findById(employerId).get();
		
	}
	public void updateEmployer(Employer emp) {
		repo.save(emp);
	}
	public void deleteEmployer(Integer employerId) {
		repo.deleteById(employerId);
	}
	public Employer login(String emailId,String password) {
		return repo.findByEmailId(emailId);
	}
}

package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.Repo.EmployeeRepository;
import com.edubridge.app1.model.Employee;
@Repository
public class EmployeeDao {
	@Autowired
	private EmployeeRepository repo;
	
	public Employee saveEmployee (Employee empl) {
		return repo.save(empl);
	}
	public List<Employee> getEmployees(){
		return repo.findAll();
	}
	public Employee getEmployee(Integer employeeId) {
		return repo.findById(employeeId).get();
		
	}
	
	public Employee getEmployee(String emailId) {
		return repo.findByEmailId(emailId);
		
	}
	public void updateEmployee(Employee empl) {
		repo.save(empl);
	}
	public void deleteEmployee(Integer employeeId) {
		repo.deleteById(employeeId);
	}
	public Employee login(String emailId,String password) {
		return repo.findByEmailId(emailId);
		
	}

}

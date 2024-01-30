package com.edubridge.app1.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	Employee findByEmailId(String emailId);
}

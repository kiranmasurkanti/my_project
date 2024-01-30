package com.edubridge.app1.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Employee875")
public class Employee {

	@Id
	@GeneratedValue
	private Integer employeeId;
	private String firstName;
	private String lastName;
	private String emailId;
	private String password;
	private Long contactNo;
	private String street;
	private String city;
	private String state;
	private Integer pincode;
	private String country;
	@CreationTimestamp
	private Date registrationDate;
	
	@OneToMany
	( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Set<JobApplication> jobApplications=new HashSet<>();

}

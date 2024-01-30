package com.edubridge.app1.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="job_applications")
public class JobApplication {

	@Id
	@GeneratedValue
	private Long applicationId;
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	 @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	 
	@JoinColumn(name="employeeId")
	private Employee employee;
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	@ManyToOne(cascade = CascadeType.MERGE,
			fetch = FetchType.LAZY)
	@JoinColumn(name="jobId")

	private Job job;
	
	
}

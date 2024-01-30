package com.edubridge.app1.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="job_details")
public class Job {
	@Id
	@GeneratedValue
	private Integer jobId;
	private String title;
	private String companyName;
	private String jobDescription;
	private String skilsRequired;
	private String street;
	private String city;
	private Integer pincode;
	private String state;
	private String country;
	private String jobType;
	private String salaryRange;
	private String experience;
	//private String imageUrl;

	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	
	@ManyToOne(cascade = CascadeType.MERGE,
			fetch = FetchType.LAZY)
	@JoinColumn(name="employerId") 
	private Employer employerjobs;
	
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})

	@ManyToOne
	
	@JoinColumn(name="categoryId")
	private Category category;
	
	@OneToMany( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Set<JobApplication> jobApplications=new HashSet<>();
	
	public Job() {
		super();
	}

	

}

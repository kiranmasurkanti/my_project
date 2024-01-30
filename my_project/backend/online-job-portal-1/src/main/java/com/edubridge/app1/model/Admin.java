package com.edubridge.app1.model;



import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="admin_details")
public class Admin {
	@Id
	@GeneratedValue
	private Integer adminId;
	private String adminName;
	private String emailId;
	private String password;
	@CreationTimestamp
	private Date registrationDate;
	

}

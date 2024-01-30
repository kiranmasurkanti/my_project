package com.edubridge.app1.service;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.edubridge.app1.dao.EmployerDao;
import com.edubridge.app1.model.Employer;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmployerService {

	@Autowired
	private EmployerDao dao;
	
	@Autowired
	private JavaMailSender mailSender;
	
	public Employer saveEmployer(Employer emp) {
		emp.setDate(new Date());
		return dao.saveEmployer(emp);
	}
	public List<Employer> getEmployers(){
		return dao.getEmployers();
	
		
	}
	public Employer getEmployerById(Integer employerId) {
		return dao.getEmployer(employerId);
		
	}
	
	public Employer getEmployerByEmail(String emailId) {
		return dao.getEmployer(emailId);
		
	}public void updateEmployer(Employer emp) {
		dao.updateEmployer(emp);
	}
	public void deleteEmployer(Integer employerId) {
		dao.deleteEmployer(employerId);
		
	}
	public Employer login(Integer employerId, String emailId,String password) throws Exception{
		Employer employer=dao.getEmployer(emailId);
	//	System.out.println(employer.getPassword());
		if(employer.getEmployerId().equals(employerId)&& employer.getEmailId().equals(emailId)&& employer.getPassword().equals(password)) {
			return employer;
		}else {
			throw new Exception("invalid Credentials");
		}
		
	}
	public void sendVerificationEmail(Employer employer) throws UnsupportedEncodingException, MessagingException {
		String subject="registration successful";
		String senderName="online job portal";
		String mailContent="<p>dear "+employer.getLastName()+" "+employer.getFirstName()+" your registration Id is "+employer.getEmployerId()+"<br> your password is "+employer.getPassword()+"<p>";
		
		MimeMessage message=mailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		
		helper.setFrom("masurakantikiranyadav@gmail.com",senderName);
		helper.setTo(employer.getEmailId());
		helper.setSubject(subject);
		
		helper.setText(mailContent,true);
		mailSender.send(message);
		
	}
	
}

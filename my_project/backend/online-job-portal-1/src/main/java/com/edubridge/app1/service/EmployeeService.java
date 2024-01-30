package com.edubridge.app1.service;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.edubridge.app1.dao.EmployeeDao;
import com.edubridge.app1.model.Employee;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeDao dao;
	
	@Autowired
	private JavaMailSender mailsender;
	
	public Employee saveEmployee(Employee empl) {
		empl.setRegistrationDate(new Date());
		return dao.saveEmployee(empl);
		
	}
	public List<Employee> getEmployees(){
		return dao.getEmployees();
	}
	public Employee getEmployee(Integer employeeId) {
		return dao.getEmployee(employeeId);
	}
	
	public Employee getEmployee(String emailId) {
		return dao.getEmployee(emailId);
	}
	public void updateEmployee(Employee empl) {
		dao.updateEmployee(empl);
	}
	public void deleteEmployee (Integer employeeId) {
		dao.deleteEmployee(employeeId);
	}
	public Employee login(Integer employeeId, String emailId,String password) throws Exception{
		Employee employee=dao.getEmployee(emailId);
	//	System.out.println(employee.getPassword());
		if(employee.getEmployeeId().equals(employeeId)&& employee.getEmailId().equals(emailId)&& employee.getPassword().equals(password)) {
			return employee;
		}else {
			throw new Exception("invalid Credentials");
		}
		
		
	}
	public void sendVerificationEmail(Employee employee) throws UnsupportedEncodingException, MessagingException {
		String subject="registration successfull";
		String senderName="online job portal";
		String mailContent="<p>dear "+employee.getLastName()+" "+employee.getFirstName()+" your registration Id  is "+employee.getEmployeeId()+"<br> your password is "+employee.getPassword()+"<p>";	
		
		MimeMessage message=mailsender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		
		helper.setFrom("masurakantikiranyadav@gmail.com", senderName);
		helper.setTo(employee.getEmailId());
		helper.setSubject(subject);
		
		helper.setText(mailContent, true);
		mailsender.send(message);
		
	}
}

package com.edubridge.app1.service;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import com.edubridge.app1.dao.AdminDao;
import com.edubridge.app1.model.Admin;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class AdminService {

	@Autowired
	private AdminDao dao;

	@Autowired
	private JavaMailSender mailsender;
	
	public Admin saveAdmin(Admin ad) {
		ad.setRegistrationDate(new Date());
		return dao.saveAdmin(ad);
	}
	public List<Admin> getAdmins(){
		return dao.getAdmins();
		
	}
	public Admin getAdmin(Integer adminId) {
		return dao.getAdmin(adminId);
	}

	public void updateAdmin(Admin ad) {
		dao.updateAdmin(ad);
	}
	public void deleteAdmin(Integer adminId) {
		dao.deleteAdmin(adminId);
	}
	public Admin login(String emailId,String password)throws Exception{
		Admin admin=dao.getAdmin(emailId);
	//	System.out.println(admin.getPassword());
		if(admin.getEmailId().equals(emailId)&& admin.getPassword().equals(password)) {
			return admin;
		}else {
			throw new Exception("invalid Credentials");
		}
		
	}
	public  void sendVerificationEmail(Admin admin) throws UnsupportedEncodingException, MessagingException {
		String subject="registration successfull";
		String senderName="online job portal";
		String mailContent="<p>dear "+admin.getAdminName()+" your registration Id is "+admin.getAdminId()+"<br> our password is "+admin.getPassword()+"<p>";
	
		MimeMessage message=mailsender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		
		helper.setFrom("masurakantikiranyadav@gmail.com",senderName);
		helper.setTo(admin.getEmailId());
		helper.setSubject(subject);
		helper.setText(mailContent,true);
		mailsender.send(message);
	}

}

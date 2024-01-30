package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.Repo.AdminRepo;
import com.edubridge.app1.model.Admin;

@Repository
public class AdminDao {

	@Autowired
	private AdminRepo repo;
	
	public Admin saveAdmin(Admin ad) {
		return repo.save(ad);
	}
	public List<Admin> getAdmins(){
		return repo.findAll();
		
	}
	public Admin getAdmin(Integer adminId) {
		return repo.findById(adminId).get();
	}


	public void updateAdmin(Admin ad) {
		repo.save(ad);
	}
	public void deleteAdmin(Integer adminId) {
		repo.deleteById(adminId);
	}
	public Admin findByEmailId(String emailId,String password, Integer adminId) {
		return repo.findByEmailId(emailId);
		
	}
	public Admin getAdmin(String emailId) {
		
		return repo.findByEmailId(emailId);
	}
}


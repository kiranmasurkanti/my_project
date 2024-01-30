package com.edubridge.app1.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.Repo.CategoryRepository;

import com.edubridge.app1.model.Category;

@Repository
public class CategoryDao {
	@Autowired
	private CategoryRepository repo;

	public Category saveCategory (Category c) {
		return repo.save(c);
		
	}
	public List<Category> getCategories(){
		return repo.findAll();
			
	}
	public Category getCategory(Integer CategoryId) {
		return repo.findById(CategoryId).get();
		
	}
	public void updateCategory(Category c) {
		repo.save(c);
	}
	public void deleteCategory(Integer CategoryId) {
		repo.deleteById(CategoryId);
	}
	
}

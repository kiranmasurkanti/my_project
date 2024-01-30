package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.edubridge.app1.dao.CategoryDao;
import com.edubridge.app1.model.Category;

@Service
public class CategoryService {

	@Autowired
	private CategoryDao dao;

	public Category saveCategory (Category c) {
		return dao.saveCategory(c);
		
	}
	public List<Category> getCategories(){
		return dao.getCategories();
			
	}
	public Category getCategory(Integer CategoryId) {
		return dao.getCategory(CategoryId);
		
	}
	public void updateCategory(Category c) {
		dao.updateCategory(c);
	}
	public void deleteCategory(Integer CategoryId) {
		dao.deleteCategory(CategoryId);
	}
}

package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.Category;

import com.edubridge.app1.service.CategoryService;
import com.edubridge.app1.service.JobService;
@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

	@Autowired
	private CategoryService service;
	
	@Autowired
	private JobService jobService;
	
	@PostMapping("/category")
	public ResponseEntity<Category>save(@RequestBody Category c){
		Category saveCategory=service.saveCategory(c);
		return new ResponseEntity<>(saveCategory,HttpStatus.OK);
		
	}
//	@PostMapping("/category/jobs")
//	public ResponseEntity<?> addJob(@RequestBody Job jobData, @RequestParam("categoryId") Integer categoryId) {
//		Category category=service.getCategory(categoryId);
//
//	  if (category == null) {
//	    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Category not found");
//	  }
//	  
//	  Job job = new Job();
//	  job.setCategory(category);
//
//	  jobService.saveJob(job);
//
//	  return ResponseEntity.status(HttpStatus.CREATED).body("Job added successfully");
//	}
	@GetMapping("/category")
	public ResponseEntity<List<Category>> getallCategories(){
		List<Category> categories=service.getCategories();
		System.out.println(categories);
		return new ResponseEntity<>(categories,HttpStatus.OK);
		
	}
	@GetMapping("/category/{id}")
	public ResponseEntity<Category>getOneCategory(@PathVariable("id") Integer categoryId ){
		Category category=service.getCategory(categoryId);
		return new ResponseEntity<Category>(category,HttpStatus.OK);
		
	}
	@DeleteMapping("/category/{id}")
	public ResponseEntity<Category>deleteCategory(@PathVariable ("id") Integer categoryId){
		service.deleteCategory(categoryId);
		return new ResponseEntity<Category>(HttpStatus.OK);
		
	}
	@PutMapping("/category")
	public ResponseEntity<Category>updateCategory(@RequestBody Category category){
		service.updateCategory(category);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
}

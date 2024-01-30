package com.edubridge.app1.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.app1.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Integer> {

}

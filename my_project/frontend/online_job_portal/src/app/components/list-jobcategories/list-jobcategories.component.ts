import { Component } from '@angular/core';
import { JobCategory } from '../../common/job-category';
import { JobCategoryService } from '../../service/job-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-jobcategories',
  templateUrl: './list-jobcategories.component.html',
  styleUrl: './list-jobcategories.component.css'
})
export class ListJobcategoriesComponent {
  jobCategories: JobCategory[] = [];
  constructor(private service: JobCategoryService, private router: Router) { }
  ngOnInit() {
    this.displayJobCategories();
  }
  displayJobCategories() {
    this.service.getCategories().subscribe((data) => {
      this.jobCategories = data;
    })
  }
  removeCategory(id: number) {
    if (confirm("Are you sure to delete?")) {
      this.service.deleteCategory(id).subscribe((data) => {
        alert("deleted")
        this.displayJobCategories();
      })
    }
  }
  showEdit(id: number) {
    this.router.navigate(['category-edit', id]);
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }
}

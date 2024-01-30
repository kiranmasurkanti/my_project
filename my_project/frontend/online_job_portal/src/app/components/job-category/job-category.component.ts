import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobCategoryService } from '../../service/job-category.service';
import { Router } from '@angular/router';
import { JobCategory } from '../../common/job-category';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrl: './job-category.component.css'
})
export class JobCategoryComponent {
  jobCategoryFormGroup: FormGroup;
  jobCategories: JobCategory[];

  constructor(private formBuilder: FormBuilder,
    private service: JobCategoryService,
    private router: Router) { }

  ngOnInit() {
    this.jobCategoryFormGroup = this.formBuilder.group({
      jobCategory: ['', [Validators.required, Validators.pattern('^[a-zA-z]+$')]],

    });
    this.listJobCategories();
  }

  addJobCategory() {
    if (this.jobCategoryFormGroup.valid) {
      this.service.createCategory(this.jobCategoryFormGroup.value)
        .subscribe((data) => {
          alert("Added Successfully");
          this.router.navigate(['/view-categories']);
        })
    } else {
      alert("invalid")
    }
  }

  listJobCategories() {
    this.service.getCategories().subscribe((data) => {
      this.jobCategories = data;

    })
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }
}
